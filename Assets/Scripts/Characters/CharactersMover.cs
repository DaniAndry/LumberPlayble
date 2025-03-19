using System.Collections.Generic;
using DG.Tweening;
using UnityEngine;

public class CharactersMover : MonoBehaviour
{
    [Header("Точки маршрута")]
    [SerializeField] private MovePoint[] _normalRoutePoints;
    [SerializeField] private UnloadPoint[] _unloadPoints; 
    
    [SerializeField] private Animator _animator;
    
    private int _currentPointIndex = 0;
    private float _initialRotationX;
    private float _initialRotationZ;
    private Character _character;
    private MovePoint[] _currentRoute; 
    private bool _isUnloading = false; 
    
    private void Start()
    {
        _character = GetComponent<Character>();
        _initialRotationX = transform.rotation.eulerAngles.x;
        _initialRotationZ = transform.rotation.eulerAngles.z;
        _currentRoute = _normalRoutePoints;
        
        _character.OnCargoFull += HandleCargoFull;
        _character.OnCargoEmpty += HandleCargoEmpty;
        
        MoveToNextPoint();
    }
    
    private void OnDestroy()
    {
        if (_character != null)
        {
            _character.OnCargoFull -= HandleCargoFull;
            _character.OnCargoEmpty -= HandleCargoEmpty;
        }
    }
    
    private void HandleCargoFull()
    {
        if (!_isUnloading)
        {
            _isUnloading = true;
            
            UnloadPoint targetPoint = FindNearestAvailableUnloadPoint();
            
            if (targetPoint != null)
            {
                _currentRoute = new MovePoint[] { targetPoint };
                _currentPointIndex = 0; 
                
                transform.DOKill();
                MoveToNextPoint();
            }
            else
            {
                Debug.LogWarning("Нет доступных точек разгрузки! Все грузовики заполнены.");
                _isUnloading = false;
            }
        }
    }
    
    private void HandleCargoEmpty()
    {
        if (_isUnloading)
        {
            _isUnloading = false;
            _currentRoute = _normalRoutePoints;
            _currentPointIndex = 0;
        }
    }
    
    private UnloadPoint FindNearestAvailableUnloadPoint()
    {
        float closestDistance = float.MaxValue;
        UnloadPoint closestPoint = null;
        
        foreach (UnloadPoint point in _unloadPoints)
        {
            if (point.CanUnload())
            {
                float distance = Vector3.Distance(transform.position, point.transform.position);
                if (distance < closestDistance)
                {
                    closestDistance = distance;
                    closestPoint = point;
                }
            }
        }
        
        if (closestPoint == null && _unloadPoints.Length > 0)
        {
            foreach (UnloadPoint point in _unloadPoints)
            {
                float distance = Vector3.Distance(transform.position, point.transform.position);
                if (distance < closestDistance)
                {
                    closestDistance = distance;
                    closestPoint = point;
                }
            }
        }
        
        return closestPoint;
    }
    
    private void MoveToNextPoint()
    {
        if (_currentPointIndex >= _currentRoute.Length)
        {
            _currentPointIndex = 0;
        }
        
        MovePoint currentPoint = _currentRoute[_currentPointIndex];
        Vector3 targetPos = currentPoint.transform.position;
        float moveDuration = currentPoint.MoveDuration;
        Vector3 lookDirection = targetPos - transform.position;
        lookDirection.y = 0f;
        
        if (lookDirection != Vector3.zero)
        {
            Quaternion targetRotation = Quaternion.LookRotation(lookDirection);
            float yRotation = targetRotation.eulerAngles.y;
            Quaternion finalRotation = Quaternion.Euler(_initialRotationX, yRotation, _initialRotationZ);
            transform.DORotateQuaternion(finalRotation, 0.5f);
        }
        
        transform.DOMove(targetPos, moveDuration)
            .SetEase(Ease.InOutSine)
            .OnComplete(() =>
            {
                if (_animator != null)
                {
                    if (currentPoint is LoadPoint)
                    {
                        _animator.Play("Load");
                    }
                    else if (currentPoint is UnloadPoint unloadPoint)
                    {
                        _animator.Play("Unload");
                        
                        if (unloadPoint.TargetTruck != null)
                        {
                            int logsUnloaded = _character.UnloadToTruck(unloadPoint.TargetTruck);
                            
                            if (logsUnloaded == 0 && _character.CargoCount > 0)
                            {

                                UnloadPoint nextPoint = FindNextAvailableUnloadPoint(unloadPoint);
                                
                                if (nextPoint != null && nextPoint != unloadPoint)
                                {
                                    _currentRoute = new MovePoint[] { nextPoint };
                                    _currentPointIndex = -1; 
                                }
                            }
                        }
                        else
                        {
                            _character.Unload();
                        }
                    }
                }
                
                _currentPointIndex++;
                DOVirtual.DelayedCall(currentPoint.Delay, MoveToNextPoint);
            });
    }
    
    private UnloadPoint FindNextAvailableUnloadPoint(UnloadPoint currentPoint)
    {
        foreach (UnloadPoint point in _unloadPoints)
        {
            if (point != currentPoint && point.CanUnload())
            {
                return point;
            }
        }
        
        return null;
    }
}
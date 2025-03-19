using UnityEngine;

public class UnloadPoint : MovePoint
{
    [SerializeField] private Truck _targetTruck;

    public Truck TargetTruck => _targetTruck;

    public bool CanUnload()
    {
        return _targetTruck != null && !_targetTruck.IsFull;
    }
}
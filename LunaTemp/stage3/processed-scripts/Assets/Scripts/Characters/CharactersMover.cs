using DG.Tweening;
using UnityEngine;

public class CharactersMover : MonoBehaviour
{
    [Header("Точки маршрута")] [SerializeField]
    private MovePoint[] movePoints;

    [SerializeField] private Animator animator;

    private int currentPointIndex = 0;
    private float initialRotationX;
    private float initialRotationZ;
    private Character character;

    private void Start()
    {
        character = GetComponent<Character>();
        initialRotationX = transform.rotation.eulerAngles.x;
        initialRotationZ = transform.rotation.eulerAngles.z;
        Debug.Log(character);

        MoveToNextPoint();
    }

    private void MoveToNextPoint()
    {
        MovePoint currentPoint = movePoints[currentPointIndex];
        Vector3 targetPos = currentPoint.transform.position;
        float moveDuration = currentPoint.MoveDuration;
        Vector3 lookDirection = targetPos - transform.position;
        lookDirection.y = 0f;

        if (lookDirection != Vector3.zero)
        {
            Quaternion targetRotation = Quaternion.LookRotation(lookDirection);
            float yRotation = targetRotation.eulerAngles.y;
            Quaternion finalRotation = Quaternion.Euler(initialRotationX, yRotation, initialRotationZ);
            transform.DORotateQuaternion(finalRotation, 0.5f);
        }

        transform.DOMove(targetPos, moveDuration)
            .SetEase(Ease.InOutSine)
            .OnComplete(() =>
            {
                if (animator != null)
                {
                    if (currentPoint is LoadPoint)
                        animator.Play("Load");
                    else if (currentPoint is UnloadPoint)
                        character.Unload();
                    animator.Play("Unload");
                    Debug.Log(currentPoint);
                }

                currentPointIndex++;
                if (currentPointIndex >= movePoints.Length)
                    currentPointIndex = 0;

                DOVirtual.DelayedCall(currentPoint.Delay, MoveToNextPoint);
            });
    }
}
using UnityEngine;

public class Garage : MonoBehaviour
{
    [SerializeField] private GameObject car;

    private void OnEnable()
    {
        car.gameObject.SetActive(true);
    }
}

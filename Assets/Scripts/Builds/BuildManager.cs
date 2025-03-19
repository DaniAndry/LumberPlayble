using UnityEngine;
using UnityEngine.Events;
using UnityEngine.UI;

public class BuildManager : MonoBehaviour
{
    [SerializeField] private Button _buildButton1;
    [SerializeField] private Button _buildButton2;
    [SerializeField] private Button _buildButton3;

    [SerializeField] private GameObject _build1;
    [SerializeField] private GameObject _build2;
    [SerializeField] private GameObject _build3;

    [SerializeField] private MoneyController _moneyController;

    private void Awake()
    {
        _buildButton1.onClick.AddListener(() => _moneyController.TryBuild(8, _build1));
        _buildButton2.onClick.AddListener(() => _moneyController.TryBuild(12, _build2));
        _buildButton3.onClick.AddListener(() => _moneyController.TryBuild(125, _build3));
    }


    private UnityAction TryToBuild(int price)
    {
        _moneyController.ChangeBalance(price, true);
        return null;
    }
}
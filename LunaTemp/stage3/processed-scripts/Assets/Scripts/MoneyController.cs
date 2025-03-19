using UnityEngine;

public class MoneyController : MonoBehaviour
{
    [SerializeField] private MoneyBalance _moneyBalance;

    public void TryBuild(int price, GameObject buildObject)
    {
        if (_moneyBalance.Money >= price)
        {
            _moneyBalance.TakeMoney(price);
            buildObject.SetActive(true);
        }
        else
        {
            Debug.Log("Недостаточно денег для строительства.");
        }
    }

    public void ChangeBalance(int money, bool isSpending)
    {
        if (!isSpending)
        {
            _moneyBalance.SetMoney(money);
        }
        else if (_moneyBalance.Money >= money)
        {
            _moneyBalance.TakeMoney(money);
        }
    }
}
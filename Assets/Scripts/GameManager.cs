using System.Collections;
using UnityEngine;
using UnityEngine.UI;

public class GameManager : MonoBehaviour
{
    public static GameManager Instance { get; private set; }

    [Header("Туториал")] [SerializeField] private GameObject tutorialObject;
    [SerializeField] private Animator tutorialAnimator;
    [SerializeField] private float idleTimeForTutorial = 3f;

    [Header("Баланс и улучшения")] [SerializeField]
    private Button upgradeButton;

    [SerializeField] private GameObject upgradeButtonGameObject;

    [SerializeField] private Button secondRequiredButton;
    [SerializeField] private GameObject packShotObject;

    [Header("Привязки к игровым объектам")] [SerializeField]
    private MoneyController moneyController;

    [SerializeField] private BuildManager buildManager;

    private const int TUTORIAL2_BALANCE_THRESHOLD = 20;
    private const int UPGRADE_BUTTON_BALANCE_THRESHOLD = 100;

    private bool tutorialShown = false;
    private bool tutorial2Shown = false;
    private bool upgradeButtonEnabled = false;
    private bool userIdle = true;
    private float idleTimer = 0f;
    private bool secondBuildingActive = false;
    private bool userClickedButton = false;

    private void Awake()
    {
        if (Instance == null)
        {
            Instance = this;
            DontDestroyOnLoad(gameObject);
        }
        else
        {
            Destroy(gameObject);
        }

        if (upgradeButton != null)
        {
            upgradeButton.gameObject.SetActive(false);
            upgradeButton.onClick.AddListener(OnUpgradeButtonClicked);
        }

        if (secondRequiredButton != null)
        {
            secondRequiredButton.onClick.AddListener(OnSecondButtonClicked);
        }

        if (packShotObject != null)
        {
            packShotObject.SetActive(false);
        }

        if (tutorialObject != null)
        {
            tutorialObject.SetActive(false);
        }
    }

    private void Start()
    {
        if (moneyController == null)
        {
            moneyController = MoneyController.Instance;
        }

        if (moneyController != null)
        {
            moneyController.OnBalanceChanged += CheckBalanceThresholds;
            moneyController.OnBuildSuccess += CheckSecondBuilding;
        }

        if (moneyController != null && moneyController.GetBalance() >= UPGRADE_BUTTON_BALANCE_THRESHOLD)
        {
            EnableUpgradeButton();
        }

        CheckForActiveBuildings();
    }

    private void OnDestroy()
    {
        if (moneyController != null)
        {
            moneyController.OnBalanceChanged -= CheckBalanceThresholds;
            moneyController.OnBuildSuccess -= CheckSecondBuilding;
        }

        if (upgradeButton != null)
        {
            upgradeButton.onClick.RemoveListener(OnUpgradeButtonClicked);
        }

        if (secondRequiredButton != null)
        {
            secondRequiredButton.onClick.RemoveListener(OnSecondButtonClicked);
        }
    }

    private void Update()
    {
        if (Input.GetMouseButtonDown(0) || Input.GetMouseButtonDown(1) || Input.anyKeyDown)
        {
            ResetIdleTimer();
            
            if (UnityEngine.EventSystems.EventSystem.current != null && 
                UnityEngine.EventSystems.EventSystem.current.currentSelectedGameObject != null &&
                UnityEngine.EventSystems.EventSystem.current.currentSelectedGameObject.GetComponent<Button>() != null)
            {
                userClickedButton = true;
            }
        }
        else
        {
            idleTimer += Time.deltaTime;

            if (idleTimer >= idleTimeForTutorial && !tutorialShown && !secondBuildingActive && !userClickedButton)
            {
                ShowFirstTutorial();
            }
        }

        if (moneyController != null && moneyController.GetBalance() >= UPGRADE_BUTTON_BALANCE_THRESHOLD &&
            !upgradeButtonEnabled)
        {
            EnableUpgradeButton();
        }
    }

    public void RegisterUserActivity()
    {
        ResetIdleTimer();
    }

    private void ResetIdleTimer()
    {
        userIdle = false;
        idleTimer = 0f;

        if (tutorialObject != null && tutorialObject.activeSelf)
        {
            tutorialObject.SetActive(false);
        }

        StartCoroutine(ResetIdleState());
    }

    private IEnumerator ResetIdleState()
    {
        yield return new WaitForSeconds(0.5f);
        userIdle = true;
    }

    private void ShowFirstTutorial()
    {
        if (tutorialObject != null && tutorialAnimator != null)
        {
            tutorialObject.SetActive(true);
            tutorialAnimator.Play("Tutorial");
            tutorialShown = true;
        }
    }

    private void ShowSecondTutorial()
    {
        if (tutorialObject != null && tutorialAnimator != null && !tutorial2Shown && !secondBuildingActive)
        {
            tutorialObject.SetActive(true);
            tutorialAnimator.Play("Tutorial2");
            tutorial2Shown = true;
        }
    }

    private void CheckBalanceThresholds(int newBalance)
    {
        if (newBalance >= TUTORIAL2_BALANCE_THRESHOLD && !tutorial2Shown && !secondBuildingActive)
        {
            ShowSecondTutorial();
        }

        if (newBalance >= UPGRADE_BUTTON_BALANCE_THRESHOLD && !upgradeButtonEnabled)
        {
            EnableUpgradeButton();
        }
    }

    private void CheckSecondBuilding(GameObject builtObject)
    {
        if (builtObject != null && builtObject.GetComponent<Build>() != null)
        {
            secondBuildingActive = true;
        }
    }

    private void EnableUpgradeButton()
    {
        if (upgradeButton != null)
        {
            upgradeButton.gameObject.SetActive(true);
            upgradeButtonGameObject.SetActive(true);
            upgradeButtonEnabled = true;
        }
    }

    private bool isUpgradeClicked = false;
    private bool isSecondButtonClicked = false;

    private void OnUpgradeButtonClicked()
    {
        isUpgradeClicked = true;
        userClickedButton = true;
        CheckPackShotActivation();
    }

    private void OnSecondButtonClicked()
    {
        isSecondButtonClicked = true;
        userClickedButton = true;
        CheckPackShotActivation();
    }

    private void CheckPackShotActivation()
    {
        if (isUpgradeClicked && isSecondButtonClicked && packShotObject != null)
        {
            packShotObject.SetActive(true);
        }
    }

    private void CheckForActiveBuildings()
    {
        if (buildManager != null)
        {
            bool anyBuildingActive = false;

            GameObject[] builds = GameObject.FindGameObjectsWithTag("Build");
            foreach (GameObject build in builds)
            {
                if (build.activeSelf)
                {
                    anyBuildingActive = true;
                    break;
                }
            }

            if (anyBuildingActive)
            {
                tutorialShown = true;
            }
        }
        else
        {
            buildManager = FindObjectOfType<BuildManager>();
        }
    }
}
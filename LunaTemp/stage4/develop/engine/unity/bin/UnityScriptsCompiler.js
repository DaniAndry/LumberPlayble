if ( TRACE ) { TRACE( JSON.parse( '["Build#SpawnBuild","BuildManager#Awake","BuildManager#OnDestroy","BuildManager#OnBuildSuccess","ButtonLight#init","ButtonLight#Start","ButtonLight#FlashColorRoutine","Character#IsFull#get","Character#CargoCount#get","Character#init","Character#OnTriggerEnter","Character#TakeTree","Character#UnloadToTruck","Character#Unload","CharactersMover#init","CharactersMover#Start","CharactersMover#OnDestroy","CharactersMover#HandleAllTrucksFull","CharactersMover#HandleRetryUnloading","CharactersMover#HandleCargoFull","CharactersMover#HandleCargoEmpty","CharactersMover#FindNearestAvailableUnloadPoint","CharactersMover#MoveToNextPoint","CharactersMover#FindNextAvailableUnloadPoint","ChopperManager#init","ChopperManager#Awake","ChopperManager#Start","ChopperManager#GetTargetTruck","ChopperManager#FindAvailableTruck","ChopperManager#ResetTargetTruck","ChopperManager#IsTargetTruck","Conveyor#init","Conveyor#Start","Conveyor#StartAnimationAfterDelay","Conveyor#StartCanvasAnimationAfterDelay","DG.Tweening.DOTweenCYInstruction.WaitForCompletion#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForCompletion#ctor","DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops#ctor","DG.Tweening.DOTweenCYInstruction.WaitForKill#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForKill#ctor","DG.Tweening.DOTweenCYInstruction.WaitForPosition#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForPosition#ctor","DG.Tweening.DOTweenCYInstruction.WaitForRewind#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForRewind#ctor","DG.Tweening.DOTweenCYInstruction.WaitForStart#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForStart#ctor","DG.Tweening.DOTweenModuleAudio#DOFade","DG.Tweening.DOTweenModuleAudio#DOPitch","DG.Tweening.DOTweenModuleAudio#DOSetFloat","DG.Tweening.DOTweenModuleAudio#DOComplete","DG.Tweening.DOTweenModuleAudio#DOKill","DG.Tweening.DOTweenModuleAudio#DOFlip","DG.Tweening.DOTweenModuleAudio#DOGoto","DG.Tweening.DOTweenModuleAudio#DOPause","DG.Tweening.DOTweenModuleAudio#DOPlay","DG.Tweening.DOTweenModuleAudio#DOPlayBackwards","DG.Tweening.DOTweenModuleAudio#DOPlayForward","DG.Tweening.DOTweenModuleAudio#DORestart","DG.Tweening.DOTweenModuleAudio#DORewind","DG.Tweening.DOTweenModuleAudio#DOSmoothRewind","DG.Tweening.DOTweenModuleAudio#DOTogglePause","DG.Tweening.DOTweenModulePhysics#DOMove","DG.Tweening.DOTweenModulePhysics#DOMoveX","DG.Tweening.DOTweenModulePhysics#DOMoveY","DG.Tweening.DOTweenModulePhysics#DOMoveZ","DG.Tweening.DOTweenModulePhysics#DORotate","DG.Tweening.DOTweenModulePhysics#DOLookAt","DG.Tweening.DOTweenModulePhysics#DOJump","DG.Tweening.DOTweenModulePhysics#DOPath","DG.Tweening.DOTweenModulePhysics#DOPath$1","DG.Tweening.DOTweenModulePhysics#DOLocalPath","DG.Tweening.DOTweenModulePhysics#DOLocalPath$1","DG.Tweening.DOTweenModulePhysics2D#DOMove","DG.Tweening.DOTweenModulePhysics2D#DOMoveX","DG.Tweening.DOTweenModulePhysics2D#DOMoveY","DG.Tweening.DOTweenModulePhysics2D#DORotate","DG.Tweening.DOTweenModulePhysics2D#DOJump","DG.Tweening.DOTweenModulePhysics2D#DOPath","DG.Tweening.DOTweenModulePhysics2D#DOPath$1","DG.Tweening.DOTweenModulePhysics2D#DOLocalPath","DG.Tweening.DOTweenModulePhysics2D#DOLocalPath$1","DG.Tweening.DOTweenModuleSprite#DOColor","DG.Tweening.DOTweenModuleSprite#DOFade","DG.Tweening.DOTweenModuleSprite#DOGradientColor","DG.Tweening.DOTweenModuleSprite#DOBlendableColor","DG.Tweening.DOTweenModuleUI#DOFade","DG.Tweening.DOTweenModuleUI#DOFade$1","DG.Tweening.DOTweenModuleUI#DOFade$2","DG.Tweening.DOTweenModuleUI#DOFade$3","DG.Tweening.DOTweenModuleUI#DOFade$4","DG.Tweening.DOTweenModuleUI#DOColor","DG.Tweening.DOTweenModuleUI#DOColor$1","DG.Tweening.DOTweenModuleUI#DOColor$2","DG.Tweening.DOTweenModuleUI#DOColor$3","DG.Tweening.DOTweenModuleUI#DOFillAmount","DG.Tweening.DOTweenModuleUI#DOGradientColor","DG.Tweening.DOTweenModuleUI#DOFlexibleSize","DG.Tweening.DOTweenModuleUI#DOMinSize","DG.Tweening.DOTweenModuleUI#DOPreferredSize","DG.Tweening.DOTweenModuleUI#DOScale","DG.Tweening.DOTweenModuleUI#DOAnchorPos","DG.Tweening.DOTweenModuleUI#DOAnchorPosX","DG.Tweening.DOTweenModuleUI#DOAnchorPosY","DG.Tweening.DOTweenModuleUI#DOAnchorPos3D","DG.Tweening.DOTweenModuleUI#DOAnchorPos3DX","DG.Tweening.DOTweenModuleUI#DOAnchorPos3DY","DG.Tweening.DOTweenModuleUI#DOAnchorPos3DZ","DG.Tweening.DOTweenModuleUI#DOAnchorMax","DG.Tweening.DOTweenModuleUI#DOAnchorMin","DG.Tweening.DOTweenModuleUI#DOPivot","DG.Tweening.DOTweenModuleUI#DOPivotX","DG.Tweening.DOTweenModuleUI#DOPivotY","DG.Tweening.DOTweenModuleUI#DOSizeDelta","DG.Tweening.DOTweenModuleUI#DOPunchAnchorPos","DG.Tweening.DOTweenModuleUI#DOShakeAnchorPos","DG.Tweening.DOTweenModuleUI#DOShakeAnchorPos$1","DG.Tweening.DOTweenModuleUI#DOJumpAnchorPos","DG.Tweening.DOTweenModuleUI#DONormalizedPos","DG.Tweening.DOTweenModuleUI#DOHorizontalNormalizedPos","DG.Tweening.DOTweenModuleUI#DOVerticalNormalizedPos","DG.Tweening.DOTweenModuleUI#DOValue","DG.Tweening.DOTweenModuleUI#DOCounter","DG.Tweening.DOTweenModuleUI#DOText","DG.Tweening.DOTweenModuleUI#DOBlendableColor","DG.Tweening.DOTweenModuleUI#DOBlendableColor$1","DG.Tweening.DOTweenModuleUI#DOBlendableColor$2","DG.Tweening.DOTweenModuleUI#DOShapeCircle","DG.Tweening.DOTweenModuleUI.Utils#SwitchToRectTransform","DG.Tweening.DOTweenModuleUnityVersion#DOGradientColor","DG.Tweening.DOTweenModuleUnityVersion#DOGradientColor$1","DG.Tweening.DOTweenModuleUnityVersion#WaitForCompletion","DG.Tweening.DOTweenModuleUnityVersion#WaitForRewind","DG.Tweening.DOTweenModuleUnityVersion#WaitForKill","DG.Tweening.DOTweenModuleUnityVersion#WaitForElapsedLoops","DG.Tweening.DOTweenModuleUnityVersion#WaitForPosition","DG.Tweening.DOTweenModuleUnityVersion#WaitForStart","DG.Tweening.DOTweenModuleUnityVersion#DOOffset","DG.Tweening.DOTweenModuleUnityVersion#DOTiling","DG.Tweening.DOTweenModuleUtils#Init","DG.Tweening.DOTweenModuleUtils#Preserver","DG.Tweening.DOTweenModuleUtils.Physics#SetOrientationOnPath","DG.Tweening.DOTweenModuleUtils.Physics#HasRigidbody2D","DG.Tweening.DOTweenModuleUtils.Physics#HasRigidbody","DG.Tweening.DOTweenModuleUtils.Physics#CreateDOTweenPathTween","GameManager#init","GameManager#init","GameManager#Awake","GameManager#Start","GameManager#OnDestroy","GameManager#Update","GameManager#RegisterUserActivity","GameManager#ResetIdleTimer","GameManager#ResetIdleState","GameManager#ShowFirstTutorial","GameManager#ShowSecondTutorial","GameManager#CheckBalanceThresholds","GameManager#CheckSecondBuilding","GameManager#EnableUpgradeButton","GameManager#OnUpgradeButtonClicked","GameManager#OnSecondButtonClicked","GameManager#CheckPackShotActivation","GameManager#CheckForActiveBuildings","Garage#OnEnable","Garage#OnChoper","MovePoint#Delay#get","MovePoint#MoveDuration#get","MoneyBalance#Money#get","MoneyBalance#init","MoneyBalance#Start","MoneyBalance#SetMoney","MoneyBalance#TakeMoney","MoneyBalance#UpdateText","MoneyBalance#AnimateMoneyChange","MoneyController#Instance#get","MoneyController#Awake","MoneyController#Start","MoneyController#OnDestroy","MoneyController#HandleMoneyChanged","MoneyController#TryBuild","MoneyController#ChangeBalance","MoneyController#ChangeBalance$1","MoneyController#ChangeBalanceWithVisual$1","MoneyController#ChangeBalanceWithVisual","MoneyController#GetBalance","MoneyFlyAnimation#init","MoneyFlyAnimation#Awake","MoneyFlyAnimation#InitPool","MoneyFlyAnimation#FlyCoins","MoneyFlyAnimation#FlyCoinsFromUIToWorld","MoneyFlyAnimation#FlyCoinsFromWorldToUI","MoneyFlyAnimation#FlyCoinsFromUIToWorldCoroutine","MoneyFlyAnimation#GetCoinFromPool","SimpleAudioManager#Awake","SimpleAudioManager#PlayProgressBarSound","SimpleAudioManager#PlayConveyorAnimationSound","SimpleAudioManager#PlayLogLoadSound","SimpleAudioManager#PlayButtonClickSound","SimpleAudioManager#PlayHouseAppearSound","SimpleAudioManager#PlaySound","Tree#init","Tree#Start","Tree#FlashColorRoutine","Tree#Take","Truck#IsFull#get","Truck#RemainingCapacity#get","Truck#MaxCapacity#get","Truck#IsBeingLoadedByChopper#get","Truck#CurrentCargoCount#get","Truck#init","Truck#Start","Truck#LoadLog","Truck#LoadLogs","Truck#LoadLogs$1","Truck#ResetChoppers","Truck#Clear","Truck#OnEnable","Truck#OnDisable","Truck#NotifyTruckManagerOnFull","Truck#UpdateProgressBar","TruckManager#Trucks#get","TruckManager#init","TruckManager#Awake","TruckManager#Start","TruckManager#OnDestroy","TruckManager#HandleTruckFull","TruckManager#CheckAndSendTrucks","TruckManager#GetAvailableTruck","TruckManager#GetTruckByIndex","TruckManager#GetAllTrucks","TruckManager#AreAllTrucksFull","TruckManager#AddFullTruck","TruckManager#RemoveFullTruck","TruckMover#IsMoving#get","TruckMover#init","TruckMover#Awake","TruckMover#Start","TruckMover#OnDestroy","TruckMover#HandleTruckReadyToSend","TruckMover#HandleTruckFull","TruckMover#MoveToUnloadAndBackRoutine","TruckMover#UnloadTruckRoutine","TruckProgressBarSetup#init","TruckProgressBarSetup#Start","TruckProgressBarSetup#AssignProgressBar","TruckUnloadPoint#UnloadDuration#get","TruckUnloadPoint#StopPosition#get","TruckUnloadPoint#init","UnloadPoint#TargetTruck#get","UnloadPoint#init","UnloadPoint#CanUnload","UnloadPoint#CanUnload$1"]' ) ); }
/**
 * @version 1.0.9211.25084
 * @copyright anton
 * @compiler Bridge.NET 17.9.42-luna
 */
Bridge.assembly("UnityScriptsCompiler", function ($asm, globals) {
    "use strict";

    /*Build start.*/
    Bridge.define("Build", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            building: null
        },
        methods: {
            /*Build.SpawnBuild start.*/
            SpawnBuild: function () {
if ( TRACE ) { TRACE( "Build#SpawnBuild", this ); }

                this.building.SetActive(true);
            },
            /*Build.SpawnBuild end.*/


        }
    });
    /*Build end.*/

    /*BuildManager start.*/
    Bridge.define("BuildManager", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _buildButton1: null,
            _buildButton2: null,
            _buildButton3: null,
            _build1: null,
            _build2: null,
            _build3: null,
            _moneyController: null
        },
        methods: {
            /*BuildManager.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "BuildManager#Awake", this ); }

                this._buildButton1.onClick.AddListener(Bridge.fn.bind(this, function () {
                    this._moneyController.TryBuild(8, this._build1);
                }));
                this._buildButton2.onClick.AddListener(Bridge.fn.bind(this, function () {
                    this._moneyController.TryBuild(20, this._build2);
                }));
                this._buildButton3.onClick.AddListener(Bridge.fn.bind(this, function () {
                    this._moneyController.TryBuild(100, this._build3);
                }));

                this._moneyController.addOnBuildSuccess(Bridge.fn.cacheBind(this, this.OnBuildSuccess));
            },
            /*BuildManager.Awake end.*/

            /*BuildManager.OnDestroy start.*/
            OnDestroy: function () {
if ( TRACE ) { TRACE( "BuildManager#OnDestroy", this ); }

                this._moneyController.removeOnBuildSuccess(Bridge.fn.cacheBind(this, this.OnBuildSuccess));
            },
            /*BuildManager.OnDestroy end.*/

            /*BuildManager.OnBuildSuccess start.*/
            OnBuildSuccess: function (buildObject) {
if ( TRACE ) { TRACE( "BuildManager#OnBuildSuccess", this ); }

                var $t;
                UnityEngine.MonoBehaviour.op_Inequality(($t = SimpleAudioManager.Instance), null) ? $t.PlayHouseAppearSound() : null;
                if (UnityEngine.GameObject.op_Equality(buildObject, this._build1)) {
                    this._buildButton1.gameObject.SetActive(false);
                } else if (UnityEngine.GameObject.op_Equality(buildObject, this._build2)) {
                    this._buildButton2.gameObject.SetActive(false);
                } else if (UnityEngine.GameObject.op_Equality(buildObject, this._build3)) {
                    this._buildButton3.gameObject.SetActive(false);
                }
            },
            /*BuildManager.OnBuildSuccess end.*/


        }
    });
    /*BuildManager end.*/

    /*ButtonLight start.*/
    Bridge.define("ButtonLight", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _material: null,
            _originalColor: null,
            _flashColor: null,
            flashSpeed: 0,
            pauseBetweenFlashes: 0,
            flashCount: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "ButtonLight#init", this ); }

                this._originalColor = new UnityEngine.Color();
                this._flashColor = new UnityEngine.Color();
                this._flashColor = new pc.Color( 1, 1, 0, 1 );
                this.flashSpeed = 0.3;
                this.pauseBetweenFlashes = 0.1;
                this.flashCount = 3;
            }
        },
        methods: {
            /*ButtonLight.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "ButtonLight#Start", this ); }

                var renderer = { };
                if (this.TryGetComponent$1(UnityEngine.Renderer, renderer)) {
                    this._material = renderer.v.material;
                    this._originalColor = this._material.color.$clone();
                    this.StartCoroutine$1(this.FlashColorRoutine());
                }
            },
            /*ButtonLight.Start end.*/

            /*ButtonLight.FlashColorRoutine start.*/
            FlashColorRoutine: function () {
if ( TRACE ) { TRACE( "ButtonLight#FlashColorRoutine", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    i,
                    t,
                    $t,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    i = 0;
                                        $step = 1;
                                        continue;
                                }
                                case 1: {
                                    if ( i < this.flashCount ) {
                                            $step = 2;
                                            continue;
                                        }
                                    $step = 14;
                                    continue;
                                }
                                case 2: {
                                    t = 0.0;
                                    $step = 3;
                                    continue;
                                }
                                case 3: {
                                    if ( t < 1.0 ) {
                                            $step = 4;
                                            continue;
                                        } 
                                        $step = 6;
                                        continue;
                                }
                                case 4: {
                                    t += UnityEngine.Time.deltaTime / this.flashSpeed;
                                        this._material.color = pc.Color.lerp( this._originalColor, this._flashColor, t );
                                        $enumerator.current = null;
                                        $step = 5;
                                        return true;
                                }
                                case 5: {
                                    
                                        $step = 3;
                                        continue;
                                }
                                case 6: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(this.pauseBetweenFlashes);
                                        $step = 7;
                                        return true;
                                }
                                case 7: {
                                    t = 0.0;
                                    $step = 8;
                                    continue;
                                }
                                case 8: {
                                    if ( t < 1.0 ) {
                                            $step = 9;
                                            continue;
                                        } 
                                        $step = 11;
                                        continue;
                                }
                                case 9: {
                                    t += UnityEngine.Time.deltaTime / this.flashSpeed;
                                        this._material.color = pc.Color.lerp( this._flashColor, this._originalColor, t );
                                        $enumerator.current = null;
                                        $step = 10;
                                        return true;
                                }
                                case 10: {
                                    
                                        $step = 8;
                                        continue;
                                }
                                case 11: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(this.pauseBetweenFlashes);
                                        $step = 12;
                                        return true;
                                }
                                case 12: {
                                    $step = 13;
                                    continue;
                                }
                                case 13: {
                                    i = (i + 1) | 0;
                                    $step = 1;
                                    continue;
                                }
                                case 14: {
                                    // Проигрываем звук нажатия кнопки
                                        UnityEngine.MonoBehaviour.op_Inequality(($t = SimpleAudioManager.Instance), null) ? $t.PlayButtonClickSound() : null;

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*ButtonLight.FlashColorRoutine end.*/


        }
    });
    /*ButtonLight end.*/

    /*Character start.*/
    Bridge.define("Character", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _cargo: null,
            _currentCargoIndex: 0,
            _isFull: false
        },
        events: {
            OnCargoFull: null,
            OnCargoEmpty: null
        },
        props: {
            IsFull: {
                get: function () {
if ( TRACE ) { TRACE( "Character#IsFull#get", this ); }

                    return this._isFull;
                }
            },
            CargoCount: {
                get: function () {
if ( TRACE ) { TRACE( "Character#CargoCount#get", this ); }

                    return this._currentCargoIndex;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Character#init", this ); }

                this._currentCargoIndex = 0;
                this._isFull = false;
            }
        },
        methods: {
            /*Character.OnTriggerEnter start.*/
            OnTriggerEnter: function (other) {
if ( TRACE ) { TRACE( "Character#OnTriggerEnter", this ); }

                if (this._isFull) {
                    return;
                }
                var tree = { };

                if (other.TryGetComponent$1(Tree, tree)) {
                    tree.v.Take();
                    this.TakeTree(tree.v);
                }
            },
            /*Character.OnTriggerEnter end.*/

            /*Character.TakeTree start.*/
            TakeTree: function (tree) {
if ( TRACE ) { TRACE( "Character#TakeTree", this ); }

                if (this._currentCargoIndex < this._cargo.Count) {
                    this._cargo.getItem(this._currentCargoIndex).SetActive(true);
                    this._currentCargoIndex = (this._currentCargoIndex + 1) | 0;

                    if (this._currentCargoIndex >= this._cargo.Count) {
                        this._isFull = true;
                        !Bridge.staticEquals(this.OnCargoFull, null) ? this.OnCargoFull() : null;
                    }
                }
            },
            /*Character.TakeTree end.*/

            /*Character.UnloadToTruck start.*/
            UnloadToTruck: function (truck) {
if ( TRACE ) { TRACE( "Character#UnloadToTruck", this ); }

                if (this._currentCargoIndex === 0) {
                    return 0;
                }

                var logsUnloaded = truck.LoadLogs$1(this._currentCargoIndex, this.gameObject);

                for (var i = 0; i < logsUnloaded; i = (i + 1) | 0) {
                    if (this._currentCargoIndex > 0) {
                        this._currentCargoIndex = (this._currentCargoIndex - 1) | 0;
                        this._cargo.getItem(this._currentCargoIndex).SetActive(false);
                    }
                }

                this._isFull = this._currentCargoIndex >= this._cargo.Count;

                if (this._currentCargoIndex === 0) {
                    !Bridge.staticEquals(this.OnCargoEmpty, null) ? this.OnCargoEmpty() : null;
                }

                return logsUnloaded;
            },
            /*Character.UnloadToTruck end.*/

            /*Character.Unload start.*/
            Unload: function () {
if ( TRACE ) { TRACE( "Character#Unload", this ); }

                var $t;
                $t = Bridge.getEnumerator(this._cargo);
                try {
                    while ($t.moveNext()) {
                        var go = $t.Current;
                        go.SetActive(false);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                this._currentCargoIndex = 0;
                this._isFull = false;
                !Bridge.staticEquals(this.OnCargoEmpty, null) ? this.OnCargoEmpty() : null;
            },
            /*Character.Unload end.*/


        }
    });
    /*Character end.*/

    /*CharactersMover start.*/
    Bridge.define("CharactersMover", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _normalRoutePoints: null,
            _unloadPoints: null,
            _currentPointIndex: 0,
            _initialRotationX: 0,
            _initialRotationZ: 0,
            _character: null,
            _currentRoute: null,
            _isUnloading: false,
            _waitingForTruck: false,
            _checkTruckAvailabilityInterval: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "CharactersMover#init", this ); }

                this._currentPointIndex = 0;
                this._isUnloading = false;
                this._waitingForTruck = false;
                this._checkTruckAvailabilityInterval = 2.0;
            }
        },
        methods: {
            /*CharactersMover.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "CharactersMover#Start", this ); }

                this._character = this.GetComponent(Character);
                this._initialRotationX = this.transform.rotation.getPositiveEulerAngles().x;
                this._initialRotationZ = this.transform.rotation.getPositiveEulerAngles().z;
                this._currentRoute = this._normalRoutePoints;

                this._character.addOnCargoFull(Bridge.fn.cacheBind(this, this.HandleCargoFull));
                this._character.addOnCargoEmpty(Bridge.fn.cacheBind(this, this.HandleCargoEmpty));

                if (UnityEngine.MonoBehaviour.op_Inequality(TruckManager.Instance, null)) {
                    TruckManager.Instance.OnAllTrucksFull = Bridge.fn.combine(TruckManager.Instance.OnAllTrucksFull, Bridge.fn.cacheBind(this, this.HandleAllTrucksFull));
                }

                this.MoveToNextPoint();
            },
            /*CharactersMover.Start end.*/

            /*CharactersMover.OnDestroy start.*/
            OnDestroy: function () {
if ( TRACE ) { TRACE( "CharactersMover#OnDestroy", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(this._character, null)) {
                    this._character.removeOnCargoFull(Bridge.fn.cacheBind(this, this.HandleCargoFull));
                    this._character.removeOnCargoEmpty(Bridge.fn.cacheBind(this, this.HandleCargoEmpty));
                }

                if (UnityEngine.MonoBehaviour.op_Inequality(TruckManager.Instance, null)) {
                    TruckManager.Instance.OnAllTrucksFull = Bridge.fn.remove(TruckManager.Instance.OnAllTrucksFull, Bridge.fn.cacheBind(this, this.HandleAllTrucksFull));
                }

                // Убедимся, что все Tween отменены
                DG.Tweening.ShortcutExtensions.DOKill(this.transform);
                // Отменяем все отложенные вызовы
                this.CancelInvoke();
            },
            /*CharactersMover.OnDestroy end.*/

            /*CharactersMover.HandleAllTrucksFull start.*/
            HandleAllTrucksFull: function () {
if ( TRACE ) { TRACE( "CharactersMover#HandleAllTrucksFull", this ); }

                if (this._waitingForTruck) {
                    this._waitingForTruck = false;
                    this._isUnloading = false;
                    this._currentRoute = this._normalRoutePoints;
                    this._currentPointIndex = 0;

                    DG.Tweening.ShortcutExtensions.DOKill(this.transform);
                    this.MoveToNextPoint();
                }
            },
            /*CharactersMover.HandleAllTrucksFull end.*/

            /*CharactersMover.HandleRetryUnloading start.*/
            HandleRetryUnloading: function () {
if ( TRACE ) { TRACE( "CharactersMover#HandleRetryUnloading", this ); }

                if (this._waitingForTruck) {
                    var targetPoint = this.FindNearestAvailableUnloadPoint();
                    if (UnityEngine.MonoBehaviour.op_Inequality(targetPoint, null)) {
                        this._waitingForTruck = false;
                        this._currentRoute = System.Array.init([targetPoint], MovePoint);
                        this._currentPointIndex = 0;

                        DG.Tweening.ShortcutExtensions.DOKill(this.transform);
                        this.MoveToNextPoint();
                    } else {
                        // Если не нашли точку выгрузки, убедимся, что Chopper не застрял
                        if (UnityEngine.MonoBehaviour.op_Inequality(ChopperManager.Instance, null) && Bridge.is(this._character, Chopper)) {
                            // Если Chopper Manager не смог найти целевой грузовик, 
                            // перезапустим процесс поиска
                            if (UnityEngine.MonoBehaviour.op_Equality(ChopperManager.Instance.GetTargetTruck(), null)) {
                                ChopperManager.Instance.ResetTargetTruck();
                            }
                        }

                        this.CancelInvoke$1("HandleRetryUnloading"); // Отменяем текущий вызов
                        this.Invoke("HandleRetryUnloading", this._checkTruckAvailabilityInterval);
                    }
                }
            },
            /*CharactersMover.HandleRetryUnloading end.*/

            /*CharactersMover.HandleCargoFull start.*/
            HandleCargoFull: function () {
if ( TRACE ) { TRACE( "CharactersMover#HandleCargoFull", this ); }

                if (!this._isUnloading) {
                    this._isUnloading = true;

                    var targetPoint = this.FindNearestAvailableUnloadPoint();

                    if (UnityEngine.MonoBehaviour.op_Inequality(targetPoint, null)) {
                        this._currentRoute = System.Array.init([targetPoint], MovePoint);
                        this._currentPointIndex = 0;

                        DG.Tweening.ShortcutExtensions.DOKill(this.transform);
                        this.MoveToNextPoint();
                    } else {
                        this._waitingForTruck = true;
                        this.CancelInvoke$1("HandleRetryUnloading"); // Отменяем предыдущий вызов, если он был
                        this.Invoke("HandleRetryUnloading", this._checkTruckAvailabilityInterval);
                    }
                }
            },
            /*CharactersMover.HandleCargoFull end.*/

            /*CharactersMover.HandleCargoEmpty start.*/
            HandleCargoEmpty: function () {
if ( TRACE ) { TRACE( "CharactersMover#HandleCargoEmpty", this ); }

                if (this._isUnloading) {
                    this._isUnloading = false;
                    this._waitingForTruck = false;
                    this._currentRoute = this._normalRoutePoints;
                    this._currentPointIndex = 0;
                }
            },
            /*CharactersMover.HandleCargoEmpty end.*/

            /*CharactersMover.FindNearestAvailableUnloadPoint start.*/
            FindNearestAvailableUnloadPoint: function () {
if ( TRACE ) { TRACE( "CharactersMover#FindNearestAvailableUnloadPoint", this ); }

                var $t;
                var closestDistance = 3.40282347E+38;
                var closestPoint = null;

                $t = Bridge.getEnumerator(this._unloadPoints);
                try {
                    while ($t.moveNext()) {
                        var point = $t.Current;
                        if (UnityEngine.MonoBehaviour.op_Equality(point.TargetTruck, null)) {
                            continue;
                        }


                        var mover = point.TargetTruck.GetComponent(TruckMover);
                        var truckMoving = UnityEngine.MonoBehaviour.op_Inequality(mover, null) && mover.IsMoving;

                        var canUnload = point.CanUnload$1(this._character.gameObject);

                        if (canUnload) {
                            var distance = pc.Vec3.distance( this.transform.position, point.transform.position );
                            if (distance < closestDistance) {
                                closestDistance = distance;
                                closestPoint = point;
                            }
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }

                return closestPoint;
            },
            /*CharactersMover.FindNearestAvailableUnloadPoint end.*/

            /*CharactersMover.MoveToNextPoint start.*/
            MoveToNextPoint: function () {
if ( TRACE ) { TRACE( "CharactersMover#MoveToNextPoint", this ); }

                if (this._currentPointIndex >= this._currentRoute.length) {
                    this._currentPointIndex = 0;
                }

                var currentPoint = this._currentRoute[this._currentPointIndex];
                var targetPos = currentPoint.transform.position.$clone();
                var moveDuration = currentPoint.MoveDuration;
                var lookDirection = targetPos.$clone().sub( this.transform.position );
                lookDirection.y = 0.0;

                if (!pc.Vec3.equals( lookDirection, pc.Vec3.ZERO.clone() )) {
                    var targetRotation = new pc.Quat().setLookAt( lookDirection, pc.Vec3.UP );
                    var yRotation = targetRotation.getPositiveEulerAngles().y;
                    var finalRotation = new pc.Quat().setFromEulerAngles_Unity( this._initialRotationX, yRotation, this._initialRotationZ );
                    DG.Tweening.ShortcutExtensions.DORotateQuaternion(this.transform, finalRotation.$clone(), 0.5);
                }
                DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOMove(this.transform, targetPos.$clone(), moveDuration), DG.Tweening.Ease.InOutSine), Bridge.fn.bind(this, function () {
                    var unloadPoint;
                    if (UnityEngine.MonoBehaviour.op_Inequality(((unloadPoint = Bridge.as(currentPoint, UnloadPoint))), null)) {
                        if (UnityEngine.MonoBehaviour.op_Inequality(unloadPoint.TargetTruck, null)) {
                            var truckIsFullBefore = unloadPoint.TargetTruck.IsFull;

                            var logsUnloaded = this._character.UnloadToTruck(unloadPoint.TargetTruck);

                            if (logsUnloaded === 0 && this._character.CargoCount > 0) {
                                var nextPoint = this.FindNextAvailableUnloadPoint(unloadPoint);

                                if (UnityEngine.MonoBehaviour.op_Inequality(nextPoint, null) && UnityEngine.MonoBehaviour.op_Inequality(nextPoint, unloadPoint)) {
                                    this._currentRoute = System.Array.init([nextPoint], MovePoint);
                                    this._currentPointIndex = -1;
                                } else {
                                    this._isUnloading = false;
                                    this._currentRoute = this._normalRoutePoints;
                                    this._currentPointIndex = 0;

                                    this._waitingForTruck = true;
                                    this.Invoke("HandleRetryUnloading", this._checkTruckAvailabilityInterval);
                                }
                            }
                        } else {
                            this._character.Unload();
                        }
                    }

                    this._currentPointIndex = (this._currentPointIndex + 1) | 0;
                    DG.Tweening.DOVirtual.DelayedCall(currentPoint.Delay, Bridge.fn.cacheBind(this, this.MoveToNextPoint));
                }));
            },
            /*CharactersMover.MoveToNextPoint end.*/

            /*CharactersMover.FindNextAvailableUnloadPoint start.*/
            FindNextAvailableUnloadPoint: function (currentPoint) {
if ( TRACE ) { TRACE( "CharactersMover#FindNextAvailableUnloadPoint", this ); }

                var $t;
                $t = Bridge.getEnumerator(this._unloadPoints);
                try {
                    while ($t.moveNext()) {
                        var point = $t.Current;
                        if (UnityEngine.MonoBehaviour.op_Inequality(point, currentPoint) && UnityEngine.MonoBehaviour.op_Inequality(point.TargetTruck, null)) {
                            var mover = point.TargetTruck.GetComponent(TruckMover);
                            var truckMoving = UnityEngine.MonoBehaviour.op_Inequality(mover, null) && mover.IsMoving;

                            var canUnload = point.CanUnload$1(this._character.gameObject);

                            if (canUnload) {
                                return point;
                            }
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }

                // Убираем проверку TruckManager, которая не завершается должным образом
                // if (TruckManager.Instance != null)
                // {
                //     Truck availableTruck = TruckManager.Instance.GetAvailableTruck();
                // }

                return null;
            },
            /*CharactersMover.FindNextAvailableUnloadPoint end.*/


        }
    });
    /*CharactersMover end.*/

    /*ChopperManager start.*/
    Bridge.define("ChopperManager", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                Instance: null
            }
        },
        fields: {
            _choppers: null,
            _targetTruck: null,
            _isTargetTruckSelected: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "ChopperManager#init", this ); }

                this._choppers = new (System.Collections.Generic.List$1(Chopper)).ctor();
                this._isTargetTruckSelected = false;
            }
        },
        methods: {
            /*ChopperManager.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "ChopperManager#Awake", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(ChopperManager.Instance, null)) {
                    ChopperManager.Instance = this;
                } else {
                    UnityEngine.MonoBehaviour.Destroy(this.gameObject);
                }
            },
            /*ChopperManager.Awake end.*/

            /*ChopperManager.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "ChopperManager#Start", this ); }

                if (this._choppers.Count === 0) {
                    var foundChoppers = UnityEngine.Object.FindObjectsOfType(Chopper);
                    this._choppers.AddRange(foundChoppers);
                }
            },
            /*ChopperManager.Start end.*/

            /*ChopperManager.GetTargetTruck start.*/
            GetTargetTruck: function () {
if ( TRACE ) { TRACE( "ChopperManager#GetTargetTruck", this ); }

                if (this._isTargetTruckSelected && UnityEngine.MonoBehaviour.op_Inequality(this._targetTruck, null) && !this._targetTruck.IsFull) {
                    return this._targetTruck;
                }

                this._targetTruck = this.FindAvailableTruck();
                this._isTargetTruckSelected = UnityEngine.MonoBehaviour.op_Inequality(this._targetTruck, null);

                return this._targetTruck;
            },
            /*ChopperManager.GetTargetTruck end.*/

            /*ChopperManager.FindAvailableTruck start.*/
            FindAvailableTruck: function () {
if ( TRACE ) { TRACE( "ChopperManager#FindAvailableTruck", this ); }

                var $t;
                if (UnityEngine.MonoBehaviour.op_Inequality(TruckManager.Instance, null)) {
                    return TruckManager.Instance.GetAvailableTruck();
                }

                var trucks = UnityEngine.Object.FindObjectsOfType(Truck);
                $t = Bridge.getEnumerator(trucks);
                try {
                    while ($t.moveNext()) {
                        var truck = $t.Current;
                        var mover = truck.GetComponent(TruckMover);
                        var isMoving = UnityEngine.MonoBehaviour.op_Inequality(mover, null) && mover.IsMoving;

                        if (truck.RemainingCapacity > 0 && !isMoving) {
                            return truck;
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }

                return null;
            },
            /*ChopperManager.FindAvailableTruck end.*/

            /*ChopperManager.ResetTargetTruck start.*/
            ResetTargetTruck: function () {
if ( TRACE ) { TRACE( "ChopperManager#ResetTargetTruck", this ); }

                this._targetTruck = null;
                this._isTargetTruckSelected = false;
            },
            /*ChopperManager.ResetTargetTruck end.*/

            /*ChopperManager.IsTargetTruck start.*/
            IsTargetTruck: function (truck) {
if ( TRACE ) { TRACE( "ChopperManager#IsTargetTruck", this ); }

                return this._isTargetTruckSelected && UnityEngine.MonoBehaviour.op_Equality(this._targetTruck, truck);
            },
            /*ChopperManager.IsTargetTruck end.*/


        }
    });
    /*ChopperManager end.*/

    /*Conveyor start.*/
    Bridge.define("Conveyor", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                StateName: null,
                StateName2: null
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "Conveyor#init", this ); }

                    this.StateName = "Conveyor2";
                    this.StateName2 = "Conveyor3";
                }
            }
        },
        fields: {
            canvasAnimator: null,
            animator: null
        },
        methods: {
            /*Conveyor.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "Conveyor#Start", this ); }

                this.animator = this.GetComponent(UnityEngine.Animator);
                this.StartCoroutine$1(this.StartCanvasAnimationAfterDelay());
                this.StartCoroutine$1(this.StartAnimationAfterDelay(10.0, Conveyor.StateName));
                this.StartCoroutine$1(this.StartAnimationAfterDelay(35.0, Conveyor.StateName2));
            },
            /*Conveyor.Start end.*/

            /*Conveyor.StartAnimationAfterDelay start.*/
            StartAnimationAfterDelay: function (delay, name) {
if ( TRACE ) { TRACE( "Conveyor#StartAnimationAfterDelay", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $t,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(delay);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    this.animator.Play$2(name);

                                        // Проигрываем звук анимации конвейера
                                        UnityEngine.MonoBehaviour.op_Inequality(($t = SimpleAudioManager.Instance), null) ? $t.PlayConveyorAnimationSound() : null;

                                        this.StartCoroutine$1(this.StartCanvasAnimationAfterDelay());

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Conveyor.StartAnimationAfterDelay end.*/

            /*Conveyor.StartCanvasAnimationAfterDelay start.*/
            StartCanvasAnimationAfterDelay: function () {
if ( TRACE ) { TRACE( "Conveyor#StartCanvasAnimationAfterDelay", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(1.5);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    this.canvasAnimator.Play$2("Exclamation");

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Conveyor.StartCanvasAnimationAfterDelay end.*/


        }
    });
    /*Conveyor end.*/

    /*DG.Tweening.DOTweenCYInstruction start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction");
    /*DG.Tweening.DOTweenCYInstruction end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForCompletion", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForCompletion#keepWaiting#get", this ); }

                    return this.t.active && !DG.Tweening.TweenExtensions.IsComplete(this.t);
                }
            }
        },
        ctors: {
            ctor: function (tween) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForCompletion#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null,
            elapsedLoops: 0
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops#keepWaiting#get", this ); }

                    return this.t.active && DG.Tweening.TweenExtensions.CompletedLoops(this.t) < this.elapsedLoops;
                }
            }
        },
        ctors: {
            ctor: function (tween, elapsedLoops) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
                this.elapsedLoops = elapsedLoops;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForKill start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForKill", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForKill#keepWaiting#get", this ); }

                    return this.t.active;
                }
            }
        },
        ctors: {
            ctor: function (tween) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForKill#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForKill end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForPosition", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null,
            position: 0
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForPosition#keepWaiting#get", this ); }

                    return this.t.active && this.t.position * (((DG.Tweening.TweenExtensions.CompletedLoops(this.t) + 1) | 0)) < this.position;
                }
            }
        },
        ctors: {
            ctor: function (tween, position) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForPosition#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
                this.position = position;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForRewind", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForRewind#keepWaiting#get", this ); }

                    return this.t.active && (!this.t.playedOnce || this.t.position * (((DG.Tweening.TweenExtensions.CompletedLoops(this.t) + 1) | 0)) > 0);
                }
            }
        },
        ctors: {
            ctor: function (tween) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForRewind#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForStart start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForStart", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForStart#keepWaiting#get", this ); }

                    return this.t.active && !this.t.playedOnce;
                }
            }
        },
        ctors: {
            ctor: function (tween) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForStart#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForStart end.*/

    /*DG.Tweening.DOTweenModuleAudio start.*/
    Bridge.define("DG.Tweening.DOTweenModuleAudio", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleAudio.DOFade:static start.*/
                /**
                 * Tweens an AudioSource's volume to the given value.
                 Also stores the AudioSource as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.AudioSource}           target      
                 * @param   {number}                            endValue    The end value to reach (0 to 1)
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOFade", this ); }

                    if (endValue < 0) {
                        endValue = 0;
                    } else {
                        if (endValue > 1) {
                            endValue = 1;
                        }
                    }
                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.volume;
                    }, function (x) {
                        target.volume = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleAudio.DOFade:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPitch:static start.*/
                /**
                 * Tweens an AudioSource's pitch to the given value.
                 Also stores the AudioSource as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.AudioSource}           target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPitch: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOPitch", this ); }

                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.pitch;
                    }, function (x) {
                        target.pitch = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPitch:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOSetFloat:static start.*/
                /**
                 * Tweens an AudioMixer's exposed float to the given value.
                 Also stores the AudioMixer as the tween's target so it can be used for filtered operations.
                 Note that you need to manually expose a float in an AudioMixerGroup in order to be able to tween it from an AudioMixer.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}      target       
                 * @param   {string}                            floatName    Name given to the exposed float to set
                 * @param   {number}                            endValue     The end value to reach
                 * @param   {number}                            duration     The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOSetFloat: function (target, floatName, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOSetFloat", this ); }

                    var t = DG.Tweening.DOTween.To$4(function () {
                        var currVal = { };
                        target.GetFloat(floatName, currVal);
                        return currVal.v;
                    }, function (x) {
                        target.SetFloat(floatName, x);
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleAudio.DOSetFloat:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOComplete:static start.*/
                /**
                 * Completes all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens completed
                 (meaning the tweens that don't have infinite loops and were not already complete)
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target           
                 * @param   {boolean}                         withCallbacks    For Sequences only: if TRUE also internal Sequence callbacks will be fired,
                 otherwise they will be ignored
                 * @return  {number}
                 */
                DOComplete: function (target, withCallbacks) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOComplete", this ); }

                    if (withCallbacks === void 0) { withCallbacks = false; }
                    return DG.Tweening.DOTween.Complete(target, withCallbacks);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOComplete:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOKill:static start.*/
                /**
                 * Kills all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens killed.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target      
                 * @param   {boolean}                         complete    If TRUE completes the tween before killing it
                 * @return  {number}
                 */
                DOKill: function (target, complete) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOKill", this ); }

                    if (complete === void 0) { complete = false; }
                    return DG.Tweening.DOTween.Kill(target, complete);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOKill:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOFlip:static start.*/
                /**
                 * Flips the direction (backwards if it was going forward or viceversa) of all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens flipped.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOFlip: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOFlip", this ); }

                    return DG.Tweening.DOTween.Flip(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOFlip:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOGoto:static start.*/
                /**
                 * Sends to the given position all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens involved.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target     
                 * @param   {number}                          to         Time position to reach
                 (if higher than the whole tween duration the tween will simply reach its end)
                 * @param   {boolean}                         andPlay    If TRUE will play the tween after reaching the given position, otherwise it will pause it
                 * @return  {number}
                 */
                DOGoto: function (target, to, andPlay) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOGoto", this ); }

                    if (andPlay === void 0) { andPlay = false; }
                    return DG.Tweening.DOTween.Goto(target, to, andPlay);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOGoto:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPause:static start.*/
                /**
                 * Pauses all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens paused.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOPause: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOPause", this ); }

                    return DG.Tweening.DOTween.Pause(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPause:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPlay:static start.*/
                /**
                 * Plays all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens played.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOPlay: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOPlay", this ); }

                    return DG.Tweening.DOTween.Play(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPlay:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPlayBackwards:static start.*/
                /**
                 * Plays backwards all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens played.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOPlayBackwards: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOPlayBackwards", this ); }

                    return DG.Tweening.DOTween.PlayBackwards(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPlayBackwards:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPlayForward:static start.*/
                /**
                 * Plays forward all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens played.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOPlayForward: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOPlayForward", this ); }

                    return DG.Tweening.DOTween.PlayForward(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPlayForward:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DORestart:static start.*/
                /**
                 * Restarts all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens restarted.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DORestart: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DORestart", this ); }

                    return DG.Tweening.DOTween.Restart(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DORestart:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DORewind:static start.*/
                /**
                 * Rewinds all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens rewinded.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DORewind: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DORewind", this ); }

                    return DG.Tweening.DOTween.Rewind(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DORewind:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOSmoothRewind:static start.*/
                /**
                 * Smoothly rewinds all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens rewinded.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOSmoothRewind: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOSmoothRewind", this ); }

                    return DG.Tweening.DOTween.SmoothRewind(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOSmoothRewind:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOTogglePause:static start.*/
                /**
                 * Toggles the paused state (plays if it was paused, pauses if it was playing) of all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens involved.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOTogglePause: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOTogglePause", this ); }

                    return DG.Tweening.DOTween.TogglePause(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOTogglePause:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleAudio end.*/

    /*DG.Tweening.DOTweenModulePhysics start.*/
    Bridge.define("DG.Tweening.DOTweenModulePhysics", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModulePhysics.DOMove:static start.*/
                /**
                 * Tweens a Rigidbody's position to the given value.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target      
                 * @param   {UnityEngine.Vector3}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMove: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOMove", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$13(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOMove:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOMoveX:static start.*/
                /**
                 * Tweens a Rigidbody's X position to the given value.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMoveX: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOMoveX", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( endValue, 0, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.X, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOMoveX:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOMoveY:static start.*/
                /**
                 * Tweens a Rigidbody's Y position to the given value.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMoveY: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOMoveY", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( 0, endValue, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.Y, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOMoveY:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOMoveZ:static start.*/
                /**
                 * Tweens a Rigidbody's Z position to the given value.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMoveZ: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOMoveZ", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( 0, 0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.Z, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOMoveZ:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DORotate:static start.*/
                /**
                 * Tweens a Rigidbody's rotation to the given value.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target      
                 * @param   {UnityEngine.Vector3}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {DG.Tweening.RotateMode}            mode        Rotation mode
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DORotate: function (target, endValue, duration, mode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DORotate", this ); }

                    if (mode === void 0) { mode = 0; }
                    var t = DG.Tweening.DOTween.To$9(function () {
                        return target.rotation;
                    }, Bridge.fn.cacheBind(target, target.MoveRotation), endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions), t, target);
                    t.plugOptions.rotateMode = mode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DORotate:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOLookAt:static start.*/
                /**
                 * Tweens a Rigidbody's rotation so that it will look towards the given position.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target            
                 * @param   {UnityEngine.Vector3}               towards           The position to look at
                 * @param   {number}                            duration          The duration of the tween
                 * @param   {DG.Tweening.AxisConstraint}        axisConstraint    Eventual axis constraint for the rotation
                 * @param   {?UnityEngine.Vector3}              up                The vector that defines in which direction up is (default: Vector3.up)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOLookAt: function (target, towards, duration, axisConstraint, up) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOLookAt", this ); }

                    if (axisConstraint === void 0) { axisConstraint = 0; }
                    if (up === void 0) { up = null; }
                    var t = DG.Tweening.Core.Extensions.SetSpecialStartupMode(DG.Tweening.Core.TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions), DG.Tweening.DOTween.To$9(function () {
                        return target.rotation;
                    }, Bridge.fn.cacheBind(target, target.MoveRotation), towards.$clone(), duration), target), DG.Tweening.Core.Enums.SpecialStartupMode.SetLookAt);
                    t.plugOptions.axisConstraint = axisConstraint;
                    t.plugOptions.up = (pc.Vec3.equals( up, null )) ? pc.Vec3.UP.clone() : System.Nullable.getValue(up);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOLookAt:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOJump:static start.*/
                /**
                 * Tweens a Rigidbody's position to the given value, while also applying a jump effect along the Y axis.
                 Returns a Sequence instead of a Tweener.
                 Also stores the Rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}    target       
                 * @param   {UnityEngine.Vector3}      endValue     The end value to reach
                 * @param   {number}                   jumpPower    Power of the jump (the max height of the jump is represented by this plus the final Y offset)
                 * @param   {number}                   numJumps     Total number of jumps
                 * @param   {number}                   duration     The duration of the tween
                 * @param   {boolean}                  snapping     If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Sequence}
                 */
                DOJump: function (target, endValue, jumpPower, numJumps, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOJump", this ); }

                    if (snapping === void 0) { snapping = false; }
                    if (numJumps < 1) {
                        numJumps = 1;
                    }
                    var startPosY = 0;
                    var offsetY = -1;
                    var offsetYSet = false;
                    var s = DG.Tweening.DOTween.Sequence();
                    var yTween = DG.Tweening.TweenSettingsExtensions.OnStart(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetRelative(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( 0, jumpPower, 0 ), duration / (Bridge.Int.mul(numJumps, 2))), DG.Tweening.AxisConstraint.Y, snapping), DG.Tweening.Ease.OutQuad)), Bridge.Int.mul(numJumps, 2), DG.Tweening.LoopType.Yoyo), function () {
                        startPosY = target.position.y;
                    });
                    DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( endValue.x, 0, 0 ), duration), DG.Tweening.AxisConstraint.X, snapping), DG.Tweening.Ease.Linear)), DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( 0, 0, endValue.z ), duration), DG.Tweening.AxisConstraint.Z, snapping), DG.Tweening.Ease.Linear)), yTween), target), DG.Tweening.DOTween.defaultEaseType);
                    DG.Tweening.TweenSettingsExtensions.OnUpdate(DG.Tweening.Tween, yTween, function () {
                        if (!offsetYSet) {
                            offsetYSet = true;
                            offsetY = s.isRelative ? endValue.y : endValue.y - startPosY;
                        }
                        var pos = target.position.$clone();
                        pos.y += DG.Tweening.DOVirtual.EasedValue(0, offsetY, DG.Tweening.TweenExtensions.ElapsedPercentage(yTween), DG.Tweening.Ease.OutQuad);
                        target.MovePosition(pos);
                    });
                    return s;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOJump:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOPath:static start.*/
                /**
                 * Tweens a Rigidbody's position through the given path waypoints, using the chosen path algorithm.
                 Also stores the Rigidbody as the tween's target so it can be used for filtered operations.
                 <p>NOTE: to tween a rigidbody correctly it should be set to kinematic at least while being tweened.</p><p>BEWARE: doesn't work on Windows Phone store (waiting for Unity to fix their own bug).
                 If you plan to publish there you should use a regular transform.DOPath.</p>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target        
                 * @param   {Array.<UnityEngine.Vector3>}       path          The waypoints to go through
                 * @param   {number}                            duration      The duration of the tween
                 * @param   {DG.Tweening.PathType}              pathType      The type of path: Linear (straight path), CatmullRom (curved CatmullRom path) or CubicBezier (curved with control points)
                 * @param   {DG.Tweening.PathMode}              pathMode      The path mode: 3D, side-scroller 2D, top-down 2D
                 * @param   {number}                            resolution    The resolution of the path (useless in case of Linear paths): higher resolutions make for more detailed curved paths but are more expensive.
                 Defaults to 10, but a value of 5 is usually enough if you don't have dramatic long curves between waypoints
                 * @param   {?UnityEngine.Color}                gizmoColor    The color of the path (shown when gizmos are active in the Play panel and the tween is running)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPath: function (target, path, duration, pathType, pathMode, resolution, gizmoColor) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOPath", this ); }

                    if (pathType === void 0) { pathType = 0; }
                    if (pathMode === void 0) { pathMode = 1; }
                    if (resolution === void 0) { resolution = 10; }
                    if (gizmoColor === void 0) { gizmoColor = null; }
                    if (resolution < 1) {
                        resolution = 1;
                    }
                    var t = DG.Tweening.TweenSettingsExtensions.SetUpdate$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new DG.Tweening.Plugins.Core.PathCore.Path.$ctor1(pathType, path, resolution, System.Nullable.lift1("$clone", gizmoColor)), duration), target), DG.Tweening.UpdateType.Fixed);

                    t.plugOptions.isRigidbody = true;
                    t.plugOptions.mode = pathMode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOPath:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOPath$1:static start.*/
                DOPath$1: function (target, path, duration, pathMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOPath$1", this ); }

                    if (pathMode === void 0) { pathMode = 1; }
                    var t = DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), path, duration), target);

                    t.plugOptions.isRigidbody = true;
                    t.plugOptions.mode = pathMode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOPath$1:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOLocalPath:static start.*/
                /**
                 * Tweens a Rigidbody's localPosition through the given path waypoints, using the chosen path algorithm.
                 Also stores the Rigidbody as the tween's target so it can be used for filtered operations
                 <p>NOTE: to tween a rigidbody correctly it should be set to kinematic at least while being tweened.</p><p>BEWARE: doesn't work on Windows Phone store (waiting for Unity to fix their own bug).
                 If you plan to publish there you should use a regular transform.DOLocalPath.</p>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target        
                 * @param   {Array.<UnityEngine.Vector3>}       path          The waypoint to go through
                 * @param   {number}                            duration      The duration of the tween
                 * @param   {DG.Tweening.PathType}              pathType      The type of path: Linear (straight path), CatmullRom (curved CatmullRom path) or CubicBezier (curved with control points)
                 * @param   {DG.Tweening.PathMode}              pathMode      The path mode: 3D, side-scroller 2D, top-down 2D
                 * @param   {number}                            resolution    The resolution of the path: higher resolutions make for more detailed curved paths but are more expensive.
                 Defaults to 10, but a value of 5 is usually enough if you don't have dramatic long curves between waypoints
                 * @param   {?UnityEngine.Color}                gizmoColor    The color of the path (shown when gizmos are active in the Play panel and the tween is running)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOLocalPath: function (target, path, duration, pathType, pathMode, resolution, gizmoColor) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOLocalPath", this ); }

                    if (pathType === void 0) { pathType = 0; }
                    if (pathMode === void 0) { pathMode = 1; }
                    if (resolution === void 0) { resolution = 10; }
                    if (gizmoColor === void 0) { gizmoColor = null; }
                    if (resolution < 1) {
                        resolution = 1;
                    }
                    var trans = target.transform;
                    var t = DG.Tweening.TweenSettingsExtensions.SetUpdate$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return trans.localPosition;
                    }, function (x) {
                        target.MovePosition(UnityEngine.Component.op_Equality(trans.parent, null) ? x.$clone() : trans.parent.TransformPoint$1(x));
                    }, new DG.Tweening.Plugins.Core.PathCore.Path.$ctor1(pathType, path, resolution, System.Nullable.lift1("$clone", gizmoColor)), duration), target), DG.Tweening.UpdateType.Fixed);

                    t.plugOptions.isRigidbody = true;
                    t.plugOptions.mode = pathMode;
                    t.plugOptions.useLocalPosition = true;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOLocalPath:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOLocalPath$1:static start.*/
                DOLocalPath$1: function (target, path, duration, pathMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOLocalPath$1", this ); }

                    if (pathMode === void 0) { pathMode = 1; }
                    var trans = target.transform;
                    var t = DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return trans.localPosition;
                    }, function (x) {
                        target.MovePosition(UnityEngine.Component.op_Equality(trans.parent, null) ? x.$clone() : trans.parent.TransformPoint$1(x));
                    }, path, duration), target);

                    t.plugOptions.isRigidbody = true;
                    t.plugOptions.mode = pathMode;
                    t.plugOptions.useLocalPosition = true;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOLocalPath$1:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModulePhysics end.*/

    /*DG.Tweening.DOTweenModulePhysics2D start.*/
    Bridge.define("DG.Tweening.DOTweenModulePhysics2D", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModulePhysics2D.DOMove:static start.*/
                /**
                 * Tweens a Rigidbody2D's position to the given value.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}           target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMove: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOMove", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOMove:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOMoveX:static start.*/
                /**
                 * Tweens a Rigidbody2D's X position to the given value.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}           target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMoveX: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOMoveX", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec2( endValue, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.X, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOMoveX:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOMoveY:static start.*/
                /**
                 * Tweens a Rigidbody2D's Y position to the given value.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}           target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMoveY: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOMoveY", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec2( 0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.Y, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOMoveY:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DORotate:static start.*/
                /**
                 * Tweens a Rigidbody2D's rotation to the given value.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}           target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DORotate: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DORotate", this ); }

                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.rotation;
                    }, Bridge.fn.cacheBind(target, target.MoveRotation), endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DORotate:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOJump:static start.*/
                /**
                 * Tweens a Rigidbody2D's position to the given value, while also applying a jump effect along the Y axis.
                 Returns a Sequence instead of a Tweener.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations.
                 <p>IMPORTANT: a rigidbody2D can't be animated in a jump arc using MovePosition, so the tween will directly set the position</p>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}    target       
                 * @param   {UnityEngine.Vector2}        endValue     The end value to reach
                 * @param   {number}                     jumpPower    Power of the jump (the max height of the jump is represented by this plus the final Y offset)
                 * @param   {number}                     numJumps     Total number of jumps
                 * @param   {number}                     duration     The duration of the tween
                 * @param   {boolean}                    snapping     If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Sequence}
                 */
                DOJump: function (target, endValue, jumpPower, numJumps, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOJump", this ); }

                    if (snapping === void 0) { snapping = false; }
                    if (numJumps < 1) {
                        numJumps = 1;
                    }
                    var startPosY = 0;
                    var offsetY = -1;
                    var offsetYSet = false;
                    var s = DG.Tweening.DOTween.Sequence();
                    var yTween = DG.Tweening.TweenSettingsExtensions.OnStart(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetRelative(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, function (x) {
                        target.position = x.$clone();
                    }, new pc.Vec2( 0, jumpPower ), duration / (Bridge.Int.mul(numJumps, 2))), DG.Tweening.AxisConstraint.Y, snapping), DG.Tweening.Ease.OutQuad)), Bridge.Int.mul(numJumps, 2), DG.Tweening.LoopType.Yoyo), function () {
                        startPosY = target.position.y;
                    });
                    DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, function (x) {
                        target.position = x.$clone();
                    }, new pc.Vec2( endValue.x, 0 ), duration), DG.Tweening.AxisConstraint.X, snapping), DG.Tweening.Ease.Linear)), yTween), target), DG.Tweening.DOTween.defaultEaseType);
                    DG.Tweening.TweenSettingsExtensions.OnUpdate(DG.Tweening.Tween, yTween, function () {
                        if (!offsetYSet) {
                            offsetYSet = true;
                            offsetY = s.isRelative ? endValue.y : endValue.y - startPosY;
                        }
                        var pos = UnityEngine.Vector3.FromVector2(target.position.$clone());
                        pos.y += DG.Tweening.DOVirtual.EasedValue(0, offsetY, DG.Tweening.TweenExtensions.ElapsedPercentage(yTween), DG.Tweening.Ease.OutQuad);
                        target.MovePosition$1(pos);
                    });
                    return s;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOJump:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOPath:static start.*/
                /**
                 * Tweens a Rigidbody2D's position through the given path waypoints, using the chosen path algorithm.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations.
                 <p>NOTE: to tween a Rigidbody2D correctly it should be set to kinematic at least while being tweened.</p><p>BEWARE: doesn't work on Windows Phone store (waiting for Unity to fix their own bug).
                 If you plan to publish there you should use a regular transform.DOPath.</p>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}           target        
                 * @param   {Array.<UnityEngine.Vector2>}       path          The waypoints to go through
                 * @param   {number}                            duration      The duration of the tween
                 * @param   {DG.Tweening.PathType}              pathType      The type of path: Linear (straight path), CatmullRom (curved CatmullRom path) or CubicBezier (curved with control points)
                 * @param   {DG.Tweening.PathMode}              pathMode      The path mode: 3D, side-scroller 2D, top-down 2D
                 * @param   {number}                            resolution    The resolution of the path (useless in case of Linear paths): higher resolutions make for more detailed curved paths but are more expensive.
                 Defaults to 10, but a value of 5 is usually enough if you don't have dramatic long curves between waypoints
                 * @param   {?UnityEngine.Color}                gizmoColor    The color of the path (shown when gizmos are active in the Play panel and the tween is running)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPath: function (target, path, duration, pathType, pathMode, resolution, gizmoColor) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOPath", this ); }

                    if (pathType === void 0) { pathType = 0; }
                    if (pathMode === void 0) { pathMode = 1; }
                    if (resolution === void 0) { resolution = 10; }
                    if (gizmoColor === void 0) { gizmoColor = null; }
                    if (resolution < 1) {
                        resolution = 1;
                    }
                    var len = path.length;
                    var path3D = System.Array.init(len, function (){
                        return new UnityEngine.Vector3();
                    }, UnityEngine.Vector3);
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        path3D[i] = UnityEngine.Vector3.FromVector2(path[i].$clone());
                    }
                    var t = DG.Tweening.TweenSettingsExtensions.SetUpdate$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return UnityEngine.Vector3.FromVector2(target.position);
                    }, function (x) {
                        target.MovePosition$1(x);
                    }, new DG.Tweening.Plugins.Core.PathCore.Path.$ctor1(pathType, path3D, resolution, System.Nullable.lift1("$clone", gizmoColor)), duration), target), DG.Tweening.UpdateType.Fixed);

                    t.plugOptions.isRigidbody2D = true;
                    t.plugOptions.mode = pathMode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOPath:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOPath$1:static start.*/
                DOPath$1: function (target, path, duration, pathMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOPath$1", this ); }

                    if (pathMode === void 0) { pathMode = 1; }
                    var t = DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return UnityEngine.Vector3.FromVector2(target.position);
                    }, function (x) {
                        target.MovePosition$1(x);
                    }, path, duration), target);

                    t.plugOptions.isRigidbody2D = true;
                    t.plugOptions.mode = pathMode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOPath$1:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOLocalPath:static start.*/
                /**
                 * Tweens a Rigidbody2D's localPosition through the given path waypoints, using the chosen path algorithm.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations
                 <p>NOTE: to tween a Rigidbody2D correctly it should be set to kinematic at least while being tweened.</p><p>BEWARE: doesn't work on Windows Phone store (waiting for Unity to fix their own bug).
                 If you plan to publish there you should use a regular transform.DOLocalPath.</p>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}           target        
                 * @param   {Array.<UnityEngine.Vector2>}       path          The waypoint to go through
                 * @param   {number}                            duration      The duration of the tween
                 * @param   {DG.Tweening.PathType}              pathType      The type of path: Linear (straight path), CatmullRom (curved CatmullRom path) or CubicBezier (curved with control points)
                 * @param   {DG.Tweening.PathMode}              pathMode      The path mode: 3D, side-scroller 2D, top-down 2D
                 * @param   {number}                            resolution    The resolution of the path: higher resolutions make for more detailed curved paths but are more expensive.
                 Defaults to 10, but a value of 5 is usually enough if you don't have dramatic long curves between waypoints
                 * @param   {?UnityEngine.Color}                gizmoColor    The color of the path (shown when gizmos are active in the Play panel and the tween is running)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOLocalPath: function (target, path, duration, pathType, pathMode, resolution, gizmoColor) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOLocalPath", this ); }

                    if (pathType === void 0) { pathType = 0; }
                    if (pathMode === void 0) { pathMode = 1; }
                    if (resolution === void 0) { resolution = 10; }
                    if (gizmoColor === void 0) { gizmoColor = null; }
                    if (resolution < 1) {
                        resolution = 1;
                    }
                    var len = path.length;
                    var path3D = System.Array.init(len, function (){
                        return new UnityEngine.Vector3();
                    }, UnityEngine.Vector3);
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        path3D[i] = UnityEngine.Vector3.FromVector2(path[i].$clone());
                    }
                    var trans = target.transform;
                    var t = DG.Tweening.TweenSettingsExtensions.SetUpdate$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return trans.localPosition;
                    }, function (x) {
                        target.MovePosition$1(UnityEngine.Component.op_Equality(trans.parent, null) ? x.$clone() : trans.parent.TransformPoint$1(x));
                    }, new DG.Tweening.Plugins.Core.PathCore.Path.$ctor1(pathType, path3D, resolution, System.Nullable.lift1("$clone", gizmoColor)), duration), target), DG.Tweening.UpdateType.Fixed);

                    t.plugOptions.isRigidbody2D = true;
                    t.plugOptions.mode = pathMode;
                    t.plugOptions.useLocalPosition = true;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOLocalPath:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOLocalPath$1:static start.*/
                DOLocalPath$1: function (target, path, duration, pathMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOLocalPath$1", this ); }

                    if (pathMode === void 0) { pathMode = 1; }
                    var trans = target.transform;
                    var t = DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return trans.localPosition;
                    }, function (x) {
                        target.MovePosition$1(UnityEngine.Component.op_Equality(trans.parent, null) ? x.$clone() : trans.parent.TransformPoint$1(x));
                    }, path, duration), target);

                    t.plugOptions.isRigidbody2D = true;
                    t.plugOptions.mode = pathMode;
                    t.plugOptions.useLocalPosition = true;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOLocalPath$1:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModulePhysics2D end.*/

    /*DG.Tweening.DOTweenModuleSprite start.*/
    Bridge.define("DG.Tweening.DOTweenModuleSprite", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleSprite.DOColor:static start.*/
                /**
                 * Tweens a SpriteRenderer's color to the given value.
                 Also stores the spriteRenderer as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleSprite
                 * @memberof DG.Tweening.DOTweenModuleSprite
                 * @param   {UnityEngine.SpriteRenderer}        target      
                 * @param   {UnityEngine.Color}                 endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOColor: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleSprite#DOColor", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleSprite.DOColor:static end.*/

                /*DG.Tweening.DOTweenModuleSprite.DOFade:static start.*/
                /**
                 * Tweens a Material's alpha color to the given value.
                 Also stores the spriteRenderer as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleSprite
                 * @memberof DG.Tweening.DOTweenModuleSprite
                 * @param   {UnityEngine.SpriteRenderer}        target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleSprite#DOFade", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleSprite.DOFade:static end.*/

                /*DG.Tweening.DOTweenModuleSprite.DOGradientColor:static start.*/
                /**
                 * Tweens a SpriteRenderer's color using the given gradient
                 (NOTE 1: only uses the colors of the gradient, not the alphas - NOTE 2: creates a Sequence, not a Tweener).
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleSprite
                 * @memberof DG.Tweening.DOTweenModuleSprite
                 * @param   {UnityEngine.SpriteRenderer}    target      
                 * @param   {pc.ColorGradient}              gradient    The gradient to use
                 * @param   {number}                        duration    The duration of the tween
                 * @return  {DG.Tweening.Sequence}
                 */
                DOGradientColor: function (target, gradient, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleSprite#DOGradientColor", this ); }

                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0) {
                            target.color = c.color.$clone();
                            continue;
                        }
                        var colorDuration = i === ((len - 1) | 0) ? duration - DG.Tweening.TweenExtensions.Duration(s, false) : duration * (i === 0 ? c.time : c.time - colors[((i - 1) | 0)].time);
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.DOTweenModuleSprite.DOColor(target, c.color.$clone(), colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleSprite.DOGradientColor:static end.*/

                /*DG.Tweening.DOTweenModuleSprite.DOBlendableColor:static start.*/
                /**
                 * Tweens a SpriteRenderer's color to the given value,
                 in a way that allows other DOBlendableColor tweens to work together on the same target,
                 instead than fight each other as multiple DOColor would do.
                 Also stores the SpriteRenderer as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleSprite
                 * @memberof DG.Tweening.DOTweenModuleSprite
                 * @param   {UnityEngine.SpriteRenderer}    target      
                 * @param   {UnityEngine.Color}             endValue    The value to tween to
                 * @param   {number}                        duration    The duration of the tween
                 * @return  {DG.Tweening.Tweener}
                 */
                DOBlendableColor: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleSprite#DOBlendableColor", this ); }

                    var $t;
                    endValue = ($t = target.color, new pc.Color( endValue.r - $t.r, endValue.g - $t.g, endValue.b - $t.b, endValue.a - $t.a ));
                    var to = new pc.Color( 0, 0, 0, 0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var diff = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + diff.$clone().r, $t1.g + diff.$clone().g, $t1.b + diff.$clone().b, $t1.a + diff.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleSprite.DOBlendableColor:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleSprite end.*/

    /*DG.Tweening.DOTweenModuleUI start.*/
    Bridge.define("DG.Tweening.DOTweenModuleUI", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUI.DOFade:static start.*/
                /**
                 * Tweens a CanvasGroup's alpha color to the given value.
                 Also stores the canvasGroup as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.CanvasGroup}           target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade", this ); }

                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.alpha;
                    }, function (x) {
                        target.alpha = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$1:static start.*/
                /**
                 * Tweens an Graphic's alpha color to the given value.
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Graphic}            target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade$1: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade$1", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$2:static start.*/
                /**
                 * Tweens an Image's alpha color to the given value.
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Image}              target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade$2: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade$2", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$2:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$3:static start.*/
                /**
                 * Tweens a Outline's effectColor alpha to the given value.
                 Also stores the Outline as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Outline}            target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade$3: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade$3", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.effectColor;
                    }, function (x) {
                        target.effectColor = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$3:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$4:static start.*/
                /**
                 * Tweens a Text's alpha color to the given value.
                 Also stores the Text as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Text}               target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade$4: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade$4", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$4:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor:static start.*/
                /**
                 * Tweens an Graphic's color to the given value.
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Graphic}            target      
                 * @param   {UnityEngine.Color}                 endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOColor: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOColor", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor$1:static start.*/
                /**
                 * Tweens an Image's color to the given value.
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Image}              target      
                 * @param   {UnityEngine.Color}                 endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOColor$1: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOColor$1", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor$2:static start.*/
                /**
                 * Tweens a Outline's effectColor to the given value.
                 Also stores the Outline as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Outline}            target      
                 * @param   {UnityEngine.Color}                 endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOColor$2: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOColor$2", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.effectColor;
                    }, function (x) {
                        target.effectColor = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor$2:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor$3:static start.*/
                /**
                 * Tweens a Text's color to the given value.
                 Also stores the Text as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Text}               target      
                 * @param   {UnityEngine.Color}                 endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOColor$3: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOColor$3", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor$3:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFillAmount:static start.*/
                /**
                 * Tweens an Image's fillAmount to the given value.
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Image}              target      
                 * @param   {number}                            endValue    The end value to reach (0 to 1)
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFillAmount: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFillAmount", this ); }

                    if (endValue > 1) {
                        endValue = 1;
                    } else {
                        if (endValue < 0) {
                            endValue = 0;
                        }
                    }
                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.fillAmount;
                    }, function (x) {
                        target.fillAmount = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFillAmount:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOGradientColor:static start.*/
                /**
                 * Tweens an Image's colors using the given gradient
                 (NOTE 1: only uses the colors of the gradient, not the alphas - NOTE 2: creates a Sequence, not a Tweener).
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Image}    target      
                 * @param   {pc.ColorGradient}        gradient    The gradient to use
                 * @param   {number}                  duration    The duration of the tween
                 * @return  {DG.Tweening.Sequence}
                 */
                DOGradientColor: function (target, gradient, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOGradientColor", this ); }

                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0) {
                            target.color = c.color.$clone();
                            continue;
                        }
                        var colorDuration = i === ((len - 1) | 0) ? duration - DG.Tweening.TweenExtensions.Duration(s, false) : duration * (i === 0 ? c.time : c.time - colors[((i - 1) | 0)].time);
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.DOTweenModuleUI.DOColor$1(target, c.color.$clone(), colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUI.DOGradientColor:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFlexibleSize:static start.*/
                /**
                 * Tweens an LayoutElement's flexibleWidth/Height to the given value.
                 Also stores the LayoutElement as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.LayoutElement}      target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFlexibleSize: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFlexibleSize", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.flexibleWidth, target.flexibleHeight );
                    }, function (x) {
                        target.flexibleWidth = x.x;
                        target.flexibleHeight = x.y;
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFlexibleSize:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOMinSize:static start.*/
                /**
                 * Tweens an LayoutElement's minWidth/Height to the given value.
                 Also stores the LayoutElement as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.LayoutElement}      target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMinSize: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOMinSize", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.minWidth, target.minHeight );
                    }, function (x) {
                        target.minWidth = x.x;
                        target.minHeight = x.y;
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOMinSize:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPreferredSize:static start.*/
                /**
                 * Tweens an LayoutElement's preferredWidth/Height to the given value.
                 Also stores the LayoutElement as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.LayoutElement}      target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPreferredSize: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPreferredSize", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.preferredWidth, target.preferredHeight );
                    }, function (x) {
                        target.preferredWidth = x.x;
                        target.preferredHeight = x.y;
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPreferredSize:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOScale:static start.*/
                /**
                 * Tweens a Outline's effectDistance to the given value.
                 Also stores the Outline as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Outline}            target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOScale: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOScale", this ); }

                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.effectDistance;
                    }, function (x) {
                        target.effectDistance = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOScale:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPos: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosX:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition X to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPosX: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPosX", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( endValue, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.X, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosX:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosY:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition Y to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPosY: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPosY", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( 0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.Y, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosY:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3D:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition3D to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector3}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPos3D: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos3D", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$13(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3D:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DX:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition3D X to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPos3DX: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos3DX", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, new pc.Vec3( endValue, 0, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.X, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DX:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DY:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition3D Y to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPos3DY: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos3DY", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, new pc.Vec3( 0, endValue, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.Y, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DY:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DZ:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition3D Z to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPos3DZ: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos3DZ", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, new pc.Vec3( 0, 0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.Z, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DZ:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorMax:static start.*/
                /**
                 * Tweens a RectTransform's anchorMax to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorMax: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorMax", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchorMax;
                    }, function (x) {
                        target.anchorMax = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorMax:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorMin:static start.*/
                /**
                 * Tweens a RectTransform's anchorMin to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorMin: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorMin", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchorMin;
                    }, function (x) {
                        target.anchorMin = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorMin:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPivot:static start.*/
                /**
                 * Tweens a RectTransform's pivot to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPivot: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPivot", this ); }

                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.pivot;
                    }, function (x) {
                        target.pivot = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPivot:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPivotX:static start.*/
                /**
                 * Tweens a RectTransform's pivot X to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPivotX: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPivotX", this ); }

                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.pivot;
                    }, function (x) {
                        target.pivot = x.$clone();
                    }, new pc.Vec2( endValue, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.X), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPivotX:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPivotY:static start.*/
                /**
                 * Tweens a RectTransform's pivot Y to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPivotY: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPivotY", this ); }

                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.pivot;
                    }, function (x) {
                        target.pivot = x.$clone();
                    }, new pc.Vec2( 0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.Y), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPivotY:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOSizeDelta:static start.*/
                /**
                 * Tweens a RectTransform's sizeDelta to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOSizeDelta: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOSizeDelta", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.sizeDelta;
                    }, function (x) {
                        target.sizeDelta = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOSizeDelta:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPunchAnchorPos:static start.*/
                /**
                 * Punches a RectTransform's anchoredPosition towards the given direction and then back to the starting one
                 as if it was connected to the starting position via an elastic.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}    target        
                 * @param   {UnityEngine.Vector2}          punch         The direction and strength of the punch (added to the RectTransform's current position)
                 * @param   {number}                       duration      The duration of the tween
                 * @param   {number}                       vibrato       Indicates how much will the punch vibrate
                 * @param   {number}                       elasticity    Represents how much (0 to 1) the vector will go beyond the starting position when bouncing backwards.
                 1 creates a full oscillation between the punch direction and the opposite direction,
                 while 0 oscillates only between the punch and the start position
                 * @param   {boolean}                      snapping      If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Tweener}
                 */
                DOPunchAnchorPos: function (target, punch, duration, vibrato, elasticity, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPunchAnchorPos", this ); }

                    if (vibrato === void 0) { vibrato = 10; }
                    if (elasticity === void 0) { elasticity = 1.0; }
                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetOptions$11(DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.DOTween.Punch(function () {
                        return UnityEngine.Vector3.FromVector2(target.anchoredPosition);
                    }, function (x) {
                        target.anchoredPosition = UnityEngine.Vector2.FromVector3(x.$clone());
                    }, UnityEngine.Vector3.FromVector2(punch.$clone()), duration, vibrato, elasticity), target), snapping);
                },
                /*DG.Tweening.DOTweenModuleUI.DOPunchAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos:static start.*/
                /**
                 * Shakes a RectTransform's anchoredPosition with the given values.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}          target            
                 * @param   {number}                             duration          The duration of the tween
                 * @param   {number}                             strength          The shake strength
                 * @param   {number}                             vibrato           Indicates how much will the shake vibrate
                 * @param   {number}                             randomness        Indicates how much the shake will be random (0 to 180 - values higher than 90 kind of suck, so beware). 
                 Setting it to 0 will shake along a single direction.
                 * @param   {boolean}                            snapping          If TRUE the tween will smoothly snap all values to integers
                 * @param   {boolean}                            fadeOut           If TRUE the shake will automatically fadeOut smoothly within the tween's duration, otherwise it will not
                 * @param   {DG.Tweening.ShakeRandomnessMode}    randomnessMode    Randomness mode
                 * @return  {DG.Tweening.Tweener}
                 */
                DOShakeAnchorPos: function (target, duration, strength, vibrato, randomness, snapping, fadeOut, randomnessMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOShakeAnchorPos", this ); }

                    if (strength === void 0) { strength = 100.0; }
                    if (vibrato === void 0) { vibrato = 10; }
                    if (randomness === void 0) { randomness = 90.0; }
                    if (snapping === void 0) { snapping = false; }
                    if (fadeOut === void 0) { fadeOut = true; }
                    if (randomnessMode === void 0) { randomnessMode = 0; }
                    return DG.Tweening.TweenSettingsExtensions.SetOptions$11(DG.Tweening.Core.Extensions.SetSpecialStartupMode(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.DOTween.Shake(function () {
                        return UnityEngine.Vector3.FromVector2(target.anchoredPosition);
                    }, function (x) {
                        target.anchoredPosition = UnityEngine.Vector2.FromVector3(x.$clone());
                    }, duration, strength, vibrato, randomness, true, fadeOut, randomnessMode), target), DG.Tweening.Core.Enums.SpecialStartupMode.SetShake), snapping);
                },
                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos$1:static start.*/
                /**
                 * Shakes a RectTransform's anchoredPosition with the given values.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}          target            
                 * @param   {number}                             duration          The duration of the tween
                 * @param   {UnityEngine.Vector2}                strength          The shake strength on each axis
                 * @param   {number}                             vibrato           Indicates how much will the shake vibrate
                 * @param   {number}                             randomness        Indicates how much the shake will be random (0 to 180 - values higher than 90 kind of suck, so beware). 
                 Setting it to 0 will shake along a single direction.
                 * @param   {boolean}                            snapping          If TRUE the tween will smoothly snap all values to integers
                 * @param   {boolean}                            fadeOut           If TRUE the shake will automatically fadeOut smoothly within the tween's duration, otherwise it will not
                 * @param   {DG.Tweening.ShakeRandomnessMode}    randomnessMode    Randomness mode
                 * @return  {DG.Tweening.Tweener}
                 */
                DOShakeAnchorPos$1: function (target, duration, strength, vibrato, randomness, snapping, fadeOut, randomnessMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOShakeAnchorPos$1", this ); }

                    if (vibrato === void 0) { vibrato = 10; }
                    if (randomness === void 0) { randomness = 90.0; }
                    if (snapping === void 0) { snapping = false; }
                    if (fadeOut === void 0) { fadeOut = true; }
                    if (randomnessMode === void 0) { randomnessMode = 0; }
                    return DG.Tweening.TweenSettingsExtensions.SetOptions$11(DG.Tweening.Core.Extensions.SetSpecialStartupMode(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.DOTween.Shake$1(function () {
                        return UnityEngine.Vector3.FromVector2(target.anchoredPosition);
                    }, function (x) {
                        target.anchoredPosition = UnityEngine.Vector2.FromVector3(x.$clone());
                    }, duration, UnityEngine.Vector3.FromVector2(strength.$clone()), vibrato, randomness, fadeOut, randomnessMode), target), DG.Tweening.Core.Enums.SpecialStartupMode.SetShake), snapping);
                },
                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOJumpAnchorPos:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition to the given value, while also applying a jump effect along the Y axis.
                 Returns a Sequence instead of a Tweener.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}    target       
                 * @param   {UnityEngine.Vector2}          endValue     The end value to reach
                 * @param   {number}                       jumpPower    Power of the jump (the max height of the jump is represented by this plus the final Y offset)
                 * @param   {number}                       numJumps     Total number of jumps
                 * @param   {number}                       duration     The duration of the tween
                 * @param   {boolean}                      snapping     If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Sequence}
                 */
                DOJumpAnchorPos: function (target, endValue, jumpPower, numJumps, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOJumpAnchorPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    if (numJumps < 1) {
                        numJumps = 1;
                    }
                    var startPosY = 0;
                    var offsetY = -1;
                    var offsetYSet = false;

                    // Separate Y Tween so we can elaborate elapsedPercentage on that insted of on the Sequence
                    // (in case users add a delay or other elements to the Sequence)
                    var s = DG.Tweening.DOTween.Sequence();
                    var yTween = DG.Tweening.TweenSettingsExtensions.OnStart(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetRelative(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( 0, jumpPower ), duration / (Bridge.Int.mul(numJumps, 2))), DG.Tweening.AxisConstraint.Y, snapping), DG.Tweening.Ease.OutQuad)), Bridge.Int.mul(numJumps, 2), DG.Tweening.LoopType.Yoyo), function () {
                        startPosY = target.anchoredPosition.y;
                    });
                    DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( endValue.x, 0 ), duration), DG.Tweening.AxisConstraint.X, snapping), DG.Tweening.Ease.Linear)), yTween), target), DG.Tweening.DOTween.defaultEaseType);
                    DG.Tweening.TweenSettingsExtensions.OnUpdate(DG.Tweening.Sequence, s, function () {
                        if (!offsetYSet) {
                            offsetYSet = true;
                            offsetY = s.isRelative ? endValue.y : endValue.y - startPosY;
                        }
                        var pos = target.anchoredPosition.$clone();
                        pos.y += DG.Tweening.DOVirtual.EasedValue(0, offsetY, DG.Tweening.TweenExtensions.ElapsedDirectionalPercentage(s), DG.Tweening.Ease.OutQuad);
                        target.anchoredPosition = pos.$clone();
                    });
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUI.DOJumpAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DONormalizedPos:static start.*/
                /**
                 * Tweens a ScrollRect's horizontal/verticalNormalizedPosition to the given value.
                 Also stores the ScrollRect as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.ScrollRect}    target      
                 * @param   {UnityEngine.Vector2}          endValue    The end value to reach
                 * @param   {number}                       duration    The duration of the tween
                 * @param   {boolean}                      snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Tweener}
                 */
                DONormalizedPos: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DONormalizedPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.horizontalNormalizedPosition, target.verticalNormalizedPosition );
                    }, function (x) {
                        target.horizontalNormalizedPosition = x.x;
                        target.verticalNormalizedPosition = x.y;
                    }, endValue.$clone(), duration), snapping), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DONormalizedPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOHorizontalNormalizedPos:static start.*/
                /**
                 * Tweens a ScrollRect's horizontalNormalizedPosition to the given value.
                 Also stores the ScrollRect as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.ScrollRect}    target      
                 * @param   {number}                       endValue    The end value to reach
                 * @param   {number}                       duration    The duration of the tween
                 * @param   {boolean}                      snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Tweener}
                 */
                DOHorizontalNormalizedPos: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOHorizontalNormalizedPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$2(DG.Tweening.DOTween.To$4(function () {
                        return target.horizontalNormalizedPosition;
                    }, function (x) {
                        target.horizontalNormalizedPosition = x;
                    }, endValue, duration), snapping), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOHorizontalNormalizedPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOVerticalNormalizedPos:static start.*/
                /**
                 * Tweens a ScrollRect's verticalNormalizedPosition to the given value.
                 Also stores the ScrollRect as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.ScrollRect}    target      
                 * @param   {number}                       endValue    The end value to reach
                 * @param   {number}                       duration    The duration of the tween
                 * @param   {boolean}                      snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Tweener}
                 */
                DOVerticalNormalizedPos: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOVerticalNormalizedPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$2(DG.Tweening.DOTween.To$4(function () {
                        return target.verticalNormalizedPosition;
                    }, function (x) {
                        target.verticalNormalizedPosition = x;
                    }, endValue, duration), snapping), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOVerticalNormalizedPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOValue:static start.*/
                /**
                 * Tweens a Slider's value to the given value.
                 Also stores the Slider as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Slider}             target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOValue: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOValue", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.value;
                    }, function (x) {
                        target.value = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$2(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOValue:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOCounter:static start.*/
                /**
                 * Tweens a Text's text from one integer to another, with options for thousands separators
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Text}                 target                   
                 * @param   {number}                              fromValue                The value to start from
                 * @param   {number}                              endValue                 The end value to reach
                 * @param   {number}                              duration                 The duration of the tween
                 * @param   {boolean}                             addThousandsSeparator    If TRUE (default) also adds thousands separators
                 * @param   {System.Globalization.CultureInfo}    culture                  The {@link } to use (InvariantCulture if NULL)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOCounter: function (target, fromValue, endValue, duration, addThousandsSeparator, culture) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOCounter", this ); }

                    if (addThousandsSeparator === void 0) { addThousandsSeparator = true; }
                    if (culture === void 0) { culture = null; }
                    var v = fromValue;
                    var cInfo = !addThousandsSeparator ? null : culture || System.Globalization.CultureInfo.invariantCulture;
                    var t = DG.Tweening.DOTween.To$2(function () {
                        return v;
                    }, function (x) {
                        v = x;
                        target.text = addThousandsSeparator ? System.Int32.format(v, "N0", cInfo) : Bridge.toString(v);
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Int32,System.Int32,DG.Tweening.Plugins.Options.NoOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOCounter:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOText:static start.*/
                /**
                 * Tweens a Text's text to the given value.
                 Also stores the Text as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Text}               target             
                 * @param   {string}                            endValue           The end string to tween to
                 * @param   {number}                            duration           The duration of the tween
                 * @param   {boolean}                           richTextEnabled    If TRUE (default), rich text will be interpreted correctly while animated,
                 otherwise all tags will be considered as normal text
                 * @param   {DG.Tweening.ScrambleMode}          scrambleMode       The type of scramble mode to use, if any
                 * @param   {string}                            scrambleChars      A string containing the characters to use for scrambling.
                 Use as many characters as possible (minimum 10) because DOTween uses a fast scramble mode which gives better results with more characters.
                 Leave it to NULL (default) to use default ones
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOText: function (target, endValue, duration, richTextEnabled, scrambleMode, scrambleChars) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOText", this ); }

                    if (richTextEnabled === void 0) { richTextEnabled = true; }
                    if (scrambleMode === void 0) { scrambleMode = 0; }
                    if (scrambleChars === void 0) { scrambleChars = null; }
                    if (endValue == null) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogWarning("You can't pass a NULL string to DOText: an empty string will be used instead to avoid errors");
                        }
                        endValue = "";
                    }
                    var t = DG.Tweening.DOTween.To$5(function () {
                        return target.text;
                    }, function (x) {
                        target.text = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$3(t, richTextEnabled, scrambleMode, scrambleChars), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOText:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor:static start.*/
                /**
                 * Tweens a Graphic's color to the given value,
                 in a way that allows other DOBlendableColor tweens to work together on the same target,
                 instead than fight each other as multiple DOColor would do.
                 Also stores the Graphic as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Graphic}    target      
                 * @param   {UnityEngine.Color}         endValue    The value to tween to
                 * @param   {number}                    duration    The duration of the tween
                 * @return  {DG.Tweening.Tweener}
                 */
                DOBlendableColor: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOBlendableColor", this ); }

                    var $t;
                    endValue = ($t = target.color, new pc.Color( endValue.r - $t.r, endValue.g - $t.g, endValue.b - $t.b, endValue.a - $t.a ));
                    var to = new pc.Color( 0, 0, 0, 0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var diff = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + diff.$clone().r, $t1.g + diff.$clone().g, $t1.b + diff.$clone().b, $t1.a + diff.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$1:static start.*/
                /**
                 * Tweens a Image's color to the given value,
                 in a way that allows other DOBlendableColor tweens to work together on the same target,
                 instead than fight each other as multiple DOColor would do.
                 Also stores the Image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Image}    target      
                 * @param   {UnityEngine.Color}       endValue    The value to tween to
                 * @param   {number}                  duration    The duration of the tween
                 * @return  {DG.Tweening.Tweener}
                 */
                DOBlendableColor$1: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOBlendableColor$1", this ); }

                    var $t;
                    endValue = ($t = target.color, new pc.Color( endValue.r - $t.r, endValue.g - $t.g, endValue.b - $t.b, endValue.a - $t.a ));
                    var to = new pc.Color( 0, 0, 0, 0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var diff = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + diff.$clone().r, $t1.g + diff.$clone().g, $t1.b + diff.$clone().b, $t1.a + diff.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$2:static start.*/
                /**
                 * Tweens a Text's color BY the given value,
                 in a way that allows other DOBlendableColor tweens to work together on the same target,
                 instead than fight each other as multiple DOColor would do.
                 Also stores the Text as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Text}    target      
                 * @param   {UnityEngine.Color}      endValue    The value to tween to
                 * @param   {number}                 duration    The duration of the tween
                 * @return  {DG.Tweening.Tweener}
                 */
                DOBlendableColor$2: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOBlendableColor$2", this ); }

                    var $t;
                    endValue = ($t = target.color, new pc.Color( endValue.r - $t.r, endValue.g - $t.g, endValue.b - $t.b, endValue.a - $t.a ));
                    var to = new pc.Color( 0, 0, 0, 0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var diff = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + diff.$clone().r, $t1.g + diff.$clone().g, $t1.b + diff.$clone().b, $t1.a + diff.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$2:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOShapeCircle:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition so that it draws a circle around the given center.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations.<p />
                 IMPORTANT: SetFrom(value) requires a {@link } instead of a float, where the X property represents the "from degrees value"
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target             
                 * @param   {UnityEngine.Vector2}               center             Circle-center/pivot around which to rotate (in UI anchoredPosition coordinates)
                 * @param   {number}                            endValueDegrees    The end value degrees to reach (to rotate counter-clockwise pass a negative value)
                 * @param   {number}                            duration           The duration of the tween
                 * @param   {boolean}                           relativeCenter     If TRUE the {@link } coordinates will be considered as relative to the target's current anchoredPosition
                 * @param   {boolean}                           snapping           If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOShapeCircle: function (target, center, endValueDegrees, duration, relativeCenter, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOShapeCircle", this ); }

                    if (relativeCenter === void 0) { relativeCenter = false; }
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To(UnityEngine.Vector2, UnityEngine.Vector2, DG.Tweening.Plugins.CircleOptions, DG.Tweening.Plugins.CirclePlugin.Get(), function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, center.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$7(t, endValueDegrees, relativeCenter, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOShapeCircle:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUI end.*/

    /*DG.Tweening.DOTweenModuleUI+Utils start.*/
    Bridge.define("DG.Tweening.DOTweenModuleUI.Utils", {
        $kind: 1002,
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUI+Utils.SwitchToRectTransform:static start.*/
                /**
                 * Converts the anchoredPosition of the first RectTransform to the second RectTransform,
                 taking into consideration offset, anchors and pivot, and returns the new anchoredPosition
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI.Utils
                 * @memberof DG.Tweening.DOTweenModuleUI.Utils
                 * @param   {UnityEngine.RectTransform}    from    
                 * @param   {UnityEngine.RectTransform}    to
                 * @return  {UnityEngine.Vector2}
                 */
                SwitchToRectTransform: function (from, to) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI.Utils#SwitchToRectTransform", this ); }

                    var localPoint = { v : new UnityEngine.Vector2() };
                    var fromPivotDerivedOffset = new pc.Vec2( from.rect.width * 0.5 + from.rect.xMin, from.rect.height * 0.5 + from.rect.yMin );
                    var screenP = UnityEngine.RectTransformUtility.WorldToScreenPoint(null, from.position);
                    screenP = screenP.$clone().add( fromPivotDerivedOffset.$clone() );
                    UnityEngine.RectTransformUtility.ScreenPointToLocalPointInRectangle(to, screenP, null, localPoint);
                    var pivotDerivedOffset = new pc.Vec2( to.rect.width * 0.5 + to.rect.xMin, to.rect.height * 0.5 + to.rect.yMin );
                    return to.anchoredPosition.$clone().add( localPoint.v ).sub( pivotDerivedOffset );
                },
                /*DG.Tweening.DOTweenModuleUI+Utils.SwitchToRectTransform:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUI+Utils end.*/

    /*DG.Tweening.DOTweenModuleUnityVersion start.*/
    /** @namespace DG.Tweening */

    /**
     * Shortcuts/functions that are not strictly related to specific Modules
     but are available only on some Unity versions
     *
     * @static
     * @abstract
     * @public
     * @class DG.Tweening.DOTweenModuleUnityVersion
     */
    Bridge.define("DG.Tweening.DOTweenModuleUnityVersion", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor:static start.*/
                /**
                 * Tweens a Material's color using the given gradient
                 (NOTE 1: only uses the colors of the gradient, not the alphas - NOTE 2: creates a Sequence, not a Tweener).
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {UnityEngine.Material}    target      
                 * @param   {pc.ColorGradient}        gradient    The gradient to use
                 * @param   {number}                  duration    The duration of the tween
                 * @return  {DG.Tweening.Sequence}
                 */
                DOGradientColor: function (target, gradient, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#DOGradientColor", this ); }

                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0) {
                            target.color = c.color.$clone();
                            continue;
                        }
                        var colorDuration = i === ((len - 1) | 0) ? duration - DG.Tweening.TweenExtensions.Duration(s, false) : duration * (i === 0 ? c.time : c.time - colors[((i - 1) | 0)].time);
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.ShortcutExtensions.DOColor$3(target, c.color.$clone(), colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor$1:static start.*/
                /**
                 * Tweens a Material's named color property using the given gradient
                 (NOTE 1: only uses the colors of the gradient, not the alphas - NOTE 2: creates a Sequence, not a Tweener).
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {UnityEngine.Material}    target      
                 * @param   {pc.ColorGradient}        gradient    The gradient to use
                 * @param   {string}                  property    The name of the material property to tween (like _Tint or _SpecColor)
                 * @param   {number}                  duration    The duration of the tween
                 * @return  {DG.Tweening.Sequence}
                 */
                DOGradientColor$1: function (target, gradient, property, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#DOGradientColor$1", this ); }

                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0) {
                            target.SetColor$1(property, c.color);
                            continue;
                        }
                        var colorDuration = i === ((len - 1) | 0) ? duration - DG.Tweening.TweenExtensions.Duration(s, false) : duration * (i === 0 ? c.time : c.time - colors[((i - 1) | 0)].time);
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.ShortcutExtensions.DOColor$4(target, c.color.$clone(), property, colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor$1:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForCompletion:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed or complete.
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForCompletion(true);</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForCompletion: function (t, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForCompletion", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForCompletion(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForCompletion:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForRewind:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed or rewinded.
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForRewind();</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForRewind: function (t, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForRewind", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForRewind(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForRewind:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForKill:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed.
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForKill();</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForKill: function (t, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForKill", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForKill(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForKill:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForElapsedLoops:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed or has gone through the given amount of loops.
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForElapsedLoops(2);</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {number}                                elapsedLoops                    Elapsed loops to wait for
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForElapsedLoops: function (t, elapsedLoops, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForElapsedLoops", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops(t, elapsedLoops);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForElapsedLoops:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForPosition:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed
                 or has reached the given time position (loops included, delays excluded).
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForPosition(2.5f);</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {number}                                position                        Position (loops included, delays excluded) to wait for
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForPosition: function (t, position, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForPosition", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForPosition(t, position);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForPosition:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForStart:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed or started
                 (meaning when the tween is set in a playing state the first time, after any eventual delay).
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForStart();</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForStart: function (t, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForStart", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForStart(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForStart:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.DOOffset:static start.*/
                /**
                 * Tweens a Material's named texture offset property with the given ID to the given value.
                 Also stores the material as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {UnityEngine.Material}              target        
                 * @param   {UnityEngine.Vector2}               endValue      The end value to reach
                 * @param   {number}                            propertyID    The ID of the material property to tween (also called nameID in Unity's manual)
                 * @param   {number}                            duration      The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOOffset: function (target, endValue, propertyID, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#DOOffset", this ); }

                    if (!target.HasProperty(propertyID)) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogMissingMaterialProperty(propertyID);
                        }
                        return null;
                    }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.GetTextureOffset(propertyID);
                    }, function (x) {
                        target.SetTextureOffset(propertyID, x);
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOOffset:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.DOTiling:static start.*/
                /**
                 * Tweens a Material's named texture scale property with the given ID to the given value.
                 Also stores the material as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {UnityEngine.Material}              target        
                 * @param   {UnityEngine.Vector2}               endValue      The end value to reach
                 * @param   {number}                            propertyID    The ID of the material property to tween (also called nameID in Unity's manual)
                 * @param   {number}                            duration      The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOTiling: function (target, endValue, propertyID, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#DOTiling", this ); }

                    if (!target.HasProperty(propertyID)) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogMissingMaterialProperty(propertyID);
                        }
                        return null;
                    }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.GetTextureScale(propertyID);
                    }, function (x) {
                        target.SetTextureScale(propertyID, x);
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOTiling:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUnityVersion end.*/

    /*DG.Tweening.DOTweenModuleUtils start.*/
    /**
     * Utility functions that deal with available Modules.
     Modules defines:
     - DOTAUDIO
     - DOTPHYSICS
     - DOTPHYSICS2D
     - DOTSPRITE
     - DOTUI
     Extra defines set and used for implementation of external assets:
     - DOTWEEN_TMP ► TextMesh Pro
     - DOTWEEN_TK2D ► 2D Toolkit
     *
     * @static
     * @abstract
     * @public
     * @class DG.Tweening.DOTweenModuleUtils
     */
    Bridge.define("DG.Tweening.DOTweenModuleUtils", {
        statics: {
            fields: {
                _initialized: false
            },
            methods: {
                /*DG.Tweening.DOTweenModuleUtils.Init:static start.*/
                /**
                 * Called via Reflection by DOTweenComponent on Awake
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUtils
                 * @memberof DG.Tweening.DOTweenModuleUtils
                 * @return  {void}
                 */
                Init: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils#Init", this ); }

                    if (DG.Tweening.DOTweenModuleUtils._initialized) {
                        return;
                    }

                    DG.Tweening.DOTweenModuleUtils._initialized = true;
                    DG.Tweening.Core.DOTweenExternalCommand.addSetOrientationOnPath(DG.Tweening.DOTweenModuleUtils.Physics.SetOrientationOnPath);

                },
                /*DG.Tweening.DOTweenModuleUtils.Init:static end.*/

                /*DG.Tweening.DOTweenModuleUtils.Preserver:static start.*/
                Preserver: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils#Preserver", this ); }

                    var loadedAssemblies = System.AppDomain.getAssemblies();
                    var mi = Bridge.Reflection.getMembers(UnityEngine.MonoBehaviour, 8, 284, "Stub");
                },
                /*DG.Tweening.DOTweenModuleUtils.Preserver:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUtils end.*/

    /*DG.Tweening.DOTweenModuleUtils+Physics start.*/
    Bridge.define("DG.Tweening.DOTweenModuleUtils.Physics", {
        $kind: 1002,
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUtils+Physics.SetOrientationOnPath:static start.*/
                SetOrientationOnPath: function (options, t, newRot, trans) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils.Physics#SetOrientationOnPath", this ); }

                    if (options.isRigidbody) {
                        Bridge.cast(t.target, UnityEngine.Rigidbody).rotation = newRot.$clone();
                    } else {
                        trans.rotation = newRot.$clone();
                    }
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.SetOrientationOnPath:static end.*/

                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody2D:static start.*/
                HasRigidbody2D: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils.Physics#HasRigidbody2D", this ); }

                    return UnityEngine.Component.op_Inequality(target.GetComponent(UnityEngine.Rigidbody2D), null);
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody2D:static end.*/

                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody:static start.*/
                HasRigidbody: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils.Physics#HasRigidbody", this ); }

                    return UnityEngine.Component.op_Inequality(target.GetComponent(UnityEngine.Rigidbody), null);
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody:static end.*/

                /*DG.Tweening.DOTweenModuleUtils+Physics.CreateDOTweenPathTween:static start.*/
                CreateDOTweenPathTween: function (target, tweenRigidbody, isLocal, path, duration, pathMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils.Physics#CreateDOTweenPathTween", this ); }

                    var t = null;
                    var rBodyFoundAndTweened = false;
                    if (tweenRigidbody) {
                        var rBody = target.GetComponent(UnityEngine.Rigidbody);
                        if (UnityEngine.Component.op_Inequality(rBody, null)) {
                            rBodyFoundAndTweened = true;
                            t = isLocal ? DG.Tweening.DOTweenModulePhysics.DOLocalPath$1(rBody, path, duration, pathMode) : DG.Tweening.DOTweenModulePhysics.DOPath$1(rBody, path, duration, pathMode);
                        }
                    }
                    if (!rBodyFoundAndTweened && tweenRigidbody) {
                        var rBody2D = target.GetComponent(UnityEngine.Rigidbody2D);
                        if (UnityEngine.Component.op_Inequality(rBody2D, null)) {
                            rBodyFoundAndTweened = true;
                            t = isLocal ? DG.Tweening.DOTweenModulePhysics2D.DOLocalPath$1(rBody2D, path, duration, pathMode) : DG.Tweening.DOTweenModulePhysics2D.DOPath$1(rBody2D, path, duration, pathMode);
                        }
                    }
                    if (!rBodyFoundAndTweened) {
                        t = isLocal ? DG.Tweening.ShortcutExtensions.DOLocalPath(target.transform, path, duration, pathMode) : DG.Tweening.ShortcutExtensions.DOPath(target.transform, path, duration, pathMode);
                    }
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.CreateDOTweenPathTween:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUtils+Physics end.*/

    /*GameManager start.*/
    Bridge.define("GameManager", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                TUTORIAL2_BALANCE_THRESHOLD: 0,
                UPGRADE_BUTTON_BALANCE_THRESHOLD: 0,
                Instance: null
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "GameManager#init", this ); }

                    this.TUTORIAL2_BALANCE_THRESHOLD = 20;
                    this.UPGRADE_BUTTON_BALANCE_THRESHOLD = 100;
                }
            }
        },
        fields: {
            tutorialObject: null,
            tutorialAnimator: null,
            idleTimeForTutorial: 0,
            upgradeButton: null,
            upgradeButtonGameObject: null,
            secondRequiredButton: null,
            packShotObject: null,
            moneyController: null,
            buildManager: null,
            tutorialShown: false,
            tutorial2Shown: false,
            upgradeButtonEnabled: false,
            userIdle: false,
            idleTimer: 0,
            secondBuildingActive: false,
            userClickedButton: false,
            isUpgradeClicked: false,
            isSecondButtonClicked: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "GameManager#init", this ); }

                this.idleTimeForTutorial = 3.0;
                this.tutorialShown = false;
                this.tutorial2Shown = false;
                this.upgradeButtonEnabled = false;
                this.userIdle = true;
                this.idleTimer = 0.0;
                this.secondBuildingActive = false;
                this.userClickedButton = false;
                this.isUpgradeClicked = false;
                this.isSecondButtonClicked = false;
            }
        },
        methods: {
            /*GameManager.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "GameManager#Awake", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(GameManager.Instance, null)) {
                    GameManager.Instance = this;
                    UnityEngine.Object.DontDestroyOnLoad(this.gameObject);
                } else {
                    UnityEngine.MonoBehaviour.Destroy(this.gameObject);
                }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.upgradeButton, null)) {
                    this.upgradeButton.gameObject.SetActive(false);
                    this.upgradeButton.onClick.AddListener(Bridge.fn.cacheBind(this, this.OnUpgradeButtonClicked));
                }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.secondRequiredButton, null)) {
                    this.secondRequiredButton.onClick.AddListener(Bridge.fn.cacheBind(this, this.OnSecondButtonClicked));
                }

                if (UnityEngine.GameObject.op_Inequality(this.packShotObject, null)) {
                    this.packShotObject.SetActive(false);
                }

                if (UnityEngine.GameObject.op_Inequality(this.tutorialObject, null)) {
                    this.tutorialObject.SetActive(false);
                }
            },
            /*GameManager.Awake end.*/

            /*GameManager.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "GameManager#Start", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(this.moneyController, null)) {
                    this.moneyController = MoneyController.Instance;
                }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.moneyController, null)) {
                    this.moneyController.addOnBalanceChanged(Bridge.fn.cacheBind(this, this.CheckBalanceThresholds));
                    this.moneyController.addOnBuildSuccess(Bridge.fn.cacheBind(this, this.CheckSecondBuilding));
                }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.moneyController, null) && this.moneyController.GetBalance() >= GameManager.UPGRADE_BUTTON_BALANCE_THRESHOLD) {
                    this.EnableUpgradeButton();
                }

                this.CheckForActiveBuildings();
            },
            /*GameManager.Start end.*/

            /*GameManager.OnDestroy start.*/
            OnDestroy: function () {
if ( TRACE ) { TRACE( "GameManager#OnDestroy", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.moneyController, null)) {
                    this.moneyController.removeOnBalanceChanged(Bridge.fn.cacheBind(this, this.CheckBalanceThresholds));
                    this.moneyController.removeOnBuildSuccess(Bridge.fn.cacheBind(this, this.CheckSecondBuilding));
                }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.upgradeButton, null)) {
                    this.upgradeButton.onClick.RemoveListener(Bridge.fn.cacheBind(this, this.OnUpgradeButtonClicked));
                }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.secondRequiredButton, null)) {
                    this.secondRequiredButton.onClick.RemoveListener(Bridge.fn.cacheBind(this, this.OnSecondButtonClicked));
                }
            },
            /*GameManager.OnDestroy end.*/

            /*GameManager.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "GameManager#Update", this ); }

                if (UnityEngine.Input.GetMouseButtonDown(0) || UnityEngine.Input.GetMouseButtonDown(1) || UnityEngine.Input.anyKeyDown) {
                    this.ResetIdleTimer();

                    if (UnityEngine.MonoBehaviour.op_Inequality(UnityEngine.EventSystems.EventSystem.current, null) && UnityEngine.GameObject.op_Inequality(UnityEngine.EventSystems.EventSystem.current.currentSelectedGameObject, null) && UnityEngine.MonoBehaviour.op_Inequality(UnityEngine.EventSystems.EventSystem.current.currentSelectedGameObject.GetComponent(UnityEngine.UI.Button), null)) {
                        this.userClickedButton = true;
                    }
                } else {
                    this.idleTimer += UnityEngine.Time.deltaTime;

                    if (this.idleTimer >= this.idleTimeForTutorial && !this.tutorialShown && !this.secondBuildingActive && !this.userClickedButton) {
                        this.ShowFirstTutorial();
                    }
                }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.moneyController, null) && this.moneyController.GetBalance() >= GameManager.UPGRADE_BUTTON_BALANCE_THRESHOLD && !this.upgradeButtonEnabled) {
                    this.EnableUpgradeButton();
                }
            },
            /*GameManager.Update end.*/

            /*GameManager.RegisterUserActivity start.*/
            RegisterUserActivity: function () {
if ( TRACE ) { TRACE( "GameManager#RegisterUserActivity", this ); }

                this.ResetIdleTimer();
            },
            /*GameManager.RegisterUserActivity end.*/

            /*GameManager.ResetIdleTimer start.*/
            ResetIdleTimer: function () {
if ( TRACE ) { TRACE( "GameManager#ResetIdleTimer", this ); }

                this.userIdle = false;
                this.idleTimer = 0.0;

                if (UnityEngine.GameObject.op_Inequality(this.tutorialObject, null) && this.tutorialObject.activeSelf) {
                    this.tutorialObject.SetActive(false);
                }

                this.StartCoroutine$1(this.ResetIdleState());
            },
            /*GameManager.ResetIdleTimer end.*/

            /*GameManager.ResetIdleState start.*/
            ResetIdleState: function () {
if ( TRACE ) { TRACE( "GameManager#ResetIdleState", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(0.5);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    this.userIdle = true;

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*GameManager.ResetIdleState end.*/

            /*GameManager.ShowFirstTutorial start.*/
            ShowFirstTutorial: function () {
if ( TRACE ) { TRACE( "GameManager#ShowFirstTutorial", this ); }

                if (UnityEngine.GameObject.op_Inequality(this.tutorialObject, null) && UnityEngine.Component.op_Inequality(this.tutorialAnimator, null)) {
                    this.tutorialObject.SetActive(true);
                    this.tutorialAnimator.Play$2("Tutorial");
                    this.tutorialShown = true;
                }
            },
            /*GameManager.ShowFirstTutorial end.*/

            /*GameManager.ShowSecondTutorial start.*/
            ShowSecondTutorial: function () {
if ( TRACE ) { TRACE( "GameManager#ShowSecondTutorial", this ); }

                if (UnityEngine.GameObject.op_Inequality(this.tutorialObject, null) && UnityEngine.Component.op_Inequality(this.tutorialAnimator, null) && !this.tutorial2Shown && !this.secondBuildingActive) {
                    this.tutorialObject.SetActive(true);
                    this.tutorialAnimator.Play$2("Tutorial2");
                    this.tutorial2Shown = true;
                }
            },
            /*GameManager.ShowSecondTutorial end.*/

            /*GameManager.CheckBalanceThresholds start.*/
            CheckBalanceThresholds: function (newBalance) {
if ( TRACE ) { TRACE( "GameManager#CheckBalanceThresholds", this ); }

                if (newBalance >= GameManager.TUTORIAL2_BALANCE_THRESHOLD && !this.tutorial2Shown && !this.secondBuildingActive) {
                    this.ShowSecondTutorial();
                }

                if (newBalance >= GameManager.UPGRADE_BUTTON_BALANCE_THRESHOLD && !this.upgradeButtonEnabled) {
                    this.EnableUpgradeButton();
                }
            },
            /*GameManager.CheckBalanceThresholds end.*/

            /*GameManager.CheckSecondBuilding start.*/
            CheckSecondBuilding: function (builtObject) {
if ( TRACE ) { TRACE( "GameManager#CheckSecondBuilding", this ); }

                if (UnityEngine.GameObject.op_Inequality(builtObject, null) && UnityEngine.MonoBehaviour.op_Inequality(builtObject.GetComponent(Build), null)) {
                    this.secondBuildingActive = true;
                }
            },
            /*GameManager.CheckSecondBuilding end.*/

            /*GameManager.EnableUpgradeButton start.*/
            EnableUpgradeButton: function () {
if ( TRACE ) { TRACE( "GameManager#EnableUpgradeButton", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.upgradeButton, null)) {
                    this.upgradeButton.gameObject.SetActive(true);
                    this.upgradeButtonGameObject.SetActive(true);
                    this.upgradeButtonEnabled = true;
                }
            },
            /*GameManager.EnableUpgradeButton end.*/

            /*GameManager.OnUpgradeButtonClicked start.*/
            OnUpgradeButtonClicked: function () {
if ( TRACE ) { TRACE( "GameManager#OnUpgradeButtonClicked", this ); }

                this.isUpgradeClicked = true;
                this.userClickedButton = true;
                this.CheckPackShotActivation();
            },
            /*GameManager.OnUpgradeButtonClicked end.*/

            /*GameManager.OnSecondButtonClicked start.*/
            OnSecondButtonClicked: function () {
if ( TRACE ) { TRACE( "GameManager#OnSecondButtonClicked", this ); }

                this.isSecondButtonClicked = true;
                this.userClickedButton = true;
                this.CheckPackShotActivation();
            },
            /*GameManager.OnSecondButtonClicked end.*/

            /*GameManager.CheckPackShotActivation start.*/
            CheckPackShotActivation: function () {
if ( TRACE ) { TRACE( "GameManager#CheckPackShotActivation", this ); }

                if (this.isUpgradeClicked && this.isSecondButtonClicked && UnityEngine.GameObject.op_Inequality(this.packShotObject, null)) {
                    this.packShotObject.SetActive(true);
                }
            },
            /*GameManager.CheckPackShotActivation end.*/

            /*GameManager.CheckForActiveBuildings start.*/
            CheckForActiveBuildings: function () {
if ( TRACE ) { TRACE( "GameManager#CheckForActiveBuildings", this ); }

                var $t;
                if (UnityEngine.MonoBehaviour.op_Inequality(this.buildManager, null)) {
                    var anyBuildingActive = false;

                    var builds = UnityEngine.GameObject.FindGameObjectsWithTag("Build");
                    $t = Bridge.getEnumerator(builds);
                    try {
                        while ($t.moveNext()) {
                            var build = $t.Current;
                            if (build.activeSelf) {
                                anyBuildingActive = true;
                                break;
                            }
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }

                    if (anyBuildingActive) {
                        this.tutorialShown = true;
                    }
                } else {
                    this.buildManager = UnityEngine.Object.FindObjectOfType(BuildManager);
                }
            },
            /*GameManager.CheckForActiveBuildings end.*/


        }
    });
    /*GameManager end.*/

    /*Garage start.*/
    Bridge.define("Garage", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            chopper: null
        },
        methods: {
            /*Garage.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "Garage#OnEnable", this ); }

                this.Invoke("OnChoper", 1.0);
            },
            /*Garage.OnEnable end.*/

            /*Garage.OnChoper start.*/
            OnChoper: function () {
if ( TRACE ) { TRACE( "Garage#OnChoper", this ); }

                this.chopper.gameObject.SetActive(true);
            },
            /*Garage.OnChoper end.*/


        }
    });
    /*Garage end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    Bridge.define("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", {
        inherits: [UnityEngine.MonoBehaviour]
    });
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*MovePoint start.*/
    Bridge.define("MovePoint", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            delay: 0,
            moveDuration: 0
        },
        props: {
            Delay: {
                get: function () {
if ( TRACE ) { TRACE( "MovePoint#Delay#get", this ); }

                    return this.delay;
                }
            },
            MoveDuration: {
                get: function () {
if ( TRACE ) { TRACE( "MovePoint#MoveDuration#get", this ); }

                    return this.moveDuration;
                }
            }
        }
    });
    /*MovePoint end.*/

    /*MoneyBalance start.*/
    Bridge.define("MoneyBalance", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _text: null,
            _money: 0,
            moneyTween: null
        },
        events: {
            OnMoneyChanged: null
        },
        props: {
            Money: {
                get: function () {
if ( TRACE ) { TRACE( "MoneyBalance#Money#get", this ); }

                    return this._money;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "MoneyBalance#init", this ); }

                this._money = 15;
            }
        },
        methods: {
            /*MoneyBalance.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "MoneyBalance#Start", this ); }

                this.UpdateText(this._money);
            },
            /*MoneyBalance.Start end.*/

            /*MoneyBalance.SetMoney start.*/
            SetMoney: function (money) {
if ( TRACE ) { TRACE( "MoneyBalance#SetMoney", this ); }

                this.AnimateMoneyChange(((this._money + money) | 0));
            },
            /*MoneyBalance.SetMoney end.*/

            /*MoneyBalance.TakeMoney start.*/
            TakeMoney: function (money) {
if ( TRACE ) { TRACE( "MoneyBalance#TakeMoney", this ); }

                this.AnimateMoneyChange(((this._money - money) | 0));
            },
            /*MoneyBalance.TakeMoney end.*/

            /*MoneyBalance.UpdateText start.*/
            UpdateText: function (value) {
if ( TRACE ) { TRACE( "MoneyBalance#UpdateText", this ); }

                this._text.text = Bridge.toString(value);
            },
            /*MoneyBalance.UpdateText end.*/

            /*MoneyBalance.AnimateMoneyChange start.*/
            AnimateMoneyChange: function (targetValue, duration) {
if ( TRACE ) { TRACE( "MoneyBalance#AnimateMoneyChange", this ); }

                if (duration === void 0) { duration = 0.5; }
                if (this.moneyTween != null && DG.Tweening.TweenExtensions.IsActive(this.moneyTween)) {
                    DG.Tweening.TweenExtensions.Kill(this.moneyTween);
                }

                var startValue = this._money;

                this.moneyTween = DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(System.Int32,System.Int32,DG.Tweening.Plugins.Options.NoOptions), DG.Tweening.DOTween.To$2(function () {
                    return startValue;
                }, Bridge.fn.bind(this, function (x) {
                    startValue = x;
                    this.UpdateText(x);
                }), targetValue, duration), Bridge.fn.bind(this, function () {
                    this._money = targetValue;
                    this.UpdateText(this._money);
                    !Bridge.staticEquals(this.OnMoneyChanged, null) ? this.OnMoneyChanged(this._money) : null;
                }));

                // Вызываем событие немедленно, чтобы обеспечить реакцию на изменение баланса
                !Bridge.staticEquals(this.OnMoneyChanged, null) ? this.OnMoneyChanged(targetValue) : null;
            },
            /*MoneyBalance.AnimateMoneyChange end.*/


        }
    });
    /*MoneyBalance end.*/

    /*MoneyController start.*/
    Bridge.define("MoneyController", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                _instance: null
            },
            props: {
                Instance: {
                    get: function () {
if ( TRACE ) { TRACE( "MoneyController#Instance#get", this ); }

                        return MoneyController._instance;
                    }
                }
            }
        },
        fields: {
            _moneyBalance: null,
            _moneyFlyAnimation: null
        },
        events: {
            OnBuildSuccess: null,
            OnBalanceChanged: null
        },
        methods: {
            /*MoneyController.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "MoneyController#Awake", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(MoneyController._instance, null) && UnityEngine.MonoBehaviour.op_Inequality(MoneyController._instance, this)) {
                    UnityEngine.MonoBehaviour.Destroy(this.gameObject);
                    return;
                }

                MoneyController._instance = this;
            },
            /*MoneyController.Awake end.*/

            /*MoneyController.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "MoneyController#Start", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(this._moneyBalance, null)) {
                    UnityEngine.Debug.Log$1("MoneyController: \u041d\u0430\u0447\u0430\u043b\u044c\u043d\u044b\u0439 \u0431\u0430\u043b\u0430\u043d\u0441: " + this._moneyBalance.Money);
                    this._moneyBalance.addOnMoneyChanged(Bridge.fn.cacheBind(this, this.HandleMoneyChanged));
                }
            },
            /*MoneyController.Start end.*/

            /*MoneyController.OnDestroy start.*/
            OnDestroy: function () {
if ( TRACE ) { TRACE( "MoneyController#OnDestroy", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(this._moneyBalance, null)) {
                    this._moneyBalance.removeOnMoneyChanged(Bridge.fn.cacheBind(this, this.HandleMoneyChanged));
                }
            },
            /*MoneyController.OnDestroy end.*/

            /*MoneyController.HandleMoneyChanged start.*/
            HandleMoneyChanged: function (newBalance) {
if ( TRACE ) { TRACE( "MoneyController#HandleMoneyChanged", this ); }

                var $t;
                UnityEngine.MonoBehaviour.op_Inequality(($t = SimpleAudioManager.Instance), null) ? $t.PlayProgressBarSound() : null;
                !Bridge.staticEquals(this.OnBalanceChanged, null) ? this.OnBalanceChanged(newBalance) : null;
            },
            /*MoneyController.HandleMoneyChanged end.*/

            /*MoneyController.TryBuild start.*/
            TryBuild: function (price, buildObject) {
if ( TRACE ) { TRACE( "MoneyController#TryBuild", this ); }

                if (this._moneyBalance.Money >= price) {
                    UnityEngine.MonoBehaviour.op_Inequality(this._moneyFlyAnimation, null) ? this._moneyFlyAnimation.FlyCoinsFromUIToWorld(buildObject.transform.position) : null;
                    this._moneyBalance.TakeMoney(price);
                    buildObject.SetActive(true);
                    !Bridge.staticEquals(this.OnBuildSuccess, null) ? this.OnBuildSuccess(buildObject) : null;
                } else {
                    // TODO: показывать сообщение о недостаточных средствах
                }
            },
            /*MoneyController.TryBuild end.*/

            /*MoneyController.ChangeBalance start.*/
            ChangeBalance: function (money, isSpending) {
if ( TRACE ) { TRACE( "MoneyController#ChangeBalance", this ); }

                if (!isSpending) {
                    this._moneyBalance.SetMoney(money);
                } else if (this._moneyBalance.Money >= money) {
                    this._moneyBalance.TakeMoney(money);
                }
            },
            /*MoneyController.ChangeBalance end.*/

            /*MoneyController.ChangeBalance$1 start.*/
            ChangeBalance$1: function (money, isSpending, position) {
if ( TRACE ) { TRACE( "MoneyController#ChangeBalance$1", this ); }

                if (!isSpending) {
                    this._moneyBalance.SetMoney(money);
                } else if (this._moneyBalance.Money >= money) {
                    this._moneyBalance.TakeMoney(money);
                }
            },
            /*MoneyController.ChangeBalance$1 end.*/

            /*MoneyController.ChangeBalanceWithVisual$1 start.*/
            ChangeBalanceWithVisual$1: function (money, worldStartPosition, isSpending) {
if ( TRACE ) { TRACE( "MoneyController#ChangeBalanceWithVisual$1", this ); }

                if (isSpending === void 0) { isSpending = false; }
                if (UnityEngine.MonoBehaviour.op_Inequality(this._moneyFlyAnimation, null)) {
                    this._moneyFlyAnimation.worldStartPoint.position = worldStartPosition.$clone();
                    this._moneyFlyAnimation.FlyCoins();
                }

                this.ChangeBalance(money, isSpending);
            },
            /*MoneyController.ChangeBalanceWithVisual$1 end.*/

            /*MoneyController.ChangeBalanceWithVisual start.*/
            ChangeBalanceWithVisual: function (money, uiStartElement, worldTarget, isSpending) {
if ( TRACE ) { TRACE( "MoneyController#ChangeBalanceWithVisual", this ); }

                if (isSpending === void 0) { isSpending = false; }
                if (UnityEngine.MonoBehaviour.op_Inequality(this._moneyFlyAnimation, null)) {
                    if (isSpending) {
                        this._moneyFlyAnimation.FlyCoins();
                    } else {
                        this._moneyFlyAnimation.FlyCoins();
                    }
                }

                this.ChangeBalance(money, isSpending);
            },
            /*MoneyController.ChangeBalanceWithVisual end.*/

            /*MoneyController.GetBalance start.*/
            GetBalance: function () {
if ( TRACE ) { TRACE( "MoneyController#GetBalance", this ); }

                return UnityEngine.MonoBehaviour.op_Inequality(this._moneyBalance, null) ? this._moneyBalance.Money : 0;
            },
            /*MoneyController.GetBalance end.*/


        },
        overloads: {
            "ChangeBalance(int, bool, Vector3)": "ChangeBalance$1",
            "ChangeBalanceWithVisual(int, Vector3, bool)": "ChangeBalanceWithVisual$1"
        }
    });
    /*MoneyController end.*/

    /*MoneyFlyAnimation start.*/
    Bridge.define("MoneyFlyAnimation", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            moneyPrefab3D: null,
            poolSize: 0,
            minDuration: 0,
            maxDuration: 0,
            spread: 0,
            worldStartPoint: null,
            uiTargetPoint: null,
            mainCamera: null,
            coinPool3D: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "MoneyFlyAnimation#init", this ); }

                this.poolSize = 10;
                this.minDuration = 0.5;
                this.maxDuration = 1.2;
                this.spread = 1.0;
                this.coinPool3D = new (System.Collections.Generic.List$1(UnityEngine.GameObject)).ctor();
            }
        },
        methods: {
            /*MoneyFlyAnimation.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "MoneyFlyAnimation#Awake", this ); }

                this.mainCamera = UnityEngine.Camera.main;
                this.InitPool();
            },
            /*MoneyFlyAnimation.Awake end.*/

            /*MoneyFlyAnimation.InitPool start.*/
            InitPool: function () {
if ( TRACE ) { TRACE( "MoneyFlyAnimation#InitPool", this ); }

                for (var i = 0; i < this.poolSize; i = (i + 1) | 0) {
                    var coin = UnityEngine.Object.Instantiate(UnityEngine.GameObject, this.moneyPrefab3D);
                    coin.SetActive(false);
                    this.coinPool3D.add(coin);
                }
            },
            /*MoneyFlyAnimation.InitPool end.*/

            /*MoneyFlyAnimation.FlyCoins start.*/
            FlyCoins: function () {
if ( TRACE ) { TRACE( "MoneyFlyAnimation#FlyCoins", this ); }

                if (UnityEngine.Component.op_Equality(this.worldStartPoint, null) || UnityEngine.Component.op_Equality(this.uiTargetPoint, null)) {
                    UnityEngine.Debug.LogWarning$1("MoneyFlyAnimation: Assign start and target points in inspector.");
                    return;
                }

                this.StartCoroutine$1(this.FlyCoinsFromWorldToUI(this.worldStartPoint.position, this.uiTargetPoint));
            },
            /*MoneyFlyAnimation.FlyCoins end.*/

            /*MoneyFlyAnimation.FlyCoinsFromUIToWorld start.*/
            FlyCoinsFromUIToWorld: function (worldTarget) {
if ( TRACE ) { TRACE( "MoneyFlyAnimation#FlyCoinsFromUIToWorld", this ); }

                if (UnityEngine.Component.op_Equality(this.uiTargetPoint, null)) {
                    UnityEngine.Debug.LogWarning$1("MoneyFlyAnimation: Assign UI target point in inspector.");
                    return;
                }

                this.StartCoroutine$1(this.FlyCoinsFromUIToWorldCoroutine(this.uiTargetPoint, worldTarget));
            },
            /*MoneyFlyAnimation.FlyCoinsFromUIToWorld end.*/

            /*MoneyFlyAnimation.FlyCoinsFromWorldToUI start.*/
            FlyCoinsFromWorldToUI: function (worldStart, uiTarget) {
if ( TRACE ) { TRACE( "MoneyFlyAnimation#FlyCoinsFromWorldToUI", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    targetWorldPos,
                    i,
                    coin,
                    startPos,
                    duration,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    targetWorldPos = this.mainCamera.ScreenToWorldPoint(new pc.Vec3( uiTarget.position.x, uiTarget.position.y, this.mainCamera.nearClipPlane + 5.0 ));

                                        i = 0;
                                        $step = 1;
                                        continue;
                                }
                                case 1: {
                                    if ( i < this.poolSize ) {
                                            $step = 2;
                                            continue;
                                        }
                                    $step = 7;
                                    continue;
                                }
                                case 2: {
                                    coin = { v : this.GetCoinFromPool() };
                                        if (UnityEngine.GameObject.op_Equality(coin.v, null)) {
                                            $step = 3;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 3: {
                                    return false;
                                }
                                case 4: {
                                    startPos = worldStart.$clone().add( UnityEngine.Random.insideUnitSphere.$clone().clone().scale( this.spread ) );
                                        coin.v.transform.position = startPos.$clone();
                                        coin.v.SetActive(true);

                                        duration = UnityEngine.Random.Range$1(this.minDuration, this.maxDuration);
                                        DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOMove(coin.v.transform, targetWorldPos.$clone(), duration), DG.Tweening.Ease.InOutQuad), (function ($me, coin) {
                                            return function () {
                                                coin.v.SetActive(false);
                                            };
                                        })(this, coin));

                                        $enumerator.current = new UnityEngine.WaitForSeconds(0.05);
                                        $step = 5;
                                        return true;
                                }
                                case 5: {
                                    $step = 6;
                                    continue;
                                }
                                case 6: {
                                    i = (i + 1) | 0;
                                    $step = 1;
                                    continue;
                                }
                                case 7: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*MoneyFlyAnimation.FlyCoinsFromWorldToUI end.*/

            /*MoneyFlyAnimation.FlyCoinsFromUIToWorldCoroutine start.*/
            FlyCoinsFromUIToWorldCoroutine: function (uiStart, worldTarget) {
if ( TRACE ) { TRACE( "MoneyFlyAnimation#FlyCoinsFromUIToWorldCoroutine", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    screenPos,
                    startWorldPos,
                    i,
                    coin,
                    startPos,
                    duration,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    screenPos = new pc.Vec3( uiStart.position.x, uiStart.position.y, this.mainCamera.nearClipPlane + 5.0 );
                                        startWorldPos = this.mainCamera.ScreenToWorldPoint(screenPos);

                                        i = 0;
                                        $step = 1;
                                        continue;
                                }
                                case 1: {
                                    if ( i < this.poolSize ) {
                                            $step = 2;
                                            continue;
                                        }
                                    $step = 7;
                                    continue;
                                }
                                case 2: {
                                    coin = { v : this.GetCoinFromPool() };
                                        if (UnityEngine.GameObject.op_Equality(coin.v, null)) {
                                            $step = 3;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 3: {
                                    return false;
                                }
                                case 4: {
                                    startPos = startWorldPos.$clone().add( UnityEngine.Random.insideUnitSphere.$clone().clone().scale( this.spread ) );
                                        coin.v.transform.position = startPos.$clone();
                                        coin.v.SetActive(true);

                                        duration = UnityEngine.Random.Range$1(this.minDuration, this.maxDuration);
                                        DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOMove(coin.v.transform, worldTarget.$clone(), duration), DG.Tweening.Ease.InOutQuad), (function ($me, coin) {
                                            return function () {
                                                coin.v.SetActive(false);
                                            };
                                        })(this, coin));

                                        $enumerator.current = new UnityEngine.WaitForSeconds(0.05);
                                        $step = 5;
                                        return true;
                                }
                                case 5: {
                                    $step = 6;
                                    continue;
                                }
                                case 6: {
                                    i = (i + 1) | 0;
                                    $step = 1;
                                    continue;
                                }
                                case 7: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*MoneyFlyAnimation.FlyCoinsFromUIToWorldCoroutine end.*/

            /*MoneyFlyAnimation.GetCoinFromPool start.*/
            GetCoinFromPool: function () {
if ( TRACE ) { TRACE( "MoneyFlyAnimation#GetCoinFromPool", this ); }

                var $t;
                $t = Bridge.getEnumerator(this.coinPool3D);
                try {
                    while ($t.moveNext()) {
                        var coin = $t.Current;
                        if (!coin.activeInHierarchy) {
                            return coin;
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                return null;
            },
            /*MoneyFlyAnimation.GetCoinFromPool end.*/


        }
    });
    /*MoneyFlyAnimation end.*/

    /*SimpleAudioManager start.*/
    Bridge.define("SimpleAudioManager", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                Instance: null
            }
        },
        fields: {
            progressBarSound: null,
            conveyorAnimationSound: null,
            logLoadSound: null,
            buttonClickSound: null,
            houseAppearSound: null,
            audioSource: null
        },
        methods: {
            /*SimpleAudioManager.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "SimpleAudioManager#Awake", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(SimpleAudioManager.Instance, null)) {
                    SimpleAudioManager.Instance = this;
                    UnityEngine.Object.DontDestroyOnLoad(this.gameObject);
                    this.audioSource = this.gameObject.AddComponent(UnityEngine.AudioSource);
                } else {
                    UnityEngine.MonoBehaviour.Destroy(this.gameObject);
                }
            },
            /*SimpleAudioManager.Awake end.*/

            /*SimpleAudioManager.PlayProgressBarSound start.*/
            PlayProgressBarSound: function () {
if ( TRACE ) { TRACE( "SimpleAudioManager#PlayProgressBarSound", this ); }

                this.PlaySound(this.progressBarSound);
            },
            /*SimpleAudioManager.PlayProgressBarSound end.*/

            /*SimpleAudioManager.PlayConveyorAnimationSound start.*/
            PlayConveyorAnimationSound: function () {
if ( TRACE ) { TRACE( "SimpleAudioManager#PlayConveyorAnimationSound", this ); }

                this.PlaySound(this.conveyorAnimationSound);
            },
            /*SimpleAudioManager.PlayConveyorAnimationSound end.*/

            /*SimpleAudioManager.PlayLogLoadSound start.*/
            PlayLogLoadSound: function () {
if ( TRACE ) { TRACE( "SimpleAudioManager#PlayLogLoadSound", this ); }

                this.PlaySound(this.logLoadSound);
            },
            /*SimpleAudioManager.PlayLogLoadSound end.*/

            /*SimpleAudioManager.PlayButtonClickSound start.*/
            PlayButtonClickSound: function () {
if ( TRACE ) { TRACE( "SimpleAudioManager#PlayButtonClickSound", this ); }

                this.PlaySound(this.buttonClickSound);
            },
            /*SimpleAudioManager.PlayButtonClickSound end.*/

            /*SimpleAudioManager.PlayHouseAppearSound start.*/
            PlayHouseAppearSound: function () {
if ( TRACE ) { TRACE( "SimpleAudioManager#PlayHouseAppearSound", this ); }

                this.PlaySound(this.houseAppearSound);
            },
            /*SimpleAudioManager.PlayHouseAppearSound end.*/

            /*SimpleAudioManager.PlaySound start.*/
            PlaySound: function (clip) {
if ( TRACE ) { TRACE( "SimpleAudioManager#PlaySound", this ); }

                if (clip != null) {
                    this.audioSource.PlayOneShot(clip);
                }
            },
            /*SimpleAudioManager.PlaySound end.*/


        }
    });
    /*SimpleAudioManager end.*/

    /*Tree start.*/
    Bridge.define("Tree", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _material: null,
            _originalColor: null,
            _flashColor: null,
            flashSpeed: 0,
            pauseBetweenFlashes: 0,
            flashCount: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Tree#init", this ); }

                this._originalColor = new UnityEngine.Color();
                this._flashColor = new UnityEngine.Color();
                this._flashColor = new pc.Color( 1, 0, 0, 1 );
                this.flashSpeed = 0.3;
                this.pauseBetweenFlashes = 0.1;
                this.flashCount = 3;
            }
        },
        methods: {
            /*Tree.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "Tree#Start", this ); }

                var renderer = { };
                if (this.TryGetComponent$1(UnityEngine.Renderer, renderer)) {
                    this._material = renderer.v.material;
                    this._originalColor = this._material.color.$clone();
                    this.StartCoroutine$1(this.FlashColorRoutine());
                }
            },
            /*Tree.Start end.*/

            /*Tree.FlashColorRoutine start.*/
            FlashColorRoutine: function () {
if ( TRACE ) { TRACE( "Tree#FlashColorRoutine", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    i,
                    t,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(3.0);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    i = 0;
                                        $step = 2;
                                        continue;
                                }
                                case 2: {
                                    if ( i < this.flashCount ) {
                                            $step = 3;
                                            continue;
                                        }
                                    $step = 15;
                                    continue;
                                }
                                case 3: {
                                    t = 0.0;
                                    $step = 4;
                                    continue;
                                }
                                case 4: {
                                    if ( t < 1.0 ) {
                                            $step = 5;
                                            continue;
                                        } 
                                        $step = 7;
                                        continue;
                                }
                                case 5: {
                                    t += UnityEngine.Time.deltaTime / this.flashSpeed;
                                        this._material.color = pc.Color.lerp( this._originalColor, this._flashColor, t );
                                        $enumerator.current = null;
                                        $step = 6;
                                        return true;
                                }
                                case 6: {
                                    
                                        $step = 4;
                                        continue;
                                }
                                case 7: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(this.pauseBetweenFlashes);
                                        $step = 8;
                                        return true;
                                }
                                case 8: {
                                    t = 0.0;
                                    $step = 9;
                                    continue;
                                }
                                case 9: {
                                    if ( t < 1.0 ) {
                                            $step = 10;
                                            continue;
                                        } 
                                        $step = 12;
                                        continue;
                                }
                                case 10: {
                                    t += UnityEngine.Time.deltaTime / this.flashSpeed;
                                        this._material.color = pc.Color.lerp( this._flashColor, this._originalColor, t );
                                        $enumerator.current = null;
                                        $step = 11;
                                        return true;
                                }
                                case 11: {
                                    
                                        $step = 9;
                                        continue;
                                }
                                case 12: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(this.pauseBetweenFlashes);
                                        $step = 13;
                                        return true;
                                }
                                case 13: {
                                    $step = 14;
                                    continue;
                                }
                                case 14: {
                                    i = (i + 1) | 0;
                                    $step = 2;
                                    continue;
                                }
                                case 15: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Tree.FlashColorRoutine end.*/

            /*Tree.Take start.*/
            Take: function () {
if ( TRACE ) { TRACE( "Tree#Take", this ); }

                UnityEngine.MonoBehaviour.Destroy(this.gameObject);
            },
            /*Tree.Take end.*/


        }
    });
    /*Tree end.*/

    /*Truck start.*/
    Bridge.define("Truck", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            progressBarImage: null,
            _cargoSlots: null,
            _maxCapacity: 0,
            _logLoadSoundName: null,
            _truckFullSoundName: null,
            _playCargoSounds: false,
            _currentCargoCount: 0,
            _isBeingLoadedByChopper: false,
            _firstChopper: null,
            _secondChopper: null
        },
        events: {
            OnTruckFull: null,
            OnCargoChanged: null
        },
        props: {
            IsFull: {
                get: function () {
if ( TRACE ) { TRACE( "Truck#IsFull#get", this ); }

                    return this._currentCargoCount >= this._maxCapacity;
                }
            },
            RemainingCapacity: {
                get: function () {
if ( TRACE ) { TRACE( "Truck#RemainingCapacity#get", this ); }

                    return ((this._maxCapacity - this._currentCargoCount) | 0);
                }
            },
            MaxCapacity: {
                get: function () {
if ( TRACE ) { TRACE( "Truck#MaxCapacity#get", this ); }

                    return this._maxCapacity;
                }
            },
            IsBeingLoadedByChopper: {
                get: function () {
if ( TRACE ) { TRACE( "Truck#IsBeingLoadedByChopper#get", this ); }

                    return this._isBeingLoadedByChopper;
                }
            },
            CurrentCargoCount: {
                get: function () {
if ( TRACE ) { TRACE( "Truck#CurrentCargoCount#get", this ); }

                    return this._currentCargoCount;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Truck#init", this ); }

                this._maxCapacity = 5;
                this._logLoadSoundName = "LogLoaded";
                this._truckFullSoundName = "TruckFull";
                this._playCargoSounds = true;
                this._currentCargoCount = 0;
                this._isBeingLoadedByChopper = false;
            }
        },
        methods: {
            /*Truck.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "Truck#Start", this ); }

                var halfCapacity = Math.floor(this._maxCapacity / 2.0);
                this.LoadLogs(halfCapacity);
                this.UpdateProgressBar();
            },
            /*Truck.Start end.*/

            /*Truck.LoadLog start.*/
            LoadLog: function () {
if ( TRACE ) { TRACE( "Truck#LoadLog", this ); }

                var $t;
                if (this.IsFull) {
                    return false;
                }

                if (this._currentCargoCount < this._cargoSlots.Count) {
                    this._cargoSlots.getItem(this._currentCargoCount).SetActive(true);
                }

                this._currentCargoCount = (this._currentCargoCount + 1) | 0;

                !Bridge.staticEquals(this.OnCargoChanged, null) ? this.OnCargoChanged() : null;
                this.UpdateProgressBar();

                // Звуковые эффекты временно отключены
                //if (_playCargoSounds && AudioManager.Instance != null)
                //{
                //    AudioManager.Instance.PlaySoundAtPosition(_logLoadSoundName, transform.position);
                //}
                UnityEngine.MonoBehaviour.op_Inequality(($t = SimpleAudioManager.Instance), null) ? $t.PlayLogLoadSound() : null;

                if (this.IsFull) {
                    !Bridge.staticEquals(this.OnTruckFull, null) ? this.OnTruckFull() : null;

                    // Звуковые эффекты временно отключены
                    //if (_playCargoSounds && AudioManager.Instance != null)
                    //{
                    //    AudioManager.Instance.PlaySoundAtPosition(_truckFullSoundName, transform.position);
                    //}
                }

                return true;
            },
            /*Truck.LoadLog end.*/

            /*Truck.LoadLogs start.*/
            LoadLogs: function (count) {
if ( TRACE ) { TRACE( "Truck#LoadLogs", this ); }

                var logsLoaded = 0;

                for (var i = 0; i < count; i = (i + 1) | 0) {
                    if (this.LoadLog()) {
                        logsLoaded = (logsLoaded + 1) | 0;
                    } else {
                        break;
                    }
                }

                return logsLoaded;
            },
            /*Truck.LoadLogs end.*/

            /*Truck.LoadLogs$1 start.*/
            LoadLogs$1: function (count, loader) {
if ( TRACE ) { TRACE( "Truck#LoadLogs$1", this ); }

                var isChopper = UnityEngine.MonoBehaviour.op_Inequality(loader.GetComponent(Chopper), null);
                var isForklift = UnityEngine.MonoBehaviour.op_Inequality(loader.GetComponent(Forklift), null);

                if (isForklift && this._isBeingLoadedByChopper) {
                    return 0;
                }

                if (isChopper) {
                    if (UnityEngine.GameObject.op_Equality(this._firstChopper, null)) {
                        this._firstChopper = loader;
                        this._isBeingLoadedByChopper = true;
                    } else if (UnityEngine.GameObject.op_Equality(this._secondChopper, null) && UnityEngine.GameObject.op_Inequality(loader, this._firstChopper)) {
                        this._secondChopper = loader;
                    } else if (UnityEngine.GameObject.op_Inequality(loader, this._firstChopper) && UnityEngine.GameObject.op_Inequality(loader, this._secondChopper)) {
                        return 0;
                    }
                }

                var logsLoaded = this.LoadLogs(count);


                if (this.IsFull) {
                    this.ResetChoppers();
                }

                return logsLoaded;
            },
            /*Truck.LoadLogs$1 end.*/

            /*Truck.ResetChoppers start.*/
            ResetChoppers: function () {
if ( TRACE ) { TRACE( "Truck#ResetChoppers", this ); }

                this._firstChopper = null;
                this._secondChopper = null;
                this._isBeingLoadedByChopper = false;

                if (UnityEngine.MonoBehaviour.op_Inequality(ChopperManager.Instance, null)) {
                    ChopperManager.Instance.ResetTargetTruck();
                }
            },
            /*Truck.ResetChoppers end.*/

            /*Truck.Clear start.*/
            Clear: function () {
if ( TRACE ) { TRACE( "Truck#Clear", this ); }

                var $t;
                $t = Bridge.getEnumerator(this._cargoSlots);
                try {
                    while ($t.moveNext()) {
                        var slot = $t.Current;
                        slot.SetActive(false);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }

                this._currentCargoCount = 0;
                this.ResetChoppers();
                this.UpdateProgressBar();

                if (UnityEngine.MonoBehaviour.op_Inequality(TruckManager.Instance, null)) {
                    TruckManager.Instance.RemoveFullTruck(this);
                }
            },
            /*Truck.Clear end.*/

            /*Truck.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "Truck#OnEnable", this ); }

                this.addOnTruckFull(Bridge.fn.cacheBind(this, this.NotifyTruckManagerOnFull));
            },
            /*Truck.OnEnable end.*/

            /*Truck.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "Truck#OnDisable", this ); }

                this.removeOnTruckFull(Bridge.fn.cacheBind(this, this.NotifyTruckManagerOnFull));
            },
            /*Truck.OnDisable end.*/

            /*Truck.NotifyTruckManagerOnFull start.*/
            NotifyTruckManagerOnFull: function () {
if ( TRACE ) { TRACE( "Truck#NotifyTruckManagerOnFull", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(TruckManager.Instance, null)) {
                    TruckManager.Instance.AddFullTruck(this);
                }
            },
            /*Truck.NotifyTruckManagerOnFull end.*/

            /*Truck.UpdateProgressBar start.*/
            UpdateProgressBar: function () {
if ( TRACE ) { TRACE( "Truck#UpdateProgressBar", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.progressBarImage, null)) {
                    var fillAmount = this._currentCargoCount / this._maxCapacity;
                    this.progressBarImage.fillAmount = fillAmount;
                }
            },
            /*Truck.UpdateProgressBar end.*/


        },
        overloads: {
            "LoadLogs(int, GameObject)": "LoadLogs$1"
        }
    });
    /*Truck end.*/

    /*TruckManager start.*/
    Bridge.define("TruckManager", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                Instance: null
            }
        },
        fields: {
            _trucks: null,
            _unloadPoint: null,
            _sendAllTrucksWhenAllFull: false,
            _fullTrucks: null,
            _areAllTrucksFull: false,
            OnAllTrucksFull: null,
            OnTruckReadyToSend: null
        },
        props: {
            Trucks: {
                get: function () {
if ( TRACE ) { TRACE( "TruckManager#Trucks#get", this ); }

                    return this._trucks;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "TruckManager#init", this ); }

                this._sendAllTrucksWhenAllFull = false;
                this._fullTrucks = new (System.Collections.Generic.List$1(Truck)).ctor();
                this._areAllTrucksFull = false;
            }
        },
        methods: {
            /*TruckManager.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "TruckManager#Awake", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(TruckManager.Instance, null)) {
                    TruckManager.Instance = this;
                } else {
                    UnityEngine.MonoBehaviour.Destroy(this.gameObject);
                }
            },
            /*TruckManager.Awake end.*/

            /*TruckManager.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "TruckManager#Start", this ); }

                var $t;
                $t = Bridge.getEnumerator(this._trucks);
                try {
                    while ($t.moveNext()) {
                        var truck = { v : $t.Current };
                        if (UnityEngine.MonoBehaviour.op_Equality(truck.v.GetComponent(TruckMover), null)) {
                            UnityEngine.Debug.LogWarning$1(System.String.format("Truck {0} does not have a TruckMover component. Auto-unloading will not work for this truck.", [truck.v.name]));
                        }

                        // Подписываемся на событие заполнения грузовика
                        truck.v.addOnTruckFull((function ($me, truck) {
                            return Bridge.fn.bind($me, function () {
                                this.HandleTruckFull(truck.v);
                            });
                        })(this, truck));
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*TruckManager.Start end.*/

            /*TruckManager.OnDestroy start.*/
            OnDestroy: function () {
if ( TRACE ) { TRACE( "TruckManager#OnDestroy", this ); }

                var $t;
                $t = Bridge.getEnumerator(this._trucks);
                try {
                    while ($t.moveNext()) {
                        var truck = { v : $t.Current };
                        truck.v.removeOnTruckFull((function ($me, truck) {
                            return Bridge.fn.bind($me, function () {
                                this.HandleTruckFull(truck.v);
                            });
                        })(this, truck));
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*TruckManager.OnDestroy end.*/

            /*TruckManager.HandleTruckFull start.*/
            HandleTruckFull: function (truck) {
if ( TRACE ) { TRACE( "TruckManager#HandleTruckFull", this ); }

                if (!this._fullTrucks.contains(truck)) {
                    this._fullTrucks.add(truck);
                }

                // Проверяем, все ли грузовики заполнены
                if (this._sendAllTrucksWhenAllFull) {
                    this.CheckAndSendTrucks();
                } else {
                    // Если не нужно ждать заполнения всех грузовиков, отправляем этот
                    !Bridge.staticEquals(this.OnTruckReadyToSend, null) ? this.OnTruckReadyToSend(truck) : null;
                }
            },
            /*TruckManager.HandleTruckFull end.*/

            /*TruckManager.CheckAndSendTrucks start.*/
            CheckAndSendTrucks: function () {
if ( TRACE ) { TRACE( "TruckManager#CheckAndSendTrucks", this ); }

                var $t;
                if (this._fullTrucks.Count >= 3) {
                    this._areAllTrucksFull = true;
                    !Bridge.staticEquals(this.OnAllTrucksFull, null) ? this.OnAllTrucksFull() : null;

                    // Отправляем все заполненные грузовики
                    $t = Bridge.getEnumerator(this._fullTrucks);
                    try {
                        while ($t.moveNext()) {
                            var truck = { v : $t.Current };
                            !Bridge.staticEquals(this.OnTruckReadyToSend, null) ? this.OnTruckReadyToSend(truck.v) : null;
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }

                    // Очищаем список заполненных грузовиков
                    this._fullTrucks.clear();
                    this._areAllTrucksFull = false;
                }
            },
            /*TruckManager.CheckAndSendTrucks end.*/

            /*TruckManager.GetAvailableTruck start.*/
            GetAvailableTruck: function () {
if ( TRACE ) { TRACE( "TruckManager#GetAvailableTruck", this ); }

                var $t;
                $t = Bridge.getEnumerator(this._trucks);
                try {
                    while ($t.moveNext()) {
                        var truck = $t.Current;
                        var mover = truck.GetComponent(TruckMover);
                        var isMoving = UnityEngine.MonoBehaviour.op_Inequality(mover, null) && mover.IsMoving;

                        if (truck.RemainingCapacity > 0 && !isMoving) {
                            return truck;
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }

                !Bridge.staticEquals(this.OnAllTrucksFull, null) ? this.OnAllTrucksFull() : null;
                return null;
            },
            /*TruckManager.GetAvailableTruck end.*/

            /*TruckManager.GetTruckByIndex start.*/
            GetTruckByIndex: function (index) {
if ( TRACE ) { TRACE( "TruckManager#GetTruckByIndex", this ); }

                if (index >= 0 && index < this._trucks.Count) {
                    return this._trucks.getItem(index);
                }

                return null;
            },
            /*TruckManager.GetTruckByIndex end.*/

            /*TruckManager.GetAllTrucks start.*/
            GetAllTrucks: function () {
if ( TRACE ) { TRACE( "TruckManager#GetAllTrucks", this ); }

                return this._trucks;
            },
            /*TruckManager.GetAllTrucks end.*/

            /*TruckManager.AreAllTrucksFull start.*/
            AreAllTrucksFull: function () {
if ( TRACE ) { TRACE( "TruckManager#AreAllTrucksFull", this ); }

                return this._areAllTrucksFull;
            },
            /*TruckManager.AreAllTrucksFull end.*/

            /*TruckManager.AddFullTruck start.*/
            AddFullTruck: function (truck) {
if ( TRACE ) { TRACE( "TruckManager#AddFullTruck", this ); }

                if (!this._fullTrucks.contains(truck)) {
                    this._fullTrucks.add(truck);
                    this.CheckAndSendTrucks();
                }
            },
            /*TruckManager.AddFullTruck end.*/

            /*TruckManager.RemoveFullTruck start.*/
            RemoveFullTruck: function (truck) {
if ( TRACE ) { TRACE( "TruckManager#RemoveFullTruck", this ); }

                if (this._fullTrucks.contains(truck)) {
                    this._fullTrucks.remove(truck);
                }
            },
            /*TruckManager.RemoveFullTruck end.*/


        }
    });
    /*TruckManager end.*/

    /*TruckMover start.*/
    Bridge.define("TruckMover", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _moveDuration: 0,
            _moveEase: 0,
            _unloadPoint: null,
            _startPosition: null,
            _engineSound: null,
            _truck: null,
            _initialPosition: null,
            _initialRotation: null,
            _isMoving: false
        },
        props: {
            IsMoving: {
                get: function () {
if ( TRACE ) { TRACE( "TruckMover#IsMoving#get", this ); }

                    return this._isMoving;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "TruckMover#init", this ); }

                this._initialPosition = new UnityEngine.Vector3();
                this._initialRotation = new UnityEngine.Quaternion();
                this._moveDuration = 2.0;
                this._moveEase = DG.Tweening.Ease.InOutSine;
                this._isMoving = false;
            }
        },
        methods: {
            /*TruckMover.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "TruckMover#Awake", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(this._truck, null)) {
                    this._truck = this.GetComponent(Truck);
                }

                if (UnityEngine.Component.op_Equality(this._startPosition, null)) {
                    this._startPosition = this.transform;
                }
                this._truck = this.GetComponent(Truck);
                this._initialPosition = this._startPosition.position.$clone();
                this._initialRotation = this._startPosition.rotation.$clone();
                this._truck.addOnTruckFull(Bridge.fn.cacheBind(this, this.HandleTruckFull));

                if (UnityEngine.MonoBehaviour.op_Inequality(TruckManager.Instance, null)) {
                    TruckManager.Instance.OnTruckReadyToSend = Bridge.fn.combine(TruckManager.Instance.OnTruckReadyToSend, Bridge.fn.cacheBind(this, this.HandleTruckReadyToSend));
                }

                this._unloadPoint = UnityEngine.Object.FindObjectOfType(TruckUnloadPoint);
            },
            /*TruckMover.Awake end.*/

            /*TruckMover.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "TruckMover#Start", this ); }
 },
            /*TruckMover.Start end.*/

            /*TruckMover.OnDestroy start.*/
            OnDestroy: function () {
if ( TRACE ) { TRACE( "TruckMover#OnDestroy", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(this._truck, null)) {
                    this._truck.removeOnTruckFull(Bridge.fn.cacheBind(this, this.HandleTruckFull));
                }

                if (UnityEngine.MonoBehaviour.op_Inequality(TruckManager.Instance, null)) {
                    TruckManager.Instance.OnTruckReadyToSend = Bridge.fn.remove(TruckManager.Instance.OnTruckReadyToSend, Bridge.fn.cacheBind(this, this.HandleTruckReadyToSend));
                }

                DG.Tweening.ShortcutExtensions.DOKill(this.transform);
            },
            /*TruckMover.OnDestroy end.*/

            /*TruckMover.HandleTruckReadyToSend start.*/
            HandleTruckReadyToSend: function (truck) {
if ( TRACE ) { TRACE( "TruckMover#HandleTruckReadyToSend", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(truck, this._truck) && !this._isMoving && UnityEngine.MonoBehaviour.op_Inequality(this._unloadPoint, null)) {
                    this.StartCoroutine$1(this.MoveToUnloadAndBackRoutine(this._unloadPoint.StopPosition));
                }
            },
            /*TruckMover.HandleTruckReadyToSend end.*/

            /*TruckMover.HandleTruckFull start.*/
            HandleTruckFull: function () {
if ( TRACE ) { TRACE( "TruckMover#HandleTruckFull", this ); }

                if (!this._isMoving && UnityEngine.MonoBehaviour.op_Inequality(this._unloadPoint, null)) {
                    this.StartCoroutine$1(this.MoveToUnloadAndBackRoutine(this._unloadPoint.StopPosition));
                }
            },
            /*TruckMover.HandleTruckFull end.*/

            /*TruckMover.MoveToUnloadAndBackRoutine start.*/
            MoveToUnloadAndBackRoutine: function (targetPositionTransform) {
if ( TRACE ) { TRACE( "TruckMover#MoveToUnloadAndBackRoutine", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    targetPosition,
                    moveTween,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    this._isMoving = true;

                                        if (UnityEngine.Component.op_Inequality(this._engineSound, null)) {
                                            this._engineSound.Play();
                                        }

                                        targetPosition = targetPositionTransform.position.$clone();
                                        moveTween = DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOMove(this.transform, targetPosition.$clone(), this._moveDuration), this._moveEase);
                                        $enumerator.current = DG.Tweening.TweenExtensions.WaitForCompletion(moveTween);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    $enumerator.current = this.StartCoroutine$1(this.UnloadTruckRoutine());
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    moveTween = DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOMove(this.transform, this._initialPosition.$clone(), this._moveDuration), this._moveEase);
                                        $enumerator.current = DG.Tweening.TweenExtensions.WaitForCompletion(moveTween);
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    if (UnityEngine.Component.op_Inequality(this._engineSound, null)) {
                                            this._engineSound.Stop();
                                        }

                                        this._isMoving = false;

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*TruckMover.MoveToUnloadAndBackRoutine end.*/

            /*TruckMover.UnloadTruckRoutine start.*/
            UnloadTruckRoutine: function () {
if ( TRACE ) { TRACE( "TruckMover#UnloadTruckRoutine", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    wasFull,
                    logsUnloaded,
                    moneyController,
                    reward,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(this._unloadPoint.UnloadDuration);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    wasFull = true;
                                        logsUnloaded = (this._truck.MaxCapacity - this._truck.RemainingCapacity) | 0;

                                        this._truck.Clear();

                                        if (wasFull) {
                                            moneyController = MoneyController.Instance;

                                            if (UnityEngine.MonoBehaviour.op_Inequality(moneyController, null)) {
                                                reward = 20;
                                                moneyController.ChangeBalanceWithVisual$1(reward, this.transform.position, false);
                                            }
                                        }

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*TruckMover.UnloadTruckRoutine end.*/


        }
    });
    /*TruckMover end.*/

    /*TruckProgressBarSetup start.*/
    Bridge.define("TruckProgressBarSetup", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _offsetPosition: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "TruckProgressBarSetup#init", this ); }

                this._offsetPosition = new UnityEngine.Vector3();
                this._offsetPosition = new pc.Vec3( 0, 2.5, 0 );
            }
        },
        methods: {
            /*TruckProgressBarSetup.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "TruckProgressBarSetup#Start", this ); }

                var $t;
                var trucks = UnityEngine.Object.FindObjectsOfType(Truck);

                $t = Bridge.getEnumerator(trucks);
                try {
                    while ($t.moveNext()) {
                        var truck = $t.Current;
                        this.AssignProgressBar(truck);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*TruckProgressBarSetup.Start end.*/

            /*TruckProgressBarSetup.AssignProgressBar start.*/
            AssignProgressBar: function (truck) {
if ( TRACE ) { TRACE( "TruckProgressBarSetup#AssignProgressBar", this ); }

                var progressBarImage = truck.GetComponentInChildren(UnityEngine.UI.Image);

                if (UnityEngine.MonoBehaviour.op_Inequality(progressBarImage, null)) {
                    truck.progressBarImage = progressBarImage;
                    progressBarImage.transform.localPosition = this._offsetPosition.$clone();

                } else {
                    UnityEngine.Debug.LogWarning$1(System.String.format("\u041f\u0440\u043e\u0433\u0440\u0435\u0441\u0441 \u0431\u0430\u0440 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d \u0434\u043b\u044f \u0433\u0440\u0443\u0437\u043e\u0432\u0438\u043a\u0430 {0}.", [truck.name]));
                }
            },
            /*TruckProgressBarSetup.AssignProgressBar end.*/


        }
    });
    /*TruckProgressBarSetup end.*/

    /*Chopper start.*/
    Bridge.define("Chopper", {
        inherits: [Character]
    });
    /*Chopper end.*/

    /*Forklift start.*/
    Bridge.define("Forklift", {
        inherits: [Character]
    });
    /*Forklift end.*/

    /*LoadPoint start.*/
    Bridge.define("LoadPoint", {
        inherits: [MovePoint]
    });
    /*LoadPoint end.*/

    /*SimplePoint start.*/
    Bridge.define("SimplePoint", {
        inherits: [MovePoint]
    });
    /*SimplePoint end.*/

    /*TruckUnloadPoint start.*/
    Bridge.define("TruckUnloadPoint", {
        inherits: [MovePoint],
        fields: {
            _unloadDuration: 0,
            _truckStopPosition: null
        },
        props: {
            UnloadDuration: {
                get: function () {
if ( TRACE ) { TRACE( "TruckUnloadPoint#UnloadDuration#get", this ); }

                    return this._unloadDuration;
                }
            },
            StopPosition: {
                get: function () {
if ( TRACE ) { TRACE( "TruckUnloadPoint#StopPosition#get", this ); }

                    return UnityEngine.Object.op_Implicit(this._truckStopPosition) ? this._truckStopPosition : this.transform;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "TruckUnloadPoint#init", this ); }

                this._unloadDuration = 3.0;
            }
        }
    });
    /*TruckUnloadPoint end.*/

    /*UnloadPoint start.*/
    Bridge.define("UnloadPoint", {
        inherits: [MovePoint],
        fields: {
            _targetTruck: null,
            _allowForkliftToLoadHalfFullTrucks: false
        },
        props: {
            TargetTruck: {
                get: function () {
if ( TRACE ) { TRACE( "UnloadPoint#TargetTruck#get", this ); }

                    return this._targetTruck;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "UnloadPoint#init", this ); }

                this._allowForkliftToLoadHalfFullTrucks = false;
            }
        },
        methods: {
            /*UnloadPoint.CanUnload start.*/
            CanUnload: function () {
if ( TRACE ) { TRACE( "UnloadPoint#CanUnload", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(this._targetTruck, null)) {
                    return false;
                }

                var mover = this._targetTruck.GetComponent(TruckMover);

                var truckMoving = UnityEngine.MonoBehaviour.op_Inequality(mover, null) && mover.IsMoving;
                var canUnload = this._targetTruck.RemainingCapacity > 0 && !truckMoving;

                return canUnload;
            },
            /*UnloadPoint.CanUnload end.*/

            /*UnloadPoint.CanUnload$1 start.*/
            CanUnload$1: function (character) {
if ( TRACE ) { TRACE( "UnloadPoint#CanUnload$1", this ); }

                if (!this.CanUnload()) {
                    return false;
                }

                var isChopper = UnityEngine.MonoBehaviour.op_Inequality(character.GetComponent(Chopper), null);
                var isForklift = UnityEngine.MonoBehaviour.op_Inequality(character.GetComponent(Forklift), null);

                // Если это Chopper, проверяем, является ли грузовик целевым для Chopper'ов
                if (isChopper) {
                    // Проверяем через ChopperManager, является ли этот грузовик целевым
                    if (UnityEngine.MonoBehaviour.op_Inequality(ChopperManager.Instance, null)) {
                        // Если целевой грузовик уже выбран, проверяем, является ли текущий грузовик целевым
                        if (ChopperManager.Instance.IsTargetTruck(this._targetTruck) || UnityEngine.MonoBehaviour.op_Equality(ChopperManager.Instance.GetTargetTruck(), this._targetTruck)) {
                            return true;
                        }

                        // Если не смогли найти грузовик через ChopperManager, разрешаем использовать любой
                        if (UnityEngine.MonoBehaviour.op_Equality(ChopperManager.Instance.GetTargetTruck(), null)) {
                            return true;
                        }

                        return false;
                    }
                    // Если ChopperManager не доступен, разрешаем использовать любой грузовик
                    return true;
                }

                // Если это Forklift, проверяем не загружается ли грузовик Chopper'ами
                if (isForklift) {
                    // Проверяем, загружается ли грузовик Chopper'ами
                    if (this._targetTruck.IsBeingLoadedByChopper) {
                        return false;
                    }

                    // Проверяем, наполовину ли заполнен грузовик
                    if (!this._allowForkliftToLoadHalfFullTrucks && this._targetTruck.CurrentCargoCount > 0) {
                        return false;
                    }
                }

                return true;
            },
            /*UnloadPoint.CanUnload$1 end.*/


        },
        overloads: {
            "CanUnload(GameObject)": "CanUnload$1"
        }
    });
    /*UnloadPoint end.*/

    if ( MODULE_reflection ) {
    var $m = Bridge.setMetadata,
        $n = ["System","UnityEngine","UnityEngine.UI","System.Collections.Generic","System.Collections","TMPro","DG.Tweening","UnityEngine.Audio","DG.Tweening.Core","DG.Tweening.Plugins.Core.PathCore","System.Globalization","DG.Tweening.Plugins.Options"];

    /*SimpleAudioManager start.*/
    $m("SimpleAudioManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"PlayButtonClickSound","t":8,"sn":"PlayButtonClickSound","rt":$n[0].Void},{"a":2,"n":"PlayConveyorAnimationSound","t":8,"sn":"PlayConveyorAnimationSound","rt":$n[0].Void},{"a":2,"n":"PlayHouseAppearSound","t":8,"sn":"PlayHouseAppearSound","rt":$n[0].Void},{"a":2,"n":"PlayLogLoadSound","t":8,"sn":"PlayLogLoadSound","rt":$n[0].Void},{"a":2,"n":"PlayProgressBarSound","t":8,"sn":"PlayProgressBarSound","rt":$n[0].Void},{"a":1,"n":"PlaySound","t":8,"pi":[{"n":"clip","pt":$n[1].AudioClip,"ps":0}],"sn":"PlaySound","rt":$n[0].Void,"p":[$n[1].AudioClip]},{"a":2,"n":"Instance","is":true,"t":16,"rt":SimpleAudioManager,"g":{"a":2,"n":"get_Instance","t":8,"rt":SimpleAudioManager,"fg":"Instance","is":true},"s":{"a":1,"n":"set_Instance","t":8,"p":[SimpleAudioManager],"rt":$n[0].Void,"fs":"Instance","is":true},"fn":"Instance"},{"a":1,"n":"audioSource","t":4,"rt":$n[1].AudioSource,"sn":"audioSource"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"buttonClickSound","t":4,"rt":$n[1].AudioClip,"sn":"buttonClickSound"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"conveyorAnimationSound","t":4,"rt":$n[1].AudioClip,"sn":"conveyorAnimationSound"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"houseAppearSound","t":4,"rt":$n[1].AudioClip,"sn":"houseAppearSound"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"logLoadSound","t":4,"rt":$n[1].AudioClip,"sn":"logLoadSound"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"progressBarSound","t":4,"rt":$n[1].AudioClip,"sn":"progressBarSound"},{"a":1,"backing":true,"n":"<Instance>k__BackingField","is":true,"t":4,"rt":SimpleAudioManager,"sn":"Instance"}]}; }, $n);
    /*SimpleAudioManager end.*/

    /*Build start.*/
    $m("Build", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"SpawnBuild","t":8,"sn":"SpawnBuild","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"building","t":4,"rt":$n[1].GameObject,"sn":"building"}]}; }, $n);
    /*Build end.*/

    /*BuildManager start.*/
    $m("BuildManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"OnBuildSuccess","t":8,"pi":[{"n":"buildObject","pt":$n[1].GameObject,"ps":0}],"sn":"OnBuildSuccess","rt":$n[0].Void,"p":[$n[1].GameObject]},{"a":1,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_build1","t":4,"rt":$n[1].GameObject,"sn":"_build1"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_build2","t":4,"rt":$n[1].GameObject,"sn":"_build2"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_build3","t":4,"rt":$n[1].GameObject,"sn":"_build3"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_buildButton1","t":4,"rt":$n[2].Button,"sn":"_buildButton1"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_buildButton2","t":4,"rt":$n[2].Button,"sn":"_buildButton2"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_buildButton3","t":4,"rt":$n[2].Button,"sn":"_buildButton3"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_moneyController","t":4,"rt":MoneyController,"sn":"_moneyController"}]}; }, $n);
    /*BuildManager end.*/

    /*Garage start.*/
    $m("Garage", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnChoper","t":8,"sn":"OnChoper","rt":$n[0].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"chopper","t":4,"rt":$n[1].GameObject,"sn":"chopper"}]}; }, $n);
    /*Garage end.*/

    /*Character start.*/
    $m("Character", function () { return {"att":1048705,"a":2,"m":[{"a":3,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnTriggerEnter","t":8,"pi":[{"n":"other","pt":$n[1].Collider,"ps":0}],"sn":"OnTriggerEnter","rt":$n[0].Void,"p":[$n[1].Collider]},{"a":1,"n":"TakeTree","t":8,"pi":[{"n":"tree","pt":Tree,"ps":0}],"sn":"TakeTree","rt":$n[0].Void,"p":[Tree]},{"a":2,"n":"Unload","t":8,"sn":"Unload","rt":$n[0].Void},{"a":2,"n":"UnloadToTruck","t":8,"pi":[{"n":"truck","pt":Truck,"ps":0}],"sn":"UnloadToTruck","rt":$n[0].Int32,"p":[Truck],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"CargoCount","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_CargoCount","t":8,"rt":$n[0].Int32,"fg":"CargoCount","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"CargoCount"},{"a":2,"n":"IsFull","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_IsFull","t":8,"rt":$n[0].Boolean,"fg":"IsFull","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"IsFull"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_cargo","t":4,"rt":$n[3].List$1(UnityEngine.GameObject),"sn":"_cargo"},{"a":1,"n":"_currentCargoIndex","t":4,"rt":$n[0].Int32,"sn":"_currentCargoIndex","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"_isFull","t":4,"rt":$n[0].Boolean,"sn":"_isFull","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"OnCargoEmpty","t":2,"ad":{"a":2,"n":"add_OnCargoEmpty","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnCargoEmpty","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnCargoEmpty","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnCargoEmpty","rt":$n[0].Void,"p":[Function]}},{"a":2,"n":"OnCargoFull","t":2,"ad":{"a":2,"n":"add_OnCargoFull","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnCargoFull","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnCargoFull","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnCargoFull","rt":$n[0].Void,"p":[Function]}}]}; }, $n);
    /*Character end.*/

    /*CharactersMover start.*/
    $m("CharactersMover", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"FindNearestAvailableUnloadPoint","t":8,"sn":"FindNearestAvailableUnloadPoint","rt":UnloadPoint},{"a":1,"n":"FindNextAvailableUnloadPoint","t":8,"pi":[{"n":"currentPoint","pt":UnloadPoint,"ps":0}],"sn":"FindNextAvailableUnloadPoint","rt":UnloadPoint,"p":[UnloadPoint]},{"a":1,"n":"HandleAllTrucksFull","t":8,"sn":"HandleAllTrucksFull","rt":$n[0].Void},{"a":1,"n":"HandleCargoEmpty","t":8,"sn":"HandleCargoEmpty","rt":$n[0].Void},{"a":1,"n":"HandleCargoFull","t":8,"sn":"HandleCargoFull","rt":$n[0].Void},{"a":1,"n":"HandleRetryUnloading","t":8,"sn":"HandleRetryUnloading","rt":$n[0].Void},{"a":1,"n":"MoveToNextPoint","t":8,"sn":"MoveToNextPoint","rt":$n[0].Void},{"a":1,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"_character","t":4,"rt":Character,"sn":"_character"},{"a":1,"n":"_checkTruckAvailabilityInterval","t":4,"rt":$n[0].Single,"sn":"_checkTruckAvailabilityInterval","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"_currentPointIndex","t":4,"rt":$n[0].Int32,"sn":"_currentPointIndex","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"_currentRoute","t":4,"rt":System.Array.type(MovePoint),"sn":"_currentRoute"},{"a":1,"n":"_initialRotationX","t":4,"rt":$n[0].Single,"sn":"_initialRotationX","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"_initialRotationZ","t":4,"rt":$n[0].Single,"sn":"_initialRotationZ","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"_isUnloading","t":4,"rt":$n[0].Boolean,"sn":"_isUnloading","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.HeaderAttribute("\u0422\u043e\u0447\u043a\u0438 \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u0430"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_normalRoutePoints","t":4,"rt":System.Array.type(MovePoint),"sn":"_normalRoutePoints"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_unloadPoints","t":4,"rt":System.Array.type(UnloadPoint),"sn":"_unloadPoints"},{"a":1,"n":"_waitingForTruck","t":4,"rt":$n[0].Boolean,"sn":"_waitingForTruck","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*CharactersMover end.*/

    /*Chopper start.*/
    $m("Chopper", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*Chopper end.*/

    /*ChopperManager start.*/
    $m("ChopperManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"FindAvailableTruck","t":8,"sn":"FindAvailableTruck","rt":Truck},{"a":2,"n":"GetTargetTruck","t":8,"sn":"GetTargetTruck","rt":Truck},{"a":2,"n":"IsTargetTruck","t":8,"pi":[{"n":"truck","pt":Truck,"ps":0}],"sn":"IsTargetTruck","rt":$n[0].Boolean,"p":[Truck],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"ResetTargetTruck","t":8,"sn":"ResetTargetTruck","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"Instance","is":true,"t":16,"rt":ChopperManager,"g":{"a":2,"n":"get_Instance","t":8,"rt":ChopperManager,"fg":"Instance","is":true},"s":{"a":1,"n":"set_Instance","t":8,"p":[ChopperManager],"rt":$n[0].Void,"fs":"Instance","is":true},"fn":"Instance"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_choppers","t":4,"rt":$n[3].List$1(Chopper),"sn":"_choppers"},{"a":1,"n":"_isTargetTruckSelected","t":4,"rt":$n[0].Boolean,"sn":"_isTargetTruckSelected","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"_targetTruck","t":4,"rt":Truck,"sn":"_targetTruck"},{"a":1,"backing":true,"n":"<Instance>k__BackingField","is":true,"t":4,"rt":ChopperManager,"sn":"Instance"}]}; }, $n);
    /*ChopperManager end.*/

    /*Forklift start.*/
    $m("Forklift", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*Forklift end.*/

    /*Conveyor start.*/
    $m("Conveyor", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"StartAnimationAfterDelay","t":8,"pi":[{"n":"delay","pt":$n[0].Single,"ps":0},{"n":"name","pt":$n[0].String,"ps":1}],"sn":"StartAnimationAfterDelay","rt":$n[4].IEnumerator,"p":[$n[0].Single,$n[0].String]},{"a":1,"n":"StartCanvasAnimationAfterDelay","t":8,"sn":"StartCanvasAnimationAfterDelay","rt":$n[4].IEnumerator},{"a":1,"n":"StateName","is":true,"t":4,"rt":$n[0].String,"sn":"StateName"},{"a":1,"n":"StateName2","is":true,"t":4,"rt":$n[0].String,"sn":"StateName2"},{"a":1,"n":"animator","t":4,"rt":$n[1].Animator,"sn":"animator"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"canvasAnimator","t":4,"rt":$n[1].Animator,"sn":"canvasAnimator"}]}; }, $n);
    /*Conveyor end.*/

    /*GameManager start.*/
    $m("GameManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"CheckBalanceThresholds","t":8,"pi":[{"n":"newBalance","pt":$n[0].Int32,"ps":0}],"sn":"CheckBalanceThresholds","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":1,"n":"CheckForActiveBuildings","t":8,"sn":"CheckForActiveBuildings","rt":$n[0].Void},{"a":1,"n":"CheckPackShotActivation","t":8,"sn":"CheckPackShotActivation","rt":$n[0].Void},{"a":1,"n":"CheckSecondBuilding","t":8,"pi":[{"n":"builtObject","pt":$n[1].GameObject,"ps":0}],"sn":"CheckSecondBuilding","rt":$n[0].Void,"p":[$n[1].GameObject]},{"a":1,"n":"EnableUpgradeButton","t":8,"sn":"EnableUpgradeButton","rt":$n[0].Void},{"a":1,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[0].Void},{"a":1,"n":"OnSecondButtonClicked","t":8,"sn":"OnSecondButtonClicked","rt":$n[0].Void},{"a":1,"n":"OnUpgradeButtonClicked","t":8,"sn":"OnUpgradeButtonClicked","rt":$n[0].Void},{"a":2,"n":"RegisterUserActivity","t":8,"sn":"RegisterUserActivity","rt":$n[0].Void},{"a":1,"n":"ResetIdleState","t":8,"sn":"ResetIdleState","rt":$n[4].IEnumerator},{"a":1,"n":"ResetIdleTimer","t":8,"sn":"ResetIdleTimer","rt":$n[0].Void},{"a":1,"n":"ShowFirstTutorial","t":8,"sn":"ShowFirstTutorial","rt":$n[0].Void},{"a":1,"n":"ShowSecondTutorial","t":8,"sn":"ShowSecondTutorial","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"Instance","is":true,"t":16,"rt":GameManager,"g":{"a":2,"n":"get_Instance","t":8,"rt":GameManager,"fg":"Instance","is":true},"s":{"a":1,"n":"set_Instance","t":8,"p":[GameManager],"rt":$n[0].Void,"fs":"Instance","is":true},"fn":"Instance"},{"a":1,"n":"TUTORIAL2_BALANCE_THRESHOLD","is":true,"t":4,"rt":$n[0].Int32,"sn":"TUTORIAL2_BALANCE_THRESHOLD","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"UPGRADE_BUTTON_BALANCE_THRESHOLD","is":true,"t":4,"rt":$n[0].Int32,"sn":"UPGRADE_BUTTON_BALANCE_THRESHOLD","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"buildManager","t":4,"rt":BuildManager,"sn":"buildManager"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"idleTimeForTutorial","t":4,"rt":$n[0].Single,"sn":"idleTimeForTutorial","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"idleTimer","t":4,"rt":$n[0].Single,"sn":"idleTimer","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"isSecondButtonClicked","t":4,"rt":$n[0].Boolean,"sn":"isSecondButtonClicked","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"isUpgradeClicked","t":4,"rt":$n[0].Boolean,"sn":"isUpgradeClicked","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.HeaderAttribute("\u041f\u0440\u0438\u0432\u044f\u0437\u043a\u0438 \u043a \u0438\u0433\u0440\u043e\u0432\u044b\u043c \u043e\u0431\u044a\u0435\u043a\u0442\u0430\u043c"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"moneyController","t":4,"rt":MoneyController,"sn":"moneyController"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"packShotObject","t":4,"rt":$n[1].GameObject,"sn":"packShotObject"},{"a":1,"n":"secondBuildingActive","t":4,"rt":$n[0].Boolean,"sn":"secondBuildingActive","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"secondRequiredButton","t":4,"rt":$n[2].Button,"sn":"secondRequiredButton"},{"a":1,"n":"tutorial2Shown","t":4,"rt":$n[0].Boolean,"sn":"tutorial2Shown","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"tutorialAnimator","t":4,"rt":$n[1].Animator,"sn":"tutorialAnimator"},{"at":[new UnityEngine.HeaderAttribute("\u0422\u0443\u0442\u043e\u0440\u0438\u0430\u043b"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"tutorialObject","t":4,"rt":$n[1].GameObject,"sn":"tutorialObject"},{"a":1,"n":"tutorialShown","t":4,"rt":$n[0].Boolean,"sn":"tutorialShown","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.HeaderAttribute("\u0411\u0430\u043b\u0430\u043d\u0441 \u0438 \u0443\u043b\u0443\u0447\u0448\u0435\u043d\u0438\u044f"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"upgradeButton","t":4,"rt":$n[2].Button,"sn":"upgradeButton"},{"a":1,"n":"upgradeButtonEnabled","t":4,"rt":$n[0].Boolean,"sn":"upgradeButtonEnabled","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"upgradeButtonGameObject","t":4,"rt":$n[1].GameObject,"sn":"upgradeButtonGameObject"},{"a":1,"n":"userClickedButton","t":4,"rt":$n[0].Boolean,"sn":"userClickedButton","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"userIdle","t":4,"rt":$n[0].Boolean,"sn":"userIdle","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"backing":true,"n":"<Instance>k__BackingField","is":true,"t":4,"rt":GameManager,"sn":"Instance"}]}; }, $n);
    /*GameManager end.*/

    /*MoneyBalance start.*/
    $m("MoneyBalance", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"AnimateMoneyChange","t":8,"pi":[{"n":"targetValue","pt":$n[0].Int32,"ps":0},{"n":"duration","dv":0.5,"o":true,"pt":$n[0].Single,"ps":1}],"sn":"AnimateMoneyChange","rt":$n[0].Void,"p":[$n[0].Int32,$n[0].Single]},{"a":2,"n":"SetMoney","t":8,"pi":[{"n":"money","pt":$n[0].Int32,"ps":0}],"sn":"SetMoney","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"TakeMoney","t":8,"pi":[{"n":"money","pt":$n[0].Int32,"ps":0}],"sn":"TakeMoney","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":1,"n":"UpdateText","t":8,"pi":[{"n":"value","pt":$n[0].Int32,"ps":0}],"sn":"UpdateText","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":2,"n":"Money","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_Money","t":8,"rt":$n[0].Int32,"fg":"Money","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"Money"},{"a":1,"n":"_money","t":4,"rt":$n[0].Int32,"sn":"_money","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_text","t":4,"rt":$n[5].TextMeshProUGUI,"sn":"_text"},{"a":1,"n":"moneyTween","t":4,"rt":$n[6].Tween,"sn":"moneyTween"},{"a":2,"n":"OnMoneyChanged","t":2,"ad":{"a":2,"n":"add_OnMoneyChanged","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnMoneyChanged","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnMoneyChanged","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnMoneyChanged","rt":$n[0].Void,"p":[Function]}}]}; }, $n);
    /*MoneyBalance end.*/

    /*MoneyController start.*/
    $m("MoneyController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"ChangeBalance","t":8,"pi":[{"n":"money","pt":$n[0].Int32,"ps":0},{"n":"isSpending","pt":$n[0].Boolean,"ps":1}],"sn":"ChangeBalance","rt":$n[0].Void,"p":[$n[0].Int32,$n[0].Boolean]},{"a":2,"n":"ChangeBalance","t":8,"pi":[{"n":"money","pt":$n[0].Int32,"ps":0},{"n":"isSpending","pt":$n[0].Boolean,"ps":1},{"n":"position","pt":$n[1].Vector3,"ps":2}],"sn":"ChangeBalance$1","rt":$n[0].Void,"p":[$n[0].Int32,$n[0].Boolean,$n[1].Vector3]},{"a":2,"n":"ChangeBalanceWithVisual","t":8,"pi":[{"n":"money","pt":$n[0].Int32,"ps":0},{"n":"worldStartPosition","pt":$n[1].Vector3,"ps":1},{"n":"isSpending","dv":false,"o":true,"pt":$n[0].Boolean,"ps":2}],"sn":"ChangeBalanceWithVisual$1","rt":$n[0].Void,"p":[$n[0].Int32,$n[1].Vector3,$n[0].Boolean]},{"a":2,"n":"ChangeBalanceWithVisual","t":8,"pi":[{"n":"money","pt":$n[0].Int32,"ps":0},{"n":"uiStartElement","pt":$n[1].RectTransform,"ps":1},{"n":"worldTarget","pt":$n[1].Vector3,"ps":2},{"n":"isSpending","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"ChangeBalanceWithVisual","rt":$n[0].Void,"p":[$n[0].Int32,$n[1].RectTransform,$n[1].Vector3,$n[0].Boolean]},{"a":2,"n":"GetBalance","t":8,"sn":"GetBalance","rt":$n[0].Int32,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"HandleMoneyChanged","t":8,"pi":[{"n":"newBalance","pt":$n[0].Int32,"ps":0}],"sn":"HandleMoneyChanged","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":1,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"TryBuild","t":8,"pi":[{"n":"price","pt":$n[0].Int32,"ps":0},{"n":"buildObject","pt":$n[1].GameObject,"ps":1}],"sn":"TryBuild","rt":$n[0].Void,"p":[$n[0].Int32,$n[1].GameObject]},{"a":2,"n":"Instance","is":true,"t":16,"rt":MoneyController,"g":{"a":2,"n":"get_Instance","t":8,"rt":MoneyController,"fg":"Instance","is":true},"fn":"Instance"},{"a":1,"n":"_instance","is":true,"t":4,"rt":MoneyController,"sn":"_instance"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_moneyBalance","t":4,"rt":MoneyBalance,"sn":"_moneyBalance"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_moneyFlyAnimation","t":4,"rt":MoneyFlyAnimation,"sn":"_moneyFlyAnimation"},{"a":2,"n":"OnBalanceChanged","t":2,"ad":{"a":2,"n":"add_OnBalanceChanged","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnBalanceChanged","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnBalanceChanged","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnBalanceChanged","rt":$n[0].Void,"p":[Function]}},{"a":2,"n":"OnBuildSuccess","t":2,"ad":{"a":2,"n":"add_OnBuildSuccess","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnBuildSuccess","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnBuildSuccess","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnBuildSuccess","rt":$n[0].Void,"p":[Function]}}]}; }, $n);
    /*MoneyController end.*/

    /*LoadPoint start.*/
    $m("LoadPoint", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*LoadPoint end.*/

    /*MovePoint start.*/
    $m("MovePoint", function () { return {"att":1048705,"a":2,"m":[{"a":3,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Delay","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_Delay","t":8,"rt":$n[0].Single,"fg":"Delay","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"fn":"Delay"},{"a":2,"n":"MoveDuration","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_MoveDuration","t":8,"rt":$n[0].Single,"fg":"MoveDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"fn":"MoveDuration"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"delay","t":4,"rt":$n[0].Single,"sn":"delay","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"moveDuration","t":4,"rt":$n[0].Single,"sn":"moveDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*MovePoint end.*/

    /*SimplePoint start.*/
    $m("SimplePoint", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*SimplePoint end.*/

    /*TruckUnloadPoint start.*/
    $m("TruckUnloadPoint", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"StopPosition","t":16,"rt":$n[1].Transform,"g":{"a":2,"n":"get_StopPosition","t":8,"rt":$n[1].Transform,"fg":"StopPosition"},"fn":"StopPosition"},{"a":2,"n":"UnloadDuration","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_UnloadDuration","t":8,"rt":$n[0].Single,"fg":"UnloadDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"fn":"UnloadDuration"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_truckStopPosition","t":4,"rt":$n[1].Transform,"sn":"_truckStopPosition"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_unloadDuration","t":4,"rt":$n[0].Single,"sn":"_unloadDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*TruckUnloadPoint end.*/

    /*UnloadPoint start.*/
    $m("UnloadPoint", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"CanUnload","t":8,"sn":"CanUnload","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"CanUnload","t":8,"pi":[{"n":"character","pt":$n[1].GameObject,"ps":0}],"sn":"CanUnload$1","rt":$n[0].Boolean,"p":[$n[1].GameObject],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"TargetTruck","t":16,"rt":Truck,"g":{"a":2,"n":"get_TargetTruck","t":8,"rt":Truck,"fg":"TargetTruck"},"fn":"TargetTruck"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_allowForkliftToLoadHalfFullTrucks","t":4,"rt":$n[0].Boolean,"sn":"_allowForkliftToLoadHalfFullTrucks","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_targetTruck","t":4,"rt":Truck,"sn":"_targetTruck"}]}; }, $n);
    /*UnloadPoint end.*/

    /*Tree start.*/
    $m("Tree", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"FlashColorRoutine","t":8,"sn":"FlashColorRoutine","rt":$n[4].IEnumerator},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"Take","t":8,"sn":"Take","rt":$n[0].Void},{"a":1,"n":"_flashColor","t":4,"rt":$n[1].Color,"sn":"_flashColor"},{"a":1,"n":"_material","t":4,"rt":$n[1].Material,"sn":"_material"},{"a":1,"n":"_originalColor","t":4,"rt":$n[1].Color,"sn":"_originalColor"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"flashCount","t":4,"rt":$n[0].Int32,"sn":"flashCount","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"flashSpeed","t":4,"rt":$n[0].Single,"sn":"flashSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"pauseBetweenFlashes","t":4,"rt":$n[0].Single,"sn":"pauseBetweenFlashes","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*Tree end.*/

    /*Truck start.*/
    $m("Truck", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Clear","t":8,"sn":"Clear","rt":$n[0].Void},{"a":2,"n":"LoadLog","t":8,"sn":"LoadLog","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"LoadLogs","t":8,"pi":[{"n":"count","pt":$n[0].Int32,"ps":0}],"sn":"LoadLogs","rt":$n[0].Int32,"p":[$n[0].Int32],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"LoadLogs","t":8,"pi":[{"n":"count","pt":$n[0].Int32,"ps":0},{"n":"loader","pt":$n[1].GameObject,"ps":1}],"sn":"LoadLogs$1","rt":$n[0].Int32,"p":[$n[0].Int32,$n[1].GameObject],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"NotifyTruckManagerOnFull","t":8,"sn":"NotifyTruckManagerOnFull","rt":$n[0].Void},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":1,"n":"ResetChoppers","t":8,"sn":"ResetChoppers","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"UpdateProgressBar","t":8,"sn":"UpdateProgressBar","rt":$n[0].Void},{"a":2,"n":"CurrentCargoCount","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_CurrentCargoCount","t":8,"rt":$n[0].Int32,"fg":"CurrentCargoCount","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"CurrentCargoCount"},{"a":2,"n":"IsBeingLoadedByChopper","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_IsBeingLoadedByChopper","t":8,"rt":$n[0].Boolean,"fg":"IsBeingLoadedByChopper","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"IsBeingLoadedByChopper"},{"a":2,"n":"IsFull","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_IsFull","t":8,"rt":$n[0].Boolean,"fg":"IsFull","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"IsFull"},{"a":2,"n":"MaxCapacity","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_MaxCapacity","t":8,"rt":$n[0].Int32,"fg":"MaxCapacity","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"MaxCapacity"},{"a":2,"n":"RemainingCapacity","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_RemainingCapacity","t":8,"rt":$n[0].Int32,"fg":"RemainingCapacity","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"RemainingCapacity"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_cargoSlots","t":4,"rt":$n[3].List$1(UnityEngine.GameObject),"sn":"_cargoSlots"},{"a":1,"n":"_currentCargoCount","t":4,"rt":$n[0].Int32,"sn":"_currentCargoCount","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"_firstChopper","t":4,"rt":$n[1].GameObject,"sn":"_firstChopper"},{"a":1,"n":"_isBeingLoadedByChopper","t":4,"rt":$n[0].Boolean,"sn":"_isBeingLoadedByChopper","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.HeaderAttribute("Audio"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_logLoadSoundName","t":4,"rt":$n[0].String,"sn":"_logLoadSoundName"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_maxCapacity","t":4,"rt":$n[0].Int32,"sn":"_maxCapacity","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_playCargoSounds","t":4,"rt":$n[0].Boolean,"sn":"_playCargoSounds","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"_secondChopper","t":4,"rt":$n[1].GameObject,"sn":"_secondChopper"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_truckFullSoundName","t":4,"rt":$n[0].String,"sn":"_truckFullSoundName"},{"a":2,"n":"progressBarImage","t":4,"rt":$n[2].Image,"sn":"progressBarImage"},{"a":2,"n":"OnCargoChanged","t":2,"ad":{"a":2,"n":"add_OnCargoChanged","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnCargoChanged","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnCargoChanged","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnCargoChanged","rt":$n[0].Void,"p":[Function]}},{"a":2,"n":"OnTruckFull","t":2,"ad":{"a":2,"n":"add_OnTruckFull","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnTruckFull","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnTruckFull","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnTruckFull","rt":$n[0].Void,"p":[Function]}}]}; }, $n);
    /*Truck end.*/

    /*TruckManager start.*/
    $m("TruckManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"AddFullTruck","t":8,"pi":[{"n":"truck","pt":Truck,"ps":0}],"sn":"AddFullTruck","rt":$n[0].Void,"p":[Truck]},{"a":2,"n":"AreAllTrucksFull","t":8,"sn":"AreAllTrucksFull","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"CheckAndSendTrucks","t":8,"sn":"CheckAndSendTrucks","rt":$n[0].Void},{"a":2,"n":"GetAllTrucks","t":8,"sn":"GetAllTrucks","rt":$n[3].List$1(Truck)},{"a":2,"n":"GetAvailableTruck","t":8,"sn":"GetAvailableTruck","rt":Truck},{"a":2,"n":"GetTruckByIndex","t":8,"pi":[{"n":"index","pt":$n[0].Int32,"ps":0}],"sn":"GetTruckByIndex","rt":Truck,"p":[$n[0].Int32]},{"a":1,"n":"HandleTruckFull","t":8,"pi":[{"n":"truck","pt":Truck,"ps":0}],"sn":"HandleTruckFull","rt":$n[0].Void,"p":[Truck]},{"a":1,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[0].Void},{"a":2,"n":"RemoveFullTruck","t":8,"pi":[{"n":"truck","pt":Truck,"ps":0}],"sn":"RemoveFullTruck","rt":$n[0].Void,"p":[Truck]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"Instance","is":true,"t":16,"rt":TruckManager,"g":{"a":2,"n":"get_Instance","t":8,"rt":TruckManager,"fg":"Instance","is":true},"s":{"a":1,"n":"set_Instance","t":8,"p":[TruckManager],"rt":$n[0].Void,"fs":"Instance","is":true},"fn":"Instance"},{"a":2,"n":"Trucks","t":16,"rt":$n[3].List$1(Truck),"g":{"a":2,"n":"get_Trucks","t":8,"rt":$n[3].List$1(Truck),"fg":"Trucks"},"fn":"Trucks"},{"a":2,"n":"OnAllTrucksFull","t":4,"rt":Function,"sn":"OnAllTrucksFull"},{"a":2,"n":"OnTruckReadyToSend","t":4,"rt":Function,"sn":"OnTruckReadyToSend"},{"a":1,"n":"_areAllTrucksFull","t":4,"rt":$n[0].Boolean,"sn":"_areAllTrucksFull","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"_fullTrucks","t":4,"rt":$n[3].List$1(Truck),"sn":"_fullTrucks"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_sendAllTrucksWhenAllFull","t":4,"rt":$n[0].Boolean,"sn":"_sendAllTrucksWhenAllFull","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_trucks","t":4,"rt":$n[3].List$1(Truck),"sn":"_trucks"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_unloadPoint","t":4,"rt":TruckUnloadPoint,"sn":"_unloadPoint"},{"a":1,"backing":true,"n":"<Instance>k__BackingField","is":true,"t":4,"rt":TruckManager,"sn":"Instance"}]}; }, $n);
    /*TruckManager end.*/

    /*TruckMover start.*/
    $m("TruckMover", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"HandleTruckFull","t":8,"sn":"HandleTruckFull","rt":$n[0].Void},{"a":1,"n":"HandleTruckReadyToSend","t":8,"pi":[{"n":"truck","pt":Truck,"ps":0}],"sn":"HandleTruckReadyToSend","rt":$n[0].Void,"p":[Truck]},{"a":1,"n":"MoveToUnloadAndBackRoutine","t":8,"pi":[{"n":"targetPositionTransform","pt":$n[1].Transform,"ps":0}],"sn":"MoveToUnloadAndBackRoutine","rt":$n[4].IEnumerator,"p":[$n[1].Transform]},{"a":1,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"UnloadTruckRoutine","t":8,"sn":"UnloadTruckRoutine","rt":$n[4].IEnumerator},{"a":2,"n":"IsMoving","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_IsMoving","t":8,"rt":$n[0].Boolean,"fg":"IsMoving","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"IsMoving"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_engineSound","t":4,"rt":$n[1].AudioSource,"sn":"_engineSound"},{"a":1,"n":"_initialPosition","t":4,"rt":$n[1].Vector3,"sn":"_initialPosition"},{"a":1,"n":"_initialRotation","t":4,"rt":$n[1].Quaternion,"sn":"_initialRotation"},{"a":1,"n":"_isMoving","t":4,"rt":$n[0].Boolean,"sn":"_isMoving","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"_moveDuration","t":4,"rt":$n[0].Single,"sn":"_moveDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_moveEase","t":4,"rt":$n[6].Ease,"sn":"_moveEase","box":function ($v) { return Bridge.box($v, DG.Tweening.Ease, System.Enum.toStringFn(DG.Tweening.Ease));}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_startPosition","t":4,"rt":$n[1].Transform,"sn":"_startPosition"},{"a":1,"n":"_truck","t":4,"rt":Truck,"sn":"_truck"},{"a":1,"n":"_unloadPoint","t":4,"rt":TruckUnloadPoint,"sn":"_unloadPoint"}]}; }, $n);
    /*TruckMover end.*/

    /*ButtonLight start.*/
    $m("ButtonLight", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"FlashColorRoutine","t":8,"sn":"FlashColorRoutine","rt":$n[4].IEnumerator},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"_flashColor","t":4,"rt":$n[1].Color,"sn":"_flashColor"},{"a":1,"n":"_material","t":4,"rt":$n[1].Material,"sn":"_material"},{"a":1,"n":"_originalColor","t":4,"rt":$n[1].Color,"sn":"_originalColor"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"flashCount","t":4,"rt":$n[0].Int32,"sn":"flashCount","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"flashSpeed","t":4,"rt":$n[0].Single,"sn":"flashSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"pauseBetweenFlashes","t":4,"rt":$n[0].Single,"sn":"pauseBetweenFlashes","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*ButtonLight end.*/

    /*MoneyFlyAnimation start.*/
    $m("MoneyFlyAnimation", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"FlyCoins","t":8,"sn":"FlyCoins","rt":$n[0].Void},{"a":2,"n":"FlyCoinsFromUIToWorld","t":8,"pi":[{"n":"worldTarget","pt":$n[1].Vector3,"ps":0}],"sn":"FlyCoinsFromUIToWorld","rt":$n[0].Void,"p":[$n[1].Vector3]},{"a":1,"n":"FlyCoinsFromUIToWorldCoroutine","t":8,"pi":[{"n":"uiStart","pt":$n[1].RectTransform,"ps":0},{"n":"worldTarget","pt":$n[1].Vector3,"ps":1}],"sn":"FlyCoinsFromUIToWorldCoroutine","rt":$n[4].IEnumerator,"p":[$n[1].RectTransform,$n[1].Vector3]},{"a":1,"n":"FlyCoinsFromWorldToUI","t":8,"pi":[{"n":"worldStart","pt":$n[1].Vector3,"ps":0},{"n":"uiTarget","pt":$n[1].RectTransform,"ps":1}],"sn":"FlyCoinsFromWorldToUI","rt":$n[4].IEnumerator,"p":[$n[1].Vector3,$n[1].RectTransform]},{"a":1,"n":"GetCoinFromPool","t":8,"sn":"GetCoinFromPool","rt":$n[1].GameObject},{"a":1,"n":"InitPool","t":8,"sn":"InitPool","rt":$n[0].Void},{"a":1,"n":"coinPool3D","t":4,"rt":$n[3].List$1(UnityEngine.GameObject),"sn":"coinPool3D"},{"a":1,"n":"mainCamera","t":4,"rt":$n[1].Camera,"sn":"mainCamera"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"maxDuration","t":4,"rt":$n[0].Single,"sn":"maxDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"minDuration","t":4,"rt":$n[0].Single,"sn":"minDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("General Settings"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"moneyPrefab3D","t":4,"rt":$n[1].GameObject,"sn":"moneyPrefab3D"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"poolSize","t":4,"rt":$n[0].Int32,"sn":"poolSize","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"spread","t":4,"rt":$n[0].Single,"sn":"spread","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"uiTargetPoint","t":4,"rt":$n[1].RectTransform,"sn":"uiTargetPoint"},{"at":[new UnityEngine.HeaderAttribute("From-To Settings"),new UnityEngine.SerializeFieldAttribute()],"a":2,"n":"worldStartPoint","t":4,"rt":$n[1].Transform,"sn":"worldStartPoint"}]}; }, $n);
    /*MoneyFlyAnimation end.*/

    /*TruckProgressBarSetup start.*/
    $m("TruckProgressBarSetup", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"AssignProgressBar","t":8,"pi":[{"n":"truck","pt":Truck,"ps":0}],"sn":"AssignProgressBar","rt":$n[0].Void,"p":[Truck]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_offsetPosition","t":4,"rt":$n[1].Vector3,"sn":"_offsetPosition"}]}; }, $n);
    /*TruckProgressBarSetup end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    $m("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*DG.Tweening.DOTweenModuleAudio start.*/
    $m("DG.Tweening.DOTweenModuleAudio", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOComplete","is":true,"t":8,"pi":[{"n":"target","pt":$n[7].AudioMixer,"ps":0},{"n":"withCallbacks","dv":false,"o":true,"pt":$n[0].Boolean,"ps":1}],"sn":"DOComplete","rt":$n[0].Int32,"p":[$n[7].AudioMixer,$n[0].Boolean],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].AudioSource,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade","rt":$n[8].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[1].AudioSource,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFlip","is":true,"t":8,"pi":[{"n":"target","pt":$n[7].AudioMixer,"ps":0}],"sn":"DOFlip","rt":$n[0].Int32,"p":[$n[7].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOGoto","is":true,"t":8,"pi":[{"n":"target","pt":$n[7].AudioMixer,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"andPlay","dv":false,"o":true,"pt":$n[0].Boolean,"ps":2}],"sn":"DOGoto","rt":$n[0].Int32,"p":[$n[7].AudioMixer,$n[0].Single,$n[0].Boolean],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOKill","is":true,"t":8,"pi":[{"n":"target","pt":$n[7].AudioMixer,"ps":0},{"n":"complete","dv":false,"o":true,"pt":$n[0].Boolean,"ps":1}],"sn":"DOKill","rt":$n[0].Int32,"p":[$n[7].AudioMixer,$n[0].Boolean],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOPause","is":true,"t":8,"pi":[{"n":"target","pt":$n[7].AudioMixer,"ps":0}],"sn":"DOPause","rt":$n[0].Int32,"p":[$n[7].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOPitch","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].AudioSource,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOPitch","rt":$n[8].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[1].AudioSource,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOPlay","is":true,"t":8,"pi":[{"n":"target","pt":$n[7].AudioMixer,"ps":0}],"sn":"DOPlay","rt":$n[0].Int32,"p":[$n[7].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOPlayBackwards","is":true,"t":8,"pi":[{"n":"target","pt":$n[7].AudioMixer,"ps":0}],"sn":"DOPlayBackwards","rt":$n[0].Int32,"p":[$n[7].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOPlayForward","is":true,"t":8,"pi":[{"n":"target","pt":$n[7].AudioMixer,"ps":0}],"sn":"DOPlayForward","rt":$n[0].Int32,"p":[$n[7].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DORestart","is":true,"t":8,"pi":[{"n":"target","pt":$n[7].AudioMixer,"ps":0}],"sn":"DORestart","rt":$n[0].Int32,"p":[$n[7].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DORewind","is":true,"t":8,"pi":[{"n":"target","pt":$n[7].AudioMixer,"ps":0}],"sn":"DORewind","rt":$n[0].Int32,"p":[$n[7].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOSetFloat","is":true,"t":8,"pi":[{"n":"target","pt":$n[7].AudioMixer,"ps":0},{"n":"floatName","pt":$n[0].String,"ps":1},{"n":"endValue","pt":$n[0].Single,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3}],"sn":"DOSetFloat","rt":$n[8].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[7].AudioMixer,$n[0].String,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOSmoothRewind","is":true,"t":8,"pi":[{"n":"target","pt":$n[7].AudioMixer,"ps":0}],"sn":"DOSmoothRewind","rt":$n[0].Int32,"p":[$n[7].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOTogglePause","is":true,"t":8,"pi":[{"n":"target","pt":$n[7].AudioMixer,"ps":0}],"sn":"DOTogglePause","rt":$n[0].Int32,"p":[$n[7].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*DG.Tweening.DOTweenModuleAudio end.*/

    /*DG.Tweening.DOTweenModulePhysics start.*/
    $m("DG.Tweening.DOTweenModulePhysics", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOJump","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"endValue","pt":$n[1].Vector3,"ps":1},{"n":"jumpPower","pt":$n[0].Single,"ps":2},{"n":"numJumps","pt":$n[0].Int32,"ps":3},{"n":"duration","pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOJump","rt":$n[6].Sequence,"p":[$n[1].Rigidbody,$n[1].Vector3,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean]},{"a":4,"n":"DOLocalPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"path","pt":$n[9].Path,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathMode","dv":1,"o":true,"pt":$n[6].PathMode,"ps":3}],"sn":"DOLocalPath$1","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].Rigidbody,$n[9].Path,$n[0].Single,$n[6].PathMode]},{"a":2,"n":"DOLocalPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"path","pt":System.Array.type(UnityEngine.Vector3),"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathType","dv":0,"o":true,"pt":$n[6].PathType,"ps":3},{"n":"pathMode","dv":1,"o":true,"pt":$n[6].PathMode,"ps":4},{"n":"resolution","dv":10,"o":true,"pt":$n[0].Int32,"ps":5},{"n":"gizmoColor","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Color),"ps":6}],"sn":"DOLocalPath","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].Rigidbody,System.Array.type(UnityEngine.Vector3),$n[0].Single,$n[6].PathType,$n[6].PathMode,$n[0].Int32,$n[0].Nullable$1(UnityEngine.Color)]},{"a":2,"n":"DOLookAt","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"towards","pt":$n[1].Vector3,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"axisConstraint","dv":0,"o":true,"pt":$n[6].AxisConstraint,"ps":3},{"n":"up","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Vector3),"ps":4}],"sn":"DOLookAt","rt":$n[8].TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions),"p":[$n[1].Rigidbody,$n[1].Vector3,$n[0].Single,$n[6].AxisConstraint,$n[0].Nullable$1(UnityEngine.Vector3)]},{"a":2,"n":"DOMove","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"endValue","pt":$n[1].Vector3,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMove","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Rigidbody,$n[1].Vector3,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMoveX","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMoveX","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Rigidbody,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMoveY","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMoveY","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Rigidbody,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMoveZ","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMoveZ","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Rigidbody,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":4,"n":"DOPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"path","pt":$n[9].Path,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathMode","dv":1,"o":true,"pt":$n[6].PathMode,"ps":3}],"sn":"DOPath$1","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].Rigidbody,$n[9].Path,$n[0].Single,$n[6].PathMode]},{"a":2,"n":"DOPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"path","pt":System.Array.type(UnityEngine.Vector3),"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathType","dv":0,"o":true,"pt":$n[6].PathType,"ps":3},{"n":"pathMode","dv":1,"o":true,"pt":$n[6].PathMode,"ps":4},{"n":"resolution","dv":10,"o":true,"pt":$n[0].Int32,"ps":5},{"n":"gizmoColor","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Color),"ps":6}],"sn":"DOPath","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].Rigidbody,System.Array.type(UnityEngine.Vector3),$n[0].Single,$n[6].PathType,$n[6].PathMode,$n[0].Int32,$n[0].Nullable$1(UnityEngine.Color)]},{"a":2,"n":"DORotate","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"endValue","pt":$n[1].Vector3,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"mode","dv":0,"o":true,"pt":$n[6].RotateMode,"ps":3}],"sn":"DORotate","rt":$n[8].TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions),"p":[$n[1].Rigidbody,$n[1].Vector3,$n[0].Single,$n[6].RotateMode]}]}; }, $n);
    /*DG.Tweening.DOTweenModulePhysics end.*/

    /*DG.Tweening.DOTweenModulePhysics2D start.*/
    $m("DG.Tweening.DOTweenModulePhysics2D", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOJump","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"jumpPower","pt":$n[0].Single,"ps":2},{"n":"numJumps","pt":$n[0].Int32,"ps":3},{"n":"duration","pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOJump","rt":$n[6].Sequence,"p":[$n[1].Rigidbody2D,$n[1].Vector2,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean]},{"a":4,"n":"DOLocalPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"path","pt":$n[9].Path,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathMode","dv":1,"o":true,"pt":$n[6].PathMode,"ps":3}],"sn":"DOLocalPath$1","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].Rigidbody2D,$n[9].Path,$n[0].Single,$n[6].PathMode]},{"a":2,"n":"DOLocalPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"path","pt":System.Array.type(UnityEngine.Vector2),"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathType","dv":0,"o":true,"pt":$n[6].PathType,"ps":3},{"n":"pathMode","dv":1,"o":true,"pt":$n[6].PathMode,"ps":4},{"n":"resolution","dv":10,"o":true,"pt":$n[0].Int32,"ps":5},{"n":"gizmoColor","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Color),"ps":6}],"sn":"DOLocalPath","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].Rigidbody2D,System.Array.type(UnityEngine.Vector2),$n[0].Single,$n[6].PathType,$n[6].PathMode,$n[0].Int32,$n[0].Nullable$1(UnityEngine.Color)]},{"a":2,"n":"DOMove","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMove","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Rigidbody2D,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMoveX","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMoveX","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Rigidbody2D,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMoveY","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMoveY","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Rigidbody2D,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":4,"n":"DOPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"path","pt":$n[9].Path,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathMode","dv":1,"o":true,"pt":$n[6].PathMode,"ps":3}],"sn":"DOPath$1","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].Rigidbody2D,$n[9].Path,$n[0].Single,$n[6].PathMode]},{"a":2,"n":"DOPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"path","pt":System.Array.type(UnityEngine.Vector2),"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathType","dv":0,"o":true,"pt":$n[6].PathType,"ps":3},{"n":"pathMode","dv":1,"o":true,"pt":$n[6].PathMode,"ps":4},{"n":"resolution","dv":10,"o":true,"pt":$n[0].Int32,"ps":5},{"n":"gizmoColor","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Color),"ps":6}],"sn":"DOPath","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].Rigidbody2D,System.Array.type(UnityEngine.Vector2),$n[0].Single,$n[6].PathType,$n[6].PathMode,$n[0].Int32,$n[0].Nullable$1(UnityEngine.Color)]},{"a":2,"n":"DORotate","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DORotate","rt":$n[8].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[1].Rigidbody2D,$n[0].Single,$n[0].Single]}]}; }, $n);
    /*DG.Tweening.DOTweenModulePhysics2D end.*/

    /*DG.Tweening.DOTweenModuleSprite start.*/
    $m("DG.Tweening.DOTweenModuleSprite", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].SpriteRenderer,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOBlendableColor","rt":$n[6].Tweener,"p":[$n[1].SpriteRenderer,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].SpriteRenderer,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor","rt":$n[8].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[1].SpriteRenderer,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].SpriteRenderer,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade","rt":$n[8].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[1].SpriteRenderer,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].SpriteRenderer,"ps":0},{"n":"gradient","pt":pc.ColorGradient,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOGradientColor","rt":$n[6].Sequence,"p":[$n[1].SpriteRenderer,pc.ColorGradient,$n[0].Single]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleSprite end.*/

    /*DG.Tweening.DOTweenModuleUI start.*/
    $m("DG.Tweening.DOTweenModuleUI", function () { return {"nested":[$n[6].DOTweenModuleUI.Utils],"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOAnchorMax","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorMax","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorMin","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorMin","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos3D","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector3,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos3D","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[1].Vector3,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos3DX","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos3DX","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos3DY","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos3DY","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos3DZ","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos3DZ","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPosX","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPosX","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPosY","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPosY","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Graphic,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOBlendableColor","rt":$n[6].Tweener,"p":[$n[2].Graphic,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Image,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOBlendableColor$1","rt":$n[6].Tweener,"p":[$n[2].Image,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Text,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOBlendableColor$2","rt":$n[6].Tweener,"p":[$n[2].Text,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Graphic,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor","rt":$n[8].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[2].Graphic,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Image,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor$1","rt":$n[8].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[2].Image,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Outline,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor$2","rt":$n[8].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[2].Outline,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Text,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor$3","rt":$n[8].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[2].Text,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOCounter","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Text,"ps":0},{"n":"fromValue","pt":$n[0].Int32,"ps":1},{"n":"endValue","pt":$n[0].Int32,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3},{"n":"addThousandsSeparator","dv":true,"o":true,"pt":$n[0].Boolean,"ps":4},{"n":"culture","dv":null,"o":true,"pt":$n[10].CultureInfo,"ps":5}],"sn":"DOCounter","rt":$n[8].TweenerCore$3(System.Int32,System.Int32,DG.Tweening.Plugins.Options.NoOptions),"p":[$n[2].Text,$n[0].Int32,$n[0].Int32,$n[0].Single,$n[0].Boolean,$n[10].CultureInfo]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].CanvasGroup,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade","rt":$n[8].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[1].CanvasGroup,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Graphic,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade$1","rt":$n[8].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[2].Graphic,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Image,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade$2","rt":$n[8].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[2].Image,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Outline,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade$3","rt":$n[8].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[2].Outline,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Text,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade$4","rt":$n[8].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[2].Text,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFillAmount","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Image,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFillAmount","rt":$n[8].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[2].Image,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFlexibleSize","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].LayoutElement,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOFlexibleSize","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].LayoutElement,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Image,"ps":0},{"n":"gradient","pt":pc.ColorGradient,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOGradientColor","rt":$n[6].Sequence,"p":[$n[2].Image,pc.ColorGradient,$n[0].Single]},{"a":2,"n":"DOHorizontalNormalizedPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].ScrollRect,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOHorizontalNormalizedPos","rt":$n[6].Tweener,"p":[$n[2].ScrollRect,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOJumpAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"jumpPower","pt":$n[0].Single,"ps":2},{"n":"numJumps","pt":$n[0].Int32,"ps":3},{"n":"duration","pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOJumpAnchorPos","rt":$n[6].Sequence,"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMinSize","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].LayoutElement,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMinSize","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].LayoutElement,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DONormalizedPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].ScrollRect,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DONormalizedPos","rt":$n[6].Tweener,"p":[$n[2].ScrollRect,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOPivot","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOPivot","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single]},{"a":2,"n":"DOPivotX","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOPivotX","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOPivotY","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOPivotY","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOPreferredSize","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].LayoutElement,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOPreferredSize","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].LayoutElement,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOPunchAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"punch","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"vibrato","dv":10,"o":true,"pt":$n[0].Int32,"ps":3},{"n":"elasticity","dv":1.0,"o":true,"pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOPunchAnchorPos","rt":$n[6].Tweener,"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOScale","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Outline,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOScale","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].Outline,$n[1].Vector2,$n[0].Single]},{"a":2,"n":"DOShakeAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"duration","pt":$n[0].Single,"ps":1},{"n":"strength","dv":100.0,"o":true,"pt":$n[0].Single,"ps":2},{"n":"vibrato","dv":10,"o":true,"pt":$n[0].Int32,"ps":3},{"n":"randomness","dv":90.0,"o":true,"pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5},{"n":"fadeOut","dv":true,"o":true,"pt":$n[0].Boolean,"ps":6},{"n":"randomnessMode","dv":0,"o":true,"pt":$n[6].ShakeRandomnessMode,"ps":7}],"sn":"DOShakeAnchorPos","rt":$n[6].Tweener,"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean,$n[0].Boolean,$n[6].ShakeRandomnessMode]},{"a":2,"n":"DOShakeAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"duration","pt":$n[0].Single,"ps":1},{"n":"strength","pt":$n[1].Vector2,"ps":2},{"n":"vibrato","dv":10,"o":true,"pt":$n[0].Int32,"ps":3},{"n":"randomness","dv":90.0,"o":true,"pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5},{"n":"fadeOut","dv":true,"o":true,"pt":$n[0].Boolean,"ps":6},{"n":"randomnessMode","dv":0,"o":true,"pt":$n[6].ShakeRandomnessMode,"ps":7}],"sn":"DOShakeAnchorPos$1","rt":$n[6].Tweener,"p":[$n[1].RectTransform,$n[0].Single,$n[1].Vector2,$n[0].Int32,$n[0].Single,$n[0].Boolean,$n[0].Boolean,$n[6].ShakeRandomnessMode]},{"a":2,"n":"DOShapeCircle","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"center","pt":$n[1].Vector2,"ps":1},{"n":"endValueDegrees","pt":$n[0].Single,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3},{"n":"relativeCenter","dv":false,"o":true,"pt":$n[0].Boolean,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOShapeCircle","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.CircleOptions),"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Single,$n[0].Boolean,$n[0].Boolean]},{"a":2,"n":"DOSizeDelta","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOSizeDelta","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOText","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Text,"ps":0},{"n":"endValue","pt":$n[0].String,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"richTextEnabled","dv":true,"o":true,"pt":$n[0].Boolean,"ps":3},{"n":"scrambleMode","dv":0,"o":true,"pt":$n[6].ScrambleMode,"ps":4},{"n":"scrambleChars","dv":null,"o":true,"pt":$n[0].String,"ps":5}],"sn":"DOText","rt":$n[8].TweenerCore$3(System.String,System.String,DG.Tweening.Plugins.Options.StringOptions),"p":[$n[2].Text,$n[0].String,$n[0].Single,$n[0].Boolean,$n[6].ScrambleMode,$n[0].String]},{"a":2,"n":"DOValue","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Slider,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOValue","rt":$n[8].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[2].Slider,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOVerticalNormalizedPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].ScrollRect,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOVerticalNormalizedPos","rt":$n[6].Tweener,"p":[$n[2].ScrollRect,$n[0].Single,$n[0].Single,$n[0].Boolean]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUI end.*/

    /*DG.Tweening.DOTweenModuleUI+Utils start.*/
    $m("DG.Tweening.DOTweenModuleUI.Utils", function () { return {"td":$n[6].DOTweenModuleUI,"att":1048962,"a":2,"s":true,"m":[{"a":2,"n":"SwitchToRectTransform","is":true,"t":8,"pi":[{"n":"from","pt":$n[1].RectTransform,"ps":0},{"n":"to","pt":$n[1].RectTransform,"ps":1}],"sn":"SwitchToRectTransform","rt":$n[1].Vector2,"p":[$n[1].RectTransform,$n[1].RectTransform]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUI+Utils end.*/

    /*DG.Tweening.DOTweenModuleUnityVersion start.*/
    $m("DG.Tweening.DOTweenModuleUnityVersion", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Material,"ps":0},{"n":"gradient","pt":pc.ColorGradient,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOGradientColor","rt":$n[6].Sequence,"p":[$n[1].Material,pc.ColorGradient,$n[0].Single]},{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Material,"ps":0},{"n":"gradient","pt":pc.ColorGradient,"ps":1},{"n":"property","pt":$n[0].String,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3}],"sn":"DOGradientColor$1","rt":$n[6].Sequence,"p":[$n[1].Material,pc.ColorGradient,$n[0].String,$n[0].Single]},{"a":2,"n":"DOOffset","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Material,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"propertyID","pt":$n[0].Int32,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3}],"sn":"DOOffset","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Material,$n[1].Vector2,$n[0].Int32,$n[0].Single]},{"a":2,"n":"DOTiling","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Material,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"propertyID","pt":$n[0].Int32,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3}],"sn":"DOTiling","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Material,$n[1].Vector2,$n[0].Int32,$n[0].Single]},{"a":2,"n":"WaitForCompletion","is":true,"t":8,"pi":[{"n":"t","pt":$n[6].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":1}],"sn":"WaitForCompletion","rt":$n[1].CustomYieldInstruction,"p":[$n[6].Tween,$n[0].Boolean]},{"a":2,"n":"WaitForElapsedLoops","is":true,"t":8,"pi":[{"n":"t","pt":$n[6].Tween,"ps":0},{"n":"elapsedLoops","pt":$n[0].Int32,"ps":1},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":2}],"sn":"WaitForElapsedLoops","rt":$n[1].CustomYieldInstruction,"p":[$n[6].Tween,$n[0].Int32,$n[0].Boolean]},{"a":2,"n":"WaitForKill","is":true,"t":8,"pi":[{"n":"t","pt":$n[6].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":1}],"sn":"WaitForKill","rt":$n[1].CustomYieldInstruction,"p":[$n[6].Tween,$n[0].Boolean]},{"a":2,"n":"WaitForPosition","is":true,"t":8,"pi":[{"n":"t","pt":$n[6].Tween,"ps":0},{"n":"position","pt":$n[0].Single,"ps":1},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":2}],"sn":"WaitForPosition","rt":$n[1].CustomYieldInstruction,"p":[$n[6].Tween,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"WaitForRewind","is":true,"t":8,"pi":[{"n":"t","pt":$n[6].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":1}],"sn":"WaitForRewind","rt":$n[1].CustomYieldInstruction,"p":[$n[6].Tween,$n[0].Boolean]},{"a":2,"n":"WaitForStart","is":true,"t":8,"pi":[{"n":"t","pt":$n[6].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":1}],"sn":"WaitForStart","rt":$n[1].CustomYieldInstruction,"p":[$n[6].Tween,$n[0].Boolean]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUnityVersion end.*/

    /*DG.Tweening.DOTweenCYInstruction start.*/
    $m("DG.Tweening.DOTweenCYInstruction", function () { return {"nested":[$n[6].DOTweenCYInstruction.WaitForCompletion,$n[6].DOTweenCYInstruction.WaitForRewind,$n[6].DOTweenCYInstruction.WaitForKill,$n[6].DOTweenCYInstruction.WaitForElapsedLoops,$n[6].DOTweenCYInstruction.WaitForPosition,$n[6].DOTweenCYInstruction.WaitForStart],"att":1048961,"a":2,"s":true}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForCompletion", function () { return {"td":$n[6].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[6].Tween],"pi":[{"n":"tween","pt":$n[6].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[6].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForRewind", function () { return {"td":$n[6].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[6].Tween],"pi":[{"n":"tween","pt":$n[6].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[6].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForKill start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForKill", function () { return {"td":$n[6].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[6].Tween],"pi":[{"n":"tween","pt":$n[6].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[6].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForKill end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops", function () { return {"td":$n[6].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[6].Tween,$n[0].Int32],"pi":[{"n":"tween","pt":$n[6].Tween,"ps":0},{"n":"elapsedLoops","pt":$n[0].Int32,"ps":1}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"elapsedLoops","t":4,"rt":$n[0].Int32,"sn":"elapsedLoops","ro":true,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"t","t":4,"rt":$n[6].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForPosition", function () { return {"td":$n[6].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[6].Tween,$n[0].Single],"pi":[{"n":"tween","pt":$n[6].Tween,"ps":0},{"n":"position","pt":$n[0].Single,"ps":1}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"position","t":4,"rt":$n[0].Single,"sn":"position","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"t","t":4,"rt":$n[6].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForStart start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForStart", function () { return {"td":$n[6].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[6].Tween],"pi":[{"n":"tween","pt":$n[6].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[6].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForStart end.*/

    /*DG.Tweening.DOTweenModuleUtils start.*/
    $m("DG.Tweening.DOTweenModuleUtils", function () { return {"nested":[$n[6].DOTweenModuleUtils.Physics],"att":1048961,"a":2,"s":true,"m":[{"at":[new UnityEngine.Scripting.PreserveAttribute()],"a":2,"n":"Init","is":true,"t":8,"sn":"Init","rt":$n[0].Void},{"at":[new UnityEngine.Scripting.PreserveAttribute()],"a":1,"n":"Preserver","is":true,"t":8,"sn":"Preserver","rt":$n[0].Void},{"a":1,"n":"_initialized","is":true,"t":4,"rt":$n[0].Boolean,"sn":"_initialized","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUtils end.*/

    /*DG.Tweening.DOTweenModuleUtils+Physics start.*/
    $m("DG.Tweening.DOTweenModuleUtils.Physics", function () { return {"td":$n[6].DOTweenModuleUtils,"att":1048962,"a":2,"s":true,"m":[{"at":[new UnityEngine.Scripting.PreserveAttribute()],"a":2,"n":"CreateDOTweenPathTween","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].MonoBehaviour,"ps":0},{"n":"tweenRigidbody","pt":$n[0].Boolean,"ps":1},{"n":"isLocal","pt":$n[0].Boolean,"ps":2},{"n":"path","pt":$n[9].Path,"ps":3},{"n":"duration","pt":$n[0].Single,"ps":4},{"n":"pathMode","pt":$n[6].PathMode,"ps":5}],"sn":"CreateDOTweenPathTween","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].MonoBehaviour,$n[0].Boolean,$n[0].Boolean,$n[9].Path,$n[0].Single,$n[6].PathMode]},{"at":[new UnityEngine.Scripting.PreserveAttribute()],"a":2,"n":"HasRigidbody","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Component,"ps":0}],"sn":"HasRigidbody","rt":$n[0].Boolean,"p":[$n[1].Component],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"HasRigidbody2D","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Component,"ps":0}],"sn":"HasRigidbody2D","rt":$n[0].Boolean,"p":[$n[1].Component],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"SetOrientationOnPath","is":true,"t":8,"pi":[{"n":"options","pt":$n[11].PathOptions,"ps":0},{"n":"t","pt":$n[6].Tween,"ps":1},{"n":"newRot","pt":$n[1].Quaternion,"ps":2},{"n":"trans","pt":$n[1].Transform,"ps":3}],"sn":"SetOrientationOnPath","rt":$n[0].Void,"p":[$n[11].PathOptions,$n[6].Tween,$n[1].Quaternion,$n[1].Transform]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUtils+Physics end.*/

    }});

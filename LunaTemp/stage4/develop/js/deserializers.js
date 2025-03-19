var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i558 = root || request.c( 'UnityEngine.JointSpring' )
  var i559 = data
  i558.spring = i559[0]
  i558.damper = i559[1]
  i558.targetPosition = i559[2]
  return i558
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i560 = root || request.c( 'UnityEngine.JointMotor' )
  var i561 = data
  i560.m_TargetVelocity = i561[0]
  i560.m_Force = i561[1]
  i560.m_FreeSpin = i561[2]
  return i560
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i562 = root || request.c( 'UnityEngine.JointLimits' )
  var i563 = data
  i562.m_Min = i563[0]
  i562.m_Max = i563[1]
  i562.m_Bounciness = i563[2]
  i562.m_BounceMinVelocity = i563[3]
  i562.m_ContactDistance = i563[4]
  i562.minBounce = i563[5]
  i562.maxBounce = i563[6]
  return i562
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i564 = root || request.c( 'UnityEngine.JointDrive' )
  var i565 = data
  i564.m_PositionSpring = i565[0]
  i564.m_PositionDamper = i565[1]
  i564.m_MaximumForce = i565[2]
  i564.m_UseAcceleration = i565[3]
  return i564
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i566 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i567 = data
  i566.m_Spring = i567[0]
  i566.m_Damper = i567[1]
  return i566
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i568 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i569 = data
  i568.m_Limit = i569[0]
  i568.m_Bounciness = i569[1]
  i568.m_ContactDistance = i569[2]
  return i568
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i570 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i571 = data
  i570.m_ExtremumSlip = i571[0]
  i570.m_ExtremumValue = i571[1]
  i570.m_AsymptoteSlip = i571[2]
  i570.m_AsymptoteValue = i571[3]
  i570.m_Stiffness = i571[4]
  return i570
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i572 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i573 = data
  i572.m_LowerAngle = i573[0]
  i572.m_UpperAngle = i573[1]
  return i572
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i574 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i575 = data
  i574.m_MotorSpeed = i575[0]
  i574.m_MaximumMotorTorque = i575[1]
  return i574
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i576 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i577 = data
  i576.m_DampingRatio = i577[0]
  i576.m_Frequency = i577[1]
  i576.m_Angle = i577[2]
  return i576
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i578 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i579 = data
  i578.m_LowerTranslation = i579[0]
  i578.m_UpperTranslation = i579[1]
  return i578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i581 = data
  i580.name = i581[0]
  i580.halfPrecision = !!i581[1]
  i580.useUInt32IndexFormat = !!i581[2]
  i580.vertexCount = i581[3]
  i580.aabb = i581[4]
  var i583 = i581[5]
  var i582 = []
  for(var i = 0; i < i583.length; i += 1) {
    i582.push( !!i583[i + 0] );
  }
  i580.streams = i582
  i580.vertices = i581[6]
  var i585 = i581[7]
  var i584 = []
  for(var i = 0; i < i585.length; i += 1) {
    i584.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i585[i + 0]) );
  }
  i580.subMeshes = i584
  var i587 = i581[8]
  var i586 = []
  for(var i = 0; i < i587.length; i += 16) {
    i586.push( new pc.Mat4().setData(i587[i + 0], i587[i + 1], i587[i + 2], i587[i + 3],  i587[i + 4], i587[i + 5], i587[i + 6], i587[i + 7],  i587[i + 8], i587[i + 9], i587[i + 10], i587[i + 11],  i587[i + 12], i587[i + 13], i587[i + 14], i587[i + 15]) );
  }
  i580.bindposes = i586
  var i589 = i581[9]
  var i588 = []
  for(var i = 0; i < i589.length; i += 1) {
    i588.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i589[i + 0]) );
  }
  i580.blendShapes = i588
  return i580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i595 = data
  i594.triangles = i595[0]
  return i594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i601 = data
  i600.name = i601[0]
  var i603 = i601[1]
  var i602 = []
  for(var i = 0; i < i603.length; i += 1) {
    i602.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i603[i + 0]) );
  }
  i600.frames = i602
  return i600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i604 = root || new pc.UnityMaterial()
  var i605 = data
  i604.name = i605[0]
  request.r(i605[1], i605[2], 0, i604, 'shader')
  i604.renderQueue = i605[3]
  i604.enableInstancing = !!i605[4]
  var i607 = i605[5]
  var i606 = []
  for(var i = 0; i < i607.length; i += 1) {
    i606.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i607[i + 0]) );
  }
  i604.floatParameters = i606
  var i609 = i605[6]
  var i608 = []
  for(var i = 0; i < i609.length; i += 1) {
    i608.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i609[i + 0]) );
  }
  i604.colorParameters = i608
  var i611 = i605[7]
  var i610 = []
  for(var i = 0; i < i611.length; i += 1) {
    i610.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i611[i + 0]) );
  }
  i604.vectorParameters = i610
  var i613 = i605[8]
  var i612 = []
  for(var i = 0; i < i613.length; i += 1) {
    i612.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i613[i + 0]) );
  }
  i604.textureParameters = i612
  var i615 = i605[9]
  var i614 = []
  for(var i = 0; i < i615.length; i += 1) {
    i614.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i615[i + 0]) );
  }
  i604.materialFlags = i614
  return i604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i619 = data
  i618.name = i619[0]
  i618.value = i619[1]
  return i618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i623 = data
  i622.name = i623[0]
  i622.value = new pc.Color(i623[1], i623[2], i623[3], i623[4])
  return i622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i627 = data
  i626.name = i627[0]
  i626.value = new pc.Vec4( i627[1], i627[2], i627[3], i627[4] )
  return i626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i631 = data
  i630.name = i631[0]
  request.r(i631[1], i631[2], 0, i630, 'value')
  return i630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i635 = data
  i634.name = i635[0]
  i634.enabled = !!i635[1]
  return i634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i637 = data
  i636.name = i637[0]
  i636.width = i637[1]
  i636.height = i637[2]
  i636.mipmapCount = i637[3]
  i636.anisoLevel = i637[4]
  i636.filterMode = i637[5]
  i636.hdr = !!i637[6]
  i636.format = i637[7]
  i636.wrapMode = i637[8]
  i636.alphaIsTransparency = !!i637[9]
  i636.alphaSource = i637[10]
  i636.graphicsFormat = i637[11]
  i636.sRGBTexture = !!i637[12]
  i636.desiredColorSpace = i637[13]
  i636.wrapU = i637[14]
  i636.wrapV = i637[15]
  return i636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i639 = data
  i638.position = new pc.Vec3( i639[0], i639[1], i639[2] )
  i638.scale = new pc.Vec3( i639[3], i639[4], i639[5] )
  i638.rotation = new pc.Quat(i639[6], i639[7], i639[8], i639[9])
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i641 = data
  request.r(i641[0], i641[1], 0, i640, 'sharedMesh')
  return i640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i643 = data
  request.r(i643[0], i643[1], 0, i642, 'additionalVertexStreams')
  i642.enabled = !!i643[2]
  request.r(i643[3], i643[4], 0, i642, 'sharedMaterial')
  var i645 = i643[5]
  var i644 = []
  for(var i = 0; i < i645.length; i += 2) {
  request.r(i645[i + 0], i645[i + 1], 2, i644, '')
  }
  i642.sharedMaterials = i644
  i642.receiveShadows = !!i643[6]
  i642.shadowCastingMode = i643[7]
  i642.sortingLayerID = i643[8]
  i642.sortingOrder = i643[9]
  i642.lightmapIndex = i643[10]
  i642.lightmapSceneIndex = i643[11]
  i642.lightmapScaleOffset = new pc.Vec4( i643[12], i643[13], i643[14], i643[15] )
  i642.lightProbeUsage = i643[16]
  i642.reflectionProbeUsage = i643[17]
  return i642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i649 = data
  i648.name = i649[0]
  i648.tagId = i649[1]
  i648.enabled = !!i649[2]
  i648.isStatic = !!i649[3]
  i648.layer = i649[4]
  return i648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i651 = data
  request.r(i651[0], i651[1], 0, i650, 'animatorController')
  request.r(i651[2], i651[3], 0, i650, 'avatar')
  i650.updateMode = i651[4]
  i650.hasTransformHierarchy = !!i651[5]
  i650.applyRootMotion = !!i651[6]
  var i653 = i651[7]
  var i652 = []
  for(var i = 0; i < i653.length; i += 2) {
  request.r(i653[i + 0], i653[i + 1], 2, i652, '')
  }
  i650.humanBones = i652
  i650.enabled = !!i651[8]
  return i650
}

Deserializers["Tree"] = function (request, data, root) {
  var i656 = root || request.c( 'Tree' )
  var i657 = data
  return i656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i659 = data
  i658.enabled = !!i659[0]
  request.r(i659[1], i659[2], 0, i658, 'sharedMaterial')
  var i661 = i659[3]
  var i660 = []
  for(var i = 0; i < i661.length; i += 2) {
  request.r(i661[i + 0], i661[i + 1], 2, i660, '')
  }
  i658.sharedMaterials = i660
  i658.receiveShadows = !!i659[4]
  i658.shadowCastingMode = i659[5]
  i658.sortingLayerID = i659[6]
  i658.sortingOrder = i659[7]
  i658.lightmapIndex = i659[8]
  i658.lightmapSceneIndex = i659[9]
  i658.lightmapScaleOffset = new pc.Vec4( i659[10], i659[11], i659[12], i659[13] )
  i658.lightProbeUsage = i659[14]
  i658.reflectionProbeUsage = i659[15]
  request.r(i659[16], i659[17], 0, i658, 'sharedMesh')
  var i663 = i659[18]
  var i662 = []
  for(var i = 0; i < i663.length; i += 2) {
  request.r(i663[i + 0], i663[i + 1], 2, i662, '')
  }
  i658.bones = i662
  i658.updateWhenOffscreen = !!i659[19]
  i658.localBounds = i659[20]
  request.r(i659[21], i659[22], 0, i658, 'rootBone')
  var i665 = i659[23]
  var i664 = []
  for(var i = 0; i < i665.length; i += 1) {
    i664.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i665[i + 0]) );
  }
  i658.blendShapesWeights = i664
  return i658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i669 = data
  i668.weight = i669[0]
  return i668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i671 = data
  i670.center = new pc.Vec3( i671[0], i671[1], i671[2] )
  i670.size = new pc.Vec3( i671[3], i671[4], i671[5] )
  i670.enabled = !!i671[6]
  i670.isTrigger = !!i671[7]
  request.r(i671[8], i671[9], 0, i670, 'material')
  return i670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i673 = data
  i672.name = i673[0]
  i672.atlasId = i673[1]
  i672.mipmapCount = i673[2]
  i672.hdr = !!i673[3]
  i672.size = i673[4]
  i672.anisoLevel = i673[5]
  i672.filterMode = i673[6]
  var i675 = i673[7]
  var i674 = []
  for(var i = 0; i < i675.length; i += 4) {
    i674.push( UnityEngine.Rect.MinMaxRect(i675[i + 0], i675[i + 1], i675[i + 2], i675[i + 3]) );
  }
  i672.rects = i674
  i672.wrapU = i673[8]
  i672.wrapV = i673[9]
  return i672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i679 = data
  i678.name = i679[0]
  i678.index = i679[1]
  i678.startup = !!i679[2]
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i681 = data
  i680.enabled = !!i681[0]
  i680.aspect = i681[1]
  i680.orthographic = !!i681[2]
  i680.orthographicSize = i681[3]
  i680.backgroundColor = new pc.Color(i681[4], i681[5], i681[6], i681[7])
  i680.nearClipPlane = i681[8]
  i680.farClipPlane = i681[9]
  i680.fieldOfView = i681[10]
  i680.depth = i681[11]
  i680.clearFlags = i681[12]
  i680.cullingMask = i681[13]
  i680.rect = i681[14]
  request.r(i681[15], i681[16], 0, i680, 'targetTexture')
  i680.usePhysicalProperties = !!i681[17]
  i680.focalLength = i681[18]
  i680.sensorSize = new pc.Vec2( i681[19], i681[20] )
  i680.lensShift = new pc.Vec2( i681[21], i681[22] )
  i680.gateFit = i681[23]
  i680.commandBufferCount = i681[24]
  i680.cameraType = i681[25]
  return i680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i683 = data
  i682.enabled = !!i683[0]
  i682.type = i683[1]
  i682.color = new pc.Color(i683[2], i683[3], i683[4], i683[5])
  i682.cullingMask = i683[6]
  i682.intensity = i683[7]
  i682.range = i683[8]
  i682.spotAngle = i683[9]
  i682.shadows = i683[10]
  i682.shadowNormalBias = i683[11]
  i682.shadowBias = i683[12]
  i682.shadowStrength = i683[13]
  i682.shadowResolution = i683[14]
  i682.lightmapBakeType = i683[15]
  i682.renderMode = i683[16]
  request.r(i683[17], i683[18], 0, i682, 'cookie')
  i682.cookieSize = i683[19]
  return i682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i685 = data
  i684.center = new pc.Vec3( i685[0], i685[1], i685[2] )
  i684.radius = i685[3]
  i684.height = i685[4]
  i684.direction = i685[5]
  i684.enabled = !!i685[6]
  i684.isTrigger = !!i685[7]
  request.r(i685[8], i685[9], 0, i684, 'material')
  return i684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i687 = data
  i686.mass = i687[0]
  i686.drag = i687[1]
  i686.angularDrag = i687[2]
  i686.useGravity = !!i687[3]
  i686.isKinematic = !!i687[4]
  i686.constraints = i687[5]
  i686.maxAngularVelocity = i687[6]
  i686.collisionDetectionMode = i687[7]
  i686.interpolation = i687[8]
  return i686
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i688 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i689 = data
  request.r(i689[0], i689[1], 0, i688, 'm_FirstSelected')
  i688.m_sendNavigationEvents = !!i689[2]
  i688.m_DragThreshold = i689[3]
  return i688
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i690 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i691 = data
  i690.m_HorizontalAxis = i691[0]
  i690.m_VerticalAxis = i691[1]
  i690.m_SubmitButton = i691[2]
  i690.m_CancelButton = i691[3]
  i690.m_InputActionsPerSecond = i691[4]
  i690.m_RepeatDelay = i691[5]
  i690.m_ForceModuleActive = !!i691[6]
  i690.m_SendPointerHoverToParent = !!i691[7]
  return i690
}

Deserializers["BuildManager"] = function (request, data, root) {
  var i692 = root || request.c( 'BuildManager' )
  var i693 = data
  request.r(i693[0], i693[1], 0, i692, '_buildButton1')
  request.r(i693[2], i693[3], 0, i692, '_buildButton2')
  request.r(i693[4], i693[5], 0, i692, '_buildButton3')
  request.r(i693[6], i693[7], 0, i692, '_build1')
  request.r(i693[8], i693[9], 0, i692, '_build2')
  request.r(i693[10], i693[11], 0, i692, '_build3')
  request.r(i693[12], i693[13], 0, i692, '_moneyController')
  return i692
}

Deserializers["Build"] = function (request, data, root) {
  var i694 = root || request.c( 'Build' )
  var i695 = data
  request.r(i695[0], i695[1], 0, i694, 'building')
  return i694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i697 = data
  i696.pivot = new pc.Vec2( i697[0], i697[1] )
  i696.anchorMin = new pc.Vec2( i697[2], i697[3] )
  i696.anchorMax = new pc.Vec2( i697[4], i697[5] )
  i696.sizeDelta = new pc.Vec2( i697[6], i697[7] )
  i696.anchoredPosition3D = new pc.Vec3( i697[8], i697[9], i697[10] )
  i696.rotation = new pc.Quat(i697[11], i697[12], i697[13], i697[14])
  i696.scale = new pc.Vec3( i697[15], i697[16], i697[17] )
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i699 = data
  i698.enabled = !!i699[0]
  i698.planeDistance = i699[1]
  i698.referencePixelsPerUnit = i699[2]
  i698.isFallbackOverlay = !!i699[3]
  i698.renderMode = i699[4]
  i698.renderOrder = i699[5]
  i698.sortingLayerName = i699[6]
  i698.sortingOrder = i699[7]
  i698.scaleFactor = i699[8]
  request.r(i699[9], i699[10], 0, i698, 'worldCamera')
  i698.overrideSorting = !!i699[11]
  i698.pixelPerfect = !!i699[12]
  i698.targetDisplay = i699[13]
  i698.overridePixelPerfect = !!i699[14]
  return i698
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i700 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i701 = data
  i700.m_UiScaleMode = i701[0]
  i700.m_ReferencePixelsPerUnit = i701[1]
  i700.m_ScaleFactor = i701[2]
  i700.m_ReferenceResolution = new pc.Vec2( i701[3], i701[4] )
  i700.m_ScreenMatchMode = i701[5]
  i700.m_MatchWidthOrHeight = i701[6]
  i700.m_PhysicalUnit = i701[7]
  i700.m_FallbackScreenDPI = i701[8]
  i700.m_DefaultSpriteDPI = i701[9]
  i700.m_DynamicPixelsPerUnit = i701[10]
  i700.m_PresetInfoIsWorld = !!i701[11]
  return i700
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i702 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i703 = data
  i702.m_IgnoreReversedGraphics = !!i703[0]
  i702.m_BlockingObjects = i703[1]
  i702.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i703[2] )
  return i702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i705 = data
  i704.cullTransparentMesh = !!i705[0]
  return i704
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i706 = root || request.c( 'UnityEngine.UI.Button' )
  var i707 = data
  i706.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i707[0], i706.m_OnClick)
  i706.m_Navigation = request.d('UnityEngine.UI.Navigation', i707[1], i706.m_Navigation)
  i706.m_Transition = i707[2]
  i706.m_Colors = request.d('UnityEngine.UI.ColorBlock', i707[3], i706.m_Colors)
  i706.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i707[4], i706.m_SpriteState)
  i706.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i707[5], i706.m_AnimationTriggers)
  i706.m_Interactable = !!i707[6]
  request.r(i707[7], i707[8], 0, i706, 'm_TargetGraphic')
  return i706
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i708 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i709 = data
  i708.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i709[0], i708.m_PersistentCalls)
  return i708
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i710 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i711 = data
  var i713 = i711[0]
  var i712 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i713.length; i += 1) {
    i712.add(request.d('UnityEngine.Events.PersistentCall', i713[i + 0]));
  }
  i710.m_Calls = i712
  return i710
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i716 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i717 = data
  request.r(i717[0], i717[1], 0, i716, 'm_Target')
  i716.m_TargetAssemblyTypeName = i717[2]
  i716.m_MethodName = i717[3]
  i716.m_Mode = i717[4]
  i716.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i717[5], i716.m_Arguments)
  i716.m_CallState = i717[6]
  return i716
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i718 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i719 = data
  request.r(i719[0], i719[1], 0, i718, 'm_ObjectArgument')
  i718.m_ObjectArgumentAssemblyTypeName = i719[2]
  i718.m_IntArgument = i719[3]
  i718.m_FloatArgument = i719[4]
  i718.m_StringArgument = i719[5]
  i718.m_BoolArgument = !!i719[6]
  return i718
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i720 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i721 = data
  i720.m_Mode = i721[0]
  i720.m_WrapAround = !!i721[1]
  request.r(i721[2], i721[3], 0, i720, 'm_SelectOnUp')
  request.r(i721[4], i721[5], 0, i720, 'm_SelectOnDown')
  request.r(i721[6], i721[7], 0, i720, 'm_SelectOnLeft')
  request.r(i721[8], i721[9], 0, i720, 'm_SelectOnRight')
  return i720
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i722 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i723 = data
  i722.m_NormalColor = new pc.Color(i723[0], i723[1], i723[2], i723[3])
  i722.m_HighlightedColor = new pc.Color(i723[4], i723[5], i723[6], i723[7])
  i722.m_PressedColor = new pc.Color(i723[8], i723[9], i723[10], i723[11])
  i722.m_SelectedColor = new pc.Color(i723[12], i723[13], i723[14], i723[15])
  i722.m_DisabledColor = new pc.Color(i723[16], i723[17], i723[18], i723[19])
  i722.m_ColorMultiplier = i723[20]
  i722.m_FadeDuration = i723[21]
  return i722
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i724 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i725 = data
  request.r(i725[0], i725[1], 0, i724, 'm_HighlightedSprite')
  request.r(i725[2], i725[3], 0, i724, 'm_PressedSprite')
  request.r(i725[4], i725[5], 0, i724, 'm_SelectedSprite')
  request.r(i725[6], i725[7], 0, i724, 'm_DisabledSprite')
  return i724
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i726 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i727 = data
  i726.m_NormalTrigger = i727[0]
  i726.m_HighlightedTrigger = i727[1]
  i726.m_PressedTrigger = i727[2]
  i726.m_SelectedTrigger = i727[3]
  i726.m_DisabledTrigger = i727[4]
  return i726
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i728 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i729 = data
  i728.m_hasFontAssetChanged = !!i729[0]
  request.r(i729[1], i729[2], 0, i728, 'm_baseMaterial')
  i728.m_maskOffset = new pc.Vec4( i729[3], i729[4], i729[5], i729[6] )
  i728.m_text = i729[7]
  i728.m_isRightToLeft = !!i729[8]
  request.r(i729[9], i729[10], 0, i728, 'm_fontAsset')
  request.r(i729[11], i729[12], 0, i728, 'm_sharedMaterial')
  var i731 = i729[13]
  var i730 = []
  for(var i = 0; i < i731.length; i += 2) {
  request.r(i731[i + 0], i731[i + 1], 2, i730, '')
  }
  i728.m_fontSharedMaterials = i730
  request.r(i729[14], i729[15], 0, i728, 'm_fontMaterial')
  var i733 = i729[16]
  var i732 = []
  for(var i = 0; i < i733.length; i += 2) {
  request.r(i733[i + 0], i733[i + 1], 2, i732, '')
  }
  i728.m_fontMaterials = i732
  i728.m_fontColor32 = UnityEngine.Color32.ConstructColor(i729[17], i729[18], i729[19], i729[20])
  i728.m_fontColor = new pc.Color(i729[21], i729[22], i729[23], i729[24])
  i728.m_enableVertexGradient = !!i729[25]
  i728.m_colorMode = i729[26]
  i728.m_fontColorGradient = request.d('TMPro.VertexGradient', i729[27], i728.m_fontColorGradient)
  request.r(i729[28], i729[29], 0, i728, 'm_fontColorGradientPreset')
  request.r(i729[30], i729[31], 0, i728, 'm_spriteAsset')
  i728.m_tintAllSprites = !!i729[32]
  request.r(i729[33], i729[34], 0, i728, 'm_StyleSheet')
  i728.m_TextStyleHashCode = i729[35]
  i728.m_overrideHtmlColors = !!i729[36]
  i728.m_faceColor = UnityEngine.Color32.ConstructColor(i729[37], i729[38], i729[39], i729[40])
  i728.m_fontSize = i729[41]
  i728.m_fontSizeBase = i729[42]
  i728.m_fontWeight = i729[43]
  i728.m_enableAutoSizing = !!i729[44]
  i728.m_fontSizeMin = i729[45]
  i728.m_fontSizeMax = i729[46]
  i728.m_fontStyle = i729[47]
  i728.m_HorizontalAlignment = i729[48]
  i728.m_VerticalAlignment = i729[49]
  i728.m_textAlignment = i729[50]
  i728.m_characterSpacing = i729[51]
  i728.m_wordSpacing = i729[52]
  i728.m_lineSpacing = i729[53]
  i728.m_lineSpacingMax = i729[54]
  i728.m_paragraphSpacing = i729[55]
  i728.m_charWidthMaxAdj = i729[56]
  i728.m_enableWordWrapping = !!i729[57]
  i728.m_wordWrappingRatios = i729[58]
  i728.m_overflowMode = i729[59]
  request.r(i729[60], i729[61], 0, i728, 'm_linkedTextComponent')
  request.r(i729[62], i729[63], 0, i728, 'parentLinkedComponent')
  i728.m_enableKerning = !!i729[64]
  i728.m_enableExtraPadding = !!i729[65]
  i728.checkPaddingRequired = !!i729[66]
  i728.m_isRichText = !!i729[67]
  i728.m_parseCtrlCharacters = !!i729[68]
  i728.m_isOrthographic = !!i729[69]
  i728.m_isCullingEnabled = !!i729[70]
  i728.m_horizontalMapping = i729[71]
  i728.m_verticalMapping = i729[72]
  i728.m_uvLineOffset = i729[73]
  i728.m_geometrySortingOrder = i729[74]
  i728.m_IsTextObjectScaleStatic = !!i729[75]
  i728.m_VertexBufferAutoSizeReduction = !!i729[76]
  i728.m_useMaxVisibleDescender = !!i729[77]
  i728.m_pageToDisplay = i729[78]
  i728.m_margin = new pc.Vec4( i729[79], i729[80], i729[81], i729[82] )
  i728.m_isUsingLegacyAnimationComponent = !!i729[83]
  i728.m_isVolumetricText = !!i729[84]
  request.r(i729[85], i729[86], 0, i728, 'm_Material')
  i728.m_Maskable = !!i729[87]
  i728.m_Color = new pc.Color(i729[88], i729[89], i729[90], i729[91])
  i728.m_RaycastTarget = !!i729[92]
  i728.m_RaycastPadding = new pc.Vec4( i729[93], i729[94], i729[95], i729[96] )
  return i728
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i734 = root || request.c( 'TMPro.VertexGradient' )
  var i735 = data
  i734.topLeft = new pc.Color(i735[0], i735[1], i735[2], i735[3])
  i734.topRight = new pc.Color(i735[4], i735[5], i735[6], i735[7])
  i734.bottomLeft = new pc.Color(i735[8], i735[9], i735[10], i735[11])
  i734.bottomRight = new pc.Color(i735[12], i735[13], i735[14], i735[15])
  return i734
}

Deserializers["Garage"] = function (request, data, root) {
  var i736 = root || request.c( 'Garage' )
  var i737 = data
  request.r(i737[0], i737[1], 0, i736, 'car')
  return i736
}

Deserializers["CharactersMover"] = function (request, data, root) {
  var i738 = root || request.c( 'CharactersMover' )
  var i739 = data
  var i741 = i739[0]
  var i740 = []
  for(var i = 0; i < i741.length; i += 2) {
  request.r(i741[i + 0], i741[i + 1], 2, i740, '')
  }
  i738.movePoints = i740
  request.r(i739[1], i739[2], 0, i738, 'animator')
  return i738
}

Deserializers["Chopper"] = function (request, data, root) {
  var i744 = root || request.c( 'Chopper' )
  var i745 = data
  var i747 = i745[0]
  var i746 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i747.length; i += 2) {
  request.r(i747[i + 0], i747[i + 1], 1, i746, '')
  }
  i744._cargo = i746
  return i744
}

Deserializers["LoadPoint"] = function (request, data, root) {
  var i750 = root || request.c( 'LoadPoint' )
  var i751 = data
  i750.delay = i751[0]
  i750.moveDuration = i751[1]
  return i750
}

Deserializers["SimplePoint"] = function (request, data, root) {
  var i752 = root || request.c( 'SimplePoint' )
  var i753 = data
  i752.delay = i753[0]
  i752.moveDuration = i753[1]
  return i752
}

Deserializers["UnloadPoint"] = function (request, data, root) {
  var i754 = root || request.c( 'UnloadPoint' )
  var i755 = data
  i754.delay = i755[0]
  i754.moveDuration = i755[1]
  return i754
}

Deserializers["MoneyController"] = function (request, data, root) {
  var i756 = root || request.c( 'MoneyController' )
  var i757 = data
  request.r(i757[0], i757[1], 0, i756, '_moneyBalance')
  return i756
}

Deserializers["MoneyBalance"] = function (request, data, root) {
  var i758 = root || request.c( 'MoneyBalance' )
  var i759 = data
  request.r(i759[0], i759[1], 0, i758, '_text')
  return i758
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i760 = root || request.c( 'UnityEngine.UI.Image' )
  var i761 = data
  request.r(i761[0], i761[1], 0, i760, 'm_Sprite')
  i760.m_Type = i761[2]
  i760.m_PreserveAspect = !!i761[3]
  i760.m_FillCenter = !!i761[4]
  i760.m_FillMethod = i761[5]
  i760.m_FillAmount = i761[6]
  i760.m_FillClockwise = !!i761[7]
  i760.m_FillOrigin = i761[8]
  i760.m_UseSpriteMesh = !!i761[9]
  i760.m_PixelsPerUnitMultiplier = i761[10]
  request.r(i761[11], i761[12], 0, i760, 'm_Material')
  i760.m_Maskable = !!i761[13]
  i760.m_Color = new pc.Color(i761[14], i761[15], i761[16], i761[17])
  i760.m_RaycastTarget = !!i761[18]
  i760.m_RaycastPadding = new pc.Vec4( i761[19], i761[20], i761[21], i761[22] )
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i763 = data
  i762.ambientIntensity = i763[0]
  i762.reflectionIntensity = i763[1]
  i762.ambientMode = i763[2]
  i762.ambientLight = new pc.Color(i763[3], i763[4], i763[5], i763[6])
  i762.ambientSkyColor = new pc.Color(i763[7], i763[8], i763[9], i763[10])
  i762.ambientGroundColor = new pc.Color(i763[11], i763[12], i763[13], i763[14])
  i762.ambientEquatorColor = new pc.Color(i763[15], i763[16], i763[17], i763[18])
  i762.fogColor = new pc.Color(i763[19], i763[20], i763[21], i763[22])
  i762.fogEndDistance = i763[23]
  i762.fogStartDistance = i763[24]
  i762.fogDensity = i763[25]
  i762.fog = !!i763[26]
  request.r(i763[27], i763[28], 0, i762, 'skybox')
  i762.fogMode = i763[29]
  var i765 = i763[30]
  var i764 = []
  for(var i = 0; i < i765.length; i += 1) {
    i764.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i765[i + 0]) );
  }
  i762.lightmaps = i764
  i762.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i763[31], i762.lightProbes)
  i762.lightmapsMode = i763[32]
  i762.mixedBakeMode = i763[33]
  i762.environmentLightingMode = i763[34]
  i762.ambientProbe = new pc.SphericalHarmonicsL2(i763[35])
  i762.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i763[36])
  i762.useReferenceAmbientProbe = !!i763[37]
  request.r(i763[38], i763[39], 0, i762, 'customReflection')
  request.r(i763[40], i763[41], 0, i762, 'defaultReflection')
  i762.defaultReflectionMode = i763[42]
  i762.defaultReflectionResolution = i763[43]
  i762.sunLightObjectId = i763[44]
  i762.pixelLightCount = i763[45]
  i762.defaultReflectionHDR = !!i763[46]
  i762.hasLightDataAsset = !!i763[47]
  i762.hasManualGenerate = !!i763[48]
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i769 = data
  request.r(i769[0], i769[1], 0, i768, 'lightmapColor')
  request.r(i769[2], i769[3], 0, i768, 'lightmapDirection')
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i770 = root || new UnityEngine.LightProbes()
  var i771 = data
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i779 = data
  var i781 = i779[0]
  var i780 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i781.length; i += 1) {
    i780.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i781[i + 0]));
  }
  i778.ShaderCompilationErrors = i780
  i778.name = i779[1]
  i778.guid = i779[2]
  var i783 = i779[3]
  var i782 = []
  for(var i = 0; i < i783.length; i += 1) {
    i782.push( i783[i + 0] );
  }
  i778.shaderDefinedKeywords = i782
  var i785 = i779[4]
  var i784 = []
  for(var i = 0; i < i785.length; i += 1) {
    i784.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i785[i + 0]) );
  }
  i778.passes = i784
  var i787 = i779[5]
  var i786 = []
  for(var i = 0; i < i787.length; i += 1) {
    i786.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i787[i + 0]) );
  }
  i778.usePasses = i786
  var i789 = i779[6]
  var i788 = []
  for(var i = 0; i < i789.length; i += 1) {
    i788.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i789[i + 0]) );
  }
  i778.defaultParameterValues = i788
  request.r(i779[7], i779[8], 0, i778, 'unityFallbackShader')
  i778.readDepth = !!i779[9]
  i778.isCreatedByShaderGraph = !!i779[10]
  i778.compiled = !!i779[11]
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i793 = data
  i792.shaderName = i793[0]
  i792.errorMessage = i793[1]
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i798 = root || new pc.UnityShaderPass()
  var i799 = data
  i798.id = i799[0]
  i798.subShaderIndex = i799[1]
  i798.name = i799[2]
  i798.passType = i799[3]
  i798.grabPassTextureName = i799[4]
  i798.usePass = !!i799[5]
  i798.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i799[6], i798.zTest)
  i798.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i799[7], i798.zWrite)
  i798.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i799[8], i798.culling)
  i798.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i799[9], i798.blending)
  i798.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i799[10], i798.alphaBlending)
  i798.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i799[11], i798.colorWriteMask)
  i798.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i799[12], i798.offsetUnits)
  i798.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i799[13], i798.offsetFactor)
  i798.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i799[14], i798.stencilRef)
  i798.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i799[15], i798.stencilReadMask)
  i798.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i799[16], i798.stencilWriteMask)
  i798.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i799[17], i798.stencilOp)
  i798.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i799[18], i798.stencilOpFront)
  i798.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i799[19], i798.stencilOpBack)
  var i801 = i799[20]
  var i800 = []
  for(var i = 0; i < i801.length; i += 1) {
    i800.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i801[i + 0]) );
  }
  i798.tags = i800
  var i803 = i799[21]
  var i802 = []
  for(var i = 0; i < i803.length; i += 1) {
    i802.push( i803[i + 0] );
  }
  i798.passDefinedKeywords = i802
  var i805 = i799[22]
  var i804 = []
  for(var i = 0; i < i805.length; i += 1) {
    i804.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i805[i + 0]) );
  }
  i798.passDefinedKeywordGroups = i804
  var i807 = i799[23]
  var i806 = []
  for(var i = 0; i < i807.length; i += 1) {
    i806.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i807[i + 0]) );
  }
  i798.variants = i806
  var i809 = i799[24]
  var i808 = []
  for(var i = 0; i < i809.length; i += 1) {
    i808.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i809[i + 0]) );
  }
  i798.excludedVariants = i808
  i798.hasDepthReader = !!i799[25]
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i811 = data
  i810.val = i811[0]
  i810.name = i811[1]
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i813 = data
  i812.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i813[0], i812.src)
  i812.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i813[1], i812.dst)
  i812.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i813[2], i812.op)
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i815 = data
  i814.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i815[0], i814.pass)
  i814.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i815[1], i814.fail)
  i814.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i815[2], i814.zFail)
  i814.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i815[3], i814.comp)
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i819 = data
  i818.name = i819[0]
  i818.value = i819[1]
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i823 = data
  var i825 = i823[0]
  var i824 = []
  for(var i = 0; i < i825.length; i += 1) {
    i824.push( i825[i + 0] );
  }
  i822.keywords = i824
  i822.hasDiscard = !!i823[1]
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i829 = data
  i828.passId = i829[0]
  i828.subShaderIndex = i829[1]
  var i831 = i829[2]
  var i830 = []
  for(var i = 0; i < i831.length; i += 1) {
    i830.push( i831[i + 0] );
  }
  i828.keywords = i830
  i828.vertexProgram = i829[3]
  i828.fragmentProgram = i829[4]
  i828.exportedForWebGl2 = !!i829[5]
  i828.readDepth = !!i829[6]
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i835 = data
  request.r(i835[0], i835[1], 0, i834, 'shader')
  i834.pass = i835[2]
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i839 = data
  i838.name = i839[0]
  i838.type = i839[1]
  i838.value = new pc.Vec4( i839[2], i839[3], i839[4], i839[5] )
  i838.textureValue = i839[6]
  i838.shaderPropertyFlag = i839[7]
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i841 = data
  i840.name = i841[0]
  request.r(i841[1], i841[2], 0, i840, 'texture')
  i840.aabb = i841[3]
  i840.vertices = i841[4]
  i840.triangles = i841[5]
  i840.textureRect = UnityEngine.Rect.MinMaxRect(i841[6], i841[7], i841[8], i841[9])
  i840.packedRect = UnityEngine.Rect.MinMaxRect(i841[10], i841[11], i841[12], i841[13])
  i840.border = new pc.Vec4( i841[14], i841[15], i841[16], i841[17] )
  i840.transparency = i841[18]
  i840.bounds = i841[19]
  i840.pixelsPerUnit = i841[20]
  i840.textureWidth = i841[21]
  i840.textureHeight = i841[22]
  i840.nativeSize = new pc.Vec2( i841[23], i841[24] )
  i840.pivot = new pc.Vec2( i841[25], i841[26] )
  i840.textureRectOffset = new pc.Vec2( i841[27], i841[28] )
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i843 = data
  i842.name = i843[0]
  i842.wrapMode = i843[1]
  i842.isLooping = !!i843[2]
  i842.length = i843[3]
  var i845 = i843[4]
  var i844 = []
  for(var i = 0; i < i845.length; i += 1) {
    i844.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i845[i + 0]) );
  }
  i842.curves = i844
  var i847 = i843[5]
  var i846 = []
  for(var i = 0; i < i847.length; i += 1) {
    i846.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i847[i + 0]) );
  }
  i842.events = i846
  i842.halfPrecision = !!i843[6]
  i842._frameRate = i843[7]
  i842.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i843[8], i842.localBounds)
  i842.hasMuscleCurves = !!i843[9]
  var i849 = i843[10]
  var i848 = []
  for(var i = 0; i < i849.length; i += 1) {
    i848.push( i849[i + 0] );
  }
  i842.clipMuscleConstant = i848
  i842.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i843[11], i842.clipBindingConstant)
  return i842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i853 = data
  i852.path = i853[0]
  i852.hash = i853[1]
  i852.componentType = i853[2]
  i852.property = i853[3]
  i852.keys = i853[4]
  var i855 = i853[5]
  var i854 = []
  for(var i = 0; i < i855.length; i += 1) {
    i854.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i855[i + 0]) );
  }
  i852.objectReferenceKeys = i854
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i859 = data
  i858.time = i859[0]
  request.r(i859[1], i859[2], 0, i858, 'value')
  return i858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i863 = data
  i862.functionName = i863[0]
  i862.floatParameter = i863[1]
  i862.intParameter = i863[2]
  i862.stringParameter = i863[3]
  request.r(i863[4], i863[5], 0, i862, 'objectReferenceParameter')
  i862.time = i863[6]
  return i862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i865 = data
  i864.center = new pc.Vec3( i865[0], i865[1], i865[2] )
  i864.extends = new pc.Vec3( i865[3], i865[4], i865[5] )
  return i864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i869 = data
  var i871 = i869[0]
  var i870 = []
  for(var i = 0; i < i871.length; i += 1) {
    i870.push( i871[i + 0] );
  }
  i868.genericBindings = i870
  var i873 = i869[1]
  var i872 = []
  for(var i = 0; i < i873.length; i += 1) {
    i872.push( i873[i + 0] );
  }
  i868.pptrCurveMapping = i872
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i875 = data
  i874.name = i875[0]
  i874.ascent = i875[1]
  i874.originalLineHeight = i875[2]
  i874.fontSize = i875[3]
  var i877 = i875[4]
  var i876 = []
  for(var i = 0; i < i877.length; i += 1) {
    i876.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i877[i + 0]) );
  }
  i874.characterInfo = i876
  request.r(i875[5], i875[6], 0, i874, 'texture')
  i874.originalFontSize = i875[7]
  return i874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i881 = data
  i880.index = i881[0]
  i880.advance = i881[1]
  i880.bearing = i881[2]
  i880.glyphWidth = i881[3]
  i880.glyphHeight = i881[4]
  i880.minX = i881[5]
  i880.maxX = i881[6]
  i880.minY = i881[7]
  i880.maxY = i881[8]
  i880.uvBottomLeftX = i881[9]
  i880.uvBottomLeftY = i881[10]
  i880.uvBottomRightX = i881[11]
  i880.uvBottomRightY = i881[12]
  i880.uvTopLeftX = i881[13]
  i880.uvTopLeftY = i881[14]
  i880.uvTopRightX = i881[15]
  i880.uvTopRightY = i881[16]
  return i880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i883 = data
  i882.name = i883[0]
  var i885 = i883[1]
  var i884 = []
  for(var i = 0; i < i885.length; i += 1) {
    i884.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i885[i + 0]) );
  }
  i882.layers = i884
  var i887 = i883[2]
  var i886 = []
  for(var i = 0; i < i887.length; i += 1) {
    i886.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i887[i + 0]) );
  }
  i882.parameters = i886
  i882.animationClips = i883[3]
  i882.avatarUnsupported = i883[4]
  return i882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i891 = data
  i890.name = i891[0]
  i890.defaultWeight = i891[1]
  i890.blendingMode = i891[2]
  i890.avatarMask = i891[3]
  i890.syncedLayerIndex = i891[4]
  i890.syncedLayerAffectsTiming = !!i891[5]
  i890.syncedLayers = i891[6]
  i890.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i891[7], i890.stateMachine)
  return i890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i893 = data
  i892.id = i893[0]
  i892.name = i893[1]
  i892.path = i893[2]
  var i895 = i893[3]
  var i894 = []
  for(var i = 0; i < i895.length; i += 1) {
    i894.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i895[i + 0]) );
  }
  i892.states = i894
  var i897 = i893[4]
  var i896 = []
  for(var i = 0; i < i897.length; i += 1) {
    i896.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i897[i + 0]) );
  }
  i892.machines = i896
  var i899 = i893[5]
  var i898 = []
  for(var i = 0; i < i899.length; i += 1) {
    i898.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i899[i + 0]) );
  }
  i892.entryStateTransitions = i898
  var i901 = i893[6]
  var i900 = []
  for(var i = 0; i < i901.length; i += 1) {
    i900.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i901[i + 0]) );
  }
  i892.exitStateTransitions = i900
  var i903 = i893[7]
  var i902 = []
  for(var i = 0; i < i903.length; i += 1) {
    i902.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i903[i + 0]) );
  }
  i892.anyStateTransitions = i902
  i892.defaultStateId = i893[8]
  return i892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i907 = data
  i906.id = i907[0]
  i906.name = i907[1]
  i906.cycleOffset = i907[2]
  i906.cycleOffsetParameter = i907[3]
  i906.cycleOffsetParameterActive = !!i907[4]
  i906.mirror = !!i907[5]
  i906.mirrorParameter = i907[6]
  i906.mirrorParameterActive = !!i907[7]
  i906.motionId = i907[8]
  i906.nameHash = i907[9]
  i906.fullPathHash = i907[10]
  i906.speed = i907[11]
  i906.speedParameter = i907[12]
  i906.speedParameterActive = !!i907[13]
  i906.tag = i907[14]
  i906.tagHash = i907[15]
  i906.writeDefaultValues = !!i907[16]
  var i909 = i907[17]
  var i908 = []
  for(var i = 0; i < i909.length; i += 2) {
  request.r(i909[i + 0], i909[i + 1], 2, i908, '')
  }
  i906.behaviours = i908
  var i911 = i907[18]
  var i910 = []
  for(var i = 0; i < i911.length; i += 1) {
    i910.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i911[i + 0]) );
  }
  i906.transitions = i910
  return i906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i917 = data
  i916.fullPath = i917[0]
  i916.canTransitionToSelf = !!i917[1]
  i916.duration = i917[2]
  i916.exitTime = i917[3]
  i916.hasExitTime = !!i917[4]
  i916.hasFixedDuration = !!i917[5]
  i916.interruptionSource = i917[6]
  i916.offset = i917[7]
  i916.orderedInterruption = !!i917[8]
  i916.destinationStateId = i917[9]
  i916.isExit = !!i917[10]
  i916.mute = !!i917[11]
  i916.solo = !!i917[12]
  var i919 = i917[13]
  var i918 = []
  for(var i = 0; i < i919.length; i += 1) {
    i918.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i919[i + 0]) );
  }
  i916.conditions = i918
  return i916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i925 = data
  i924.destinationStateId = i925[0]
  i924.isExit = !!i925[1]
  i924.mute = !!i925[2]
  i924.solo = !!i925[3]
  var i927 = i925[4]
  var i926 = []
  for(var i = 0; i < i927.length; i += 1) {
    i926.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i927[i + 0]) );
  }
  i924.conditions = i926
  return i924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i931 = data
  i930.defaultBool = !!i931[0]
  i930.defaultFloat = i931[1]
  i930.defaultInt = i931[2]
  i930.name = i931[3]
  i930.nameHash = i931[4]
  i930.type = i931[5]
  return i930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i933 = data
  i932.name = i933[0]
  i932.bytes64 = i933[1]
  i932.data = i933[2]
  return i932
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i934 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i935 = data
  i934.hashCode = i935[0]
  request.r(i935[1], i935[2], 0, i934, 'material')
  i934.materialHashCode = i935[3]
  request.r(i935[4], i935[5], 0, i934, 'atlas')
  i934.normalStyle = i935[6]
  i934.normalSpacingOffset = i935[7]
  i934.boldStyle = i935[8]
  i934.boldSpacing = i935[9]
  i934.italicStyle = i935[10]
  i934.tabSize = i935[11]
  i934.m_Version = i935[12]
  i934.m_SourceFontFileGUID = i935[13]
  request.r(i935[14], i935[15], 0, i934, 'm_SourceFontFile_EditorRef')
  request.r(i935[16], i935[17], 0, i934, 'm_SourceFontFile')
  i934.m_AtlasPopulationMode = i935[18]
  i934.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i935[19], i934.m_FaceInfo)
  var i937 = i935[20]
  var i936 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i937.length; i += 1) {
    i936.add(request.d('UnityEngine.TextCore.Glyph', i937[i + 0]));
  }
  i934.m_GlyphTable = i936
  var i939 = i935[21]
  var i938 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i939.length; i += 1) {
    i938.add(request.d('TMPro.TMP_Character', i939[i + 0]));
  }
  i934.m_CharacterTable = i938
  var i941 = i935[22]
  var i940 = []
  for(var i = 0; i < i941.length; i += 2) {
  request.r(i941[i + 0], i941[i + 1], 2, i940, '')
  }
  i934.m_AtlasTextures = i940
  i934.m_AtlasTextureIndex = i935[23]
  i934.m_IsMultiAtlasTexturesEnabled = !!i935[24]
  i934.m_ClearDynamicDataOnBuild = !!i935[25]
  var i943 = i935[26]
  var i942 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i943.length; i += 1) {
    i942.add(request.d('UnityEngine.TextCore.GlyphRect', i943[i + 0]));
  }
  i934.m_UsedGlyphRects = i942
  var i945 = i935[27]
  var i944 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i945.length; i += 1) {
    i944.add(request.d('UnityEngine.TextCore.GlyphRect', i945[i + 0]));
  }
  i934.m_FreeGlyphRects = i944
  i934.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i935[28], i934.m_fontInfo)
  i934.m_AtlasWidth = i935[29]
  i934.m_AtlasHeight = i935[30]
  i934.m_AtlasPadding = i935[31]
  i934.m_AtlasRenderMode = i935[32]
  var i947 = i935[33]
  var i946 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i947.length; i += 1) {
    i946.add(request.d('TMPro.TMP_Glyph', i947[i + 0]));
  }
  i934.m_glyphInfoList = i946
  i934.m_KerningTable = request.d('TMPro.KerningTable', i935[34], i934.m_KerningTable)
  i934.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i935[35], i934.m_FontFeatureTable)
  var i949 = i935[36]
  var i948 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i949.length; i += 2) {
  request.r(i949[i + 0], i949[i + 1], 1, i948, '')
  }
  i934.fallbackFontAssets = i948
  var i951 = i935[37]
  var i950 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i951.length; i += 2) {
  request.r(i951[i + 0], i951[i + 1], 1, i950, '')
  }
  i934.m_FallbackFontAssetTable = i950
  i934.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i935[38], i934.m_CreationSettings)
  var i953 = i935[39]
  var i952 = []
  for(var i = 0; i < i953.length; i += 1) {
    i952.push( request.d('TMPro.TMP_FontWeightPair', i953[i + 0]) );
  }
  i934.m_FontWeightTable = i952
  var i955 = i935[40]
  var i954 = []
  for(var i = 0; i < i955.length; i += 1) {
    i954.push( request.d('TMPro.TMP_FontWeightPair', i955[i + 0]) );
  }
  i934.fontWeights = i954
  return i934
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i956 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i957 = data
  i956.m_FaceIndex = i957[0]
  i956.m_FamilyName = i957[1]
  i956.m_StyleName = i957[2]
  i956.m_PointSize = i957[3]
  i956.m_Scale = i957[4]
  i956.m_UnitsPerEM = i957[5]
  i956.m_LineHeight = i957[6]
  i956.m_AscentLine = i957[7]
  i956.m_CapLine = i957[8]
  i956.m_MeanLine = i957[9]
  i956.m_Baseline = i957[10]
  i956.m_DescentLine = i957[11]
  i956.m_SuperscriptOffset = i957[12]
  i956.m_SuperscriptSize = i957[13]
  i956.m_SubscriptOffset = i957[14]
  i956.m_SubscriptSize = i957[15]
  i956.m_UnderlineOffset = i957[16]
  i956.m_UnderlineThickness = i957[17]
  i956.m_StrikethroughOffset = i957[18]
  i956.m_StrikethroughThickness = i957[19]
  i956.m_TabWidth = i957[20]
  return i956
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i960 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i961 = data
  i960.m_Index = i961[0]
  i960.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i961[1], i960.m_Metrics)
  i960.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i961[2], i960.m_GlyphRect)
  i960.m_Scale = i961[3]
  i960.m_AtlasIndex = i961[4]
  i960.m_ClassDefinitionType = i961[5]
  return i960
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i962 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i963 = data
  i962.m_Width = i963[0]
  i962.m_Height = i963[1]
  i962.m_HorizontalBearingX = i963[2]
  i962.m_HorizontalBearingY = i963[3]
  i962.m_HorizontalAdvance = i963[4]
  return i962
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i964 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i965 = data
  i964.m_X = i965[0]
  i964.m_Y = i965[1]
  i964.m_Width = i965[2]
  i964.m_Height = i965[3]
  return i964
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i968 = root || request.c( 'TMPro.TMP_Character' )
  var i969 = data
  i968.m_ElementType = i969[0]
  i968.m_Unicode = i969[1]
  i968.m_GlyphIndex = i969[2]
  i968.m_Scale = i969[3]
  return i968
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i974 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i975 = data
  i974.Name = i975[0]
  i974.PointSize = i975[1]
  i974.Scale = i975[2]
  i974.CharacterCount = i975[3]
  i974.LineHeight = i975[4]
  i974.Baseline = i975[5]
  i974.Ascender = i975[6]
  i974.CapHeight = i975[7]
  i974.Descender = i975[8]
  i974.CenterLine = i975[9]
  i974.SuperscriptOffset = i975[10]
  i974.SubscriptOffset = i975[11]
  i974.SubSize = i975[12]
  i974.Underline = i975[13]
  i974.UnderlineThickness = i975[14]
  i974.strikethrough = i975[15]
  i974.strikethroughThickness = i975[16]
  i974.TabWidth = i975[17]
  i974.Padding = i975[18]
  i974.AtlasWidth = i975[19]
  i974.AtlasHeight = i975[20]
  return i974
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i978 = root || request.c( 'TMPro.TMP_Glyph' )
  var i979 = data
  i978.id = i979[0]
  i978.x = i979[1]
  i978.y = i979[2]
  i978.width = i979[3]
  i978.height = i979[4]
  i978.xOffset = i979[5]
  i978.yOffset = i979[6]
  i978.xAdvance = i979[7]
  i978.scale = i979[8]
  return i978
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i980 = root || request.c( 'TMPro.KerningTable' )
  var i981 = data
  var i983 = i981[0]
  var i982 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i983.length; i += 1) {
    i982.add(request.d('TMPro.KerningPair', i983[i + 0]));
  }
  i980.kerningPairs = i982
  return i980
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i986 = root || request.c( 'TMPro.KerningPair' )
  var i987 = data
  i986.xOffset = i987[0]
  i986.m_FirstGlyph = i987[1]
  i986.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i987[2], i986.m_FirstGlyphAdjustments)
  i986.m_SecondGlyph = i987[3]
  i986.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i987[4], i986.m_SecondGlyphAdjustments)
  i986.m_IgnoreSpacingAdjustments = !!i987[5]
  return i986
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i988 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i989 = data
  var i991 = i989[0]
  var i990 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i991.length; i += 1) {
    i990.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i991[i + 0]));
  }
  i988.m_GlyphPairAdjustmentRecords = i990
  return i988
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i994 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i995 = data
  i994.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i995[0], i994.m_FirstAdjustmentRecord)
  i994.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i995[1], i994.m_SecondAdjustmentRecord)
  i994.m_FeatureLookupFlags = i995[2]
  return i994
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i996 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i997 = data
  i996.m_GlyphIndex = i997[0]
  i996.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i997[1], i996.m_GlyphValueRecord)
  return i996
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i998 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i999 = data
  i998.m_XPlacement = i999[0]
  i998.m_YPlacement = i999[1]
  i998.m_XAdvance = i999[2]
  i998.m_YAdvance = i999[3]
  return i998
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1002 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1003 = data
  i1002.sourceFontFileName = i1003[0]
  i1002.sourceFontFileGUID = i1003[1]
  i1002.pointSizeSamplingMode = i1003[2]
  i1002.pointSize = i1003[3]
  i1002.padding = i1003[4]
  i1002.packingMode = i1003[5]
  i1002.atlasWidth = i1003[6]
  i1002.atlasHeight = i1003[7]
  i1002.characterSetSelectionMode = i1003[8]
  i1002.characterSequence = i1003[9]
  i1002.referencedFontAssetGUID = i1003[10]
  i1002.referencedTextAssetGUID = i1003[11]
  i1002.fontStyle = i1003[12]
  i1002.fontStyleModifier = i1003[13]
  i1002.renderMode = i1003[14]
  i1002.includeFontFeatures = !!i1003[15]
  return i1002
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1006 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1007 = data
  request.r(i1007[0], i1007[1], 0, i1006, 'regularTypeface')
  request.r(i1007[2], i1007[3], 0, i1006, 'italicTypeface')
  return i1006
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1008 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1009 = data
  i1008.useSafeMode = !!i1009[0]
  i1008.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1009[1], i1008.safeModeOptions)
  i1008.timeScale = i1009[2]
  i1008.unscaledTimeScale = i1009[3]
  i1008.useSmoothDeltaTime = !!i1009[4]
  i1008.maxSmoothUnscaledTime = i1009[5]
  i1008.rewindCallbackMode = i1009[6]
  i1008.showUnityEditorReport = !!i1009[7]
  i1008.logBehaviour = i1009[8]
  i1008.drawGizmos = !!i1009[9]
  i1008.defaultRecyclable = !!i1009[10]
  i1008.defaultAutoPlay = i1009[11]
  i1008.defaultUpdateType = i1009[12]
  i1008.defaultTimeScaleIndependent = !!i1009[13]
  i1008.defaultEaseType = i1009[14]
  i1008.defaultEaseOvershootOrAmplitude = i1009[15]
  i1008.defaultEasePeriod = i1009[16]
  i1008.defaultAutoKill = !!i1009[17]
  i1008.defaultLoopType = i1009[18]
  i1008.debugMode = !!i1009[19]
  i1008.debugStoreTargetId = !!i1009[20]
  i1008.showPreviewPanel = !!i1009[21]
  i1008.storeSettingsLocation = i1009[22]
  i1008.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1009[23], i1008.modules)
  i1008.createASMDEF = !!i1009[24]
  i1008.showPlayingTweens = !!i1009[25]
  i1008.showPausedTweens = !!i1009[26]
  return i1008
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1010 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1011 = data
  i1010.logBehaviour = i1011[0]
  i1010.nestedTweenFailureBehaviour = i1011[1]
  return i1010
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1012 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1013 = data
  i1012.showPanel = !!i1013[0]
  i1012.audioEnabled = !!i1013[1]
  i1012.physicsEnabled = !!i1013[2]
  i1012.physics2DEnabled = !!i1013[3]
  i1012.spriteEnabled = !!i1013[4]
  i1012.uiEnabled = !!i1013[5]
  i1012.textMeshProEnabled = !!i1013[6]
  i1012.tk2DEnabled = !!i1013[7]
  i1012.deAudioEnabled = !!i1013[8]
  i1012.deUnityExtendedEnabled = !!i1013[9]
  i1012.epoOutlineEnabled = !!i1013[10]
  return i1012
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1014 = root || request.c( 'TMPro.TMP_Settings' )
  var i1015 = data
  i1014.m_enableWordWrapping = !!i1015[0]
  i1014.m_enableKerning = !!i1015[1]
  i1014.m_enableExtraPadding = !!i1015[2]
  i1014.m_enableTintAllSprites = !!i1015[3]
  i1014.m_enableParseEscapeCharacters = !!i1015[4]
  i1014.m_EnableRaycastTarget = !!i1015[5]
  i1014.m_GetFontFeaturesAtRuntime = !!i1015[6]
  i1014.m_missingGlyphCharacter = i1015[7]
  i1014.m_warningsDisabled = !!i1015[8]
  request.r(i1015[9], i1015[10], 0, i1014, 'm_defaultFontAsset')
  i1014.m_defaultFontAssetPath = i1015[11]
  i1014.m_defaultFontSize = i1015[12]
  i1014.m_defaultAutoSizeMinRatio = i1015[13]
  i1014.m_defaultAutoSizeMaxRatio = i1015[14]
  i1014.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1015[15], i1015[16] )
  i1014.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1015[17], i1015[18] )
  i1014.m_autoSizeTextContainer = !!i1015[19]
  i1014.m_IsTextObjectScaleStatic = !!i1015[20]
  var i1017 = i1015[21]
  var i1016 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1017.length; i += 2) {
  request.r(i1017[i + 0], i1017[i + 1], 1, i1016, '')
  }
  i1014.m_fallbackFontAssets = i1016
  i1014.m_matchMaterialPreset = !!i1015[22]
  request.r(i1015[23], i1015[24], 0, i1014, 'm_defaultSpriteAsset')
  i1014.m_defaultSpriteAssetPath = i1015[25]
  i1014.m_enableEmojiSupport = !!i1015[26]
  i1014.m_MissingCharacterSpriteUnicode = i1015[27]
  i1014.m_defaultColorGradientPresetsPath = i1015[28]
  request.r(i1015[29], i1015[30], 0, i1014, 'm_defaultStyleSheet')
  i1014.m_StyleSheetsResourcePath = i1015[31]
  request.r(i1015[32], i1015[33], 0, i1014, 'm_leadingCharacters')
  request.r(i1015[34], i1015[35], 0, i1014, 'm_followingCharacters')
  i1014.m_UseModernHangulLineBreakingRules = !!i1015[36]
  return i1014
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1018 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1019 = data
  i1018.hashCode = i1019[0]
  request.r(i1019[1], i1019[2], 0, i1018, 'material')
  i1018.materialHashCode = i1019[3]
  request.r(i1019[4], i1019[5], 0, i1018, 'spriteSheet')
  var i1021 = i1019[6]
  var i1020 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1021.length; i += 1) {
    i1020.add(request.d('TMPro.TMP_Sprite', i1021[i + 0]));
  }
  i1018.spriteInfoList = i1020
  var i1023 = i1019[7]
  var i1022 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1023.length; i += 2) {
  request.r(i1023[i + 0], i1023[i + 1], 1, i1022, '')
  }
  i1018.fallbackSpriteAssets = i1022
  i1018.m_Version = i1019[8]
  i1018.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1019[9], i1018.m_FaceInfo)
  var i1025 = i1019[10]
  var i1024 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1025.length; i += 1) {
    i1024.add(request.d('TMPro.TMP_SpriteCharacter', i1025[i + 0]));
  }
  i1018.m_SpriteCharacterTable = i1024
  var i1027 = i1019[11]
  var i1026 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1027.length; i += 1) {
    i1026.add(request.d('TMPro.TMP_SpriteGlyph', i1027[i + 0]));
  }
  i1018.m_SpriteGlyphTable = i1026
  return i1018
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1030 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1031 = data
  i1030.name = i1031[0]
  i1030.hashCode = i1031[1]
  i1030.unicode = i1031[2]
  i1030.pivot = new pc.Vec2( i1031[3], i1031[4] )
  request.r(i1031[5], i1031[6], 0, i1030, 'sprite')
  i1030.id = i1031[7]
  i1030.x = i1031[8]
  i1030.y = i1031[9]
  i1030.width = i1031[10]
  i1030.height = i1031[11]
  i1030.xOffset = i1031[12]
  i1030.yOffset = i1031[13]
  i1030.xAdvance = i1031[14]
  i1030.scale = i1031[15]
  return i1030
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1036 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1037 = data
  i1036.m_Name = i1037[0]
  i1036.m_HashCode = i1037[1]
  i1036.m_ElementType = i1037[2]
  i1036.m_Unicode = i1037[3]
  i1036.m_GlyphIndex = i1037[4]
  i1036.m_Scale = i1037[5]
  return i1036
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1040 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1041 = data
  request.r(i1041[0], i1041[1], 0, i1040, 'sprite')
  i1040.m_Index = i1041[2]
  i1040.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1041[3], i1040.m_Metrics)
  i1040.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1041[4], i1040.m_GlyphRect)
  i1040.m_Scale = i1041[5]
  i1040.m_AtlasIndex = i1041[6]
  i1040.m_ClassDefinitionType = i1041[7]
  return i1040
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1042 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1043 = data
  var i1045 = i1043[0]
  var i1044 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1045.length; i += 1) {
    i1044.add(request.d('TMPro.TMP_Style', i1045[i + 0]));
  }
  i1042.m_StyleList = i1044
  return i1042
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1048 = root || request.c( 'TMPro.TMP_Style' )
  var i1049 = data
  i1048.m_Name = i1049[0]
  i1048.m_HashCode = i1049[1]
  i1048.m_OpeningDefinition = i1049[2]
  i1048.m_ClosingDefinition = i1049[3]
  i1048.m_OpeningTagArray = i1049[4]
  i1048.m_ClosingTagArray = i1049[5]
  i1048.m_OpeningTagUnicodeArray = i1049[6]
  i1048.m_ClosingTagUnicodeArray = i1049[7]
  return i1048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1051 = data
  var i1053 = i1051[0]
  var i1052 = []
  for(var i = 0; i < i1053.length; i += 1) {
    i1052.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1053[i + 0]) );
  }
  i1050.files = i1052
  i1050.componentToPrefabIds = i1051[1]
  return i1050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1057 = data
  i1056.path = i1057[0]
  request.r(i1057[1], i1057[2], 0, i1056, 'unityObject')
  return i1056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1059 = data
  var i1061 = i1059[0]
  var i1060 = []
  for(var i = 0; i < i1061.length; i += 1) {
    i1060.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1061[i + 0]) );
  }
  i1058.scriptsExecutionOrder = i1060
  var i1063 = i1059[1]
  var i1062 = []
  for(var i = 0; i < i1063.length; i += 1) {
    i1062.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1063[i + 0]) );
  }
  i1058.sortingLayers = i1062
  var i1065 = i1059[2]
  var i1064 = []
  for(var i = 0; i < i1065.length; i += 1) {
    i1064.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1065[i + 0]) );
  }
  i1058.cullingLayers = i1064
  i1058.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1059[3], i1058.timeSettings)
  i1058.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1059[4], i1058.physicsSettings)
  i1058.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1059[5], i1058.physics2DSettings)
  i1058.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1059[6], i1058.qualitySettings)
  i1058.enableRealtimeShadows = !!i1059[7]
  i1058.enableAutoInstancing = !!i1059[8]
  i1058.enableDynamicBatching = !!i1059[9]
  i1058.lightmapEncodingQuality = i1059[10]
  i1058.desiredColorSpace = i1059[11]
  var i1067 = i1059[12]
  var i1066 = []
  for(var i = 0; i < i1067.length; i += 1) {
    i1066.push( i1067[i + 0] );
  }
  i1058.allTags = i1066
  return i1058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1071 = data
  i1070.name = i1071[0]
  i1070.value = i1071[1]
  return i1070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1075 = data
  i1074.id = i1075[0]
  i1074.name = i1075[1]
  i1074.value = i1075[2]
  return i1074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1079 = data
  i1078.id = i1079[0]
  i1078.name = i1079[1]
  return i1078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1080 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1081 = data
  i1080.fixedDeltaTime = i1081[0]
  i1080.maximumDeltaTime = i1081[1]
  i1080.timeScale = i1081[2]
  i1080.maximumParticleTimestep = i1081[3]
  return i1080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1083 = data
  i1082.gravity = new pc.Vec3( i1083[0], i1083[1], i1083[2] )
  i1082.defaultSolverIterations = i1083[3]
  i1082.bounceThreshold = i1083[4]
  i1082.autoSyncTransforms = !!i1083[5]
  i1082.autoSimulation = !!i1083[6]
  var i1085 = i1083[7]
  var i1084 = []
  for(var i = 0; i < i1085.length; i += 1) {
    i1084.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1085[i + 0]) );
  }
  i1082.collisionMatrix = i1084
  return i1082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1089 = data
  i1088.enabled = !!i1089[0]
  i1088.layerId = i1089[1]
  i1088.otherLayerId = i1089[2]
  return i1088
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1091 = data
  request.r(i1091[0], i1091[1], 0, i1090, 'material')
  i1090.gravity = new pc.Vec2( i1091[2], i1091[3] )
  i1090.positionIterations = i1091[4]
  i1090.velocityIterations = i1091[5]
  i1090.velocityThreshold = i1091[6]
  i1090.maxLinearCorrection = i1091[7]
  i1090.maxAngularCorrection = i1091[8]
  i1090.maxTranslationSpeed = i1091[9]
  i1090.maxRotationSpeed = i1091[10]
  i1090.baumgarteScale = i1091[11]
  i1090.baumgarteTOIScale = i1091[12]
  i1090.timeToSleep = i1091[13]
  i1090.linearSleepTolerance = i1091[14]
  i1090.angularSleepTolerance = i1091[15]
  i1090.defaultContactOffset = i1091[16]
  i1090.autoSimulation = !!i1091[17]
  i1090.queriesHitTriggers = !!i1091[18]
  i1090.queriesStartInColliders = !!i1091[19]
  i1090.callbacksOnDisable = !!i1091[20]
  i1090.reuseCollisionCallbacks = !!i1091[21]
  i1090.autoSyncTransforms = !!i1091[22]
  var i1093 = i1091[23]
  var i1092 = []
  for(var i = 0; i < i1093.length; i += 1) {
    i1092.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1093[i + 0]) );
  }
  i1090.collisionMatrix = i1092
  return i1090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1096 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1097 = data
  i1096.enabled = !!i1097[0]
  i1096.layerId = i1097[1]
  i1096.otherLayerId = i1097[2]
  return i1096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1099 = data
  var i1101 = i1099[0]
  var i1100 = []
  for(var i = 0; i < i1101.length; i += 1) {
    i1100.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1101[i + 0]) );
  }
  i1098.qualityLevels = i1100
  var i1103 = i1099[1]
  var i1102 = []
  for(var i = 0; i < i1103.length; i += 1) {
    i1102.push( i1103[i + 0] );
  }
  i1098.names = i1102
  i1098.shadows = i1099[2]
  i1098.anisotropicFiltering = i1099[3]
  i1098.antiAliasing = i1099[4]
  i1098.lodBias = i1099[5]
  i1098.shadowCascades = i1099[6]
  i1098.shadowDistance = i1099[7]
  i1098.shadowmaskMode = i1099[8]
  i1098.shadowProjection = i1099[9]
  i1098.shadowResolution = i1099[10]
  i1098.softParticles = !!i1099[11]
  i1098.softVegetation = !!i1099[12]
  i1098.activeColorSpace = i1099[13]
  i1098.desiredColorSpace = i1099[14]
  i1098.masterTextureLimit = i1099[15]
  i1098.maxQueuedFrames = i1099[16]
  i1098.particleRaycastBudget = i1099[17]
  i1098.pixelLightCount = i1099[18]
  i1098.realtimeReflectionProbes = !!i1099[19]
  i1098.shadowCascade2Split = i1099[20]
  i1098.shadowCascade4Split = new pc.Vec3( i1099[21], i1099[22], i1099[23] )
  i1098.streamingMipmapsActive = !!i1099[24]
  i1098.vSyncCount = i1099[25]
  i1098.asyncUploadBufferSize = i1099[26]
  i1098.asyncUploadTimeSlice = i1099[27]
  i1098.billboardsFaceCameraPosition = !!i1099[28]
  i1098.shadowNearPlaneOffset = i1099[29]
  i1098.streamingMipmapsMemoryBudget = i1099[30]
  i1098.maximumLODLevel = i1099[31]
  i1098.streamingMipmapsAddAllCameras = !!i1099[32]
  i1098.streamingMipmapsMaxLevelReduction = i1099[33]
  i1098.streamingMipmapsRenderersPerFrame = i1099[34]
  i1098.resolutionScalingFixedDPIFactor = i1099[35]
  i1098.streamingMipmapsMaxFileIORequests = i1099[36]
  i1098.currentQualityLevel = i1099[37]
  return i1098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1108 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1109 = data
  i1108.weight = i1109[0]
  i1108.vertices = i1109[1]
  i1108.normals = i1109[2]
  i1108.tangents = i1109[3]
  return i1108
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1113 = data
  i1112.mode = i1113[0]
  i1112.parameter = i1113[1]
  i1112.threshold = i1113[2]
  return i1112
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1114 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1115 = data
  i1114.xPlacement = i1115[0]
  i1114.yPlacement = i1115[1]
  i1114.xAdvance = i1115[2]
  i1114.yAdvance = i1115[3]
  return i1114
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"sharedMesh":16,"bones":18,"updateWhenOffscreen":19,"localBounds":20,"rootBone":21,"blendShapesWeights":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"49":[50],"51":[50],"52":[50],"53":[50],"54":[50],"55":[50],"56":[10],"57":[12],"58":[17],"59":[17],"60":[17],"61":[17],"62":[17],"63":[17],"64":[17],"65":[66],"67":[66],"68":[66],"69":[66],"70":[66],"71":[66],"72":[66],"73":[66],"74":[66],"75":[66],"76":[66],"77":[66],"78":[66],"79":[12],"80":[5],"81":[82],"83":[82],"27":[26],"84":[26],"85":[26],"29":[27],"40":[30,26],"86":[26],"28":[27],"87":[26],"88":[26],"89":[26],"90":[26],"91":[26],"92":[26],"93":[26],"94":[26],"95":[26],"96":[30,26],"97":[26],"98":[26],"99":[26],"100":[26],"101":[30,26],"102":[26],"103":[19],"104":[19],"20":[19],"105":[19],"106":[12],"107":[12],"108":[26],"109":[5,26],"31":[26,30],"110":[26],"111":[30,26],"112":[5],"113":[30,26],"114":[26],"115":[116],"117":[116],"118":[116]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.Animator","UnityEngine.MonoBehaviour","Tree","UnityEngine.SkinnedMeshRenderer","UnityEngine.BoxCollider","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Light","UnityEditor.Animations.AnimatorController","UnityEngine.CapsuleCollider","UnityEngine.Rigidbody","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","BuildManager","UnityEngine.UI.Button","UnityEngine.GameObject","MoneyController","Build","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","Garage","CharactersMover","LoadPoint","SimplePoint","UnloadPoint","Chopper","MoneyBalance","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.Cubemap","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.StateMachine","Unity.VisualScripting.ScriptMachine"]

Deserializers.unityVersion = "2022.3.58f1";

Deserializers.productName = "Lumber";

Deserializers.lunaInitializationTime = "03/12/2025 08:03:06";

Deserializers.lunaDaysRunning = "7.0";

Deserializers.lunaVersion = "6.2.1";

Deserializers.lunaSHA = "28f227c1b455c28500de29df936f0d1376ee9c43";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "27856";

Deserializers.projectId = "b0c19cff2bc3b4b4086704796cb119ee";

Deserializers.packagesInfo = "com.unity.textmeshpro: 3.0.7\ncom.unity.timeline: 1.7.6\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1747";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4263";

Deserializers.runtimeAnalysisExcludedModules = "physics2d, particle-system";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.Lumber";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 28;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "627affd3-e8e5-4762-a1bf-e6693eb065cf";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEditor","Recorder","RecorderWindow","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()


var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i598 = root || request.c( 'UnityEngine.JointSpring' )
  var i599 = data
  i598.spring = i599[0]
  i598.damper = i599[1]
  i598.targetPosition = i599[2]
  return i598
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i600 = root || request.c( 'UnityEngine.JointMotor' )
  var i601 = data
  i600.m_TargetVelocity = i601[0]
  i600.m_Force = i601[1]
  i600.m_FreeSpin = i601[2]
  return i600
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i602 = root || request.c( 'UnityEngine.JointLimits' )
  var i603 = data
  i602.m_Min = i603[0]
  i602.m_Max = i603[1]
  i602.m_Bounciness = i603[2]
  i602.m_BounceMinVelocity = i603[3]
  i602.m_ContactDistance = i603[4]
  i602.minBounce = i603[5]
  i602.maxBounce = i603[6]
  return i602
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i604 = root || request.c( 'UnityEngine.JointDrive' )
  var i605 = data
  i604.m_PositionSpring = i605[0]
  i604.m_PositionDamper = i605[1]
  i604.m_MaximumForce = i605[2]
  i604.m_UseAcceleration = i605[3]
  return i604
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i606 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i607 = data
  i606.m_Spring = i607[0]
  i606.m_Damper = i607[1]
  return i606
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i608 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i609 = data
  i608.m_Limit = i609[0]
  i608.m_Bounciness = i609[1]
  i608.m_ContactDistance = i609[2]
  return i608
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i610 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i611 = data
  i610.m_ExtremumSlip = i611[0]
  i610.m_ExtremumValue = i611[1]
  i610.m_AsymptoteSlip = i611[2]
  i610.m_AsymptoteValue = i611[3]
  i610.m_Stiffness = i611[4]
  return i610
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i612 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i613 = data
  i612.m_LowerAngle = i613[0]
  i612.m_UpperAngle = i613[1]
  return i612
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i614 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i615 = data
  i614.m_MotorSpeed = i615[0]
  i614.m_MaximumMotorTorque = i615[1]
  return i614
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i616 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i617 = data
  i616.m_DampingRatio = i617[0]
  i616.m_Frequency = i617[1]
  i616.m_Angle = i617[2]
  return i616
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i618 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i619 = data
  i618.m_LowerTranslation = i619[0]
  i618.m_UpperTranslation = i619[1]
  return i618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i621 = data
  i620.name = i621[0]
  i620.width = i621[1]
  i620.height = i621[2]
  i620.mipmapCount = i621[3]
  i620.anisoLevel = i621[4]
  i620.filterMode = i621[5]
  i620.hdr = !!i621[6]
  i620.format = i621[7]
  i620.wrapMode = i621[8]
  i620.alphaIsTransparency = !!i621[9]
  i620.alphaSource = i621[10]
  i620.graphicsFormat = i621[11]
  i620.sRGBTexture = !!i621[12]
  i620.desiredColorSpace = i621[13]
  i620.wrapU = i621[14]
  i620.wrapV = i621[15]
  return i620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i623 = data
  i622.name = i623[0]
  i622.halfPrecision = !!i623[1]
  i622.useUInt32IndexFormat = !!i623[2]
  i622.vertexCount = i623[3]
  i622.aabb = i623[4]
  var i625 = i623[5]
  var i624 = []
  for(var i = 0; i < i625.length; i += 1) {
    i624.push( !!i625[i + 0] );
  }
  i622.streams = i624
  i622.vertices = i623[6]
  var i627 = i623[7]
  var i626 = []
  for(var i = 0; i < i627.length; i += 1) {
    i626.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i627[i + 0]) );
  }
  i622.subMeshes = i626
  var i629 = i623[8]
  var i628 = []
  for(var i = 0; i < i629.length; i += 16) {
    i628.push( new pc.Mat4().setData(i629[i + 0], i629[i + 1], i629[i + 2], i629[i + 3],  i629[i + 4], i629[i + 5], i629[i + 6], i629[i + 7],  i629[i + 8], i629[i + 9], i629[i + 10], i629[i + 11],  i629[i + 12], i629[i + 13], i629[i + 14], i629[i + 15]) );
  }
  i622.bindposes = i628
  var i631 = i623[9]
  var i630 = []
  for(var i = 0; i < i631.length; i += 1) {
    i630.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i631[i + 0]) );
  }
  i622.blendShapes = i630
  return i622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i637 = data
  i636.triangles = i637[0]
  return i636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i643 = data
  i642.name = i643[0]
  var i645 = i643[1]
  var i644 = []
  for(var i = 0; i < i645.length; i += 1) {
    i644.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i645[i + 0]) );
  }
  i642.frames = i644
  return i642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i646 = root || new pc.UnityMaterial()
  var i647 = data
  i646.name = i647[0]
  request.r(i647[1], i647[2], 0, i646, 'shader')
  i646.renderQueue = i647[3]
  i646.enableInstancing = !!i647[4]
  var i649 = i647[5]
  var i648 = []
  for(var i = 0; i < i649.length; i += 1) {
    i648.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i649[i + 0]) );
  }
  i646.floatParameters = i648
  var i651 = i647[6]
  var i650 = []
  for(var i = 0; i < i651.length; i += 1) {
    i650.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i651[i + 0]) );
  }
  i646.colorParameters = i650
  var i653 = i647[7]
  var i652 = []
  for(var i = 0; i < i653.length; i += 1) {
    i652.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i653[i + 0]) );
  }
  i646.vectorParameters = i652
  var i655 = i647[8]
  var i654 = []
  for(var i = 0; i < i655.length; i += 1) {
    i654.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i655[i + 0]) );
  }
  i646.textureParameters = i654
  var i657 = i647[9]
  var i656 = []
  for(var i = 0; i < i657.length; i += 1) {
    i656.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i657[i + 0]) );
  }
  i646.materialFlags = i656
  return i646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i661 = data
  i660.name = i661[0]
  i660.value = i661[1]
  return i660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i665 = data
  i664.name = i665[0]
  i664.value = new pc.Color(i665[1], i665[2], i665[3], i665[4])
  return i664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i669 = data
  i668.name = i669[0]
  i668.value = new pc.Vec4( i669[1], i669[2], i669[3], i669[4] )
  return i668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i673 = data
  i672.name = i673[0]
  request.r(i673[1], i673[2], 0, i672, 'value')
  return i672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i677 = data
  i676.name = i677[0]
  i676.enabled = !!i677[1]
  return i676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i679 = data
  i678.position = new pc.Vec3( i679[0], i679[1], i679[2] )
  i678.scale = new pc.Vec3( i679[3], i679[4], i679[5] )
  i678.rotation = new pc.Quat(i679[6], i679[7], i679[8], i679[9])
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i681 = data
  request.r(i681[0], i681[1], 0, i680, 'sharedMesh')
  return i680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i683 = data
  request.r(i683[0], i683[1], 0, i682, 'additionalVertexStreams')
  i682.enabled = !!i683[2]
  request.r(i683[3], i683[4], 0, i682, 'sharedMaterial')
  var i685 = i683[5]
  var i684 = []
  for(var i = 0; i < i685.length; i += 2) {
  request.r(i685[i + 0], i685[i + 1], 2, i684, '')
  }
  i682.sharedMaterials = i684
  i682.receiveShadows = !!i683[6]
  i682.shadowCastingMode = i683[7]
  i682.sortingLayerID = i683[8]
  i682.sortingOrder = i683[9]
  i682.lightmapIndex = i683[10]
  i682.lightmapSceneIndex = i683[11]
  i682.lightmapScaleOffset = new pc.Vec4( i683[12], i683[13], i683[14], i683[15] )
  i682.lightProbeUsage = i683[16]
  i682.reflectionProbeUsage = i683[17]
  return i682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i689 = data
  i688.name = i689[0]
  i688.tagId = i689[1]
  i688.enabled = !!i689[2]
  i688.isStatic = !!i689[3]
  i688.layer = i689[4]
  return i688
}

Deserializers["Tree"] = function (request, data, root) {
  var i690 = root || request.c( 'Tree' )
  var i691 = data
  i690.flashSpeed = i691[0]
  i690.pauseBetweenFlashes = i691[1]
  i690.flashCount = i691[2]
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i693 = data
  i692.enabled = !!i693[0]
  request.r(i693[1], i693[2], 0, i692, 'sharedMaterial')
  var i695 = i693[3]
  var i694 = []
  for(var i = 0; i < i695.length; i += 2) {
  request.r(i695[i + 0], i695[i + 1], 2, i694, '')
  }
  i692.sharedMaterials = i694
  i692.receiveShadows = !!i693[4]
  i692.shadowCastingMode = i693[5]
  i692.sortingLayerID = i693[6]
  i692.sortingOrder = i693[7]
  i692.lightmapIndex = i693[8]
  i692.lightmapSceneIndex = i693[9]
  i692.lightmapScaleOffset = new pc.Vec4( i693[10], i693[11], i693[12], i693[13] )
  i692.lightProbeUsage = i693[14]
  i692.reflectionProbeUsage = i693[15]
  request.r(i693[16], i693[17], 0, i692, 'sharedMesh')
  var i697 = i693[18]
  var i696 = []
  for(var i = 0; i < i697.length; i += 2) {
  request.r(i697[i + 0], i697[i + 1], 2, i696, '')
  }
  i692.bones = i696
  i692.updateWhenOffscreen = !!i693[19]
  i692.localBounds = i693[20]
  request.r(i693[21], i693[22], 0, i692, 'rootBone')
  var i699 = i693[23]
  var i698 = []
  for(var i = 0; i < i699.length; i += 1) {
    i698.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i699[i + 0]) );
  }
  i692.blendShapesWeights = i698
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i705 = data
  i704.weight = i705[0]
  return i704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i707 = data
  i706.center = new pc.Vec3( i707[0], i707[1], i707[2] )
  i706.size = new pc.Vec3( i707[3], i707[4], i707[5] )
  i706.enabled = !!i707[6]
  i706.isTrigger = !!i707[7]
  request.r(i707[8], i707[9], 0, i706, 'material')
  return i706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i709 = data
  i708.name = i709[0]
  i708.atlasId = i709[1]
  i708.mipmapCount = i709[2]
  i708.hdr = !!i709[3]
  i708.size = i709[4]
  i708.anisoLevel = i709[5]
  i708.filterMode = i709[6]
  var i711 = i709[7]
  var i710 = []
  for(var i = 0; i < i711.length; i += 4) {
    i710.push( UnityEngine.Rect.MinMaxRect(i711[i + 0], i711[i + 1], i711[i + 2], i711[i + 3]) );
  }
  i708.rects = i710
  i708.wrapU = i709[8]
  i708.wrapV = i709[9]
  return i708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i715 = data
  i714.name = i715[0]
  i714.index = i715[1]
  i714.startup = !!i715[2]
  return i714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i717 = data
  i716.pivot = new pc.Vec2( i717[0], i717[1] )
  i716.anchorMin = new pc.Vec2( i717[2], i717[3] )
  i716.anchorMax = new pc.Vec2( i717[4], i717[5] )
  i716.sizeDelta = new pc.Vec2( i717[6], i717[7] )
  i716.anchoredPosition3D = new pc.Vec3( i717[8], i717[9], i717[10] )
  i716.rotation = new pc.Quat(i717[11], i717[12], i717[13], i717[14])
  i716.scale = new pc.Vec3( i717[15], i717[16], i717[17] )
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i719 = data
  i718.enabled = !!i719[0]
  i718.planeDistance = i719[1]
  i718.referencePixelsPerUnit = i719[2]
  i718.isFallbackOverlay = !!i719[3]
  i718.renderMode = i719[4]
  i718.renderOrder = i719[5]
  i718.sortingLayerName = i719[6]
  i718.sortingOrder = i719[7]
  i718.scaleFactor = i719[8]
  request.r(i719[9], i719[10], 0, i718, 'worldCamera')
  i718.overrideSorting = !!i719[11]
  i718.pixelPerfect = !!i719[12]
  i718.targetDisplay = i719[13]
  i718.overridePixelPerfect = !!i719[14]
  return i718
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i720 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i721 = data
  i720.m_UiScaleMode = i721[0]
  i720.m_ReferencePixelsPerUnit = i721[1]
  i720.m_ScaleFactor = i721[2]
  i720.m_ReferenceResolution = new pc.Vec2( i721[3], i721[4] )
  i720.m_ScreenMatchMode = i721[5]
  i720.m_MatchWidthOrHeight = i721[6]
  i720.m_PhysicalUnit = i721[7]
  i720.m_FallbackScreenDPI = i721[8]
  i720.m_DefaultSpriteDPI = i721[9]
  i720.m_DynamicPixelsPerUnit = i721[10]
  i720.m_PresetInfoIsWorld = !!i721[11]
  return i720
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i722 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i723 = data
  i722.m_IgnoreReversedGraphics = !!i723[0]
  i722.m_BlockingObjects = i723[1]
  i722.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i723[2] )
  return i722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i725 = data
  request.r(i725[0], i725[1], 0, i724, 'animatorController')
  request.r(i725[2], i725[3], 0, i724, 'avatar')
  i724.updateMode = i725[4]
  i724.hasTransformHierarchy = !!i725[5]
  i724.applyRootMotion = !!i725[6]
  var i727 = i725[7]
  var i726 = []
  for(var i = 0; i < i727.length; i += 2) {
  request.r(i727[i + 0], i727[i + 1], 2, i726, '')
  }
  i724.humanBones = i726
  i724.enabled = !!i725[8]
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i729 = data
  i728.cullTransparentMesh = !!i729[0]
  return i728
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i730 = root || request.c( 'UnityEngine.UI.Image' )
  var i731 = data
  request.r(i731[0], i731[1], 0, i730, 'm_Sprite')
  i730.m_Type = i731[2]
  i730.m_PreserveAspect = !!i731[3]
  i730.m_FillCenter = !!i731[4]
  i730.m_FillMethod = i731[5]
  i730.m_FillAmount = i731[6]
  i730.m_FillClockwise = !!i731[7]
  i730.m_FillOrigin = i731[8]
  i730.m_UseSpriteMesh = !!i731[9]
  i730.m_PixelsPerUnitMultiplier = i731[10]
  request.r(i731[11], i731[12], 0, i730, 'm_Material')
  i730.m_Maskable = !!i731[13]
  i730.m_Color = new pc.Color(i731[14], i731[15], i731[16], i731[17])
  i730.m_RaycastTarget = !!i731[18]
  i730.m_RaycastPadding = new pc.Vec4( i731[19], i731[20], i731[21], i731[22] )
  return i730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i733 = data
  i732.enabled = !!i733[0]
  i732.aspect = i733[1]
  i732.orthographic = !!i733[2]
  i732.orthographicSize = i733[3]
  i732.backgroundColor = new pc.Color(i733[4], i733[5], i733[6], i733[7])
  i732.nearClipPlane = i733[8]
  i732.farClipPlane = i733[9]
  i732.fieldOfView = i733[10]
  i732.depth = i733[11]
  i732.clearFlags = i733[12]
  i732.cullingMask = i733[13]
  i732.rect = i733[14]
  request.r(i733[15], i733[16], 0, i732, 'targetTexture')
  i732.usePhysicalProperties = !!i733[17]
  i732.focalLength = i733[18]
  i732.sensorSize = new pc.Vec2( i733[19], i733[20] )
  i732.lensShift = new pc.Vec2( i733[21], i733[22] )
  i732.gateFit = i733[23]
  i732.commandBufferCount = i733[24]
  i732.cameraType = i733[25]
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i735 = data
  i734.enabled = !!i735[0]
  i734.type = i735[1]
  i734.color = new pc.Color(i735[2], i735[3], i735[4], i735[5])
  i734.cullingMask = i735[6]
  i734.intensity = i735[7]
  i734.range = i735[8]
  i734.spotAngle = i735[9]
  i734.shadows = i735[10]
  i734.shadowNormalBias = i735[11]
  i734.shadowBias = i735[12]
  i734.shadowStrength = i735[13]
  i734.shadowResolution = i735[14]
  i734.lightmapBakeType = i735[15]
  i734.renderMode = i735[16]
  request.r(i735[17], i735[18], 0, i734, 'cookie')
  i734.cookieSize = i735[19]
  return i734
}

Deserializers["Conveyor"] = function (request, data, root) {
  var i736 = root || request.c( 'Conveyor' )
  var i737 = data
  request.r(i737[0], i737[1], 0, i736, 'canvasAnimator')
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i739 = data
  i738.center = new pc.Vec3( i739[0], i739[1], i739[2] )
  i738.radius = i739[3]
  i738.height = i739[4]
  i738.direction = i739[5]
  i738.enabled = !!i739[6]
  i738.isTrigger = !!i739[7]
  request.r(i739[8], i739[9], 0, i738, 'material')
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i741 = data
  i740.mass = i741[0]
  i740.drag = i741[1]
  i740.angularDrag = i741[2]
  i740.useGravity = !!i741[3]
  i740.isKinematic = !!i741[4]
  i740.constraints = i741[5]
  i740.maxAngularVelocity = i741[6]
  i740.collisionDetectionMode = i741[7]
  i740.interpolation = i741[8]
  return i740
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i742 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i743 = data
  request.r(i743[0], i743[1], 0, i742, 'm_FirstSelected')
  i742.m_sendNavigationEvents = !!i743[2]
  i742.m_DragThreshold = i743[3]
  return i742
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i744 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i745 = data
  i744.m_HorizontalAxis = i745[0]
  i744.m_VerticalAxis = i745[1]
  i744.m_SubmitButton = i745[2]
  i744.m_CancelButton = i745[3]
  i744.m_InputActionsPerSecond = i745[4]
  i744.m_RepeatDelay = i745[5]
  i744.m_ForceModuleActive = !!i745[6]
  i744.m_SendPointerHoverToParent = !!i745[7]
  return i744
}

Deserializers["BuildManager"] = function (request, data, root) {
  var i746 = root || request.c( 'BuildManager' )
  var i747 = data
  request.r(i747[0], i747[1], 0, i746, '_buildButton1')
  request.r(i747[2], i747[3], 0, i746, '_buildButton2')
  request.r(i747[4], i747[5], 0, i746, '_buildButton3')
  request.r(i747[6], i747[7], 0, i746, '_build1')
  request.r(i747[8], i747[9], 0, i746, '_build2')
  request.r(i747[10], i747[11], 0, i746, '_build3')
  request.r(i747[12], i747[13], 0, i746, '_moneyController')
  return i746
}

Deserializers["ButtonLight"] = function (request, data, root) {
  var i748 = root || request.c( 'ButtonLight' )
  var i749 = data
  i748.flashSpeed = i749[0]
  i748.pauseBetweenFlashes = i749[1]
  i748.flashCount = i749[2]
  return i748
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i750 = root || request.c( 'UnityEngine.UI.Button' )
  var i751 = data
  i750.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i751[0], i750.m_OnClick)
  i750.m_Navigation = request.d('UnityEngine.UI.Navigation', i751[1], i750.m_Navigation)
  i750.m_Transition = i751[2]
  i750.m_Colors = request.d('UnityEngine.UI.ColorBlock', i751[3], i750.m_Colors)
  i750.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i751[4], i750.m_SpriteState)
  i750.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i751[5], i750.m_AnimationTriggers)
  i750.m_Interactable = !!i751[6]
  request.r(i751[7], i751[8], 0, i750, 'm_TargetGraphic')
  return i750
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i752 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i753 = data
  i752.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i753[0], i752.m_PersistentCalls)
  return i752
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i754 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i755 = data
  var i757 = i755[0]
  var i756 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i757.length; i += 1) {
    i756.add(request.d('UnityEngine.Events.PersistentCall', i757[i + 0]));
  }
  i754.m_Calls = i756
  return i754
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i760 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i761 = data
  request.r(i761[0], i761[1], 0, i760, 'm_Target')
  i760.m_TargetAssemblyTypeName = i761[2]
  i760.m_MethodName = i761[3]
  i760.m_Mode = i761[4]
  i760.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i761[5], i760.m_Arguments)
  i760.m_CallState = i761[6]
  return i760
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i762 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i763 = data
  request.r(i763[0], i763[1], 0, i762, 'm_ObjectArgument')
  i762.m_ObjectArgumentAssemblyTypeName = i763[2]
  i762.m_IntArgument = i763[3]
  i762.m_FloatArgument = i763[4]
  i762.m_StringArgument = i763[5]
  i762.m_BoolArgument = !!i763[6]
  return i762
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i764 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i765 = data
  i764.m_Mode = i765[0]
  i764.m_WrapAround = !!i765[1]
  request.r(i765[2], i765[3], 0, i764, 'm_SelectOnUp')
  request.r(i765[4], i765[5], 0, i764, 'm_SelectOnDown')
  request.r(i765[6], i765[7], 0, i764, 'm_SelectOnLeft')
  request.r(i765[8], i765[9], 0, i764, 'm_SelectOnRight')
  return i764
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i766 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i767 = data
  i766.m_NormalColor = new pc.Color(i767[0], i767[1], i767[2], i767[3])
  i766.m_HighlightedColor = new pc.Color(i767[4], i767[5], i767[6], i767[7])
  i766.m_PressedColor = new pc.Color(i767[8], i767[9], i767[10], i767[11])
  i766.m_SelectedColor = new pc.Color(i767[12], i767[13], i767[14], i767[15])
  i766.m_DisabledColor = new pc.Color(i767[16], i767[17], i767[18], i767[19])
  i766.m_ColorMultiplier = i767[20]
  i766.m_FadeDuration = i767[21]
  return i766
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i768 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i769 = data
  request.r(i769[0], i769[1], 0, i768, 'm_HighlightedSprite')
  request.r(i769[2], i769[3], 0, i768, 'm_PressedSprite')
  request.r(i769[4], i769[5], 0, i768, 'm_SelectedSprite')
  request.r(i769[6], i769[7], 0, i768, 'm_DisabledSprite')
  return i768
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i770 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i771 = data
  i770.m_NormalTrigger = i771[0]
  i770.m_HighlightedTrigger = i771[1]
  i770.m_PressedTrigger = i771[2]
  i770.m_SelectedTrigger = i771[3]
  i770.m_DisabledTrigger = i771[4]
  return i770
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i772 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i773 = data
  i772.m_hasFontAssetChanged = !!i773[0]
  request.r(i773[1], i773[2], 0, i772, 'm_baseMaterial')
  i772.m_maskOffset = new pc.Vec4( i773[3], i773[4], i773[5], i773[6] )
  i772.m_text = i773[7]
  i772.m_isRightToLeft = !!i773[8]
  request.r(i773[9], i773[10], 0, i772, 'm_fontAsset')
  request.r(i773[11], i773[12], 0, i772, 'm_sharedMaterial')
  var i775 = i773[13]
  var i774 = []
  for(var i = 0; i < i775.length; i += 2) {
  request.r(i775[i + 0], i775[i + 1], 2, i774, '')
  }
  i772.m_fontSharedMaterials = i774
  request.r(i773[14], i773[15], 0, i772, 'm_fontMaterial')
  var i777 = i773[16]
  var i776 = []
  for(var i = 0; i < i777.length; i += 2) {
  request.r(i777[i + 0], i777[i + 1], 2, i776, '')
  }
  i772.m_fontMaterials = i776
  i772.m_fontColor32 = UnityEngine.Color32.ConstructColor(i773[17], i773[18], i773[19], i773[20])
  i772.m_fontColor = new pc.Color(i773[21], i773[22], i773[23], i773[24])
  i772.m_enableVertexGradient = !!i773[25]
  i772.m_colorMode = i773[26]
  i772.m_fontColorGradient = request.d('TMPro.VertexGradient', i773[27], i772.m_fontColorGradient)
  request.r(i773[28], i773[29], 0, i772, 'm_fontColorGradientPreset')
  request.r(i773[30], i773[31], 0, i772, 'm_spriteAsset')
  i772.m_tintAllSprites = !!i773[32]
  request.r(i773[33], i773[34], 0, i772, 'm_StyleSheet')
  i772.m_TextStyleHashCode = i773[35]
  i772.m_overrideHtmlColors = !!i773[36]
  i772.m_faceColor = UnityEngine.Color32.ConstructColor(i773[37], i773[38], i773[39], i773[40])
  i772.m_fontSize = i773[41]
  i772.m_fontSizeBase = i773[42]
  i772.m_fontWeight = i773[43]
  i772.m_enableAutoSizing = !!i773[44]
  i772.m_fontSizeMin = i773[45]
  i772.m_fontSizeMax = i773[46]
  i772.m_fontStyle = i773[47]
  i772.m_HorizontalAlignment = i773[48]
  i772.m_VerticalAlignment = i773[49]
  i772.m_textAlignment = i773[50]
  i772.m_characterSpacing = i773[51]
  i772.m_wordSpacing = i773[52]
  i772.m_lineSpacing = i773[53]
  i772.m_lineSpacingMax = i773[54]
  i772.m_paragraphSpacing = i773[55]
  i772.m_charWidthMaxAdj = i773[56]
  i772.m_enableWordWrapping = !!i773[57]
  i772.m_wordWrappingRatios = i773[58]
  i772.m_overflowMode = i773[59]
  request.r(i773[60], i773[61], 0, i772, 'm_linkedTextComponent')
  request.r(i773[62], i773[63], 0, i772, 'parentLinkedComponent')
  i772.m_enableKerning = !!i773[64]
  i772.m_enableExtraPadding = !!i773[65]
  i772.checkPaddingRequired = !!i773[66]
  i772.m_isRichText = !!i773[67]
  i772.m_parseCtrlCharacters = !!i773[68]
  i772.m_isOrthographic = !!i773[69]
  i772.m_isCullingEnabled = !!i773[70]
  i772.m_horizontalMapping = i773[71]
  i772.m_verticalMapping = i773[72]
  i772.m_uvLineOffset = i773[73]
  i772.m_geometrySortingOrder = i773[74]
  i772.m_IsTextObjectScaleStatic = !!i773[75]
  i772.m_VertexBufferAutoSizeReduction = !!i773[76]
  i772.m_useMaxVisibleDescender = !!i773[77]
  i772.m_pageToDisplay = i773[78]
  i772.m_margin = new pc.Vec4( i773[79], i773[80], i773[81], i773[82] )
  i772.m_isUsingLegacyAnimationComponent = !!i773[83]
  i772.m_isVolumetricText = !!i773[84]
  request.r(i773[85], i773[86], 0, i772, 'm_Material')
  i772.m_Maskable = !!i773[87]
  i772.m_Color = new pc.Color(i773[88], i773[89], i773[90], i773[91])
  i772.m_RaycastTarget = !!i773[92]
  i772.m_RaycastPadding = new pc.Vec4( i773[93], i773[94], i773[95], i773[96] )
  return i772
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i778 = root || request.c( 'TMPro.VertexGradient' )
  var i779 = data
  i778.topLeft = new pc.Color(i779[0], i779[1], i779[2], i779[3])
  i778.topRight = new pc.Color(i779[4], i779[5], i779[6], i779[7])
  i778.bottomLeft = new pc.Color(i779[8], i779[9], i779[10], i779[11])
  i778.bottomRight = new pc.Color(i779[12], i779[13], i779[14], i779[15])
  return i778
}

Deserializers["Build"] = function (request, data, root) {
  var i780 = root || request.c( 'Build' )
  var i781 = data
  request.r(i781[0], i781[1], 0, i780, 'building')
  return i780
}

Deserializers["Garage"] = function (request, data, root) {
  var i782 = root || request.c( 'Garage' )
  var i783 = data
  request.r(i783[0], i783[1], 0, i782, 'chopper')
  return i782
}

Deserializers["ChopperManager"] = function (request, data, root) {
  var i784 = root || request.c( 'ChopperManager' )
  var i785 = data
  var i787 = i785[0]
  var i786 = new (System.Collections.Generic.List$1(Bridge.ns('Chopper')))
  for(var i = 0; i < i787.length; i += 2) {
  request.r(i787[i + 0], i787[i + 1], 1, i786, '')
  }
  i784._choppers = i786
  return i784
}

Deserializers["CharactersMover"] = function (request, data, root) {
  var i790 = root || request.c( 'CharactersMover' )
  var i791 = data
  var i793 = i791[0]
  var i792 = []
  for(var i = 0; i < i793.length; i += 2) {
  request.r(i793[i + 0], i793[i + 1], 2, i792, '')
  }
  i790._normalRoutePoints = i792
  var i795 = i791[1]
  var i794 = []
  for(var i = 0; i < i795.length; i += 2) {
  request.r(i795[i + 0], i795[i + 1], 2, i794, '')
  }
  i790._unloadPoints = i794
  return i790
}

Deserializers["Chopper"] = function (request, data, root) {
  var i800 = root || request.c( 'Chopper' )
  var i801 = data
  var i803 = i801[0]
  var i802 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i803.length; i += 2) {
  request.r(i803[i + 0], i803[i + 1], 1, i802, '')
  }
  i800._cargo = i802
  return i800
}

Deserializers["Forklift"] = function (request, data, root) {
  var i806 = root || request.c( 'Forklift' )
  var i807 = data
  var i809 = i807[0]
  var i808 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i809.length; i += 2) {
  request.r(i809[i + 0], i809[i + 1], 1, i808, '')
  }
  i806._cargo = i808
  return i806
}

Deserializers["UnloadPoint"] = function (request, data, root) {
  var i810 = root || request.c( 'UnloadPoint' )
  var i811 = data
  request.r(i811[0], i811[1], 0, i810, '_targetTruck')
  i810._allowForkliftToLoadHalfFullTrucks = !!i811[2]
  i810.delay = i811[3]
  i810.moveDuration = i811[4]
  return i810
}

Deserializers["LoadPoint"] = function (request, data, root) {
  var i812 = root || request.c( 'LoadPoint' )
  var i813 = data
  i812.delay = i813[0]
  i812.moveDuration = i813[1]
  return i812
}

Deserializers["SimplePoint"] = function (request, data, root) {
  var i814 = root || request.c( 'SimplePoint' )
  var i815 = data
  i814.delay = i815[0]
  i814.moveDuration = i815[1]
  return i814
}

Deserializers["MoneyController"] = function (request, data, root) {
  var i816 = root || request.c( 'MoneyController' )
  var i817 = data
  request.r(i817[0], i817[1], 0, i816, '_moneyBalance')
  request.r(i817[2], i817[3], 0, i816, '_moneyFlyAnimation')
  return i816
}

Deserializers["MoneyFlyAnimation"] = function (request, data, root) {
  var i818 = root || request.c( 'MoneyFlyAnimation' )
  var i819 = data
  request.r(i819[0], i819[1], 0, i818, 'worldStartPoint')
  request.r(i819[2], i819[3], 0, i818, 'moneyPrefab3D')
  i818.poolSize = i819[4]
  i818.minDuration = i819[5]
  i818.maxDuration = i819[6]
  i818.spread = i819[7]
  request.r(i819[8], i819[9], 0, i818, 'uiTargetPoint')
  return i818
}

Deserializers["MoneyBalance"] = function (request, data, root) {
  var i820 = root || request.c( 'MoneyBalance' )
  var i821 = data
  request.r(i821[0], i821[1], 0, i820, '_text')
  return i820
}

Deserializers["TruckManager"] = function (request, data, root) {
  var i822 = root || request.c( 'TruckManager' )
  var i823 = data
  var i825 = i823[0]
  var i824 = new (System.Collections.Generic.List$1(Bridge.ns('Truck')))
  for(var i = 0; i < i825.length; i += 2) {
  request.r(i825[i + 0], i825[i + 1], 1, i824, '')
  }
  i822._trucks = i824
  request.r(i823[1], i823[2], 0, i822, '_unloadPoint')
  i822._sendAllTrucksWhenAllFull = !!i823[3]
  return i822
}

Deserializers["TruckUnloadPoint"] = function (request, data, root) {
  var i828 = root || request.c( 'TruckUnloadPoint' )
  var i829 = data
  i828._unloadDuration = i829[0]
  request.r(i829[1], i829[2], 0, i828, '_truckStopPosition')
  i828.delay = i829[3]
  i828.moveDuration = i829[4]
  return i828
}

Deserializers["Truck"] = function (request, data, root) {
  var i830 = root || request.c( 'Truck' )
  var i831 = data
  request.r(i831[0], i831[1], 0, i830, 'progressBarImage')
  var i833 = i831[2]
  var i832 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i833.length; i += 2) {
  request.r(i833[i + 0], i833[i + 1], 1, i832, '')
  }
  i830._cargoSlots = i832
  i830._maxCapacity = i831[3]
  i830._logLoadSoundName = i831[4]
  i830._truckFullSoundName = i831[5]
  i830._playCargoSounds = !!i831[6]
  return i830
}

Deserializers["TruckMover"] = function (request, data, root) {
  var i834 = root || request.c( 'TruckMover' )
  var i835 = data
  i834._moveEase = i835[0]
  request.r(i835[1], i835[2], 0, i834, '_startPosition')
  request.r(i835[3], i835[4], 0, i834, '_engineSound')
  return i834
}

Deserializers["GameManager"] = function (request, data, root) {
  var i836 = root || request.c( 'GameManager' )
  var i837 = data
  request.r(i837[0], i837[1], 0, i836, 'tutorialObject')
  request.r(i837[2], i837[3], 0, i836, 'tutorialAnimator')
  i836.idleTimeForTutorial = i837[4]
  request.r(i837[5], i837[6], 0, i836, 'upgradeButton')
  request.r(i837[7], i837[8], 0, i836, 'upgradeButtonGameObject')
  request.r(i837[9], i837[10], 0, i836, 'secondRequiredButton')
  request.r(i837[11], i837[12], 0, i836, 'packShotObject')
  request.r(i837[13], i837[14], 0, i836, 'moneyController')
  request.r(i837[15], i837[16], 0, i836, 'buildManager')
  return i836
}

Deserializers["SimpleAudioManager"] = function (request, data, root) {
  var i838 = root || request.c( 'SimpleAudioManager' )
  var i839 = data
  request.r(i839[0], i839[1], 0, i838, 'progressBarSound')
  request.r(i839[2], i839[3], 0, i838, 'conveyorAnimationSound')
  request.r(i839[4], i839[5], 0, i838, 'logLoadSound')
  request.r(i839[6], i839[7], 0, i838, 'buttonClickSound')
  request.r(i839[8], i839[9], 0, i838, 'houseAppearSound')
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i841 = data
  i840.ambientIntensity = i841[0]
  i840.reflectionIntensity = i841[1]
  i840.ambientMode = i841[2]
  i840.ambientLight = new pc.Color(i841[3], i841[4], i841[5], i841[6])
  i840.ambientSkyColor = new pc.Color(i841[7], i841[8], i841[9], i841[10])
  i840.ambientGroundColor = new pc.Color(i841[11], i841[12], i841[13], i841[14])
  i840.ambientEquatorColor = new pc.Color(i841[15], i841[16], i841[17], i841[18])
  i840.fogColor = new pc.Color(i841[19], i841[20], i841[21], i841[22])
  i840.fogEndDistance = i841[23]
  i840.fogStartDistance = i841[24]
  i840.fogDensity = i841[25]
  i840.fog = !!i841[26]
  request.r(i841[27], i841[28], 0, i840, 'skybox')
  i840.fogMode = i841[29]
  var i843 = i841[30]
  var i842 = []
  for(var i = 0; i < i843.length; i += 1) {
    i842.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i843[i + 0]) );
  }
  i840.lightmaps = i842
  i840.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i841[31], i840.lightProbes)
  i840.lightmapsMode = i841[32]
  i840.mixedBakeMode = i841[33]
  i840.environmentLightingMode = i841[34]
  i840.ambientProbe = new pc.SphericalHarmonicsL2(i841[35])
  i840.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i841[36])
  i840.useReferenceAmbientProbe = !!i841[37]
  request.r(i841[38], i841[39], 0, i840, 'customReflection')
  request.r(i841[40], i841[41], 0, i840, 'defaultReflection')
  i840.defaultReflectionMode = i841[42]
  i840.defaultReflectionResolution = i841[43]
  i840.sunLightObjectId = i841[44]
  i840.pixelLightCount = i841[45]
  i840.defaultReflectionHDR = !!i841[46]
  i840.hasLightDataAsset = !!i841[47]
  i840.hasManualGenerate = !!i841[48]
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i847 = data
  request.r(i847[0], i847[1], 0, i846, 'lightmapColor')
  request.r(i847[2], i847[3], 0, i846, 'lightmapDirection')
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i848 = root || new UnityEngine.LightProbes()
  var i849 = data
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i857 = data
  var i859 = i857[0]
  var i858 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i859.length; i += 1) {
    i858.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i859[i + 0]));
  }
  i856.ShaderCompilationErrors = i858
  i856.name = i857[1]
  i856.guid = i857[2]
  var i861 = i857[3]
  var i860 = []
  for(var i = 0; i < i861.length; i += 1) {
    i860.push( i861[i + 0] );
  }
  i856.shaderDefinedKeywords = i860
  var i863 = i857[4]
  var i862 = []
  for(var i = 0; i < i863.length; i += 1) {
    i862.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i863[i + 0]) );
  }
  i856.passes = i862
  var i865 = i857[5]
  var i864 = []
  for(var i = 0; i < i865.length; i += 1) {
    i864.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i865[i + 0]) );
  }
  i856.usePasses = i864
  var i867 = i857[6]
  var i866 = []
  for(var i = 0; i < i867.length; i += 1) {
    i866.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i867[i + 0]) );
  }
  i856.defaultParameterValues = i866
  request.r(i857[7], i857[8], 0, i856, 'unityFallbackShader')
  i856.readDepth = !!i857[9]
  i856.isCreatedByShaderGraph = !!i857[10]
  i856.compiled = !!i857[11]
  return i856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i871 = data
  i870.shaderName = i871[0]
  i870.errorMessage = i871[1]
  return i870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i876 = root || new pc.UnityShaderPass()
  var i877 = data
  i876.id = i877[0]
  i876.subShaderIndex = i877[1]
  i876.name = i877[2]
  i876.passType = i877[3]
  i876.grabPassTextureName = i877[4]
  i876.usePass = !!i877[5]
  i876.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i877[6], i876.zTest)
  i876.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i877[7], i876.zWrite)
  i876.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i877[8], i876.culling)
  i876.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i877[9], i876.blending)
  i876.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i877[10], i876.alphaBlending)
  i876.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i877[11], i876.colorWriteMask)
  i876.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i877[12], i876.offsetUnits)
  i876.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i877[13], i876.offsetFactor)
  i876.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i877[14], i876.stencilRef)
  i876.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i877[15], i876.stencilReadMask)
  i876.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i877[16], i876.stencilWriteMask)
  i876.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i877[17], i876.stencilOp)
  i876.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i877[18], i876.stencilOpFront)
  i876.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i877[19], i876.stencilOpBack)
  var i879 = i877[20]
  var i878 = []
  for(var i = 0; i < i879.length; i += 1) {
    i878.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i879[i + 0]) );
  }
  i876.tags = i878
  var i881 = i877[21]
  var i880 = []
  for(var i = 0; i < i881.length; i += 1) {
    i880.push( i881[i + 0] );
  }
  i876.passDefinedKeywords = i880
  var i883 = i877[22]
  var i882 = []
  for(var i = 0; i < i883.length; i += 1) {
    i882.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i883[i + 0]) );
  }
  i876.passDefinedKeywordGroups = i882
  var i885 = i877[23]
  var i884 = []
  for(var i = 0; i < i885.length; i += 1) {
    i884.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i885[i + 0]) );
  }
  i876.variants = i884
  var i887 = i877[24]
  var i886 = []
  for(var i = 0; i < i887.length; i += 1) {
    i886.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i887[i + 0]) );
  }
  i876.excludedVariants = i886
  i876.hasDepthReader = !!i877[25]
  return i876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i889 = data
  i888.val = i889[0]
  i888.name = i889[1]
  return i888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i891 = data
  i890.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i891[0], i890.src)
  i890.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i891[1], i890.dst)
  i890.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i891[2], i890.op)
  return i890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i893 = data
  i892.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i893[0], i892.pass)
  i892.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i893[1], i892.fail)
  i892.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i893[2], i892.zFail)
  i892.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i893[3], i892.comp)
  return i892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i897 = data
  i896.name = i897[0]
  i896.value = i897[1]
  return i896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i901 = data
  var i903 = i901[0]
  var i902 = []
  for(var i = 0; i < i903.length; i += 1) {
    i902.push( i903[i + 0] );
  }
  i900.keywords = i902
  i900.hasDiscard = !!i901[1]
  return i900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i907 = data
  i906.passId = i907[0]
  i906.subShaderIndex = i907[1]
  var i909 = i907[2]
  var i908 = []
  for(var i = 0; i < i909.length; i += 1) {
    i908.push( i909[i + 0] );
  }
  i906.keywords = i908
  i906.vertexProgram = i907[3]
  i906.fragmentProgram = i907[4]
  i906.exportedForWebGl2 = !!i907[5]
  i906.readDepth = !!i907[6]
  return i906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i913 = data
  request.r(i913[0], i913[1], 0, i912, 'shader')
  i912.pass = i913[2]
  return i912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i917 = data
  i916.name = i917[0]
  i916.type = i917[1]
  i916.value = new pc.Vec4( i917[2], i917[3], i917[4], i917[5] )
  i916.textureValue = i917[6]
  i916.shaderPropertyFlag = i917[7]
  return i916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i919 = data
  i918.name = i919[0]
  request.r(i919[1], i919[2], 0, i918, 'texture')
  i918.aabb = i919[3]
  i918.vertices = i919[4]
  i918.triangles = i919[5]
  i918.textureRect = UnityEngine.Rect.MinMaxRect(i919[6], i919[7], i919[8], i919[9])
  i918.packedRect = UnityEngine.Rect.MinMaxRect(i919[10], i919[11], i919[12], i919[13])
  i918.border = new pc.Vec4( i919[14], i919[15], i919[16], i919[17] )
  i918.transparency = i919[18]
  i918.bounds = i919[19]
  i918.pixelsPerUnit = i919[20]
  i918.textureWidth = i919[21]
  i918.textureHeight = i919[22]
  i918.nativeSize = new pc.Vec2( i919[23], i919[24] )
  i918.pivot = new pc.Vec2( i919[25], i919[26] )
  i918.textureRectOffset = new pc.Vec2( i919[27], i919[28] )
  return i918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i921 = data
  i920.name = i921[0]
  return i920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i923 = data
  i922.name = i923[0]
  i922.wrapMode = i923[1]
  i922.isLooping = !!i923[2]
  i922.length = i923[3]
  var i925 = i923[4]
  var i924 = []
  for(var i = 0; i < i925.length; i += 1) {
    i924.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i925[i + 0]) );
  }
  i922.curves = i924
  var i927 = i923[5]
  var i926 = []
  for(var i = 0; i < i927.length; i += 1) {
    i926.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i927[i + 0]) );
  }
  i922.events = i926
  i922.halfPrecision = !!i923[6]
  i922._frameRate = i923[7]
  i922.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i923[8], i922.localBounds)
  i922.hasMuscleCurves = !!i923[9]
  var i929 = i923[10]
  var i928 = []
  for(var i = 0; i < i929.length; i += 1) {
    i928.push( i929[i + 0] );
  }
  i922.clipMuscleConstant = i928
  i922.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i923[11], i922.clipBindingConstant)
  return i922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i933 = data
  i932.path = i933[0]
  i932.hash = i933[1]
  i932.componentType = i933[2]
  i932.property = i933[3]
  i932.keys = i933[4]
  var i935 = i933[5]
  var i934 = []
  for(var i = 0; i < i935.length; i += 1) {
    i934.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i935[i + 0]) );
  }
  i932.objectReferenceKeys = i934
  return i932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i939 = data
  i938.time = i939[0]
  request.r(i939[1], i939[2], 0, i938, 'value')
  return i938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i943 = data
  i942.functionName = i943[0]
  i942.floatParameter = i943[1]
  i942.intParameter = i943[2]
  i942.stringParameter = i943[3]
  request.r(i943[4], i943[5], 0, i942, 'objectReferenceParameter')
  i942.time = i943[6]
  return i942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i945 = data
  i944.center = new pc.Vec3( i945[0], i945[1], i945[2] )
  i944.extends = new pc.Vec3( i945[3], i945[4], i945[5] )
  return i944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i949 = data
  var i951 = i949[0]
  var i950 = []
  for(var i = 0; i < i951.length; i += 1) {
    i950.push( i951[i + 0] );
  }
  i948.genericBindings = i950
  var i953 = i949[1]
  var i952 = []
  for(var i = 0; i < i953.length; i += 1) {
    i952.push( i953[i + 0] );
  }
  i948.pptrCurveMapping = i952
  return i948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i955 = data
  i954.name = i955[0]
  i954.ascent = i955[1]
  i954.originalLineHeight = i955[2]
  i954.fontSize = i955[3]
  var i957 = i955[4]
  var i956 = []
  for(var i = 0; i < i957.length; i += 1) {
    i956.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i957[i + 0]) );
  }
  i954.characterInfo = i956
  request.r(i955[5], i955[6], 0, i954, 'texture')
  i954.originalFontSize = i955[7]
  return i954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i961 = data
  i960.index = i961[0]
  i960.advance = i961[1]
  i960.bearing = i961[2]
  i960.glyphWidth = i961[3]
  i960.glyphHeight = i961[4]
  i960.minX = i961[5]
  i960.maxX = i961[6]
  i960.minY = i961[7]
  i960.maxY = i961[8]
  i960.uvBottomLeftX = i961[9]
  i960.uvBottomLeftY = i961[10]
  i960.uvBottomRightX = i961[11]
  i960.uvBottomRightY = i961[12]
  i960.uvTopLeftX = i961[13]
  i960.uvTopLeftY = i961[14]
  i960.uvTopRightX = i961[15]
  i960.uvTopRightY = i961[16]
  return i960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i963 = data
  i962.name = i963[0]
  var i965 = i963[1]
  var i964 = []
  for(var i = 0; i < i965.length; i += 1) {
    i964.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i965[i + 0]) );
  }
  i962.layers = i964
  var i967 = i963[2]
  var i966 = []
  for(var i = 0; i < i967.length; i += 1) {
    i966.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i967[i + 0]) );
  }
  i962.parameters = i966
  i962.animationClips = i963[3]
  i962.avatarUnsupported = i963[4]
  return i962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i971 = data
  i970.name = i971[0]
  i970.defaultWeight = i971[1]
  i970.blendingMode = i971[2]
  i970.avatarMask = i971[3]
  i970.syncedLayerIndex = i971[4]
  i970.syncedLayerAffectsTiming = !!i971[5]
  i970.syncedLayers = i971[6]
  i970.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i971[7], i970.stateMachine)
  return i970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i973 = data
  i972.id = i973[0]
  i972.name = i973[1]
  i972.path = i973[2]
  var i975 = i973[3]
  var i974 = []
  for(var i = 0; i < i975.length; i += 1) {
    i974.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i975[i + 0]) );
  }
  i972.states = i974
  var i977 = i973[4]
  var i976 = []
  for(var i = 0; i < i977.length; i += 1) {
    i976.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i977[i + 0]) );
  }
  i972.machines = i976
  var i979 = i973[5]
  var i978 = []
  for(var i = 0; i < i979.length; i += 1) {
    i978.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i979[i + 0]) );
  }
  i972.entryStateTransitions = i978
  var i981 = i973[6]
  var i980 = []
  for(var i = 0; i < i981.length; i += 1) {
    i980.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i981[i + 0]) );
  }
  i972.exitStateTransitions = i980
  var i983 = i973[7]
  var i982 = []
  for(var i = 0; i < i983.length; i += 1) {
    i982.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i983[i + 0]) );
  }
  i972.anyStateTransitions = i982
  i972.defaultStateId = i973[8]
  return i972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i987 = data
  i986.id = i987[0]
  i986.name = i987[1]
  i986.cycleOffset = i987[2]
  i986.cycleOffsetParameter = i987[3]
  i986.cycleOffsetParameterActive = !!i987[4]
  i986.mirror = !!i987[5]
  i986.mirrorParameter = i987[6]
  i986.mirrorParameterActive = !!i987[7]
  i986.motionId = i987[8]
  i986.nameHash = i987[9]
  i986.fullPathHash = i987[10]
  i986.speed = i987[11]
  i986.speedParameter = i987[12]
  i986.speedParameterActive = !!i987[13]
  i986.tag = i987[14]
  i986.tagHash = i987[15]
  i986.writeDefaultValues = !!i987[16]
  var i989 = i987[17]
  var i988 = []
  for(var i = 0; i < i989.length; i += 2) {
  request.r(i989[i + 0], i989[i + 1], 2, i988, '')
  }
  i986.behaviours = i988
  var i991 = i987[18]
  var i990 = []
  for(var i = 0; i < i991.length; i += 1) {
    i990.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i991[i + 0]) );
  }
  i986.transitions = i990
  return i986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i997 = data
  i996.fullPath = i997[0]
  i996.canTransitionToSelf = !!i997[1]
  i996.duration = i997[2]
  i996.exitTime = i997[3]
  i996.hasExitTime = !!i997[4]
  i996.hasFixedDuration = !!i997[5]
  i996.interruptionSource = i997[6]
  i996.offset = i997[7]
  i996.orderedInterruption = !!i997[8]
  i996.destinationStateId = i997[9]
  i996.isExit = !!i997[10]
  i996.mute = !!i997[11]
  i996.solo = !!i997[12]
  var i999 = i997[13]
  var i998 = []
  for(var i = 0; i < i999.length; i += 1) {
    i998.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i999[i + 0]) );
  }
  i996.conditions = i998
  return i996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1005 = data
  i1004.destinationStateId = i1005[0]
  i1004.isExit = !!i1005[1]
  i1004.mute = !!i1005[2]
  i1004.solo = !!i1005[3]
  var i1007 = i1005[4]
  var i1006 = []
  for(var i = 0; i < i1007.length; i += 1) {
    i1006.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1007[i + 0]) );
  }
  i1004.conditions = i1006
  return i1004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1011 = data
  i1010.defaultBool = !!i1011[0]
  i1010.defaultFloat = i1011[1]
  i1010.defaultInt = i1011[2]
  i1010.name = i1011[3]
  i1010.nameHash = i1011[4]
  i1010.type = i1011[5]
  return i1010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1015 = data
  i1014.mode = i1015[0]
  i1014.parameter = i1015[1]
  i1014.threshold = i1015[2]
  return i1014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1017 = data
  i1016.name = i1017[0]
  i1016.bytes64 = i1017[1]
  i1016.data = i1017[2]
  return i1016
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1018 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1019 = data
  i1018.hashCode = i1019[0]
  request.r(i1019[1], i1019[2], 0, i1018, 'material')
  i1018.materialHashCode = i1019[3]
  request.r(i1019[4], i1019[5], 0, i1018, 'atlas')
  i1018.normalStyle = i1019[6]
  i1018.normalSpacingOffset = i1019[7]
  i1018.boldStyle = i1019[8]
  i1018.boldSpacing = i1019[9]
  i1018.italicStyle = i1019[10]
  i1018.tabSize = i1019[11]
  i1018.m_Version = i1019[12]
  i1018.m_SourceFontFileGUID = i1019[13]
  request.r(i1019[14], i1019[15], 0, i1018, 'm_SourceFontFile_EditorRef')
  request.r(i1019[16], i1019[17], 0, i1018, 'm_SourceFontFile')
  i1018.m_AtlasPopulationMode = i1019[18]
  i1018.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1019[19], i1018.m_FaceInfo)
  var i1021 = i1019[20]
  var i1020 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1021.length; i += 1) {
    i1020.add(request.d('UnityEngine.TextCore.Glyph', i1021[i + 0]));
  }
  i1018.m_GlyphTable = i1020
  var i1023 = i1019[21]
  var i1022 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1023.length; i += 1) {
    i1022.add(request.d('TMPro.TMP_Character', i1023[i + 0]));
  }
  i1018.m_CharacterTable = i1022
  var i1025 = i1019[22]
  var i1024 = []
  for(var i = 0; i < i1025.length; i += 2) {
  request.r(i1025[i + 0], i1025[i + 1], 2, i1024, '')
  }
  i1018.m_AtlasTextures = i1024
  i1018.m_AtlasTextureIndex = i1019[23]
  i1018.m_IsMultiAtlasTexturesEnabled = !!i1019[24]
  i1018.m_ClearDynamicDataOnBuild = !!i1019[25]
  var i1027 = i1019[26]
  var i1026 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1027.length; i += 1) {
    i1026.add(request.d('UnityEngine.TextCore.GlyphRect', i1027[i + 0]));
  }
  i1018.m_UsedGlyphRects = i1026
  var i1029 = i1019[27]
  var i1028 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1029.length; i += 1) {
    i1028.add(request.d('UnityEngine.TextCore.GlyphRect', i1029[i + 0]));
  }
  i1018.m_FreeGlyphRects = i1028
  i1018.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1019[28], i1018.m_fontInfo)
  i1018.m_AtlasWidth = i1019[29]
  i1018.m_AtlasHeight = i1019[30]
  i1018.m_AtlasPadding = i1019[31]
  i1018.m_AtlasRenderMode = i1019[32]
  var i1031 = i1019[33]
  var i1030 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1031.length; i += 1) {
    i1030.add(request.d('TMPro.TMP_Glyph', i1031[i + 0]));
  }
  i1018.m_glyphInfoList = i1030
  i1018.m_KerningTable = request.d('TMPro.KerningTable', i1019[34], i1018.m_KerningTable)
  i1018.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1019[35], i1018.m_FontFeatureTable)
  var i1033 = i1019[36]
  var i1032 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1033.length; i += 2) {
  request.r(i1033[i + 0], i1033[i + 1], 1, i1032, '')
  }
  i1018.fallbackFontAssets = i1032
  var i1035 = i1019[37]
  var i1034 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1035.length; i += 2) {
  request.r(i1035[i + 0], i1035[i + 1], 1, i1034, '')
  }
  i1018.m_FallbackFontAssetTable = i1034
  i1018.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1019[38], i1018.m_CreationSettings)
  var i1037 = i1019[39]
  var i1036 = []
  for(var i = 0; i < i1037.length; i += 1) {
    i1036.push( request.d('TMPro.TMP_FontWeightPair', i1037[i + 0]) );
  }
  i1018.m_FontWeightTable = i1036
  var i1039 = i1019[40]
  var i1038 = []
  for(var i = 0; i < i1039.length; i += 1) {
    i1038.push( request.d('TMPro.TMP_FontWeightPair', i1039[i + 0]) );
  }
  i1018.fontWeights = i1038
  return i1018
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1040 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1041 = data
  i1040.m_FaceIndex = i1041[0]
  i1040.m_FamilyName = i1041[1]
  i1040.m_StyleName = i1041[2]
  i1040.m_PointSize = i1041[3]
  i1040.m_Scale = i1041[4]
  i1040.m_UnitsPerEM = i1041[5]
  i1040.m_LineHeight = i1041[6]
  i1040.m_AscentLine = i1041[7]
  i1040.m_CapLine = i1041[8]
  i1040.m_MeanLine = i1041[9]
  i1040.m_Baseline = i1041[10]
  i1040.m_DescentLine = i1041[11]
  i1040.m_SuperscriptOffset = i1041[12]
  i1040.m_SuperscriptSize = i1041[13]
  i1040.m_SubscriptOffset = i1041[14]
  i1040.m_SubscriptSize = i1041[15]
  i1040.m_UnderlineOffset = i1041[16]
  i1040.m_UnderlineThickness = i1041[17]
  i1040.m_StrikethroughOffset = i1041[18]
  i1040.m_StrikethroughThickness = i1041[19]
  i1040.m_TabWidth = i1041[20]
  return i1040
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1044 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1045 = data
  i1044.m_Index = i1045[0]
  i1044.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1045[1], i1044.m_Metrics)
  i1044.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1045[2], i1044.m_GlyphRect)
  i1044.m_Scale = i1045[3]
  i1044.m_AtlasIndex = i1045[4]
  i1044.m_ClassDefinitionType = i1045[5]
  return i1044
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1046 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1047 = data
  i1046.m_Width = i1047[0]
  i1046.m_Height = i1047[1]
  i1046.m_HorizontalBearingX = i1047[2]
  i1046.m_HorizontalBearingY = i1047[3]
  i1046.m_HorizontalAdvance = i1047[4]
  return i1046
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1048 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1049 = data
  i1048.m_X = i1049[0]
  i1048.m_Y = i1049[1]
  i1048.m_Width = i1049[2]
  i1048.m_Height = i1049[3]
  return i1048
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1052 = root || request.c( 'TMPro.TMP_Character' )
  var i1053 = data
  i1052.m_ElementType = i1053[0]
  i1052.m_Unicode = i1053[1]
  i1052.m_GlyphIndex = i1053[2]
  i1052.m_Scale = i1053[3]
  return i1052
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1058 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1059 = data
  i1058.Name = i1059[0]
  i1058.PointSize = i1059[1]
  i1058.Scale = i1059[2]
  i1058.CharacterCount = i1059[3]
  i1058.LineHeight = i1059[4]
  i1058.Baseline = i1059[5]
  i1058.Ascender = i1059[6]
  i1058.CapHeight = i1059[7]
  i1058.Descender = i1059[8]
  i1058.CenterLine = i1059[9]
  i1058.SuperscriptOffset = i1059[10]
  i1058.SubscriptOffset = i1059[11]
  i1058.SubSize = i1059[12]
  i1058.Underline = i1059[13]
  i1058.UnderlineThickness = i1059[14]
  i1058.strikethrough = i1059[15]
  i1058.strikethroughThickness = i1059[16]
  i1058.TabWidth = i1059[17]
  i1058.Padding = i1059[18]
  i1058.AtlasWidth = i1059[19]
  i1058.AtlasHeight = i1059[20]
  return i1058
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1062 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1063 = data
  i1062.id = i1063[0]
  i1062.x = i1063[1]
  i1062.y = i1063[2]
  i1062.width = i1063[3]
  i1062.height = i1063[4]
  i1062.xOffset = i1063[5]
  i1062.yOffset = i1063[6]
  i1062.xAdvance = i1063[7]
  i1062.scale = i1063[8]
  return i1062
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1064 = root || request.c( 'TMPro.KerningTable' )
  var i1065 = data
  var i1067 = i1065[0]
  var i1066 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1067.length; i += 1) {
    i1066.add(request.d('TMPro.KerningPair', i1067[i + 0]));
  }
  i1064.kerningPairs = i1066
  return i1064
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1070 = root || request.c( 'TMPro.KerningPair' )
  var i1071 = data
  i1070.xOffset = i1071[0]
  i1070.m_FirstGlyph = i1071[1]
  i1070.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1071[2], i1070.m_FirstGlyphAdjustments)
  i1070.m_SecondGlyph = i1071[3]
  i1070.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1071[4], i1070.m_SecondGlyphAdjustments)
  i1070.m_IgnoreSpacingAdjustments = !!i1071[5]
  return i1070
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1072 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1073 = data
  var i1075 = i1073[0]
  var i1074 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1075.length; i += 1) {
    i1074.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1075[i + 0]));
  }
  i1072.m_GlyphPairAdjustmentRecords = i1074
  return i1072
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1078 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1079 = data
  i1078.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1079[0], i1078.m_FirstAdjustmentRecord)
  i1078.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1079[1], i1078.m_SecondAdjustmentRecord)
  i1078.m_FeatureLookupFlags = i1079[2]
  return i1078
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1080 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1081 = data
  i1080.m_GlyphIndex = i1081[0]
  i1080.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1081[1], i1080.m_GlyphValueRecord)
  return i1080
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1082 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1083 = data
  i1082.m_XPlacement = i1083[0]
  i1082.m_YPlacement = i1083[1]
  i1082.m_XAdvance = i1083[2]
  i1082.m_YAdvance = i1083[3]
  return i1082
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1086 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1087 = data
  i1086.sourceFontFileName = i1087[0]
  i1086.sourceFontFileGUID = i1087[1]
  i1086.pointSizeSamplingMode = i1087[2]
  i1086.pointSize = i1087[3]
  i1086.padding = i1087[4]
  i1086.packingMode = i1087[5]
  i1086.atlasWidth = i1087[6]
  i1086.atlasHeight = i1087[7]
  i1086.characterSetSelectionMode = i1087[8]
  i1086.characterSequence = i1087[9]
  i1086.referencedFontAssetGUID = i1087[10]
  i1086.referencedTextAssetGUID = i1087[11]
  i1086.fontStyle = i1087[12]
  i1086.fontStyleModifier = i1087[13]
  i1086.renderMode = i1087[14]
  i1086.includeFontFeatures = !!i1087[15]
  return i1086
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1090 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1091 = data
  request.r(i1091[0], i1091[1], 0, i1090, 'regularTypeface')
  request.r(i1091[2], i1091[3], 0, i1090, 'italicTypeface')
  return i1090
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1092 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1093 = data
  i1092.useSafeMode = !!i1093[0]
  i1092.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1093[1], i1092.safeModeOptions)
  i1092.timeScale = i1093[2]
  i1092.unscaledTimeScale = i1093[3]
  i1092.useSmoothDeltaTime = !!i1093[4]
  i1092.maxSmoothUnscaledTime = i1093[5]
  i1092.rewindCallbackMode = i1093[6]
  i1092.showUnityEditorReport = !!i1093[7]
  i1092.logBehaviour = i1093[8]
  i1092.drawGizmos = !!i1093[9]
  i1092.defaultRecyclable = !!i1093[10]
  i1092.defaultAutoPlay = i1093[11]
  i1092.defaultUpdateType = i1093[12]
  i1092.defaultTimeScaleIndependent = !!i1093[13]
  i1092.defaultEaseType = i1093[14]
  i1092.defaultEaseOvershootOrAmplitude = i1093[15]
  i1092.defaultEasePeriod = i1093[16]
  i1092.defaultAutoKill = !!i1093[17]
  i1092.defaultLoopType = i1093[18]
  i1092.debugMode = !!i1093[19]
  i1092.debugStoreTargetId = !!i1093[20]
  i1092.showPreviewPanel = !!i1093[21]
  i1092.storeSettingsLocation = i1093[22]
  i1092.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1093[23], i1092.modules)
  i1092.createASMDEF = !!i1093[24]
  i1092.showPlayingTweens = !!i1093[25]
  i1092.showPausedTweens = !!i1093[26]
  return i1092
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1094 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1095 = data
  i1094.logBehaviour = i1095[0]
  i1094.nestedTweenFailureBehaviour = i1095[1]
  return i1094
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1096 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1097 = data
  i1096.showPanel = !!i1097[0]
  i1096.audioEnabled = !!i1097[1]
  i1096.physicsEnabled = !!i1097[2]
  i1096.physics2DEnabled = !!i1097[3]
  i1096.spriteEnabled = !!i1097[4]
  i1096.uiEnabled = !!i1097[5]
  i1096.textMeshProEnabled = !!i1097[6]
  i1096.tk2DEnabled = !!i1097[7]
  i1096.deAudioEnabled = !!i1097[8]
  i1096.deUnityExtendedEnabled = !!i1097[9]
  i1096.epoOutlineEnabled = !!i1097[10]
  return i1096
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1098 = root || request.c( 'TMPro.TMP_Settings' )
  var i1099 = data
  i1098.m_enableWordWrapping = !!i1099[0]
  i1098.m_enableKerning = !!i1099[1]
  i1098.m_enableExtraPadding = !!i1099[2]
  i1098.m_enableTintAllSprites = !!i1099[3]
  i1098.m_enableParseEscapeCharacters = !!i1099[4]
  i1098.m_EnableRaycastTarget = !!i1099[5]
  i1098.m_GetFontFeaturesAtRuntime = !!i1099[6]
  i1098.m_missingGlyphCharacter = i1099[7]
  i1098.m_warningsDisabled = !!i1099[8]
  request.r(i1099[9], i1099[10], 0, i1098, 'm_defaultFontAsset')
  i1098.m_defaultFontAssetPath = i1099[11]
  i1098.m_defaultFontSize = i1099[12]
  i1098.m_defaultAutoSizeMinRatio = i1099[13]
  i1098.m_defaultAutoSizeMaxRatio = i1099[14]
  i1098.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1099[15], i1099[16] )
  i1098.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1099[17], i1099[18] )
  i1098.m_autoSizeTextContainer = !!i1099[19]
  i1098.m_IsTextObjectScaleStatic = !!i1099[20]
  var i1101 = i1099[21]
  var i1100 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1101.length; i += 2) {
  request.r(i1101[i + 0], i1101[i + 1], 1, i1100, '')
  }
  i1098.m_fallbackFontAssets = i1100
  i1098.m_matchMaterialPreset = !!i1099[22]
  request.r(i1099[23], i1099[24], 0, i1098, 'm_defaultSpriteAsset')
  i1098.m_defaultSpriteAssetPath = i1099[25]
  i1098.m_enableEmojiSupport = !!i1099[26]
  i1098.m_MissingCharacterSpriteUnicode = i1099[27]
  i1098.m_defaultColorGradientPresetsPath = i1099[28]
  request.r(i1099[29], i1099[30], 0, i1098, 'm_defaultStyleSheet')
  i1098.m_StyleSheetsResourcePath = i1099[31]
  request.r(i1099[32], i1099[33], 0, i1098, 'm_leadingCharacters')
  request.r(i1099[34], i1099[35], 0, i1098, 'm_followingCharacters')
  i1098.m_UseModernHangulLineBreakingRules = !!i1099[36]
  return i1098
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1102 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1103 = data
  i1102.hashCode = i1103[0]
  request.r(i1103[1], i1103[2], 0, i1102, 'material')
  i1102.materialHashCode = i1103[3]
  request.r(i1103[4], i1103[5], 0, i1102, 'spriteSheet')
  var i1105 = i1103[6]
  var i1104 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1105.length; i += 1) {
    i1104.add(request.d('TMPro.TMP_Sprite', i1105[i + 0]));
  }
  i1102.spriteInfoList = i1104
  var i1107 = i1103[7]
  var i1106 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1107.length; i += 2) {
  request.r(i1107[i + 0], i1107[i + 1], 1, i1106, '')
  }
  i1102.fallbackSpriteAssets = i1106
  i1102.m_Version = i1103[8]
  i1102.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1103[9], i1102.m_FaceInfo)
  var i1109 = i1103[10]
  var i1108 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1109.length; i += 1) {
    i1108.add(request.d('TMPro.TMP_SpriteCharacter', i1109[i + 0]));
  }
  i1102.m_SpriteCharacterTable = i1108
  var i1111 = i1103[11]
  var i1110 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1111.length; i += 1) {
    i1110.add(request.d('TMPro.TMP_SpriteGlyph', i1111[i + 0]));
  }
  i1102.m_SpriteGlyphTable = i1110
  return i1102
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1114 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1115 = data
  i1114.name = i1115[0]
  i1114.hashCode = i1115[1]
  i1114.unicode = i1115[2]
  i1114.pivot = new pc.Vec2( i1115[3], i1115[4] )
  request.r(i1115[5], i1115[6], 0, i1114, 'sprite')
  i1114.id = i1115[7]
  i1114.x = i1115[8]
  i1114.y = i1115[9]
  i1114.width = i1115[10]
  i1114.height = i1115[11]
  i1114.xOffset = i1115[12]
  i1114.yOffset = i1115[13]
  i1114.xAdvance = i1115[14]
  i1114.scale = i1115[15]
  return i1114
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1120 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1121 = data
  i1120.m_Name = i1121[0]
  i1120.m_HashCode = i1121[1]
  i1120.m_ElementType = i1121[2]
  i1120.m_Unicode = i1121[3]
  i1120.m_GlyphIndex = i1121[4]
  i1120.m_Scale = i1121[5]
  return i1120
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1124 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1125 = data
  request.r(i1125[0], i1125[1], 0, i1124, 'sprite')
  i1124.m_Index = i1125[2]
  i1124.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1125[3], i1124.m_Metrics)
  i1124.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1125[4], i1124.m_GlyphRect)
  i1124.m_Scale = i1125[5]
  i1124.m_AtlasIndex = i1125[6]
  i1124.m_ClassDefinitionType = i1125[7]
  return i1124
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1126 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1127 = data
  var i1129 = i1127[0]
  var i1128 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1129.length; i += 1) {
    i1128.add(request.d('TMPro.TMP_Style', i1129[i + 0]));
  }
  i1126.m_StyleList = i1128
  return i1126
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1132 = root || request.c( 'TMPro.TMP_Style' )
  var i1133 = data
  i1132.m_Name = i1133[0]
  i1132.m_HashCode = i1133[1]
  i1132.m_OpeningDefinition = i1133[2]
  i1132.m_ClosingDefinition = i1133[3]
  i1132.m_OpeningTagArray = i1133[4]
  i1132.m_ClosingTagArray = i1133[5]
  i1132.m_OpeningTagUnicodeArray = i1133[6]
  i1132.m_ClosingTagUnicodeArray = i1133[7]
  return i1132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1134 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1135 = data
  var i1137 = i1135[0]
  var i1136 = []
  for(var i = 0; i < i1137.length; i += 1) {
    i1136.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1137[i + 0]) );
  }
  i1134.files = i1136
  i1134.componentToPrefabIds = i1135[1]
  return i1134
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1140 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1141 = data
  i1140.path = i1141[0]
  request.r(i1141[1], i1141[2], 0, i1140, 'unityObject')
  return i1140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1143 = data
  var i1145 = i1143[0]
  var i1144 = []
  for(var i = 0; i < i1145.length; i += 1) {
    i1144.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1145[i + 0]) );
  }
  i1142.scriptsExecutionOrder = i1144
  var i1147 = i1143[1]
  var i1146 = []
  for(var i = 0; i < i1147.length; i += 1) {
    i1146.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1147[i + 0]) );
  }
  i1142.sortingLayers = i1146
  var i1149 = i1143[2]
  var i1148 = []
  for(var i = 0; i < i1149.length; i += 1) {
    i1148.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1149[i + 0]) );
  }
  i1142.cullingLayers = i1148
  i1142.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1143[3], i1142.timeSettings)
  i1142.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1143[4], i1142.physicsSettings)
  i1142.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1143[5], i1142.physics2DSettings)
  i1142.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1143[6], i1142.qualitySettings)
  i1142.enableRealtimeShadows = !!i1143[7]
  i1142.enableAutoInstancing = !!i1143[8]
  i1142.enableDynamicBatching = !!i1143[9]
  i1142.lightmapEncodingQuality = i1143[10]
  i1142.desiredColorSpace = i1143[11]
  var i1151 = i1143[12]
  var i1150 = []
  for(var i = 0; i < i1151.length; i += 1) {
    i1150.push( i1151[i + 0] );
  }
  i1142.allTags = i1150
  return i1142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1154 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1155 = data
  i1154.name = i1155[0]
  i1154.value = i1155[1]
  return i1154
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1159 = data
  i1158.id = i1159[0]
  i1158.name = i1159[1]
  i1158.value = i1159[2]
  return i1158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1162 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1163 = data
  i1162.id = i1163[0]
  i1162.name = i1163[1]
  return i1162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1165 = data
  i1164.fixedDeltaTime = i1165[0]
  i1164.maximumDeltaTime = i1165[1]
  i1164.timeScale = i1165[2]
  i1164.maximumParticleTimestep = i1165[3]
  return i1164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1166 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1167 = data
  i1166.gravity = new pc.Vec3( i1167[0], i1167[1], i1167[2] )
  i1166.defaultSolverIterations = i1167[3]
  i1166.bounceThreshold = i1167[4]
  i1166.autoSyncTransforms = !!i1167[5]
  i1166.autoSimulation = !!i1167[6]
  var i1169 = i1167[7]
  var i1168 = []
  for(var i = 0; i < i1169.length; i += 1) {
    i1168.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1169[i + 0]) );
  }
  i1166.collisionMatrix = i1168
  return i1166
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1172 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1173 = data
  i1172.enabled = !!i1173[0]
  i1172.layerId = i1173[1]
  i1172.otherLayerId = i1173[2]
  return i1172
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1174 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1175 = data
  request.r(i1175[0], i1175[1], 0, i1174, 'material')
  i1174.gravity = new pc.Vec2( i1175[2], i1175[3] )
  i1174.positionIterations = i1175[4]
  i1174.velocityIterations = i1175[5]
  i1174.velocityThreshold = i1175[6]
  i1174.maxLinearCorrection = i1175[7]
  i1174.maxAngularCorrection = i1175[8]
  i1174.maxTranslationSpeed = i1175[9]
  i1174.maxRotationSpeed = i1175[10]
  i1174.baumgarteScale = i1175[11]
  i1174.baumgarteTOIScale = i1175[12]
  i1174.timeToSleep = i1175[13]
  i1174.linearSleepTolerance = i1175[14]
  i1174.angularSleepTolerance = i1175[15]
  i1174.defaultContactOffset = i1175[16]
  i1174.autoSimulation = !!i1175[17]
  i1174.queriesHitTriggers = !!i1175[18]
  i1174.queriesStartInColliders = !!i1175[19]
  i1174.callbacksOnDisable = !!i1175[20]
  i1174.reuseCollisionCallbacks = !!i1175[21]
  i1174.autoSyncTransforms = !!i1175[22]
  var i1177 = i1175[23]
  var i1176 = []
  for(var i = 0; i < i1177.length; i += 1) {
    i1176.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1177[i + 0]) );
  }
  i1174.collisionMatrix = i1176
  return i1174
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1180 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1181 = data
  i1180.enabled = !!i1181[0]
  i1180.layerId = i1181[1]
  i1180.otherLayerId = i1181[2]
  return i1180
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1182 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1183 = data
  var i1185 = i1183[0]
  var i1184 = []
  for(var i = 0; i < i1185.length; i += 1) {
    i1184.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1185[i + 0]) );
  }
  i1182.qualityLevels = i1184
  var i1187 = i1183[1]
  var i1186 = []
  for(var i = 0; i < i1187.length; i += 1) {
    i1186.push( i1187[i + 0] );
  }
  i1182.names = i1186
  i1182.shadows = i1183[2]
  i1182.anisotropicFiltering = i1183[3]
  i1182.antiAliasing = i1183[4]
  i1182.lodBias = i1183[5]
  i1182.shadowCascades = i1183[6]
  i1182.shadowDistance = i1183[7]
  i1182.shadowmaskMode = i1183[8]
  i1182.shadowProjection = i1183[9]
  i1182.shadowResolution = i1183[10]
  i1182.softParticles = !!i1183[11]
  i1182.softVegetation = !!i1183[12]
  i1182.activeColorSpace = i1183[13]
  i1182.desiredColorSpace = i1183[14]
  i1182.masterTextureLimit = i1183[15]
  i1182.maxQueuedFrames = i1183[16]
  i1182.particleRaycastBudget = i1183[17]
  i1182.pixelLightCount = i1183[18]
  i1182.realtimeReflectionProbes = !!i1183[19]
  i1182.shadowCascade2Split = i1183[20]
  i1182.shadowCascade4Split = new pc.Vec3( i1183[21], i1183[22], i1183[23] )
  i1182.streamingMipmapsActive = !!i1183[24]
  i1182.vSyncCount = i1183[25]
  i1182.asyncUploadBufferSize = i1183[26]
  i1182.asyncUploadTimeSlice = i1183[27]
  i1182.billboardsFaceCameraPosition = !!i1183[28]
  i1182.shadowNearPlaneOffset = i1183[29]
  i1182.streamingMipmapsMemoryBudget = i1183[30]
  i1182.maximumLODLevel = i1183[31]
  i1182.streamingMipmapsAddAllCameras = !!i1183[32]
  i1182.streamingMipmapsMaxLevelReduction = i1183[33]
  i1182.streamingMipmapsRenderersPerFrame = i1183[34]
  i1182.resolutionScalingFixedDPIFactor = i1183[35]
  i1182.streamingMipmapsMaxFileIORequests = i1183[36]
  i1182.currentQualityLevel = i1183[37]
  return i1182
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1192 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1193 = data
  i1192.weight = i1193[0]
  i1192.vertices = i1193[1]
  i1192.normals = i1193[2]
  i1192.tangents = i1193[3]
  return i1192
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1194 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1195 = data
  i1194.xPlacement = i1195[0]
  i1194.yPlacement = i1195[1]
  i1194.xAdvance = i1195[2]
  i1194.yAdvance = i1195[3]
  return i1194
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"sharedMesh":16,"bones":18,"updateWhenOffscreen":19,"localBounds":20,"rootBone":21,"blendShapesWeights":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"61":[62],"63":[62],"64":[62],"65":[62],"66":[62],"67":[62],"68":[9],"69":[21],"70":[26],"71":[26],"72":[26],"73":[26],"74":[26],"75":[26],"76":[26],"77":[78],"79":[78],"80":[78],"81":[78],"82":[78],"83":[78],"84":[78],"85":[78],"86":[78],"87":[78],"88":[78],"89":[78],"90":[78],"91":[21],"92":[5],"93":[94],"95":[94],"12":[11],"96":[11],"97":[11],"15":[12],"19":[18,11],"98":[11],"14":[12],"99":[11],"100":[11],"101":[11],"102":[11],"103":[11],"104":[11],"105":[11],"106":[11],"107":[11],"108":[18,11],"109":[11],"110":[11],"111":[11],"112":[11],"113":[18,11],"114":[11],"115":[27],"116":[27],"28":[27],"117":[27],"118":[21],"119":[21],"120":[11],"121":[5,11],"34":[11,18],"122":[11],"123":[18,11],"124":[5],"125":[18,11],"126":[11],"127":[128],"129":[128],"130":[128]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.MonoBehaviour","Tree","UnityEngine.SkinnedMeshRenderer","UnityEngine.BoxCollider","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Light","Conveyor","UnityEngine.CapsuleCollider","UnityEngine.Rigidbody","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","BuildManager","UnityEngine.UI.Button","UnityEngine.GameObject","MoneyController","ButtonLight","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","Build","Garage","ChopperManager","Chopper","CharactersMover","SimplePoint","LoadPoint","UnloadPoint","Forklift","Truck","MoneyBalance","MoneyFlyAnimation","TruckManager","TruckUnloadPoint","TruckMover","GameManager","SimpleAudioManager","UnityEngine.AudioClip","UnityEngine.Cubemap","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.StateMachine","Unity.VisualScripting.ScriptMachine"]

Deserializers.unityVersion = "2022.3.58f1";

Deserializers.productName = "Lumber";

Deserializers.lunaInitializationTime = "03/12/2025 08:03:06";

Deserializers.lunaDaysRunning = "9.1";

Deserializers.lunaVersion = "6.2.1";

Deserializers.lunaSHA = "28f227c1b455c28500de29df936f0d1376ee9c43";

Deserializers.creativeName = "Lumber";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1736";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4364";

Deserializers.runtimeAnalysisExcludedModules = "physics2d, particle-system";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "WebGL";

Deserializers.applicationIdentifier = "com.DefaultCompany.Lumber";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 28;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "5205a45e-ceb2-43fd-904a-a6134a28af85";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEditor","Recorder","RecorderWindow","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()


var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1794 = root || request.c( 'UnityEngine.JointSpring' )
  var i1795 = data
  i1794.spring = i1795[0]
  i1794.damper = i1795[1]
  i1794.targetPosition = i1795[2]
  return i1794
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1796 = root || request.c( 'UnityEngine.JointMotor' )
  var i1797 = data
  i1796.m_TargetVelocity = i1797[0]
  i1796.m_Force = i1797[1]
  i1796.m_FreeSpin = i1797[2]
  return i1796
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1798 = root || request.c( 'UnityEngine.JointLimits' )
  var i1799 = data
  i1798.m_Min = i1799[0]
  i1798.m_Max = i1799[1]
  i1798.m_Bounciness = i1799[2]
  i1798.m_BounceMinVelocity = i1799[3]
  i1798.m_ContactDistance = i1799[4]
  i1798.minBounce = i1799[5]
  i1798.maxBounce = i1799[6]
  return i1798
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1800 = root || request.c( 'UnityEngine.JointDrive' )
  var i1801 = data
  i1800.m_PositionSpring = i1801[0]
  i1800.m_PositionDamper = i1801[1]
  i1800.m_MaximumForce = i1801[2]
  i1800.m_UseAcceleration = i1801[3]
  return i1800
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1802 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1803 = data
  i1802.m_Spring = i1803[0]
  i1802.m_Damper = i1803[1]
  return i1802
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1804 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1805 = data
  i1804.m_Limit = i1805[0]
  i1804.m_Bounciness = i1805[1]
  i1804.m_ContactDistance = i1805[2]
  return i1804
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1806 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1807 = data
  i1806.m_ExtremumSlip = i1807[0]
  i1806.m_ExtremumValue = i1807[1]
  i1806.m_AsymptoteSlip = i1807[2]
  i1806.m_AsymptoteValue = i1807[3]
  i1806.m_Stiffness = i1807[4]
  return i1806
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1808 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1809 = data
  i1808.m_LowerAngle = i1809[0]
  i1808.m_UpperAngle = i1809[1]
  return i1808
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1810 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1811 = data
  i1810.m_MotorSpeed = i1811[0]
  i1810.m_MaximumMotorTorque = i1811[1]
  return i1810
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1812 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1813 = data
  i1812.m_DampingRatio = i1813[0]
  i1812.m_Frequency = i1813[1]
  i1812.m_Angle = i1813[2]
  return i1812
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1814 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1815 = data
  i1814.m_LowerTranslation = i1815[0]
  i1814.m_UpperTranslation = i1815[1]
  return i1814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1817 = data
  i1816.name = i1817[0]
  i1816.width = i1817[1]
  i1816.height = i1817[2]
  i1816.mipmapCount = i1817[3]
  i1816.anisoLevel = i1817[4]
  i1816.filterMode = i1817[5]
  i1816.hdr = !!i1817[6]
  i1816.format = i1817[7]
  i1816.wrapMode = i1817[8]
  i1816.alphaIsTransparency = !!i1817[9]
  i1816.alphaSource = i1817[10]
  i1816.graphicsFormat = i1817[11]
  i1816.sRGBTexture = !!i1817[12]
  i1816.desiredColorSpace = i1817[13]
  i1816.wrapU = i1817[14]
  i1816.wrapV = i1817[15]
  return i1816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i1818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i1819 = data
  i1818.name = i1819[0]
  i1818.halfPrecision = !!i1819[1]
  i1818.useUInt32IndexFormat = !!i1819[2]
  i1818.vertexCount = i1819[3]
  i1818.aabb = i1819[4]
  var i1821 = i1819[5]
  var i1820 = []
  for(var i = 0; i < i1821.length; i += 1) {
    i1820.push( !!i1821[i + 0] );
  }
  i1818.streams = i1820
  i1818.vertices = i1819[6]
  var i1823 = i1819[7]
  var i1822 = []
  for(var i = 0; i < i1823.length; i += 1) {
    i1822.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i1823[i + 0]) );
  }
  i1818.subMeshes = i1822
  var i1825 = i1819[8]
  var i1824 = []
  for(var i = 0; i < i1825.length; i += 16) {
    i1824.push( new pc.Mat4().setData(i1825[i + 0], i1825[i + 1], i1825[i + 2], i1825[i + 3],  i1825[i + 4], i1825[i + 5], i1825[i + 6], i1825[i + 7],  i1825[i + 8], i1825[i + 9], i1825[i + 10], i1825[i + 11],  i1825[i + 12], i1825[i + 13], i1825[i + 14], i1825[i + 15]) );
  }
  i1818.bindposes = i1824
  var i1827 = i1819[9]
  var i1826 = []
  for(var i = 0; i < i1827.length; i += 1) {
    i1826.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i1827[i + 0]) );
  }
  i1818.blendShapes = i1826
  return i1818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i1832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i1833 = data
  i1832.triangles = i1833[0]
  return i1832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i1838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i1839 = data
  i1838.name = i1839[0]
  var i1841 = i1839[1]
  var i1840 = []
  for(var i = 0; i < i1841.length; i += 1) {
    i1840.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i1841[i + 0]) );
  }
  i1838.frames = i1840
  return i1838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1842 = root || new pc.UnityMaterial()
  var i1843 = data
  i1842.name = i1843[0]
  request.r(i1843[1], i1843[2], 0, i1842, 'shader')
  i1842.renderQueue = i1843[3]
  i1842.enableInstancing = !!i1843[4]
  var i1845 = i1843[5]
  var i1844 = []
  for(var i = 0; i < i1845.length; i += 1) {
    i1844.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1845[i + 0]) );
  }
  i1842.floatParameters = i1844
  var i1847 = i1843[6]
  var i1846 = []
  for(var i = 0; i < i1847.length; i += 1) {
    i1846.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1847[i + 0]) );
  }
  i1842.colorParameters = i1846
  var i1849 = i1843[7]
  var i1848 = []
  for(var i = 0; i < i1849.length; i += 1) {
    i1848.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1849[i + 0]) );
  }
  i1842.vectorParameters = i1848
  var i1851 = i1843[8]
  var i1850 = []
  for(var i = 0; i < i1851.length; i += 1) {
    i1850.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1851[i + 0]) );
  }
  i1842.textureParameters = i1850
  var i1853 = i1843[9]
  var i1852 = []
  for(var i = 0; i < i1853.length; i += 1) {
    i1852.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1853[i + 0]) );
  }
  i1842.materialFlags = i1852
  return i1842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1857 = data
  i1856.name = i1857[0]
  i1856.value = i1857[1]
  return i1856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1861 = data
  i1860.name = i1861[0]
  i1860.value = new pc.Color(i1861[1], i1861[2], i1861[3], i1861[4])
  return i1860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1865 = data
  i1864.name = i1865[0]
  i1864.value = new pc.Vec4( i1865[1], i1865[2], i1865[3], i1865[4] )
  return i1864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1869 = data
  i1868.name = i1869[0]
  request.r(i1869[1], i1869[2], 0, i1868, 'value')
  return i1868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1873 = data
  i1872.name = i1873[0]
  i1872.enabled = !!i1873[1]
  return i1872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1875 = data
  i1874.position = new pc.Vec3( i1875[0], i1875[1], i1875[2] )
  i1874.scale = new pc.Vec3( i1875[3], i1875[4], i1875[5] )
  i1874.rotation = new pc.Quat(i1875[6], i1875[7], i1875[8], i1875[9])
  return i1874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i1876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i1877 = data
  request.r(i1877[0], i1877[1], 0, i1876, 'sharedMesh')
  return i1876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i1878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i1879 = data
  request.r(i1879[0], i1879[1], 0, i1878, 'additionalVertexStreams')
  i1878.enabled = !!i1879[2]
  request.r(i1879[3], i1879[4], 0, i1878, 'sharedMaterial')
  var i1881 = i1879[5]
  var i1880 = []
  for(var i = 0; i < i1881.length; i += 2) {
  request.r(i1881[i + 0], i1881[i + 1], 2, i1880, '')
  }
  i1878.sharedMaterials = i1880
  i1878.receiveShadows = !!i1879[6]
  i1878.shadowCastingMode = i1879[7]
  i1878.sortingLayerID = i1879[8]
  i1878.sortingOrder = i1879[9]
  i1878.lightmapIndex = i1879[10]
  i1878.lightmapSceneIndex = i1879[11]
  i1878.lightmapScaleOffset = new pc.Vec4( i1879[12], i1879[13], i1879[14], i1879[15] )
  i1878.lightProbeUsage = i1879[16]
  i1878.reflectionProbeUsage = i1879[17]
  return i1878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1885 = data
  i1884.name = i1885[0]
  i1884.tagId = i1885[1]
  i1884.enabled = !!i1885[2]
  i1884.isStatic = !!i1885[3]
  i1884.layer = i1885[4]
  return i1884
}

Deserializers["Tree"] = function (request, data, root) {
  var i1886 = root || request.c( 'Tree' )
  var i1887 = data
  i1886.flashSpeed = i1887[0]
  i1886.pauseBetweenFlashes = i1887[1]
  i1886.flashCount = i1887[2]
  return i1886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i1888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i1889 = data
  i1888.enabled = !!i1889[0]
  request.r(i1889[1], i1889[2], 0, i1888, 'sharedMaterial')
  var i1891 = i1889[3]
  var i1890 = []
  for(var i = 0; i < i1891.length; i += 2) {
  request.r(i1891[i + 0], i1891[i + 1], 2, i1890, '')
  }
  i1888.sharedMaterials = i1890
  i1888.receiveShadows = !!i1889[4]
  i1888.shadowCastingMode = i1889[5]
  i1888.sortingLayerID = i1889[6]
  i1888.sortingOrder = i1889[7]
  i1888.lightmapIndex = i1889[8]
  i1888.lightmapSceneIndex = i1889[9]
  i1888.lightmapScaleOffset = new pc.Vec4( i1889[10], i1889[11], i1889[12], i1889[13] )
  i1888.lightProbeUsage = i1889[14]
  i1888.reflectionProbeUsage = i1889[15]
  request.r(i1889[16], i1889[17], 0, i1888, 'sharedMesh')
  var i1893 = i1889[18]
  var i1892 = []
  for(var i = 0; i < i1893.length; i += 2) {
  request.r(i1893[i + 0], i1893[i + 1], 2, i1892, '')
  }
  i1888.bones = i1892
  i1888.updateWhenOffscreen = !!i1889[19]
  i1888.localBounds = i1889[20]
  request.r(i1889[21], i1889[22], 0, i1888, 'rootBone')
  var i1895 = i1889[23]
  var i1894 = []
  for(var i = 0; i < i1895.length; i += 1) {
    i1894.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i1895[i + 0]) );
  }
  i1888.blendShapesWeights = i1894
  return i1888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i1900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i1901 = data
  i1900.weight = i1901[0]
  return i1900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i1902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i1903 = data
  i1902.center = new pc.Vec3( i1903[0], i1903[1], i1903[2] )
  i1902.size = new pc.Vec3( i1903[3], i1903[4], i1903[5] )
  i1902.enabled = !!i1903[6]
  i1902.isTrigger = !!i1903[7]
  request.r(i1903[8], i1903[9], 0, i1902, 'material')
  return i1902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i1904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i1905 = data
  i1904.name = i1905[0]
  i1904.atlasId = i1905[1]
  i1904.mipmapCount = i1905[2]
  i1904.hdr = !!i1905[3]
  i1904.size = i1905[4]
  i1904.anisoLevel = i1905[5]
  i1904.filterMode = i1905[6]
  var i1907 = i1905[7]
  var i1906 = []
  for(var i = 0; i < i1907.length; i += 4) {
    i1906.push( UnityEngine.Rect.MinMaxRect(i1907[i + 0], i1907[i + 1], i1907[i + 2], i1907[i + 3]) );
  }
  i1904.rects = i1906
  i1904.wrapU = i1905[8]
  i1904.wrapV = i1905[9]
  return i1904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1911 = data
  i1910.name = i1911[0]
  i1910.index = i1911[1]
  i1910.startup = !!i1911[2]
  return i1910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1913 = data
  i1912.pivot = new pc.Vec2( i1913[0], i1913[1] )
  i1912.anchorMin = new pc.Vec2( i1913[2], i1913[3] )
  i1912.anchorMax = new pc.Vec2( i1913[4], i1913[5] )
  i1912.sizeDelta = new pc.Vec2( i1913[6], i1913[7] )
  i1912.anchoredPosition3D = new pc.Vec3( i1913[8], i1913[9], i1913[10] )
  i1912.rotation = new pc.Quat(i1913[11], i1913[12], i1913[13], i1913[14])
  i1912.scale = new pc.Vec3( i1913[15], i1913[16], i1913[17] )
  return i1912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1915 = data
  i1914.enabled = !!i1915[0]
  i1914.planeDistance = i1915[1]
  i1914.referencePixelsPerUnit = i1915[2]
  i1914.isFallbackOverlay = !!i1915[3]
  i1914.renderMode = i1915[4]
  i1914.renderOrder = i1915[5]
  i1914.sortingLayerName = i1915[6]
  i1914.sortingOrder = i1915[7]
  i1914.scaleFactor = i1915[8]
  request.r(i1915[9], i1915[10], 0, i1914, 'worldCamera')
  i1914.overrideSorting = !!i1915[11]
  i1914.pixelPerfect = !!i1915[12]
  i1914.targetDisplay = i1915[13]
  i1914.overridePixelPerfect = !!i1915[14]
  return i1914
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1916 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1917 = data
  i1916.m_UiScaleMode = i1917[0]
  i1916.m_ReferencePixelsPerUnit = i1917[1]
  i1916.m_ScaleFactor = i1917[2]
  i1916.m_ReferenceResolution = new pc.Vec2( i1917[3], i1917[4] )
  i1916.m_ScreenMatchMode = i1917[5]
  i1916.m_MatchWidthOrHeight = i1917[6]
  i1916.m_PhysicalUnit = i1917[7]
  i1916.m_FallbackScreenDPI = i1917[8]
  i1916.m_DefaultSpriteDPI = i1917[9]
  i1916.m_DynamicPixelsPerUnit = i1917[10]
  i1916.m_PresetInfoIsWorld = !!i1917[11]
  return i1916
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1918 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1919 = data
  i1918.m_IgnoreReversedGraphics = !!i1919[0]
  i1918.m_BlockingObjects = i1919[1]
  i1918.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1919[2] )
  return i1918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i1920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i1921 = data
  request.r(i1921[0], i1921[1], 0, i1920, 'animatorController')
  request.r(i1921[2], i1921[3], 0, i1920, 'avatar')
  i1920.updateMode = i1921[4]
  i1920.hasTransformHierarchy = !!i1921[5]
  i1920.applyRootMotion = !!i1921[6]
  var i1923 = i1921[7]
  var i1922 = []
  for(var i = 0; i < i1923.length; i += 2) {
  request.r(i1923[i + 0], i1923[i + 1], 2, i1922, '')
  }
  i1920.humanBones = i1922
  i1920.enabled = !!i1921[8]
  return i1920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1925 = data
  i1924.cullTransparentMesh = !!i1925[0]
  return i1924
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1926 = root || request.c( 'UnityEngine.UI.Image' )
  var i1927 = data
  request.r(i1927[0], i1927[1], 0, i1926, 'm_Sprite')
  i1926.m_Type = i1927[2]
  i1926.m_PreserveAspect = !!i1927[3]
  i1926.m_FillCenter = !!i1927[4]
  i1926.m_FillMethod = i1927[5]
  i1926.m_FillAmount = i1927[6]
  i1926.m_FillClockwise = !!i1927[7]
  i1926.m_FillOrigin = i1927[8]
  i1926.m_UseSpriteMesh = !!i1927[9]
  i1926.m_PixelsPerUnitMultiplier = i1927[10]
  request.r(i1927[11], i1927[12], 0, i1926, 'm_Material')
  i1926.m_Maskable = !!i1927[13]
  i1926.m_Color = new pc.Color(i1927[14], i1927[15], i1927[16], i1927[17])
  i1926.m_RaycastTarget = !!i1927[18]
  i1926.m_RaycastPadding = new pc.Vec4( i1927[19], i1927[20], i1927[21], i1927[22] )
  return i1926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1929 = data
  i1928.enabled = !!i1929[0]
  i1928.aspect = i1929[1]
  i1928.orthographic = !!i1929[2]
  i1928.orthographicSize = i1929[3]
  i1928.backgroundColor = new pc.Color(i1929[4], i1929[5], i1929[6], i1929[7])
  i1928.nearClipPlane = i1929[8]
  i1928.farClipPlane = i1929[9]
  i1928.fieldOfView = i1929[10]
  i1928.depth = i1929[11]
  i1928.clearFlags = i1929[12]
  i1928.cullingMask = i1929[13]
  i1928.rect = i1929[14]
  request.r(i1929[15], i1929[16], 0, i1928, 'targetTexture')
  i1928.usePhysicalProperties = !!i1929[17]
  i1928.focalLength = i1929[18]
  i1928.sensorSize = new pc.Vec2( i1929[19], i1929[20] )
  i1928.lensShift = new pc.Vec2( i1929[21], i1929[22] )
  i1928.gateFit = i1929[23]
  i1928.commandBufferCount = i1929[24]
  i1928.cameraType = i1929[25]
  return i1928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i1930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i1931 = data
  i1930.enabled = !!i1931[0]
  i1930.type = i1931[1]
  i1930.color = new pc.Color(i1931[2], i1931[3], i1931[4], i1931[5])
  i1930.cullingMask = i1931[6]
  i1930.intensity = i1931[7]
  i1930.range = i1931[8]
  i1930.spotAngle = i1931[9]
  i1930.shadows = i1931[10]
  i1930.shadowNormalBias = i1931[11]
  i1930.shadowBias = i1931[12]
  i1930.shadowStrength = i1931[13]
  i1930.shadowResolution = i1931[14]
  i1930.lightmapBakeType = i1931[15]
  i1930.renderMode = i1931[16]
  request.r(i1931[17], i1931[18], 0, i1930, 'cookie')
  i1930.cookieSize = i1931[19]
  return i1930
}

Deserializers["Conveyor"] = function (request, data, root) {
  var i1932 = root || request.c( 'Conveyor' )
  var i1933 = data
  request.r(i1933[0], i1933[1], 0, i1932, 'canvasAnimator')
  return i1932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i1934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i1935 = data
  i1934.center = new pc.Vec3( i1935[0], i1935[1], i1935[2] )
  i1934.radius = i1935[3]
  i1934.height = i1935[4]
  i1934.direction = i1935[5]
  i1934.enabled = !!i1935[6]
  i1934.isTrigger = !!i1935[7]
  request.r(i1935[8], i1935[9], 0, i1934, 'material')
  return i1934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i1936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i1937 = data
  i1936.mass = i1937[0]
  i1936.drag = i1937[1]
  i1936.angularDrag = i1937[2]
  i1936.useGravity = !!i1937[3]
  i1936.isKinematic = !!i1937[4]
  i1936.constraints = i1937[5]
  i1936.maxAngularVelocity = i1937[6]
  i1936.collisionDetectionMode = i1937[7]
  i1936.interpolation = i1937[8]
  return i1936
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1938 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1939 = data
  request.r(i1939[0], i1939[1], 0, i1938, 'm_FirstSelected')
  i1938.m_sendNavigationEvents = !!i1939[2]
  i1938.m_DragThreshold = i1939[3]
  return i1938
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1940 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1941 = data
  i1940.m_HorizontalAxis = i1941[0]
  i1940.m_VerticalAxis = i1941[1]
  i1940.m_SubmitButton = i1941[2]
  i1940.m_CancelButton = i1941[3]
  i1940.m_InputActionsPerSecond = i1941[4]
  i1940.m_RepeatDelay = i1941[5]
  i1940.m_ForceModuleActive = !!i1941[6]
  i1940.m_SendPointerHoverToParent = !!i1941[7]
  return i1940
}

Deserializers["BuildManager"] = function (request, data, root) {
  var i1942 = root || request.c( 'BuildManager' )
  var i1943 = data
  request.r(i1943[0], i1943[1], 0, i1942, '_buildButton1')
  request.r(i1943[2], i1943[3], 0, i1942, '_buildButton2')
  request.r(i1943[4], i1943[5], 0, i1942, '_buildButton3')
  request.r(i1943[6], i1943[7], 0, i1942, '_build1')
  request.r(i1943[8], i1943[9], 0, i1942, '_build2')
  request.r(i1943[10], i1943[11], 0, i1942, '_build3')
  request.r(i1943[12], i1943[13], 0, i1942, '_moneyController')
  return i1942
}

Deserializers["ButtonLight"] = function (request, data, root) {
  var i1944 = root || request.c( 'ButtonLight' )
  var i1945 = data
  i1944.flashSpeed = i1945[0]
  i1944.pauseBetweenFlashes = i1945[1]
  i1944.flashCount = i1945[2]
  return i1944
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1946 = root || request.c( 'UnityEngine.UI.Button' )
  var i1947 = data
  i1946.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1947[0], i1946.m_OnClick)
  i1946.m_Navigation = request.d('UnityEngine.UI.Navigation', i1947[1], i1946.m_Navigation)
  i1946.m_Transition = i1947[2]
  i1946.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1947[3], i1946.m_Colors)
  i1946.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1947[4], i1946.m_SpriteState)
  i1946.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1947[5], i1946.m_AnimationTriggers)
  i1946.m_Interactable = !!i1947[6]
  request.r(i1947[7], i1947[8], 0, i1946, 'm_TargetGraphic')
  return i1946
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1948 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1949 = data
  i1948.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1949[0], i1948.m_PersistentCalls)
  return i1948
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1950 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1951 = data
  var i1953 = i1951[0]
  var i1952 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1953.length; i += 1) {
    i1952.add(request.d('UnityEngine.Events.PersistentCall', i1953[i + 0]));
  }
  i1950.m_Calls = i1952
  return i1950
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1956 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1957 = data
  request.r(i1957[0], i1957[1], 0, i1956, 'm_Target')
  i1956.m_TargetAssemblyTypeName = i1957[2]
  i1956.m_MethodName = i1957[3]
  i1956.m_Mode = i1957[4]
  i1956.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1957[5], i1956.m_Arguments)
  i1956.m_CallState = i1957[6]
  return i1956
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1958 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1959 = data
  request.r(i1959[0], i1959[1], 0, i1958, 'm_ObjectArgument')
  i1958.m_ObjectArgumentAssemblyTypeName = i1959[2]
  i1958.m_IntArgument = i1959[3]
  i1958.m_FloatArgument = i1959[4]
  i1958.m_StringArgument = i1959[5]
  i1958.m_BoolArgument = !!i1959[6]
  return i1958
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1960 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1961 = data
  i1960.m_Mode = i1961[0]
  i1960.m_WrapAround = !!i1961[1]
  request.r(i1961[2], i1961[3], 0, i1960, 'm_SelectOnUp')
  request.r(i1961[4], i1961[5], 0, i1960, 'm_SelectOnDown')
  request.r(i1961[6], i1961[7], 0, i1960, 'm_SelectOnLeft')
  request.r(i1961[8], i1961[9], 0, i1960, 'm_SelectOnRight')
  return i1960
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1962 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1963 = data
  i1962.m_NormalColor = new pc.Color(i1963[0], i1963[1], i1963[2], i1963[3])
  i1962.m_HighlightedColor = new pc.Color(i1963[4], i1963[5], i1963[6], i1963[7])
  i1962.m_PressedColor = new pc.Color(i1963[8], i1963[9], i1963[10], i1963[11])
  i1962.m_SelectedColor = new pc.Color(i1963[12], i1963[13], i1963[14], i1963[15])
  i1962.m_DisabledColor = new pc.Color(i1963[16], i1963[17], i1963[18], i1963[19])
  i1962.m_ColorMultiplier = i1963[20]
  i1962.m_FadeDuration = i1963[21]
  return i1962
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1964 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1965 = data
  request.r(i1965[0], i1965[1], 0, i1964, 'm_HighlightedSprite')
  request.r(i1965[2], i1965[3], 0, i1964, 'm_PressedSprite')
  request.r(i1965[4], i1965[5], 0, i1964, 'm_SelectedSprite')
  request.r(i1965[6], i1965[7], 0, i1964, 'm_DisabledSprite')
  return i1964
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1966 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1967 = data
  i1966.m_NormalTrigger = i1967[0]
  i1966.m_HighlightedTrigger = i1967[1]
  i1966.m_PressedTrigger = i1967[2]
  i1966.m_SelectedTrigger = i1967[3]
  i1966.m_DisabledTrigger = i1967[4]
  return i1966
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i1968 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i1969 = data
  i1968.m_hasFontAssetChanged = !!i1969[0]
  request.r(i1969[1], i1969[2], 0, i1968, 'm_baseMaterial')
  i1968.m_maskOffset = new pc.Vec4( i1969[3], i1969[4], i1969[5], i1969[6] )
  i1968.m_text = i1969[7]
  i1968.m_isRightToLeft = !!i1969[8]
  request.r(i1969[9], i1969[10], 0, i1968, 'm_fontAsset')
  request.r(i1969[11], i1969[12], 0, i1968, 'm_sharedMaterial')
  var i1971 = i1969[13]
  var i1970 = []
  for(var i = 0; i < i1971.length; i += 2) {
  request.r(i1971[i + 0], i1971[i + 1], 2, i1970, '')
  }
  i1968.m_fontSharedMaterials = i1970
  request.r(i1969[14], i1969[15], 0, i1968, 'm_fontMaterial')
  var i1973 = i1969[16]
  var i1972 = []
  for(var i = 0; i < i1973.length; i += 2) {
  request.r(i1973[i + 0], i1973[i + 1], 2, i1972, '')
  }
  i1968.m_fontMaterials = i1972
  i1968.m_fontColor32 = UnityEngine.Color32.ConstructColor(i1969[17], i1969[18], i1969[19], i1969[20])
  i1968.m_fontColor = new pc.Color(i1969[21], i1969[22], i1969[23], i1969[24])
  i1968.m_enableVertexGradient = !!i1969[25]
  i1968.m_colorMode = i1969[26]
  i1968.m_fontColorGradient = request.d('TMPro.VertexGradient', i1969[27], i1968.m_fontColorGradient)
  request.r(i1969[28], i1969[29], 0, i1968, 'm_fontColorGradientPreset')
  request.r(i1969[30], i1969[31], 0, i1968, 'm_spriteAsset')
  i1968.m_tintAllSprites = !!i1969[32]
  request.r(i1969[33], i1969[34], 0, i1968, 'm_StyleSheet')
  i1968.m_TextStyleHashCode = i1969[35]
  i1968.m_overrideHtmlColors = !!i1969[36]
  i1968.m_faceColor = UnityEngine.Color32.ConstructColor(i1969[37], i1969[38], i1969[39], i1969[40])
  i1968.m_fontSize = i1969[41]
  i1968.m_fontSizeBase = i1969[42]
  i1968.m_fontWeight = i1969[43]
  i1968.m_enableAutoSizing = !!i1969[44]
  i1968.m_fontSizeMin = i1969[45]
  i1968.m_fontSizeMax = i1969[46]
  i1968.m_fontStyle = i1969[47]
  i1968.m_HorizontalAlignment = i1969[48]
  i1968.m_VerticalAlignment = i1969[49]
  i1968.m_textAlignment = i1969[50]
  i1968.m_characterSpacing = i1969[51]
  i1968.m_wordSpacing = i1969[52]
  i1968.m_lineSpacing = i1969[53]
  i1968.m_lineSpacingMax = i1969[54]
  i1968.m_paragraphSpacing = i1969[55]
  i1968.m_charWidthMaxAdj = i1969[56]
  i1968.m_enableWordWrapping = !!i1969[57]
  i1968.m_wordWrappingRatios = i1969[58]
  i1968.m_overflowMode = i1969[59]
  request.r(i1969[60], i1969[61], 0, i1968, 'm_linkedTextComponent')
  request.r(i1969[62], i1969[63], 0, i1968, 'parentLinkedComponent')
  i1968.m_enableKerning = !!i1969[64]
  i1968.m_enableExtraPadding = !!i1969[65]
  i1968.checkPaddingRequired = !!i1969[66]
  i1968.m_isRichText = !!i1969[67]
  i1968.m_parseCtrlCharacters = !!i1969[68]
  i1968.m_isOrthographic = !!i1969[69]
  i1968.m_isCullingEnabled = !!i1969[70]
  i1968.m_horizontalMapping = i1969[71]
  i1968.m_verticalMapping = i1969[72]
  i1968.m_uvLineOffset = i1969[73]
  i1968.m_geometrySortingOrder = i1969[74]
  i1968.m_IsTextObjectScaleStatic = !!i1969[75]
  i1968.m_VertexBufferAutoSizeReduction = !!i1969[76]
  i1968.m_useMaxVisibleDescender = !!i1969[77]
  i1968.m_pageToDisplay = i1969[78]
  i1968.m_margin = new pc.Vec4( i1969[79], i1969[80], i1969[81], i1969[82] )
  i1968.m_isUsingLegacyAnimationComponent = !!i1969[83]
  i1968.m_isVolumetricText = !!i1969[84]
  request.r(i1969[85], i1969[86], 0, i1968, 'm_Material')
  i1968.m_Maskable = !!i1969[87]
  i1968.m_Color = new pc.Color(i1969[88], i1969[89], i1969[90], i1969[91])
  i1968.m_RaycastTarget = !!i1969[92]
  i1968.m_RaycastPadding = new pc.Vec4( i1969[93], i1969[94], i1969[95], i1969[96] )
  return i1968
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i1974 = root || request.c( 'TMPro.VertexGradient' )
  var i1975 = data
  i1974.topLeft = new pc.Color(i1975[0], i1975[1], i1975[2], i1975[3])
  i1974.topRight = new pc.Color(i1975[4], i1975[5], i1975[6], i1975[7])
  i1974.bottomLeft = new pc.Color(i1975[8], i1975[9], i1975[10], i1975[11])
  i1974.bottomRight = new pc.Color(i1975[12], i1975[13], i1975[14], i1975[15])
  return i1974
}

Deserializers["Build"] = function (request, data, root) {
  var i1976 = root || request.c( 'Build' )
  var i1977 = data
  request.r(i1977[0], i1977[1], 0, i1976, 'building')
  return i1976
}

Deserializers["Garage"] = function (request, data, root) {
  var i1978 = root || request.c( 'Garage' )
  var i1979 = data
  request.r(i1979[0], i1979[1], 0, i1978, 'chopper')
  return i1978
}

Deserializers["ChopperManager"] = function (request, data, root) {
  var i1980 = root || request.c( 'ChopperManager' )
  var i1981 = data
  var i1983 = i1981[0]
  var i1982 = new (System.Collections.Generic.List$1(Bridge.ns('Chopper')))
  for(var i = 0; i < i1983.length; i += 2) {
  request.r(i1983[i + 0], i1983[i + 1], 1, i1982, '')
  }
  i1980._choppers = i1982
  return i1980
}

Deserializers["CharactersMover"] = function (request, data, root) {
  var i1986 = root || request.c( 'CharactersMover' )
  var i1987 = data
  var i1989 = i1987[0]
  var i1988 = []
  for(var i = 0; i < i1989.length; i += 2) {
  request.r(i1989[i + 0], i1989[i + 1], 2, i1988, '')
  }
  i1986._normalRoutePoints = i1988
  var i1991 = i1987[1]
  var i1990 = []
  for(var i = 0; i < i1991.length; i += 2) {
  request.r(i1991[i + 0], i1991[i + 1], 2, i1990, '')
  }
  i1986._unloadPoints = i1990
  return i1986
}

Deserializers["Chopper"] = function (request, data, root) {
  var i1996 = root || request.c( 'Chopper' )
  var i1997 = data
  var i1999 = i1997[0]
  var i1998 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i1999.length; i += 2) {
  request.r(i1999[i + 0], i1999[i + 1], 1, i1998, '')
  }
  i1996._cargo = i1998
  return i1996
}

Deserializers["Forklift"] = function (request, data, root) {
  var i2002 = root || request.c( 'Forklift' )
  var i2003 = data
  var i2005 = i2003[0]
  var i2004 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i2005.length; i += 2) {
  request.r(i2005[i + 0], i2005[i + 1], 1, i2004, '')
  }
  i2002._cargo = i2004
  return i2002
}

Deserializers["UnloadPoint"] = function (request, data, root) {
  var i2006 = root || request.c( 'UnloadPoint' )
  var i2007 = data
  request.r(i2007[0], i2007[1], 0, i2006, '_targetTruck')
  i2006._allowForkliftToLoadHalfFullTrucks = !!i2007[2]
  i2006.delay = i2007[3]
  i2006.moveDuration = i2007[4]
  return i2006
}

Deserializers["LoadPoint"] = function (request, data, root) {
  var i2008 = root || request.c( 'LoadPoint' )
  var i2009 = data
  i2008.delay = i2009[0]
  i2008.moveDuration = i2009[1]
  return i2008
}

Deserializers["SimplePoint"] = function (request, data, root) {
  var i2010 = root || request.c( 'SimplePoint' )
  var i2011 = data
  i2010.delay = i2011[0]
  i2010.moveDuration = i2011[1]
  return i2010
}

Deserializers["MoneyController"] = function (request, data, root) {
  var i2012 = root || request.c( 'MoneyController' )
  var i2013 = data
  request.r(i2013[0], i2013[1], 0, i2012, '_moneyBalance')
  request.r(i2013[2], i2013[3], 0, i2012, '_moneyFlyAnimation')
  return i2012
}

Deserializers["MoneyFlyAnimation"] = function (request, data, root) {
  var i2014 = root || request.c( 'MoneyFlyAnimation' )
  var i2015 = data
  request.r(i2015[0], i2015[1], 0, i2014, 'worldStartPoint')
  request.r(i2015[2], i2015[3], 0, i2014, 'moneyPrefab3D')
  i2014.poolSize = i2015[4]
  i2014.minDuration = i2015[5]
  i2014.maxDuration = i2015[6]
  i2014.spread = i2015[7]
  request.r(i2015[8], i2015[9], 0, i2014, 'uiTargetPoint')
  return i2014
}

Deserializers["MoneyBalance"] = function (request, data, root) {
  var i2016 = root || request.c( 'MoneyBalance' )
  var i2017 = data
  request.r(i2017[0], i2017[1], 0, i2016, '_text')
  return i2016
}

Deserializers["TruckManager"] = function (request, data, root) {
  var i2018 = root || request.c( 'TruckManager' )
  var i2019 = data
  var i2021 = i2019[0]
  var i2020 = new (System.Collections.Generic.List$1(Bridge.ns('Truck')))
  for(var i = 0; i < i2021.length; i += 2) {
  request.r(i2021[i + 0], i2021[i + 1], 1, i2020, '')
  }
  i2018._trucks = i2020
  request.r(i2019[1], i2019[2], 0, i2018, '_unloadPoint')
  i2018._sendAllTrucksWhenAllFull = !!i2019[3]
  return i2018
}

Deserializers["TruckUnloadPoint"] = function (request, data, root) {
  var i2024 = root || request.c( 'TruckUnloadPoint' )
  var i2025 = data
  i2024._unloadDuration = i2025[0]
  request.r(i2025[1], i2025[2], 0, i2024, '_truckStopPosition')
  i2024.delay = i2025[3]
  i2024.moveDuration = i2025[4]
  return i2024
}

Deserializers["Truck"] = function (request, data, root) {
  var i2026 = root || request.c( 'Truck' )
  var i2027 = data
  request.r(i2027[0], i2027[1], 0, i2026, 'progressBarImage')
  var i2029 = i2027[2]
  var i2028 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i2029.length; i += 2) {
  request.r(i2029[i + 0], i2029[i + 1], 1, i2028, '')
  }
  i2026._cargoSlots = i2028
  i2026._maxCapacity = i2027[3]
  i2026._logLoadSoundName = i2027[4]
  i2026._truckFullSoundName = i2027[5]
  i2026._playCargoSounds = !!i2027[6]
  return i2026
}

Deserializers["TruckMover"] = function (request, data, root) {
  var i2030 = root || request.c( 'TruckMover' )
  var i2031 = data
  i2030._moveEase = i2031[0]
  request.r(i2031[1], i2031[2], 0, i2030, '_startPosition')
  request.r(i2031[3], i2031[4], 0, i2030, '_engineSound')
  return i2030
}

Deserializers["GameManager"] = function (request, data, root) {
  var i2032 = root || request.c( 'GameManager' )
  var i2033 = data
  request.r(i2033[0], i2033[1], 0, i2032, 'tutorialObject')
  request.r(i2033[2], i2033[3], 0, i2032, 'tutorialAnimator')
  i2032.idleTimeForTutorial = i2033[4]
  request.r(i2033[5], i2033[6], 0, i2032, 'upgradeButton')
  request.r(i2033[7], i2033[8], 0, i2032, 'upgradeButtonGameObject')
  request.r(i2033[9], i2033[10], 0, i2032, 'secondRequiredButton')
  request.r(i2033[11], i2033[12], 0, i2032, 'packShotObject')
  request.r(i2033[13], i2033[14], 0, i2032, 'moneyController')
  request.r(i2033[15], i2033[16], 0, i2032, 'buildManager')
  return i2032
}

Deserializers["SimpleAudioManager"] = function (request, data, root) {
  var i2034 = root || request.c( 'SimpleAudioManager' )
  var i2035 = data
  request.r(i2035[0], i2035[1], 0, i2034, 'progressBarSound')
  request.r(i2035[2], i2035[3], 0, i2034, 'conveyorAnimationSound')
  request.r(i2035[4], i2035[5], 0, i2034, 'logLoadSound')
  request.r(i2035[6], i2035[7], 0, i2034, 'buttonClickSound')
  request.r(i2035[8], i2035[9], 0, i2034, 'houseAppearSound')
  return i2034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2036 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2037 = data
  i2036.ambientIntensity = i2037[0]
  i2036.reflectionIntensity = i2037[1]
  i2036.ambientMode = i2037[2]
  i2036.ambientLight = new pc.Color(i2037[3], i2037[4], i2037[5], i2037[6])
  i2036.ambientSkyColor = new pc.Color(i2037[7], i2037[8], i2037[9], i2037[10])
  i2036.ambientGroundColor = new pc.Color(i2037[11], i2037[12], i2037[13], i2037[14])
  i2036.ambientEquatorColor = new pc.Color(i2037[15], i2037[16], i2037[17], i2037[18])
  i2036.fogColor = new pc.Color(i2037[19], i2037[20], i2037[21], i2037[22])
  i2036.fogEndDistance = i2037[23]
  i2036.fogStartDistance = i2037[24]
  i2036.fogDensity = i2037[25]
  i2036.fog = !!i2037[26]
  request.r(i2037[27], i2037[28], 0, i2036, 'skybox')
  i2036.fogMode = i2037[29]
  var i2039 = i2037[30]
  var i2038 = []
  for(var i = 0; i < i2039.length; i += 1) {
    i2038.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2039[i + 0]) );
  }
  i2036.lightmaps = i2038
  i2036.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2037[31], i2036.lightProbes)
  i2036.lightmapsMode = i2037[32]
  i2036.mixedBakeMode = i2037[33]
  i2036.environmentLightingMode = i2037[34]
  i2036.ambientProbe = new pc.SphericalHarmonicsL2(i2037[35])
  i2036.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i2037[36])
  i2036.useReferenceAmbientProbe = !!i2037[37]
  request.r(i2037[38], i2037[39], 0, i2036, 'customReflection')
  request.r(i2037[40], i2037[41], 0, i2036, 'defaultReflection')
  i2036.defaultReflectionMode = i2037[42]
  i2036.defaultReflectionResolution = i2037[43]
  i2036.sunLightObjectId = i2037[44]
  i2036.pixelLightCount = i2037[45]
  i2036.defaultReflectionHDR = !!i2037[46]
  i2036.hasLightDataAsset = !!i2037[47]
  i2036.hasManualGenerate = !!i2037[48]
  return i2036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2043 = data
  request.r(i2043[0], i2043[1], 0, i2042, 'lightmapColor')
  request.r(i2043[2], i2043[3], 0, i2042, 'lightmapDirection')
  return i2042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2044 = root || new UnityEngine.LightProbes()
  var i2045 = data
  return i2044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2053 = data
  var i2055 = i2053[0]
  var i2054 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2055.length; i += 1) {
    i2054.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2055[i + 0]));
  }
  i2052.ShaderCompilationErrors = i2054
  i2052.name = i2053[1]
  i2052.guid = i2053[2]
  var i2057 = i2053[3]
  var i2056 = []
  for(var i = 0; i < i2057.length; i += 1) {
    i2056.push( i2057[i + 0] );
  }
  i2052.shaderDefinedKeywords = i2056
  var i2059 = i2053[4]
  var i2058 = []
  for(var i = 0; i < i2059.length; i += 1) {
    i2058.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2059[i + 0]) );
  }
  i2052.passes = i2058
  var i2061 = i2053[5]
  var i2060 = []
  for(var i = 0; i < i2061.length; i += 1) {
    i2060.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2061[i + 0]) );
  }
  i2052.usePasses = i2060
  var i2063 = i2053[6]
  var i2062 = []
  for(var i = 0; i < i2063.length; i += 1) {
    i2062.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2063[i + 0]) );
  }
  i2052.defaultParameterValues = i2062
  request.r(i2053[7], i2053[8], 0, i2052, 'unityFallbackShader')
  i2052.readDepth = !!i2053[9]
  i2052.isCreatedByShaderGraph = !!i2053[10]
  i2052.compiled = !!i2053[11]
  return i2052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2067 = data
  i2066.shaderName = i2067[0]
  i2066.errorMessage = i2067[1]
  return i2066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2072 = root || new pc.UnityShaderPass()
  var i2073 = data
  i2072.id = i2073[0]
  i2072.subShaderIndex = i2073[1]
  i2072.name = i2073[2]
  i2072.passType = i2073[3]
  i2072.grabPassTextureName = i2073[4]
  i2072.usePass = !!i2073[5]
  i2072.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2073[6], i2072.zTest)
  i2072.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2073[7], i2072.zWrite)
  i2072.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2073[8], i2072.culling)
  i2072.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2073[9], i2072.blending)
  i2072.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2073[10], i2072.alphaBlending)
  i2072.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2073[11], i2072.colorWriteMask)
  i2072.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2073[12], i2072.offsetUnits)
  i2072.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2073[13], i2072.offsetFactor)
  i2072.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2073[14], i2072.stencilRef)
  i2072.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2073[15], i2072.stencilReadMask)
  i2072.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2073[16], i2072.stencilWriteMask)
  i2072.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2073[17], i2072.stencilOp)
  i2072.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2073[18], i2072.stencilOpFront)
  i2072.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2073[19], i2072.stencilOpBack)
  var i2075 = i2073[20]
  var i2074 = []
  for(var i = 0; i < i2075.length; i += 1) {
    i2074.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2075[i + 0]) );
  }
  i2072.tags = i2074
  var i2077 = i2073[21]
  var i2076 = []
  for(var i = 0; i < i2077.length; i += 1) {
    i2076.push( i2077[i + 0] );
  }
  i2072.passDefinedKeywords = i2076
  var i2079 = i2073[22]
  var i2078 = []
  for(var i = 0; i < i2079.length; i += 1) {
    i2078.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2079[i + 0]) );
  }
  i2072.passDefinedKeywordGroups = i2078
  var i2081 = i2073[23]
  var i2080 = []
  for(var i = 0; i < i2081.length; i += 1) {
    i2080.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2081[i + 0]) );
  }
  i2072.variants = i2080
  var i2083 = i2073[24]
  var i2082 = []
  for(var i = 0; i < i2083.length; i += 1) {
    i2082.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2083[i + 0]) );
  }
  i2072.excludedVariants = i2082
  i2072.hasDepthReader = !!i2073[25]
  return i2072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2085 = data
  i2084.val = i2085[0]
  i2084.name = i2085[1]
  return i2084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2087 = data
  i2086.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2087[0], i2086.src)
  i2086.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2087[1], i2086.dst)
  i2086.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2087[2], i2086.op)
  return i2086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2089 = data
  i2088.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2089[0], i2088.pass)
  i2088.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2089[1], i2088.fail)
  i2088.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2089[2], i2088.zFail)
  i2088.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2089[3], i2088.comp)
  return i2088
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2093 = data
  i2092.name = i2093[0]
  i2092.value = i2093[1]
  return i2092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2096 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2097 = data
  var i2099 = i2097[0]
  var i2098 = []
  for(var i = 0; i < i2099.length; i += 1) {
    i2098.push( i2099[i + 0] );
  }
  i2096.keywords = i2098
  i2096.hasDiscard = !!i2097[1]
  return i2096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2103 = data
  i2102.passId = i2103[0]
  i2102.subShaderIndex = i2103[1]
  var i2105 = i2103[2]
  var i2104 = []
  for(var i = 0; i < i2105.length; i += 1) {
    i2104.push( i2105[i + 0] );
  }
  i2102.keywords = i2104
  i2102.vertexProgram = i2103[3]
  i2102.fragmentProgram = i2103[4]
  i2102.exportedForWebGl2 = !!i2103[5]
  i2102.readDepth = !!i2103[6]
  return i2102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2108 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2109 = data
  request.r(i2109[0], i2109[1], 0, i2108, 'shader')
  i2108.pass = i2109[2]
  return i2108
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2113 = data
  i2112.name = i2113[0]
  i2112.type = i2113[1]
  i2112.value = new pc.Vec4( i2113[2], i2113[3], i2113[4], i2113[5] )
  i2112.textureValue = i2113[6]
  i2112.shaderPropertyFlag = i2113[7]
  return i2112
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2115 = data
  i2114.name = i2115[0]
  request.r(i2115[1], i2115[2], 0, i2114, 'texture')
  i2114.aabb = i2115[3]
  i2114.vertices = i2115[4]
  i2114.triangles = i2115[5]
  i2114.textureRect = UnityEngine.Rect.MinMaxRect(i2115[6], i2115[7], i2115[8], i2115[9])
  i2114.packedRect = UnityEngine.Rect.MinMaxRect(i2115[10], i2115[11], i2115[12], i2115[13])
  i2114.border = new pc.Vec4( i2115[14], i2115[15], i2115[16], i2115[17] )
  i2114.transparency = i2115[18]
  i2114.bounds = i2115[19]
  i2114.pixelsPerUnit = i2115[20]
  i2114.textureWidth = i2115[21]
  i2114.textureHeight = i2115[22]
  i2114.nativeSize = new pc.Vec2( i2115[23], i2115[24] )
  i2114.pivot = new pc.Vec2( i2115[25], i2115[26] )
  i2114.textureRectOffset = new pc.Vec2( i2115[27], i2115[28] )
  return i2114
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2116 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2117 = data
  i2116.name = i2117[0]
  return i2116
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2119 = data
  i2118.name = i2119[0]
  i2118.wrapMode = i2119[1]
  i2118.isLooping = !!i2119[2]
  i2118.length = i2119[3]
  var i2121 = i2119[4]
  var i2120 = []
  for(var i = 0; i < i2121.length; i += 1) {
    i2120.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2121[i + 0]) );
  }
  i2118.curves = i2120
  var i2123 = i2119[5]
  var i2122 = []
  for(var i = 0; i < i2123.length; i += 1) {
    i2122.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2123[i + 0]) );
  }
  i2118.events = i2122
  i2118.halfPrecision = !!i2119[6]
  i2118._frameRate = i2119[7]
  i2118.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i2119[8], i2118.localBounds)
  i2118.hasMuscleCurves = !!i2119[9]
  var i2125 = i2119[10]
  var i2124 = []
  for(var i = 0; i < i2125.length; i += 1) {
    i2124.push( i2125[i + 0] );
  }
  i2118.clipMuscleConstant = i2124
  i2118.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i2119[11], i2118.clipBindingConstant)
  return i2118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2128 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2129 = data
  i2128.path = i2129[0]
  i2128.hash = i2129[1]
  i2128.componentType = i2129[2]
  i2128.property = i2129[3]
  i2128.keys = i2129[4]
  var i2131 = i2129[5]
  var i2130 = []
  for(var i = 0; i < i2131.length; i += 1) {
    i2130.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2131[i + 0]) );
  }
  i2128.objectReferenceKeys = i2130
  return i2128
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2134 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2135 = data
  i2134.time = i2135[0]
  request.r(i2135[1], i2135[2], 0, i2134, 'value')
  return i2134
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2138 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2139 = data
  i2138.functionName = i2139[0]
  i2138.floatParameter = i2139[1]
  i2138.intParameter = i2139[2]
  i2138.stringParameter = i2139[3]
  request.r(i2139[4], i2139[5], 0, i2138, 'objectReferenceParameter')
  i2138.time = i2139[6]
  return i2138
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2140 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2141 = data
  i2140.center = new pc.Vec3( i2141[0], i2141[1], i2141[2] )
  i2140.extends = new pc.Vec3( i2141[3], i2141[4], i2141[5] )
  return i2140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2144 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2145 = data
  var i2147 = i2145[0]
  var i2146 = []
  for(var i = 0; i < i2147.length; i += 1) {
    i2146.push( i2147[i + 0] );
  }
  i2144.genericBindings = i2146
  var i2149 = i2145[1]
  var i2148 = []
  for(var i = 0; i < i2149.length; i += 1) {
    i2148.push( i2149[i + 0] );
  }
  i2144.pptrCurveMapping = i2148
  return i2144
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2151 = data
  i2150.name = i2151[0]
  i2150.ascent = i2151[1]
  i2150.originalLineHeight = i2151[2]
  i2150.fontSize = i2151[3]
  var i2153 = i2151[4]
  var i2152 = []
  for(var i = 0; i < i2153.length; i += 1) {
    i2152.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2153[i + 0]) );
  }
  i2150.characterInfo = i2152
  request.r(i2151[5], i2151[6], 0, i2150, 'texture')
  i2150.originalFontSize = i2151[7]
  return i2150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2156 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2157 = data
  i2156.index = i2157[0]
  i2156.advance = i2157[1]
  i2156.bearing = i2157[2]
  i2156.glyphWidth = i2157[3]
  i2156.glyphHeight = i2157[4]
  i2156.minX = i2157[5]
  i2156.maxX = i2157[6]
  i2156.minY = i2157[7]
  i2156.maxY = i2157[8]
  i2156.uvBottomLeftX = i2157[9]
  i2156.uvBottomLeftY = i2157[10]
  i2156.uvBottomRightX = i2157[11]
  i2156.uvBottomRightY = i2157[12]
  i2156.uvTopLeftX = i2157[13]
  i2156.uvTopLeftY = i2157[14]
  i2156.uvTopRightX = i2157[15]
  i2156.uvTopRightY = i2157[16]
  return i2156
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2159 = data
  i2158.name = i2159[0]
  var i2161 = i2159[1]
  var i2160 = []
  for(var i = 0; i < i2161.length; i += 1) {
    i2160.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2161[i + 0]) );
  }
  i2158.layers = i2160
  var i2163 = i2159[2]
  var i2162 = []
  for(var i = 0; i < i2163.length; i += 1) {
    i2162.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2163[i + 0]) );
  }
  i2158.parameters = i2162
  i2158.animationClips = i2159[3]
  i2158.avatarUnsupported = i2159[4]
  return i2158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2166 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2167 = data
  i2166.name = i2167[0]
  i2166.defaultWeight = i2167[1]
  i2166.blendingMode = i2167[2]
  i2166.avatarMask = i2167[3]
  i2166.syncedLayerIndex = i2167[4]
  i2166.syncedLayerAffectsTiming = !!i2167[5]
  i2166.syncedLayers = i2167[6]
  i2166.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2167[7], i2166.stateMachine)
  return i2166
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2169 = data
  i2168.id = i2169[0]
  i2168.name = i2169[1]
  i2168.path = i2169[2]
  var i2171 = i2169[3]
  var i2170 = []
  for(var i = 0; i < i2171.length; i += 1) {
    i2170.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2171[i + 0]) );
  }
  i2168.states = i2170
  var i2173 = i2169[4]
  var i2172 = []
  for(var i = 0; i < i2173.length; i += 1) {
    i2172.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2173[i + 0]) );
  }
  i2168.machines = i2172
  var i2175 = i2169[5]
  var i2174 = []
  for(var i = 0; i < i2175.length; i += 1) {
    i2174.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2175[i + 0]) );
  }
  i2168.entryStateTransitions = i2174
  var i2177 = i2169[6]
  var i2176 = []
  for(var i = 0; i < i2177.length; i += 1) {
    i2176.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2177[i + 0]) );
  }
  i2168.exitStateTransitions = i2176
  var i2179 = i2169[7]
  var i2178 = []
  for(var i = 0; i < i2179.length; i += 1) {
    i2178.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2179[i + 0]) );
  }
  i2168.anyStateTransitions = i2178
  i2168.defaultStateId = i2169[8]
  return i2168
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2182 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2183 = data
  i2182.id = i2183[0]
  i2182.name = i2183[1]
  i2182.cycleOffset = i2183[2]
  i2182.cycleOffsetParameter = i2183[3]
  i2182.cycleOffsetParameterActive = !!i2183[4]
  i2182.mirror = !!i2183[5]
  i2182.mirrorParameter = i2183[6]
  i2182.mirrorParameterActive = !!i2183[7]
  i2182.motionId = i2183[8]
  i2182.nameHash = i2183[9]
  i2182.fullPathHash = i2183[10]
  i2182.speed = i2183[11]
  i2182.speedParameter = i2183[12]
  i2182.speedParameterActive = !!i2183[13]
  i2182.tag = i2183[14]
  i2182.tagHash = i2183[15]
  i2182.writeDefaultValues = !!i2183[16]
  var i2185 = i2183[17]
  var i2184 = []
  for(var i = 0; i < i2185.length; i += 2) {
  request.r(i2185[i + 0], i2185[i + 1], 2, i2184, '')
  }
  i2182.behaviours = i2184
  var i2187 = i2183[18]
  var i2186 = []
  for(var i = 0; i < i2187.length; i += 1) {
    i2186.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2187[i + 0]) );
  }
  i2182.transitions = i2186
  return i2182
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2192 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2193 = data
  i2192.fullPath = i2193[0]
  i2192.canTransitionToSelf = !!i2193[1]
  i2192.duration = i2193[2]
  i2192.exitTime = i2193[3]
  i2192.hasExitTime = !!i2193[4]
  i2192.hasFixedDuration = !!i2193[5]
  i2192.interruptionSource = i2193[6]
  i2192.offset = i2193[7]
  i2192.orderedInterruption = !!i2193[8]
  i2192.destinationStateId = i2193[9]
  i2192.isExit = !!i2193[10]
  i2192.mute = !!i2193[11]
  i2192.solo = !!i2193[12]
  var i2195 = i2193[13]
  var i2194 = []
  for(var i = 0; i < i2195.length; i += 1) {
    i2194.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2195[i + 0]) );
  }
  i2192.conditions = i2194
  return i2192
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2200 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2201 = data
  i2200.destinationStateId = i2201[0]
  i2200.isExit = !!i2201[1]
  i2200.mute = !!i2201[2]
  i2200.solo = !!i2201[3]
  var i2203 = i2201[4]
  var i2202 = []
  for(var i = 0; i < i2203.length; i += 1) {
    i2202.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2203[i + 0]) );
  }
  i2200.conditions = i2202
  return i2200
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2206 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2207 = data
  i2206.defaultBool = !!i2207[0]
  i2206.defaultFloat = i2207[1]
  i2206.defaultInt = i2207[2]
  i2206.name = i2207[3]
  i2206.nameHash = i2207[4]
  i2206.type = i2207[5]
  return i2206
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2211 = data
  i2210.mode = i2211[0]
  i2210.parameter = i2211[1]
  i2210.threshold = i2211[2]
  return i2210
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2212 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2213 = data
  i2212.name = i2213[0]
  i2212.bytes64 = i2213[1]
  i2212.data = i2213[2]
  return i2212
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2214 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2215 = data
  i2214.hashCode = i2215[0]
  request.r(i2215[1], i2215[2], 0, i2214, 'material')
  i2214.materialHashCode = i2215[3]
  request.r(i2215[4], i2215[5], 0, i2214, 'atlas')
  i2214.normalStyle = i2215[6]
  i2214.normalSpacingOffset = i2215[7]
  i2214.boldStyle = i2215[8]
  i2214.boldSpacing = i2215[9]
  i2214.italicStyle = i2215[10]
  i2214.tabSize = i2215[11]
  i2214.m_Version = i2215[12]
  i2214.m_SourceFontFileGUID = i2215[13]
  request.r(i2215[14], i2215[15], 0, i2214, 'm_SourceFontFile_EditorRef')
  request.r(i2215[16], i2215[17], 0, i2214, 'm_SourceFontFile')
  i2214.m_AtlasPopulationMode = i2215[18]
  i2214.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2215[19], i2214.m_FaceInfo)
  var i2217 = i2215[20]
  var i2216 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2217.length; i += 1) {
    i2216.add(request.d('UnityEngine.TextCore.Glyph', i2217[i + 0]));
  }
  i2214.m_GlyphTable = i2216
  var i2219 = i2215[21]
  var i2218 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2219.length; i += 1) {
    i2218.add(request.d('TMPro.TMP_Character', i2219[i + 0]));
  }
  i2214.m_CharacterTable = i2218
  var i2221 = i2215[22]
  var i2220 = []
  for(var i = 0; i < i2221.length; i += 2) {
  request.r(i2221[i + 0], i2221[i + 1], 2, i2220, '')
  }
  i2214.m_AtlasTextures = i2220
  i2214.m_AtlasTextureIndex = i2215[23]
  i2214.m_IsMultiAtlasTexturesEnabled = !!i2215[24]
  i2214.m_ClearDynamicDataOnBuild = !!i2215[25]
  var i2223 = i2215[26]
  var i2222 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2223.length; i += 1) {
    i2222.add(request.d('UnityEngine.TextCore.GlyphRect', i2223[i + 0]));
  }
  i2214.m_UsedGlyphRects = i2222
  var i2225 = i2215[27]
  var i2224 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2225.length; i += 1) {
    i2224.add(request.d('UnityEngine.TextCore.GlyphRect', i2225[i + 0]));
  }
  i2214.m_FreeGlyphRects = i2224
  i2214.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2215[28], i2214.m_fontInfo)
  i2214.m_AtlasWidth = i2215[29]
  i2214.m_AtlasHeight = i2215[30]
  i2214.m_AtlasPadding = i2215[31]
  i2214.m_AtlasRenderMode = i2215[32]
  var i2227 = i2215[33]
  var i2226 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2227.length; i += 1) {
    i2226.add(request.d('TMPro.TMP_Glyph', i2227[i + 0]));
  }
  i2214.m_glyphInfoList = i2226
  i2214.m_KerningTable = request.d('TMPro.KerningTable', i2215[34], i2214.m_KerningTable)
  i2214.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2215[35], i2214.m_FontFeatureTable)
  var i2229 = i2215[36]
  var i2228 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2229.length; i += 2) {
  request.r(i2229[i + 0], i2229[i + 1], 1, i2228, '')
  }
  i2214.fallbackFontAssets = i2228
  var i2231 = i2215[37]
  var i2230 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2231.length; i += 2) {
  request.r(i2231[i + 0], i2231[i + 1], 1, i2230, '')
  }
  i2214.m_FallbackFontAssetTable = i2230
  i2214.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2215[38], i2214.m_CreationSettings)
  var i2233 = i2215[39]
  var i2232 = []
  for(var i = 0; i < i2233.length; i += 1) {
    i2232.push( request.d('TMPro.TMP_FontWeightPair', i2233[i + 0]) );
  }
  i2214.m_FontWeightTable = i2232
  var i2235 = i2215[40]
  var i2234 = []
  for(var i = 0; i < i2235.length; i += 1) {
    i2234.push( request.d('TMPro.TMP_FontWeightPair', i2235[i + 0]) );
  }
  i2214.fontWeights = i2234
  return i2214
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2236 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2237 = data
  i2236.m_FaceIndex = i2237[0]
  i2236.m_FamilyName = i2237[1]
  i2236.m_StyleName = i2237[2]
  i2236.m_PointSize = i2237[3]
  i2236.m_Scale = i2237[4]
  i2236.m_UnitsPerEM = i2237[5]
  i2236.m_LineHeight = i2237[6]
  i2236.m_AscentLine = i2237[7]
  i2236.m_CapLine = i2237[8]
  i2236.m_MeanLine = i2237[9]
  i2236.m_Baseline = i2237[10]
  i2236.m_DescentLine = i2237[11]
  i2236.m_SuperscriptOffset = i2237[12]
  i2236.m_SuperscriptSize = i2237[13]
  i2236.m_SubscriptOffset = i2237[14]
  i2236.m_SubscriptSize = i2237[15]
  i2236.m_UnderlineOffset = i2237[16]
  i2236.m_UnderlineThickness = i2237[17]
  i2236.m_StrikethroughOffset = i2237[18]
  i2236.m_StrikethroughThickness = i2237[19]
  i2236.m_TabWidth = i2237[20]
  return i2236
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2240 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2241 = data
  i2240.m_Index = i2241[0]
  i2240.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2241[1], i2240.m_Metrics)
  i2240.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2241[2], i2240.m_GlyphRect)
  i2240.m_Scale = i2241[3]
  i2240.m_AtlasIndex = i2241[4]
  i2240.m_ClassDefinitionType = i2241[5]
  return i2240
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2242 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2243 = data
  i2242.m_Width = i2243[0]
  i2242.m_Height = i2243[1]
  i2242.m_HorizontalBearingX = i2243[2]
  i2242.m_HorizontalBearingY = i2243[3]
  i2242.m_HorizontalAdvance = i2243[4]
  return i2242
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2244 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2245 = data
  i2244.m_X = i2245[0]
  i2244.m_Y = i2245[1]
  i2244.m_Width = i2245[2]
  i2244.m_Height = i2245[3]
  return i2244
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2248 = root || request.c( 'TMPro.TMP_Character' )
  var i2249 = data
  i2248.m_ElementType = i2249[0]
  i2248.m_Unicode = i2249[1]
  i2248.m_GlyphIndex = i2249[2]
  i2248.m_Scale = i2249[3]
  return i2248
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2254 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2255 = data
  i2254.Name = i2255[0]
  i2254.PointSize = i2255[1]
  i2254.Scale = i2255[2]
  i2254.CharacterCount = i2255[3]
  i2254.LineHeight = i2255[4]
  i2254.Baseline = i2255[5]
  i2254.Ascender = i2255[6]
  i2254.CapHeight = i2255[7]
  i2254.Descender = i2255[8]
  i2254.CenterLine = i2255[9]
  i2254.SuperscriptOffset = i2255[10]
  i2254.SubscriptOffset = i2255[11]
  i2254.SubSize = i2255[12]
  i2254.Underline = i2255[13]
  i2254.UnderlineThickness = i2255[14]
  i2254.strikethrough = i2255[15]
  i2254.strikethroughThickness = i2255[16]
  i2254.TabWidth = i2255[17]
  i2254.Padding = i2255[18]
  i2254.AtlasWidth = i2255[19]
  i2254.AtlasHeight = i2255[20]
  return i2254
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2258 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2259 = data
  i2258.id = i2259[0]
  i2258.x = i2259[1]
  i2258.y = i2259[2]
  i2258.width = i2259[3]
  i2258.height = i2259[4]
  i2258.xOffset = i2259[5]
  i2258.yOffset = i2259[6]
  i2258.xAdvance = i2259[7]
  i2258.scale = i2259[8]
  return i2258
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2260 = root || request.c( 'TMPro.KerningTable' )
  var i2261 = data
  var i2263 = i2261[0]
  var i2262 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2263.length; i += 1) {
    i2262.add(request.d('TMPro.KerningPair', i2263[i + 0]));
  }
  i2260.kerningPairs = i2262
  return i2260
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2266 = root || request.c( 'TMPro.KerningPair' )
  var i2267 = data
  i2266.xOffset = i2267[0]
  i2266.m_FirstGlyph = i2267[1]
  i2266.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2267[2], i2266.m_FirstGlyphAdjustments)
  i2266.m_SecondGlyph = i2267[3]
  i2266.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2267[4], i2266.m_SecondGlyphAdjustments)
  i2266.m_IgnoreSpacingAdjustments = !!i2267[5]
  return i2266
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2268 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2269 = data
  var i2271 = i2269[0]
  var i2270 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2271.length; i += 1) {
    i2270.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i2271[i + 0]));
  }
  i2268.m_GlyphPairAdjustmentRecords = i2270
  return i2268
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2274 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i2275 = data
  i2274.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2275[0], i2274.m_FirstAdjustmentRecord)
  i2274.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2275[1], i2274.m_SecondAdjustmentRecord)
  i2274.m_FeatureLookupFlags = i2275[2]
  return i2274
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2276 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i2277 = data
  i2276.m_GlyphIndex = i2277[0]
  i2276.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i2277[1], i2276.m_GlyphValueRecord)
  return i2276
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i2278 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i2279 = data
  i2278.m_XPlacement = i2279[0]
  i2278.m_YPlacement = i2279[1]
  i2278.m_XAdvance = i2279[2]
  i2278.m_YAdvance = i2279[3]
  return i2278
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2282 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2283 = data
  i2282.sourceFontFileName = i2283[0]
  i2282.sourceFontFileGUID = i2283[1]
  i2282.pointSizeSamplingMode = i2283[2]
  i2282.pointSize = i2283[3]
  i2282.padding = i2283[4]
  i2282.packingMode = i2283[5]
  i2282.atlasWidth = i2283[6]
  i2282.atlasHeight = i2283[7]
  i2282.characterSetSelectionMode = i2283[8]
  i2282.characterSequence = i2283[9]
  i2282.referencedFontAssetGUID = i2283[10]
  i2282.referencedTextAssetGUID = i2283[11]
  i2282.fontStyle = i2283[12]
  i2282.fontStyleModifier = i2283[13]
  i2282.renderMode = i2283[14]
  i2282.includeFontFeatures = !!i2283[15]
  return i2282
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2286 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2287 = data
  request.r(i2287[0], i2287[1], 0, i2286, 'regularTypeface')
  request.r(i2287[2], i2287[3], 0, i2286, 'italicTypeface')
  return i2286
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2288 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2289 = data
  i2288.useSafeMode = !!i2289[0]
  i2288.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2289[1], i2288.safeModeOptions)
  i2288.timeScale = i2289[2]
  i2288.unscaledTimeScale = i2289[3]
  i2288.useSmoothDeltaTime = !!i2289[4]
  i2288.maxSmoothUnscaledTime = i2289[5]
  i2288.rewindCallbackMode = i2289[6]
  i2288.showUnityEditorReport = !!i2289[7]
  i2288.logBehaviour = i2289[8]
  i2288.drawGizmos = !!i2289[9]
  i2288.defaultRecyclable = !!i2289[10]
  i2288.defaultAutoPlay = i2289[11]
  i2288.defaultUpdateType = i2289[12]
  i2288.defaultTimeScaleIndependent = !!i2289[13]
  i2288.defaultEaseType = i2289[14]
  i2288.defaultEaseOvershootOrAmplitude = i2289[15]
  i2288.defaultEasePeriod = i2289[16]
  i2288.defaultAutoKill = !!i2289[17]
  i2288.defaultLoopType = i2289[18]
  i2288.debugMode = !!i2289[19]
  i2288.debugStoreTargetId = !!i2289[20]
  i2288.showPreviewPanel = !!i2289[21]
  i2288.storeSettingsLocation = i2289[22]
  i2288.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2289[23], i2288.modules)
  i2288.createASMDEF = !!i2289[24]
  i2288.showPlayingTweens = !!i2289[25]
  i2288.showPausedTweens = !!i2289[26]
  return i2288
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2290 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2291 = data
  i2290.logBehaviour = i2291[0]
  i2290.nestedTweenFailureBehaviour = i2291[1]
  return i2290
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2292 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2293 = data
  i2292.showPanel = !!i2293[0]
  i2292.audioEnabled = !!i2293[1]
  i2292.physicsEnabled = !!i2293[2]
  i2292.physics2DEnabled = !!i2293[3]
  i2292.spriteEnabled = !!i2293[4]
  i2292.uiEnabled = !!i2293[5]
  i2292.textMeshProEnabled = !!i2293[6]
  i2292.tk2DEnabled = !!i2293[7]
  i2292.deAudioEnabled = !!i2293[8]
  i2292.deUnityExtendedEnabled = !!i2293[9]
  i2292.epoOutlineEnabled = !!i2293[10]
  return i2292
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2294 = root || request.c( 'TMPro.TMP_Settings' )
  var i2295 = data
  i2294.m_enableWordWrapping = !!i2295[0]
  i2294.m_enableKerning = !!i2295[1]
  i2294.m_enableExtraPadding = !!i2295[2]
  i2294.m_enableTintAllSprites = !!i2295[3]
  i2294.m_enableParseEscapeCharacters = !!i2295[4]
  i2294.m_EnableRaycastTarget = !!i2295[5]
  i2294.m_GetFontFeaturesAtRuntime = !!i2295[6]
  i2294.m_missingGlyphCharacter = i2295[7]
  i2294.m_warningsDisabled = !!i2295[8]
  request.r(i2295[9], i2295[10], 0, i2294, 'm_defaultFontAsset')
  i2294.m_defaultFontAssetPath = i2295[11]
  i2294.m_defaultFontSize = i2295[12]
  i2294.m_defaultAutoSizeMinRatio = i2295[13]
  i2294.m_defaultAutoSizeMaxRatio = i2295[14]
  i2294.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2295[15], i2295[16] )
  i2294.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2295[17], i2295[18] )
  i2294.m_autoSizeTextContainer = !!i2295[19]
  i2294.m_IsTextObjectScaleStatic = !!i2295[20]
  var i2297 = i2295[21]
  var i2296 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2297.length; i += 2) {
  request.r(i2297[i + 0], i2297[i + 1], 1, i2296, '')
  }
  i2294.m_fallbackFontAssets = i2296
  i2294.m_matchMaterialPreset = !!i2295[22]
  request.r(i2295[23], i2295[24], 0, i2294, 'm_defaultSpriteAsset')
  i2294.m_defaultSpriteAssetPath = i2295[25]
  i2294.m_enableEmojiSupport = !!i2295[26]
  i2294.m_MissingCharacterSpriteUnicode = i2295[27]
  i2294.m_defaultColorGradientPresetsPath = i2295[28]
  request.r(i2295[29], i2295[30], 0, i2294, 'm_defaultStyleSheet')
  i2294.m_StyleSheetsResourcePath = i2295[31]
  request.r(i2295[32], i2295[33], 0, i2294, 'm_leadingCharacters')
  request.r(i2295[34], i2295[35], 0, i2294, 'm_followingCharacters')
  i2294.m_UseModernHangulLineBreakingRules = !!i2295[36]
  return i2294
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2298 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2299 = data
  i2298.hashCode = i2299[0]
  request.r(i2299[1], i2299[2], 0, i2298, 'material')
  i2298.materialHashCode = i2299[3]
  request.r(i2299[4], i2299[5], 0, i2298, 'spriteSheet')
  var i2301 = i2299[6]
  var i2300 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2301.length; i += 1) {
    i2300.add(request.d('TMPro.TMP_Sprite', i2301[i + 0]));
  }
  i2298.spriteInfoList = i2300
  var i2303 = i2299[7]
  var i2302 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2303.length; i += 2) {
  request.r(i2303[i + 0], i2303[i + 1], 1, i2302, '')
  }
  i2298.fallbackSpriteAssets = i2302
  i2298.m_Version = i2299[8]
  i2298.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2299[9], i2298.m_FaceInfo)
  var i2305 = i2299[10]
  var i2304 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2305.length; i += 1) {
    i2304.add(request.d('TMPro.TMP_SpriteCharacter', i2305[i + 0]));
  }
  i2298.m_SpriteCharacterTable = i2304
  var i2307 = i2299[11]
  var i2306 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2307.length; i += 1) {
    i2306.add(request.d('TMPro.TMP_SpriteGlyph', i2307[i + 0]));
  }
  i2298.m_SpriteGlyphTable = i2306
  return i2298
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2310 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2311 = data
  i2310.name = i2311[0]
  i2310.hashCode = i2311[1]
  i2310.unicode = i2311[2]
  i2310.pivot = new pc.Vec2( i2311[3], i2311[4] )
  request.r(i2311[5], i2311[6], 0, i2310, 'sprite')
  i2310.id = i2311[7]
  i2310.x = i2311[8]
  i2310.y = i2311[9]
  i2310.width = i2311[10]
  i2310.height = i2311[11]
  i2310.xOffset = i2311[12]
  i2310.yOffset = i2311[13]
  i2310.xAdvance = i2311[14]
  i2310.scale = i2311[15]
  return i2310
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2316 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2317 = data
  i2316.m_Name = i2317[0]
  i2316.m_HashCode = i2317[1]
  i2316.m_ElementType = i2317[2]
  i2316.m_Unicode = i2317[3]
  i2316.m_GlyphIndex = i2317[4]
  i2316.m_Scale = i2317[5]
  return i2316
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2320 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2321 = data
  request.r(i2321[0], i2321[1], 0, i2320, 'sprite')
  i2320.m_Index = i2321[2]
  i2320.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2321[3], i2320.m_Metrics)
  i2320.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2321[4], i2320.m_GlyphRect)
  i2320.m_Scale = i2321[5]
  i2320.m_AtlasIndex = i2321[6]
  i2320.m_ClassDefinitionType = i2321[7]
  return i2320
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2322 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2323 = data
  var i2325 = i2323[0]
  var i2324 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2325.length; i += 1) {
    i2324.add(request.d('TMPro.TMP_Style', i2325[i + 0]));
  }
  i2322.m_StyleList = i2324
  return i2322
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2328 = root || request.c( 'TMPro.TMP_Style' )
  var i2329 = data
  i2328.m_Name = i2329[0]
  i2328.m_HashCode = i2329[1]
  i2328.m_OpeningDefinition = i2329[2]
  i2328.m_ClosingDefinition = i2329[3]
  i2328.m_OpeningTagArray = i2329[4]
  i2328.m_ClosingTagArray = i2329[5]
  i2328.m_OpeningTagUnicodeArray = i2329[6]
  i2328.m_ClosingTagUnicodeArray = i2329[7]
  return i2328
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2331 = data
  var i2333 = i2331[0]
  var i2332 = []
  for(var i = 0; i < i2333.length; i += 1) {
    i2332.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2333[i + 0]) );
  }
  i2330.files = i2332
  i2330.componentToPrefabIds = i2331[1]
  return i2330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2336 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2337 = data
  i2336.path = i2337[0]
  request.r(i2337[1], i2337[2], 0, i2336, 'unityObject')
  return i2336
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2339 = data
  var i2341 = i2339[0]
  var i2340 = []
  for(var i = 0; i < i2341.length; i += 1) {
    i2340.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2341[i + 0]) );
  }
  i2338.scriptsExecutionOrder = i2340
  var i2343 = i2339[1]
  var i2342 = []
  for(var i = 0; i < i2343.length; i += 1) {
    i2342.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2343[i + 0]) );
  }
  i2338.sortingLayers = i2342
  var i2345 = i2339[2]
  var i2344 = []
  for(var i = 0; i < i2345.length; i += 1) {
    i2344.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2345[i + 0]) );
  }
  i2338.cullingLayers = i2344
  i2338.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2339[3], i2338.timeSettings)
  i2338.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2339[4], i2338.physicsSettings)
  i2338.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2339[5], i2338.physics2DSettings)
  i2338.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2339[6], i2338.qualitySettings)
  i2338.enableRealtimeShadows = !!i2339[7]
  i2338.enableAutoInstancing = !!i2339[8]
  i2338.enableDynamicBatching = !!i2339[9]
  i2338.lightmapEncodingQuality = i2339[10]
  i2338.desiredColorSpace = i2339[11]
  var i2347 = i2339[12]
  var i2346 = []
  for(var i = 0; i < i2347.length; i += 1) {
    i2346.push( i2347[i + 0] );
  }
  i2338.allTags = i2346
  return i2338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2351 = data
  i2350.name = i2351[0]
  i2350.value = i2351[1]
  return i2350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2354 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2355 = data
  i2354.id = i2355[0]
  i2354.name = i2355[1]
  i2354.value = i2355[2]
  return i2354
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2358 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2359 = data
  i2358.id = i2359[0]
  i2358.name = i2359[1]
  return i2358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2360 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2361 = data
  i2360.fixedDeltaTime = i2361[0]
  i2360.maximumDeltaTime = i2361[1]
  i2360.timeScale = i2361[2]
  i2360.maximumParticleTimestep = i2361[3]
  return i2360
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2362 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2363 = data
  i2362.gravity = new pc.Vec3( i2363[0], i2363[1], i2363[2] )
  i2362.defaultSolverIterations = i2363[3]
  i2362.bounceThreshold = i2363[4]
  i2362.autoSyncTransforms = !!i2363[5]
  i2362.autoSimulation = !!i2363[6]
  var i2365 = i2363[7]
  var i2364 = []
  for(var i = 0; i < i2365.length; i += 1) {
    i2364.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2365[i + 0]) );
  }
  i2362.collisionMatrix = i2364
  return i2362
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2368 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2369 = data
  i2368.enabled = !!i2369[0]
  i2368.layerId = i2369[1]
  i2368.otherLayerId = i2369[2]
  return i2368
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2370 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2371 = data
  request.r(i2371[0], i2371[1], 0, i2370, 'material')
  i2370.gravity = new pc.Vec2( i2371[2], i2371[3] )
  i2370.positionIterations = i2371[4]
  i2370.velocityIterations = i2371[5]
  i2370.velocityThreshold = i2371[6]
  i2370.maxLinearCorrection = i2371[7]
  i2370.maxAngularCorrection = i2371[8]
  i2370.maxTranslationSpeed = i2371[9]
  i2370.maxRotationSpeed = i2371[10]
  i2370.baumgarteScale = i2371[11]
  i2370.baumgarteTOIScale = i2371[12]
  i2370.timeToSleep = i2371[13]
  i2370.linearSleepTolerance = i2371[14]
  i2370.angularSleepTolerance = i2371[15]
  i2370.defaultContactOffset = i2371[16]
  i2370.autoSimulation = !!i2371[17]
  i2370.queriesHitTriggers = !!i2371[18]
  i2370.queriesStartInColliders = !!i2371[19]
  i2370.callbacksOnDisable = !!i2371[20]
  i2370.reuseCollisionCallbacks = !!i2371[21]
  i2370.autoSyncTransforms = !!i2371[22]
  var i2373 = i2371[23]
  var i2372 = []
  for(var i = 0; i < i2373.length; i += 1) {
    i2372.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2373[i + 0]) );
  }
  i2370.collisionMatrix = i2372
  return i2370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2377 = data
  i2376.enabled = !!i2377[0]
  i2376.layerId = i2377[1]
  i2376.otherLayerId = i2377[2]
  return i2376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2379 = data
  var i2381 = i2379[0]
  var i2380 = []
  for(var i = 0; i < i2381.length; i += 1) {
    i2380.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2381[i + 0]) );
  }
  i2378.qualityLevels = i2380
  var i2383 = i2379[1]
  var i2382 = []
  for(var i = 0; i < i2383.length; i += 1) {
    i2382.push( i2383[i + 0] );
  }
  i2378.names = i2382
  i2378.shadows = i2379[2]
  i2378.anisotropicFiltering = i2379[3]
  i2378.antiAliasing = i2379[4]
  i2378.lodBias = i2379[5]
  i2378.shadowCascades = i2379[6]
  i2378.shadowDistance = i2379[7]
  i2378.shadowmaskMode = i2379[8]
  i2378.shadowProjection = i2379[9]
  i2378.shadowResolution = i2379[10]
  i2378.softParticles = !!i2379[11]
  i2378.softVegetation = !!i2379[12]
  i2378.activeColorSpace = i2379[13]
  i2378.desiredColorSpace = i2379[14]
  i2378.masterTextureLimit = i2379[15]
  i2378.maxQueuedFrames = i2379[16]
  i2378.particleRaycastBudget = i2379[17]
  i2378.pixelLightCount = i2379[18]
  i2378.realtimeReflectionProbes = !!i2379[19]
  i2378.shadowCascade2Split = i2379[20]
  i2378.shadowCascade4Split = new pc.Vec3( i2379[21], i2379[22], i2379[23] )
  i2378.streamingMipmapsActive = !!i2379[24]
  i2378.vSyncCount = i2379[25]
  i2378.asyncUploadBufferSize = i2379[26]
  i2378.asyncUploadTimeSlice = i2379[27]
  i2378.billboardsFaceCameraPosition = !!i2379[28]
  i2378.shadowNearPlaneOffset = i2379[29]
  i2378.streamingMipmapsMemoryBudget = i2379[30]
  i2378.maximumLODLevel = i2379[31]
  i2378.streamingMipmapsAddAllCameras = !!i2379[32]
  i2378.streamingMipmapsMaxLevelReduction = i2379[33]
  i2378.streamingMipmapsRenderersPerFrame = i2379[34]
  i2378.resolutionScalingFixedDPIFactor = i2379[35]
  i2378.streamingMipmapsMaxFileIORequests = i2379[36]
  i2378.currentQualityLevel = i2379[37]
  return i2378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2389 = data
  i2388.weight = i2389[0]
  i2388.vertices = i2389[1]
  i2388.normals = i2389[2]
  i2388.tangents = i2389[3]
  return i2388
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2390 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2391 = data
  i2390.xPlacement = i2391[0]
  i2390.yPlacement = i2391[1]
  i2390.xAdvance = i2391[2]
  i2390.yAdvance = i2391[3]
  return i2390
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

Deserializers.buildID = "d5b8eefa-e7ab-479f-9840-4816ca1d96cd";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEditor","Recorder","RecorderWindow","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()


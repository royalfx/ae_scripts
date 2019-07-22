
// APP
#includepath "/d/Google Drive/Adobe Scripting/ae_scripts/lib/app";
#include "as_compareVersions.jsxinc";
#include "as_getAeReleaseName.jsxinc";
#include "as_getAeReleaseVersion.jsxinc";

// BATCH
#includepath "/d/Google Drive/Adobe Scripting/ae_scripts/lib/batch";
#include "as_loopItems.jsxinc";
#include "as_loopItemsSelection.jsxinc";
#include "as_loopLayers.jsxinc";
#include "as_recursiveEachProp.jsxinc";

// COLOR
#includepath "/d/Google Drive/Adobe Scripting/ae_scripts/lib/color";
#include "as_hexToRgb.jsxinc";
#include "as_hslToRgb.jsxinc";
#include "as_nativeColorPicker.jsxinc";
#include "as_normalizeRGB.jsxinc";
#include "as_rgbToHex.jsxinc";
#include "as_rgbToHsl.jsxinc";

// CONST
#includepath "/d/Google Drive/Adobe Scripting/ae_scripts/lib/const";
#include "AEVersion.jsxinc";
#include "ControlType.jsxinc";
#include "FileExtension.jsxinc";
#include "FileFilter.jsxinc";
#include "ItemType.jsxinc";
#include "LabelColor.jsxinc";
#include "LayerType.jsxinc";
#include "RegExpPattern.jsxinc";
#include "StrokeLineCap.jsxinc";
#include "StrokeLineJoin.jsxinc";
#include "TextDocProperty.jsxinc";
#include "VersionNum.jsxinc";

// DATA
#includepath "/d/Google Drive/Adobe Scripting/ae_scripts/lib/data";
#include "as_alignToJustify.jsxinc";
#include "as_arrayCheckValue.jsxinc";
#include "as_arrayClone.jsxinc";
#include "as_arraysMerge.jsxinc";
#include "as_clamp.jsxinc";
#include "as_dataCheckEquals.jsxinc";
#include "as_dataIsSameType.jsxinc";
#include "as_justifyToAlign.jsxinc";
#include "as_linear.jsxinc";
#include "as_nameIndexedCheck.jsxinc";
#include "as_nameIndexedClear.jsxinc";
#include "as_nameIndexedReplace.jsxinc";
#include "as_nameIndexedSet.jsxinc";
#include "as_objectClone.jsxinc";
#include "as_objectGetPropName.jsxinc";
#include "as_objectsGetLength.jsxinc";
#include "as_objectsMerge.jsxinc";
#include "as_stringCheckContainsChars.jsxinc";
#include "as_stringCleanName.jsxinc";
#include "as_stringClearFirstLastSpaces.jsxinc";
#include "as_stringClearLineBreaks.jsxinc";
#include "as_stringClearSpaces.jsxinc";
#include "as_stringRemoveLineBreaks.jsxinc";
#include "as_stringToArray.jsxinc";
#include "as_stringToSingleLine.jsxinc";
#include "as_stringUniqChars.jsxinc";
#include "as_timeMillisecToString.jsxinc";
#include "as_toString.jsxinc";
#include "as_toStringArray.jsxinc";
#include "as_toStringObject.jsxinc";

// EXPR
#includepath "/d/Google Drive/Adobe Scripting/ae_scripts/lib/expr";
#include "as_exprGetPropPath.jsxinc";

// FILE
#includepath "/d/Google Drive/Adobe Scripting/ae_scripts/lib/file";
#include "as_checkSecurityPrefSet.jsxinc";
#include "as_fileRead.jsxinc";
#include "as_fileReadJSBinary.jsxinc";
#include "as_fileReadJSON.jsxinc";
#include "as_fileToBinaryString.jsxinc";
#include "as_fileWrite.jsxinc";
#include "as_fileWriteJSBinary.jsxinc";
#include "as_fileWriteJSON.jsxinc";
#include "as_getFileExtension.jsxinc";
#include "as_getFileName.jsxinc";
#include "as_getTempFolder.jsxinc";
#include "as_getUserDataFolder.jsxinc";
#include "as_PNGFilesToJSON.jsxinc";

// KEYS
#includepath "/d/Google Drive/Adobe Scripting/ae_scripts/lib/keys";
#include "as_applyEasing.jsxinc";
#include "as_fixInfluenceValue.jsxinc";
#include "as_keyNearestLeft.jsxinc";
#include "as_keyNearestRight.jsxinc";
#include "as_keysCopy.jsxinc";
#include "as_keysHold.jsxinc";
#include "as_keysRange.jsxinc";
#include "as_keysReflect.jsxinc";
#include "as_keysRemove.jsxinc";

// MARKER
#includepath "/d/Google Drive/Adobe Scripting/ae_scripts/lib/marker";
#include "as_addMarkerEach.jsxinc";
#include "as_addMarkersChars.jsxinc";
#include "as_getMarkersChars.jsxinc";

// PROJECT
#includepath "/d/Google Drive/Adobe Scripting/ae_scripts/lib/project";
#include "as_clearRenderQueue.jsxinc";
#include "as_compDeselectAll.jsxinc";
#include "as_compSelectLayer.jsxinc";
#include "as_compSetDuration.jsxinc";
#include "as_compSetSize.jsxinc";
#include "as_compTrueDuplicate.jsxinc";
#include "as_effectAdd.jsxinc";
#include "as_effectCopyProps.jsxinc";
#include "as_effectIsControl.jsxinc";
#include "as_elementRename.jsxinc";
#include "as_itemByID.jsxinc";
#include "as_itemGet.jsxinc";
#include "as_itemGetPath.jsxinc";
#include "as_itemGetType.jsxinc";
#include "as_layerGetParentsDepth.jsxinc";
#include "as_layerGetRealScale.jsxinc";
#include "as_layerGetType.jsxinc";
#include "as_layerSetState.jsxinc";
#include "as_projectSelectItem.jsxinc";
#include "as_projectSelectItems.jsxinc";
#include "as_projectSingleNull.jsxinc";
#include "as_propCopy.jsxinc";
#include "as_propGetContainingComp.jsxinc";
#include "as_propGetContainingLayer.jsxinc";
#include "as_propGetValueTime.jsxinc";
#include "as_propIsEffect.jsxinc";
#include "as_propIsEffectChild.jsxinc";
#include "as_propIsLayer.jsxinc";
#include "as_propIsSimpleType.jsxinc";
#include "as_textCheckAutoLeading.jsxinc";
#include "as_textSetProperties.jsxinc";

// SHAPE
#includepath "/d/Google Drive/Adobe Scripting/ae_scripts/lib/shape";
#include "as_createEmptyShape.jsxinc";
#include "as_shapeScale.jsxinc";
#include "as_shapeToSpatial.jsxinc";
#include "as_shapeTranslate.jsxinc";

// SYSTEM
#includepath "/d/Google Drive/Adobe Scripting/ae_scripts/lib/system";
#include "as_copyToClipboard.jsxinc";
#include "as_openURL.jsxinc";
#include "as_osName.jsxinc";

// UI
#includepath "/d/Google Drive/Adobe Scripting/ae_scripts/lib/ui";
#include "as_uiCreateFromJSON.jsxinc";
#include "as_uiCSVToJSON.jsxinc";
#include "as_uiFindElement.jsxinc";
#include "as_uiPrefsApply.jsxinc";
#include "as_uiPrefsGet.jsxinc";
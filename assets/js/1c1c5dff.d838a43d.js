"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([[3320],{17179:(a,e,g)=>{g.r(e),g.d(e,{default:()=>t});var n=g(67294),l=g(52263);const s=JSON.parse('{"newCollection":"language/CollectionClass","newSharedcollection":"language/CollectionClass","ds":"language/DataStoreClass","mailConvertFromMIME":"language/EmailObjectClass","mailConvertToMIME":"language/EmailObjectClass","File":"language/FileClass","folder":"language/FolderClass","formula":"language/FunctionClass","session":"language/SessionClass","newSignal":"language/SignalClass","webEvent":"language/WebForm","webForm":"language/WebForm","webServer":"language/WebServerClass","webServerList":"language/WebServerClass","zipCreateArchive":"language/ZipArchiveClass","zipReadArchive":"language/ZipArchiveClass","cs":"language/basics/lang-classes","4D":"language/basics/lang-classes","super":"language/basics/lang-classes","this":"language/basics/lang-classes","type":"language/basics/lang-data-types","valueType":"language/basics/lang-data-types","null":"language/basics/lang-null-undefined","undefined":"language/basics/lang-null-undefined","copyParameters":"language/basics/lang-parameters","countParameters":"language/basics/lang-parameters","clearVariable":"language/basics/lang-variables","bool":"language/boolean","false":"language/boolean","not":"language/boolean","true":"language/boolean","addToDate":"language/dateandtime","currentDate":"language/dateandtime","currentTime":"language/dateandtime","date":"language/dateandtime","dayNumber":"language/dateandtime","dayOf":"language/dateandtime","milliseconds":"language/dateandtime","monthOf":"language/dateandtime","time":"language/dateandtime","timeString":"language/dateandtime","timestamp":"language/dateandtime","yearOf":"language/dateandtime","abort":"language/debug","assert":"language/debug","asserted":"language/debug","callChain":"language/debug","currentMethodName":"language/debug","getAssertEnabled":"language/debug","lastErrors":"language/debug","methodCalledOnError":"language/debug","onErrCall":"language/debug","setAssertEnabled":"language/debug","throw":"language/debug","trace":"language/debug","jsonParse":"language/json","jsonResolvePointers":"language/json","jsonStringify":"language/json","jsonValidate":"language/json","abs":"language/math","arctan":"language/math","cos":"language/math","dec":"language/math","exp":"language/math","int":"language/math","log":"language/math","mod":"language/math","round":"language/math","random":"language/math","setRealComparisonLevel":"language/math","sin":"language/math","squareRoot":"language/math","tan":"language/math","trunc":"language/math","instanceOf":"language/object","newObject":"language/object","newSharedObject":"language/object","objectClass":"language/object","objectCopy":"language/object","objectEntries":"language/object","objectIsDefined":"language/object","objectIsEmpty":"language/object","objectIsShared":"language/object","objectKeys":"language/object","objectRemove":"language/object","objectValues":"language/object","storage":"language/object","blobToPicture":"language/pictures","combinePictures":"language/pictures","convertPicture":"language/pictures","createThumbnail":"language/pictures","equalPictures":"language/pictures","getPictureFileName":"language/pictures","getPictureMetadata":"language/pictures","pictureProperties":"language/pictures","pictureSize":"language/pictures","pictureToBlob":"language/pictures","setPictureFileName":"language/pictures","setPictureMetadata":"language/pictures","transformPicture":"language/pictures","abortProcessByID":"language/process","callWorker":"language/process","clearSemaphore":"language/process","currentProcess":"language/process","currentProcessName":"language/process","delayProcess":"language/process","getProcessActivity":"language/process","highestProcessNumber":"language/process","killWorker":"language/process","processNumber":"language/process","processProperties":"language/process","processState":"language/process","semaphore":"language/process","testSemaphore":"language/process","changeString":"language/string","char":"language/string","characterCode":"language/string","compareStrings":"language/string","convertFromString":"language/string","convertToString":"language/string","deleteString":"language/string","insertString":"language/string","length":"language/string","lowercase":"language/string","matchRegex":"language/string","num":"language/string","position":"language/string","replaceString":"language/string","splitString":"language/string","string":"language/string","substring":"language/string","uppercase":"language/string","base64Encode":"language/tools","base64Decode":"language/tools","generateUUID":"language/tools","generateDigest":"language/tools","generatePasswordHash":"language/tools","verifyPasswordHash":"language/tools"}');function t(){const a=(0,l.Z)(),e=JSON.stringify(s),g=a.siteConfig.baseUrl;return n.createElement("script",{dangerouslySetInnerHTML:{__html:`\n              ( function() {\n              const commands = JSON.parse('${e}')\n              const url = new URL(window.location.href);\n              const classWanted = url.searchParams.get("class");\n              const memberWanted = url.searchParams.get("member");\n              const commandWanted = url.searchParams.get("command");\n              const commandFile = commands[commandWanted];\n              let finalUrl = ""\n              if(!memberWanted)\n              {\n                finalUrl = "${g}" + commandFile + "#" + commandWanted.toLowerCase();\n              }\n              else\n              {\n                finalUrl = "${g}" + "language/" + classWanted + "Class" + "#" + memberWanted.toLowerCase();\n              }\n              window.location.href = finalUrl\n            })();\n                `}})}}}]);
"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([[3320],{7179:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var r=n(7294),s=n(2263);const a=JSON.parse('{"newCollection":"CollectionClass","newSharedcollection":"CollectionClass","ds":"DataStoreClass","MAIL":"MailAttachmentClass","File":"FileClass","folder":"FolderClass","formula":"FunctionClass","IMAP":"IMAPTransporterClass","session":"SessionClass","newSignal":"SignalClass","webEvent":"WebForm","webForm":"WebForm","webServer":"WebServerClass","zipCreateArchive":"ZipArchiveClass","zipReadArchive":"ZipArchiveClass","bool":"boolean","false":"boolean","not":"boolean","true":"boolean","addToDate":"dateandtime","currentDate":"dateandtime","currentTime":"dateandtime","date":"dateandtime","dayNumber":"dateandtime","dayOf":"dateandtime","milliseconds":"dateandtime","monthOf":"dateandtime","time":"dateandtime","timeString":"dateandtime","timestamp":"dateandtime","yearOf":"dateandtime","abort":"interruptions","assert":"interruptions","asserted":"interruptions","getAssertEnabled":"interruptions","lastErrors":"interruptions","methodCalledOnError":"interruptions","onErrCall":"interruptions","setAssertEnabled":"interruptions","throw":"interruptions","instanceOf":"objects","newObject":"objects","newSharedObject":"objects","objectClass":"objects","objectCopy":"objects","abs":"math","objectEntries":"objects","objectIsDefined":"objects","objectIsEmpty":"objects","objectIsShared":"objects","objectKeys":"objects","objectRemove":"objects","objectValues":"objects","storage":"objects","arctan":"math","cos":"math","dec":"math","exp":"math","int":"math","log":"math","mod":"math","round":"math","random":"math","setRealComparisonLevel":"math","sin":"math","squareRoot":"math","tan":"math","trunc":"math","blobToPicture":"pictures","combinePictures":"pictures","convertPicture":"pictures","createThumbnail":"pictures","equalPictures":"pictures","getPictureFileName":"pictures","getPictureMetadata":"pictures","pictureProperties":"pictures","pictureSize":"pictures","callWorker":"process","changeString":"string","char":"string","characterCode":"string","compareStrings":"string","convertFromString":"string","convertToString":"string","deleteString":"string","insertString":"string","length":"string","lowercase":"string","matchRegex":"string","num":"string","position":"string","replaceString":"string","splitString":"string","string":"string","substring":"string","uppercase":"string"}');function i(){const e=(0,s.Z)(),t=JSON.stringify(a),n=e.siteConfig.baseUrl;return r.createElement("script",{dangerouslySetInnerHTML:{__html:`\n              ( function() {\n              const commands = JSON.parse('${t}')\n              const url = new URL(window.location.href);\n              const classWanted = url.searchParams.get("class");\n              const memberWanted = url.searchParams.get("member");\n              const commandWanted = url.searchParams.get("command");\n              const commandFile = commands[commandWanted];\n              let finalUrl = ""\n              if(!memberWanted)\n              {\n                finalUrl = "${n}" + "language/" + commandFile + "#" + commandWanted.toLowerCase();\n              }\n              else\n              {\n                finalUrl = "${n}" + "language/" + classWanted + "Class" + "#" + memberWanted.toLowerCase();\n              }\n              window.location.href = finalUrl\n            })();\n                `}})}}}]);
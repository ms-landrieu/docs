"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([[3320],{7179:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var a=n(7294),r=n(2263);const s=JSON.parse('{"newCollection":"CollectionClass","newSharedcollection":"CollectionClass","ds":"DataStoreClass","MAIL":"MailAttachmentClass","File":"FileClass","folder":"FolderClass","formula":"FunctionClass","session":"SessionClass","newSignal":"SignalClass","zipCreateArchive":"ZipArchiveClass","zipReadArchive":"ZipArchiveClass","webEvent":"WebForm","webForm":"WebForm","IMAP":"IMAPTransporterClass","addToDate":"dateandtime","currentDate":"dateandtime","currentTime":"dateandtime","date":"dateandtime","dayNumber":"dateandtime","dayOf":"dateandtime","milliseconds":"dateandtime","monthOf":"dateandtime","time":"dateandtime","timeString":"dateandtime","timestamp":"dateandtime","yearOf":"dateandtime","abort":"interruptions","assert":"interruptions","asserted":"interruptions","getAssertEnabled":"interruptions","lastErrors":"interruptions","methodCalledOnError":"interruptions","onErrCall":"interruptions","setAssertEnabled":"interruptions","throw":"interruptions","bool":"boolean","false":"boolean","not":"boolean","true":"boolean","newSharedObject":"objects","objectCopy":"objects","abs":"math","objectIsDefined":"objects","objectValues":"objects","objectRemove":"objects","storage":"objects","cos":"math","dec":"math","exp":"math","int":"math","log":"math","mod":"math","round":"math","random":"math","setRealComparisonLevel":"math","sin":"math","squareRoot":"math","tan":"math","trunc":"math","blobToPicture":"pictures","combinePictures":"pictures","convertPicture":"pictures","createThumbnail":"pictures","equalPictures":"pictures","getPictureFileName":"pictures","getPictureMetadata":"pictures","pictureProperties":"pictures","pictureSize":"pictures","changeString":"string","char":"string","characterCode":"string","compareStrings":"string","convertFromString":"string","convertToString":"string","deleteString":"string","insertString":"string","length":"string","lowercase":"string","matchRegex":"string","num":"string","position":"string","replaceString":"string","splitString":"string","string":"string","substring":"string","uppercase":"string","arctan":"math"}');function i(){const e=(0,r.Z)(),t=JSON.stringify(s),n=e.siteConfig.baseUrl;return a.createElement("script",{dangerouslySetInnerHTML:{__html:`\n              ( function() {\n              const commands = JSON.parse('${t}')\n              const url = new URL(window.location.href);\n              const classWanted = url.searchParams.get("class");\n              const memberWanted = url.searchParams.get("member");\n              const commandWanted = url.searchParams.get("command");\n              const commandFile = commands[commandWanted];\n              let finalUrl = ""\n              if(!memberWanted)\n              {\n                finalUrl = "${n}" + "language/" + commandFile + "#" + commandWanted.toLowerCase();\n              }\n              else\n              {\n                finalUrl = "${n}" + "language/" + classWanted + "Class" + "#" + memberWanted.toLowerCase();\n              }\n              window.location.href = finalUrl\n            })();\n                `}})}}}]);
"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([[4385],{3905:(e,t,r)=>{r.d(t,{Zo:()=>A,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},A=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,A=i(e,["components","mdxType","originalType","parentName"]),c=p(r),f=a,m=c["".concat(s,".").concat(f)]||c[f]||d[f]||o;return r?n.createElement(m,l(l({ref:t},A),{},{components:r})):n.createElement(m,l({ref:t},A))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},79858:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={id:"import",title:"Import data"},l=void 0,i={unversionedId:"studio/model/import",id:"studio/model/import",title:"Import data",description:"The Model editor proposes an advanced wizard to help you import data from a local CSV of text file in any datastore class. This feature allows you to simply and quickly migrate data.",source:"@site/docs/studio/model/import.md",sourceDirName:"studio/model",slug:"/studio/model/import",permalink:"/docs/studio/model/import",draft:!1,editUrl:"https://github.com/docQodly/docs/edit/main/docs/studio/model/import.md",tags:[],version:"current",frontMatter:{id:"import",title:"Import data"},sidebar:"Studio",previous:{title:"Attributes",permalink:"/docs/studio/model/attributes"},next:{title:"Webform Editor",permalink:"/docs/studio/design-webforms/create-webform"}},s={},p=[],A={toc:p};function c(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},A,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The Model editor proposes an advanced wizard to help you import data from a local CSV of text file in any datastore class. This feature allows you to simply and quickly migrate data. "),(0,a.kt)("p",null,"To import data from a CSV or text file:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"In the outline area, click on the ",(0,a.kt)("strong",{parentName:"li"},"Import from CSV")," button at the right side of the dataclass in which you want to import data:")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"csv",src:r(99705).Z,width:"248",height:"80"})),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"In the import panel, click on the selection button and select the file you want to import.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"csv",src:r(91874).Z,width:"277",height:"284"})),(0,a.kt)("p",null,"You should pay attention to the following recommendations:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The file format must be text (.csv or .txt). However, you will be able to define the column separator."),(0,a.kt)("li",{parentName:"ul"},"A blank ID field will be automatically filled "),(0,a.kt)("li",{parentName:"ul"},"The file size is limited to 100 MB")),(0,a.kt)("p",null,"Once the file is selected, the lower part of the panel displays the import options:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"csv",src:r(97762).Z,width:"274",height:"777"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Header row?"),': Select this option if you want to use the first row of the import file as a header row. Otherwise, the labels "column_1"..."column_N" will be used in the Preview. '),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Column delimiter")," : Character(s) used as column delimiter in the file (default is ;)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Text delimiter"),": Character(s) used as text delimiter in the file "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"File encoding"),": UTF-8 (default) or UTF-16 are supported"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Quote escape char"),": Character use to escape quotes if any (default is ",")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Start import at"),": Line number to start import"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Decimal separator"),": Default is .")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Define your options and click ",(0,a.kt)("strong",{parentName:"li"},"Next"),".")),(0,a.kt)("p",null,"The import wizard displays information about the file content as well as a preview of the imported rows:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"csv",src:r(95806).Z,width:"1130",height:"284"})),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Click on every column to import and assign it to the appropriate attribute of the dataclass.\nDo not select column(s) to ignore. ")),(0,a.kt)("p",null,"The lower part of the window shows a preview of the imported data in the corresponding attributes:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"csv",src:r(6832).Z,width:"834",height:"598"})),(0,a.kt)("p",null,"Make sure the importing format fits the format in the imported file. For example for the dates, the format must use the ",(0,a.kt)("a",{parentName:"p",href:"https://date-fns.org/v2.30.0/docs/format"},"date-fns library")," formats:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"csv",src:r(6832).Z,width:"834",height:"598"})),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"When all imported columns have been mapped and formatted, click ",(0,a.kt)("strong",{parentName:"li"},"Start import")," to launch the import.")),(0,a.kt)("p",null,"The data are now available in your entities."))}c.isMDXComponent=!0},99705:(e,t,r)=>{r.d(t,{Z:()=>n});const n="data:image/png;base64,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"},91874:(e,t,r)=>{r.d(t,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARUAAAEcCAIAAABmg7d9AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAABpZSURBVHhe7d0LVBRXggbggm4akG4EQZG2keZhQyMSkfYB0fjISMKa11GcCWZnJDljTCZhspFxN8quBncSM5swczJ4do+bTNTZHM2ZYE6icTRkojgxkBg0ikQQeTQRGxqbd/NqXnur6oI8Grq5YEab/zueUPf2rXurq+uvulVAcFq2bBkH4NBOVJno0sSsU/nSpX7O9CuAg5qs8BAju8L1BxyWzeSMvJ6I7F8R+QGHNVoMRovNSGMESewE8zdwTFYPfXLQ2x8ewmZ75Acc0GjhoUvjZHVFcQi75m/Jbxx5KIB81X/21I6DYtU9Iv6Vd55eIOc485X3t7x+klaCY5vc8Aw2sme7rj9KtVod6CujpXuNXKkOVvtPpyX4B1LGxOlUdPkOYQ5PUlLSz372M1qwm93zt/bio0MvPsqYVfEJ8fTfGp2SVo9X6qHTZ4++mUhLky37jS1J5w20MEAbF5+w6s59kPyeGWOHbMw4evrsoe20NJJmeXz8cg0tjEG1KeOjs3l5n2c+SSsmLJF0ePa9VFpiNKKTge38l/TMfRmZv9t5pz/0YewJj0qlev7551944QWyQKusGdkV+/3PqqfT0nel0387Nq+i1ePlKnOXebr/uNe29Snpu9I2L6elScfvmTF2iIR/v7LR33Hii+npL9pxbG14KM5fZvj8j4fO0YoJk8kUMtk0V1piNKKTge3M+iwnrzA3J/vOfegjLz72hMfJySk9Pd1FQBZIkb5gzbAOpfQrI/3x2KTX6TI5qTzmoy9o8Y9SulpMV4/tP+379JZV4nLGi5m52w+dTZAX5BmUS6J8JRZDzv7UPVmDLw1xL2akrNMpXTlLbf6xfamZjTsP/fEhZVnW5i2ZpFnyvk+fDqk+nLC7Ynv6r+M1Cglnqc7Z/9vdWUWccm1q+osPaxQyrtOQ897u3R+W0B5tSXzzaEqMpeSqTB3hKyPrvnPAtGbrY3Q5dfdHBqGBOT9HFrVKKesxFXySkbIvl1xgEnftTV6hVkgsLfrcg7t2Z1Xx711+Ndeg1HnWFvhEyjmJbuvpozH/syH1Q3EoskrGVr6TlpKrdWIVoVyfniHsopaSgopZuqjGYyuLoh7iz4APnT0ddmzN5iMjGzyTIayaemg9f41SrkxOuqJJeb5/9Ly1m48kpu9JjlMryFj6Lw/u4HeyrY9G6HEI1chOlPGD9/y/kXdtbfufqaY9UIO3M9d3oUbeoxZfEAztU/g0f3xk5hYRESEuk4Unn3zyyJEjYtEqEqGBoE7w+ZtMIczfVsWQ2Qp/UvHRhnNFOfnVZA6zKX1b3MBy6h4dOTHJ3JW65UH153NLGmXqhJSMV3S0G+LJzPSn4nzNBbl5JZ3+cZvSMjcVHiyoksm1uiRyPKlSVy/04Sq/Ov7S3rT1kdyN3BzSTBWfuiddp0rZ+++JkRJDbk5uiUUZv21v+hLapU0yd0+Zu1oTUJ+fV9IyTU0+y8SB5RfTk2kDTdwKriAnnxxAuqfSyWRJl5aRmqDmbuTnXDK5auNTfrdTJ7x3Mm2Lcm823LxwpcrCtevzc3IvVNKBlC/tTUlQyxpLcs9XzyDHkFhLtvylePU0U0lefvUsnc5fOG0XkZ3DcY0lOeTtWG1AleSWkBxa9BfIKINGr9PtfCs1PoQzXMrJr3XV0J1s66MZzkon5C2QPe9am5+Tp+eC41NeT1GOtXkDhm/n4MuO2OeQT5O+Mjnsufj4+flt3bqVFgTPPfccqaQFWyaYH2Xc9rS07WkpT8aJZfOFA0nbdqc+dUZP9llRlrCcVdjOec6gE/qST57dkrZjy/rDhe0y9YJ4sZJI+SedvL0wa2PKjrQtz2brOa+o1VsMGTmFFokm7lmdcrNOI6nL//TghhiNzGKo0FvIpeZatYVTaeI36PiqMlJF/muwcErNWtqnfQw5L2whgx6+YibLua/xy6+eM3Du8v4bmLrct5NS96QmpeUYOHl47H8kxaq56txXn0ndvS3pwAWzLDhmg5BYS9HhpIQNO/7z8BWThesxXdiTcfi80AGZwpDNbi/J+jXf+Yb3Cy20lt/ykg9T+neIUPnp/gqyIeaK3Xv2H7fagDq+X99CxjSdp6PQ0auT4gI5w7lXN/N7/kC+WaZeskE8KG1+NLclWOnkBf4tFGY9lbo7bfML23e/djDP+vYPN3w7B7PyadJXfjyNjY0vv/zyn/70J7H47rvvkmJ9fb1YtGmC+dF/tmblyjUrN2zPohWDWDrJjiNaOnqErzxzs1GcsgmVEmFRQK7gXE+HuIKh1mwhV6tpHPfesfw6TqlNSl2o5qouHPlUaCbxVIZpNGEaZY9BX6438OczmaeSr9H4cYZyvX7YDMIGS2cVXSLLLcJnnN9Gj3BBp/mS8JVkk5B4yPhNtYhvo6SpmT+7+/DLlra6EU8qKOHdNdeJA7V10N75Lbc0NwzaIcPYbDAIHV0u4y8BnXTrzGSHymQzhMJg1j6aQax14jXoAyo5l519Ol/Y8/ZunlVWPk36CothNz/2XHyIzs7OixcvVlRUiEWyQIpdXV1icTQDnU/O/M3u529yXVJm6sbErb/fECXn6vT5tJrjssvIyT1qwxvJ8RtTMx+PJOe1/KOk+viRiwZOFRen4kry9pPWfDMJOZUePfB+jkmuVLpzdadL+J3ekn/0/QM5DQqlv4y7fX8xKZSr3kpPTkjeuSdOSS5xxa9cqCRnyrj0bYnxv0hPjVVydddyRn5nyV0ZtvH2Iz7h3ek27UtNTEje+wR56wJ+y8UdEp/8Br9DbvMJ2poQpxmjwWg+vKBv55Sx6fwqu1Lj/Lm6Iv6GfXysdXJA+IAe3ZUYv3HnodN5eZ/sjWfYvKGsfJr0lTsuMTFx/fr1tDAKe9pMdP62anzP38yGpqDEbanJ5LCrzDm47/Ynm78r4/DlFuXKreS41CkMuYdeyxTO1vn/m1tCTmzthWd+z8eENCO3mJqNqem7kvlm72ceP78748MSTpOYuis9eaHCkHck8xN+xclTZ+hZtXXX1ke18rrLWfv3cQd/m5lTKYsk2/B8vLqnJOvtjOO0JXX4XL6hh9yJ3X7EJ2y22SeGbOTWBRyZ3gmELTd76RK3pW+N5Ez985/svEKze2TyrpTEURqM6eDufTl610h+lQQ1maf98e1hW2cPK50Ib8GiTkhN3/aohrzrN3dks2zeEFY+TfrKHRcdHR0TE0MLo7CnjV0/f7Dzg7xHfQoP//7AZydz7X22NVLakbxHfPPfXpvyAa2wyyMZn6bFcXmvP7KNZd+Su+rI9SnpazzHPa5g077PU2JMg54xwt1rXPO31157jfw3LS1NLE6fPj0kJIQslJaWNjeTOTlvWJthxOHsvv7IIzeRMyIt/HiSH9H5cIYLHzCemPhvxayxb2oJU0lfX5+Xl9eifmJ4iNDQUFq1aBFpQJqJ9aP5EX9/Qfj+T/7tb4nYY+s7Jzf5lx1+9sX9E7mzZCZ+/+fYms3i91zgbjau689zzz23efNmWhjde++9984779DCUOJw+P0fcBBsz9+YjXP+BnBPGRanyTXQOfIDDuJOX3CsQn7AYd3RS5AI+QEYn8GxRH7AcYycwk36JWhYh8gPOLg7OotDfsCh3NGnCCOjiO//gAOyes2ZSLRG6xDXH3BAVqPCPJEbY0XkB6YQkoRxpWiM9mJEMX8Dh2UzKqPN6OxfEfkBBzeuC45NwyKH+Rs4uNEuMgxGdoXrD0wVE7kQjRZC5AemlvGmaOzLF/IDU9TYQbJz1of8ALDD8wMAdsgPADvkB4Ad8gPADvkBYIf8ALBDfgDYIT8A7JAfAHb4+YPxmeezONwnVuUZ7uk6kxSbO29VNRcX1+Vdr/tWbDCJHHUsR4L82Gu2PPjBoOSA6fNH/nXmPo670fT9FxUHa8zltGpixLEkzi5XjGcqmwobO4yk0svNL3B65AK/1T29XffoWI4H+bELOT2vD9/u7CShZWt6+3o+Kn5z4idscazssne/q7H+l+OiZ8fHh/zynhvLIUlUqv4/MgijIGfopMjdY4eHcHJyDveNLWu4YLY00KrxE8f6y/evF5m+olUj1JjLDC3XEyNeuYfGclTIj22Ph71M5jO0wHNf+KsZ2gfcvSxtNUP/VjGJkI/7nCu1Z2h5/MhYX1d9fPuAdlpxn/LXa/zXRbj61ZgvD/yJxMaOmraupqVzHrsTYy3wDDc3f93Y/5ejJmUsR4XnbzaQGQ6556EFqrelppvzlk7zoOXBSGOyCi2ME1mR3IcMmkr5xYS88IBbcZ7+VJnbTzYHD/l7T6QZaXwHxsq62KnZGP4vg/8c8ATHcmDIjw3hPrEjHhh0ln1k6eylhWFIY7IKLYwTWZHcxNMCb7mfR9X5inf1lpMXqsu6vILUtJ4ijSdvrFmNdSc/4sf68pqxosnda9ivj01kLAeG/Nig8gynS3ZjWEVEVqxsKqQF3tG/Xv7NN8I8Suomd2utFf4k+W2k8eSNdaWs4dBN2aaVvmk/jYzq0B/T03pqImM5MOTHBvH7IePCsIqIrCg+Ph5O8qtN8/y+r/zvblqmSOPJH0vqIiH/kXjTYr+JjOXAkJ+7nmTz+sgHuLI//HXg6cEdEeQlW+TaefhszatHCs62z02IofUwFuTHhubOW3TJbgyriMiKQx/0kWnb9mcWreAq/uvPdRdp1SCk8eSNtWDlgpcfnibUOHsrXIS6QSYylgNDfmyoai6mS3ZjWEVEVgycHkkLvF9tilnm5yJXh/3rtsUfbFv81rBrAmk8eWMdO1FU7BPx9vbFH2zXRTUWH75A66mJjOXA8PMHNszzWbxB+8rIn9kZDbnbP1r0Btt368lYsar1f768g5Zt+cV9e/OqPrr7x3JguP7YQI6YG03f04IdSGPmg4ys2NPbFT07npbHRJqRxvfEWA4M+bHti4qDvX09tDAm0ow0pgUmZPX4kF8GeS2k5VGQBqTZPTSWo8LP79hmtjTUtunDfWOdnMY63Yg/P/rDeC5WI4ljJUa80tbVVGMuo7VDkavBY2Ev3VtjOSrc/9hL/Dl//P4CDIb8jA+57Q7H789BP+QHgB2eHwCwQ34A2CE/AOyQHwB2yA8AO+QHgB3yA8AO+QFgh/wAsEN+ANghPwDskB8AdsgPADvkB4DdOH5/4bEnEuOWr5yrDpJKpbQKwEF1d3f/oK/IPXf22MdZtMoau/LjN9v/5d/sNBiqPj914nrJte7uLvoCgIOSSl3macLWPrxOqVT94a3XjcP+0kY/u/LzxluZX32Zc/yTo7QMMGU8+viG+1eseuU3KbQ8lO3/fwiZtkmk0v87+A4tA0wlJdeKIiKj/Pz8rxVfpVWD2H5+QO55yLSNFgCmHnL8kxTQwlC28zNXHUTueWgBYOohxz9JAS0MZTs/UqkUDwxgKiPH/2jPnPH9HwB2yA8AO+QHgB3yA8AO+QFgh/wAsEN+ANghPwDskB8AdsgPADvkB4Ad8gPADvkBYIf8ALBDfgDYIT8A7JAfAHbIDwA75AeAHfIDwA75AWCH/ACwQ34A2CE/AOyQHwB2yA8AO+QHgB3yA8AO+QFgh/wAsEN+ANghPwDskB8AdsgPADvkB4Ad8gPADvkBYIf8ALBDfgDYIT8A7JAfAHbIDwA75AeAHfIDwA75AWCH/ACwQ34A2CE/AOyQHwB2yA8AO+QHgB3yA8AO+QFgh/wAsEN+ANghPwDskB8AdsgPADvkB4Ad8gPADvkBYIf8ALBDfgDYIT8A7JAfAHbIDwA75AeAHfIDwA75AWCH/ACwQ34A2CE/AOyQHwB2yA8AO+QHgB3yA8AO+QFgh/wAsEN+ANghPwDskB8AdsgPADvkB4Ad8gPADvkBYIf8ALBDfgDYIT/2cXJxc3ehywD9HC4/5ECf5uEx8I8c9Art6pVaBX2ZlXvo/YsC6PKkcFPp1q5bHa7gZusefpDfPNXidbo59MWJmuBbnqPjN8w2hXalTkWX7eZYZyKHy4+7UhsVFRUd9+CDcQvJQpjSQ+oidXWZ6Ptsa2myWOjyZFCEan1rc88Ut3DGawVXq1o4TuLi4jpZx9UE37KLq1Rmz9rOLq6uErpsNy/tihXa6bRwz5OoVDbOIBuf/OcPP3ifFu5+XU01VVVVZvlcv9bvzl4orWnqcvcLUcmcFWGLoucHzpK23TK1dvMNFUHRsbqYyHkqX9d20y1SR86m9yvdvSNiVN1lBsts7eLFuvu0gUq5U72xwcI1GwzNZC232dqly5ZGzVNN760zNA4kil83wMNbuyhmfpAwhpkfw3l6cEzc0mhtqMq7t8HY0NknNuZP8Gvn+7p6zQnxbL/ePFMX6VlXaXIPCPdsKb7RyA8xdOgBKl2CxrlU2A5hxJn1epOrdnXsTIuzWrc0+vbQ5C3P4W6WGTudPJQRS5booiLUs6Tt9SZzF1nz9lvoa3AJjVO26E1kDDc/7ZJlSyPD+E3tUMyR1ZYbO/lK3RLdgvnCptSIm6II0t0vjtXeKvHz7iy70cRXc5xf9NqFcuONen4MbmbUT6IV1TfqpcN6UGhjo/3lXqrg0Ont1w3ktHGPGC0FDnf9scrd28Vw7tTJkwWtqtjFoeQs7zI39oHQnqtnT5z423mjl+5+frpCzqbTlTOaLn1ZaPCOXBE9w3g++8Spv1/tC3lgsZL2w6miY2ZU55448WWla+QS7TRaK67rK6s6l33i5OUW1dKl/Bhy7eq4gJbLX5w49cWlpoDlqwZNqG7mn9O3turPnfi2avi1YtShCYnr7fM9GZGsKVxqvILDPCrJ0NkXTbOiV0R60xaEcvGq+a4VX5Otyqtwi1y1hHQm194fPct0kbQ+VyaN0M4WOiFpvF/H1546da7MJTJsprD29MgVuhm157NPnvh7cU/I8iVKJ9LjErLfrp07eeLMpabZ2mB3oaHIWGVSBM6VC8szVcpOY2X7yB5aii7pW9v1pIP8m0LLe9zUyE+bsbyWnBZ7bxWU3XKfRg57P6WfubKszcXDw5UzVhhcAgKFg7vVUFTe0NbhMcdfUlNh7HP3cJe1Xf/B7B/Yf43ubO32CghRevfqvzr+RVEbrRW0GitvdfUJY5hk0+ScQq1yMRRcI6fjvq6GkoIbUpU4xtgUow49uo4blwr5obvqr126yfkHDEyOVIH+jWWXDK09XG+r4bvSRuVc1dCtumroFBoqAlXSGwUlDWInhTdbhcoAf2dDRQ3nPs1DZi77wawMDOBUc5WNpd8ZWnu5nlbDpdJbwtr9bpX+wAWG8tlTBfvVl5d2WevBwUyN/Azo6xG/Spw59znk9kgQ6NZ0q6VXfEHg7MzJfIPoq1EzLMZ68TAjh0jB33KKW33DY+PXPRjpTc7H1vQI8zTSSU/fQK+9XB/nzJ/pbRh9aKKri27+UCS0dIlraxt8kyZxdqIbwyMLzpKhW9VNO5Q6D+6k2yIsksrBm9JlrG/n9xvfj6ivq2tgHUHL9cr22aqZTiqlp7GCXF6s9eBgplh++tXXt3Dm8m++zsv7Ou+7W85yrkM45VJNpqaeTlPBN/yreeWt05x76ETdXRW1yL+jvCDvTHaRxT/AS6y1jnQi8wukGZsR6Odsqm4Qlsc06tC8ppY2xYxZwqKbj8JVWCCm+QXOEBacvLVB8qY6ej8ivEsvldpNWHYLnuPVYDTwWzV7YKtCVOJ0q9HU5HK7k5AA4UJJKrstpgJhS74pbZU795iFHucE0x7VQTOHPT3oKi1r8NPEhihuCpcmaz04GId7fiAauIEetsx5zQ1xqy0zNtfVdih1y6O1mlBNsKL+u+9KW7vd+HaGcmMHOZFWN3osWLZkflioRuPfV5Z/uVY8rXdbXObcFxujDQ2ZN6O7orC4rv/iMGhdMkZAiJup3HjrpkkWsTR2fliIRjNHUnn+68pBZ19hhZv8PXr/5rmJzw9ujDI0r8vU5DY/dllESKhG5cE5ObdVlRs5vxA/5x7v+Qvnh2nC1a7V3+Zfb+2mfd6oqm73W7RcpwkNDQue3nw5t7Cxu6WuWREetzgiNEQT4lVX0+rJ3So3tpM3LJ8ft5TvOdi7zmj25GrLjabqpmkLYpfOn6fRaGaLm2Kpq+1RLoqNDiOrK50MdVL3toHnB4Jmbka0xqX065J6/tLUMrIHrqPDNWjhorBQhUM8P3BatmwZXRzFXz4+9dMnHqYFuNt4R61dzJ3PLhh8EP8jzVmyLrg++8tS4Smc4xgtBVN0/gZ3hkto8Mxb5Y4WnjEgP/e47q7uzmG38f84kpluHdeuOcSDaTshP/e4lqIzZ4vulvuIHkPht6V3y0zyR4H8ALBDfgDYIT8A7JAfAHbIDwA75AeAHfIDwA75AWCH/ACwQ34A2CE/AOyQHwB2yA8AO+QHgB3yA8AO+QFgh/wAsEN+ANghPwDskB8AdsgPADvkB4Ad8gPADvkBYIf8ALBDfgDYIT8A7JAfAHbIDwA75AeAHfIDwA75AWCH/ACwQ34A2CE/AOyQHwB2yA8AO+QHgB3yA8AO+QFgh/wAsEN+ANghPwDskB8AdsgPADvkB4Ad8gPADvkBYIf8ALBDfgDYIT8A7JAfAHbIDwA75AeAHfIDwA75AWCH/ACwQ34A2CE/AOyQHwB2yA8AO+QHgB3yA8AO+QFgh/wAsEN+ANghPwDskB8AdsgPADvkB4Ad8gPADvkBYIf8ALBDfgDYIT8A7JAfAHbIDwA75AeAHfIDwA75AWCH/ACwQ34A2CE/AOyQHwB2yA8AO+QHgB3yA8DOdn66u7ulUhdaAJh6yPFPUkALQ9nOzw/6inmaMFoAmHrI8U9SQAtD2c5P7rmzax9eRwsAUw85/kkKaGEo2/k59nGWUql69PENtAwwlZAjnxz/JAW0PJREpVLRxdFdKbj006SfR0RGNTc1NTY09Pb20hcAHBS55wkLj9j086fnR0b94a3XW81m+sJQTsuWLaOLtjz2RGLc8pVz1UFSqZRWATio7u5ucs9Dpm2jXXlE48gPAAyD7/8AsEN+ANghPwDskB8AVhz3/2eUxKGxUxgMAAAAAElFTkSuQmCC"},97762:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/import3-d8781a3127ae126b72ff18c6d626462a.png"},95806:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/import4-7c3086827950ca9f199ce6a5a9d4e77a.png"},6832:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/import5-8f9e7ce6244c7a12be4746f63a5ea639.png"}}]);
(self["webpackChunknginxconfig_io"]=self["webpackChunknginxconfig_io"]||[]).push([[414],{7158:()=>{(function(e){var n=/\\[\r\n](?:\s|\\[\r\n]|#.*(?!.))*(?![\s#]|\\[\r\n])/.source,r=/(?:[ \t]+(?![ \t])(?:<SP_BS>)?|<SP_BS>)/.source.replace(/<SP_BS>/g,(function(){return n})),o=/"(?:[^"\\\r\n]|\\(?:\r\n|[\s\S]))*"|'(?:[^'\\\r\n]|\\(?:\r\n|[\s\S]))*'/.source,i=/--[\w-]+=(?:<STR>|(?!["'])(?:[^\s\\]|\\.)+)/.source.replace(/<STR>/g,(function(){return o})),t={pattern:RegExp(o),greedy:!0},s={pattern:/(^[ \t]*)#.*/m,lookbehind:!0,greedy:!0};function l(e,n){return e=e.replace(/<OPT>/g,(function(){return i})).replace(/<SP>/g,(function(){return r})),RegExp(e,n)}e.languages.docker={instruction:{pattern:/(^[ \t]*)(?:ADD|ARG|CMD|COPY|ENTRYPOINT|ENV|EXPOSE|FROM|HEALTHCHECK|LABEL|MAINTAINER|ONBUILD|RUN|SHELL|STOPSIGNAL|USER|VOLUME|WORKDIR)(?=\s)(?:\\.|[^\r\n\\])*(?:\\$(?:\s|#.*$)*(?![\s#])(?:\\.|[^\r\n\\])*)*/im,lookbehind:!0,greedy:!0,inside:{options:{pattern:l(/(^(?:ONBUILD<SP>)?\w+<SP>)<OPT>(?:<SP><OPT>)*/.source,"i"),lookbehind:!0,greedy:!0,inside:{property:{pattern:/(^|\s)--[\w-]+/,lookbehind:!0},string:[t,{pattern:/(=)(?!["'])(?:[^\s\\]|\\.)+/,lookbehind:!0}],operator:/\\$/m,punctuation:/=/}},keyword:[{pattern:l(/(^(?:ONBUILD<SP>)?HEALTHCHECK<SP>(?:<OPT><SP>)*)(?:CMD|NONE)\b/.source,"i"),lookbehind:!0,greedy:!0},{pattern:l(/(^(?:ONBUILD<SP>)?FROM<SP>(?:<OPT><SP>)*(?!--)[^ \t\\]+<SP>)AS/.source,"i"),lookbehind:!0,greedy:!0},{pattern:l(/(^ONBUILD<SP>)\w+/.source,"i"),lookbehind:!0,greedy:!0},{pattern:/^\w+/,greedy:!0}],comment:s,string:t,variable:/\$(?:\w+|\{[^{}"'\\]*\})/,operator:/\\$/m}},comment:s},e.languages.dockerfile=e.languages.docker})(Prism)},5414:(e,n,r)=>{"use strict";r.r(n),r.d(n,{default:()=>g});var o=r(6252),i=r(3577);const t=["innerHTML"],s=["innerHTML"];function l(e,n,r,l,a,c){return(0,o.wg)(),(0,o.iD)("div",{class:(0,i.C_)(`column ${r.half?"is-half":"is-full"} is-full-mobile is-full-tablet`),onCopied:n[0]||(n[0]=(...e)=>c.copied&&c.copied(...e))},[(0,o._)("h3",{innerHTML:r.name},null,8,t),(0,o._)("pre",null,[(0,o._)("code",{class:"language-docker",innerHTML:r.conf},null,8,s)])],34)}r(7158);var a=r(3098);const c={name:"DockerPrism",props:{name:String,conf:String,half:Boolean},mounted(){(0,a.um)(`Highlighting ${this.$props.name}...`),window.Prism.highlightAllUnder(this.$el)},methods:{copied(e){this.$emit("copied",e.detail.text)}}};var u=r(3744);const d=(0,u.Z)(c,[["render",l]]),g=d}}]);
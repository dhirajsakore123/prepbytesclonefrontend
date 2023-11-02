html,body,button,input,select,textarea {font-family:'Overpass', sans-serif; font-size:16px !important;}
* {box-sizing:border-box;}
body,html {scroll-behavior: auto;}

h1,h2,h3,h4,h5,h6 {font-weight:300; line-height: 1em; margin-left: -0.05em; margin-top: 1rem; margin-bottom: 1rem; }
h5,h6 {font-weight:500;}
h1,h2,h3,h4,h5 {text-transform: uppercase; }
h1,h2 {margin-left: -0.075em; line-height: 1em;
    font-family:'Overpass-Lotus','Roboto','Oxygen','Ubuntu','Helvetica Neue','sans-serif'; }

/*h1 { font-size: 4rem; }
h2 { font-size: 3rem; }
h3 { font-size: 2.5rem; }
h4 { font-size: 1.75rem; }
h5 { font-size: 1.25rem; }
h6 { font-size: 1.25rem; }
@media print, screen and (min-width: 40em) {
    h1 { font-size: 10rem; }
    h2 { font-size: 7rem; }
    h3 { font-size: 4rem;  }
    h4 { font-size: 2.5rem; }
    h5 { font-size: 1.5rem; }
    h6 { font-size: 1.5rem; } 
}
@media print, screen and (min-width: 64em) {
    h1 { font-size: 14rem; }
    h2 { font-size: 9rem; }
    h3 { font-size: 5rem;  }
    h4 { font-size: 3.5rem; }
    h5 { font-size: 2rem; }
    h6 { font-size: 2rem; } 
}*/

h1,.h1 { font-size: 4rem;           font-size: clamp(2.5rem, 15vw, 4rem); }
h2,.h2 { font-size: 3rem;           font-size: clamp(2rem, 10vw, 3rem); }
h3,.h3 { font-size: 2.5rem;         font-size: clamp(1.75rem, 8vw, 2.5rem); }
h4,.h4 { font-size: 1.75rem;        font-size: clamp(1.25rem, 5vw, 1.75rem); }
h5,.h5 { font-size: 1.25rem;        font-size: clamp(1rem, 4vw, 1.25rem); }
h6,.h6 { font-size: 1.25rem;        font-size: clamp(1rem, 4vw, 1.25rem); }
@media print, screen and (min-width: 40em) {
    h1,.h1 { font-size: 6rem;       font-size: clamp(4rem, 12vw, 6rem);  }
    h2,.h2 { font-size: 4.5rem;     font-size: clamp(3rem, 8vw, 4.5rem);  }
    h3,.h3 { font-size: 3.75rem;    font-size: clamp(2.5rem, 6vw, 3.75rem);   }
    h4,.h4 { font-size: 2.625rem;   font-size: clamp(2rem, 4vw, 2.625rem);  }
    h5,.h5 { font-size: 1.875rem;   font-size: clamp(1.25rem, 3vw, 1.875rem);  }
    h6,.h6 { font-size: 1.875rem;   font-size: clamp(1.25rem, 3vw, 1.875rem);  } 
}
@media print, screen and (min-width: 64em) {
    h1,.h1 { font-size: 9rem;       font-size: clamp(6rem, 9vw, 9rem); }
    h2,.h2 { font-size: 6rem;       font-size: clamp(4rem, 6vw, 6rem); }
    h3,.h3 { font-size: 4rem;       font-size: clamp(3rem, 4vw, 4rem);  }
    h4,.h4 { font-size: 3rem;       font-size: clamp(2rem, 3vw, 3rem); }
    h5,.h5 { font-size: 2rem;       font-size: clamp(1.5rem, 2vw, 2rem); }
    h6,.h6 { font-size: 2rem;       font-size: clamp(1.5rem, 2vw, 2rem); } 
}


h1 small,h2 small,h3 small,h4 small {font-size:clamp(0.75rem, 50%, 20%); display:block; font-family:'Overpass', sans-serif; }
h1 small,h2 small {padding:0 0.5em 0.5em; }
h3 small,h4 small {padding:0 0.25em 0.5em; }

html.has-modal {overflow-y: hidden;}

a {color:inherit; text-decoration:none;}
.e-rich-text .component a[href]:hover {box-shadow: none;}

hr {border:none; border-top:1px solid #000; margin:4rem 0;}

p {line-height: 1.6em; margin-bottom: 1em;}
p+h3 {margin-top: 2rem;}
p+h4 {margin-top: 2rem;}
p+h5 {margin-top: 2rem;}
p+h6 {margin-top: 2rem;}

label {text-transform: uppercase; font-weight: 500; font-size:0.875rem;}

small {font-size:0.875rem; font-size: clamp(0.75rem, 50%, 1rem); line-height: 1.2; }

.text-left {text-align:left;}
.text-center {text-align:center;}
.text-right {text-align:right;}

.silent-load {opacity:1 !important; transition:all 1s cubic-bezier(0,0.66,0.33,1);}
.hidden {display: none;}

p.error {color:#EF3E36;}
input.error, select.error {border-color:#EF3E36 !important;}
a.delete {color:#4f4f4f;}
a.delete:hover {color:#EF3E36;}


@media screen and (max-width: 39.9375em) {
    table.wrap-small {background: rgba(128,128,128,0.05);}
    table.wrap-small thead {display: none;}
    table.wrap-small tbody  {display:flex; flex-direction: column; gap:1rem;}
    table.wrap-small tr {display:flex; flex-direction: column; gap:0.5rem; padding: 1rem;}
}

@media screen and (max-width: 63.9375em) {
    table.wrap-medium {background: rgba(128,128,128,0.05);}
    table.wrap-medium thead {display: none;}
    table.wrap-medium tbody  {display:flex; flex-direction: column; gap:1rem;}
    table.wrap-medium tr {display:flex; flex-direction: column; gap:0.5rem; padding: 1rem;}
}


.component {position: relative; transition:background-color 1s cubic-bezier(0,0.66,0.33,1);}
.component.theme-black {background-color:#000; }
.component.theme-light-grey {background-color:#f2f1f0; }
.component.theme-neutral-grey {background-color:#4f4f4f; }
.component.theme-white {background-color:#fff; }
.component.theme-yellow {background-color:#fff200; }

.component.theme-black, .component.theme-neutral-grey, .component.theme-night-blue {color:#FFF;}
.component.theme-black .primary, .component.theme-neutral-grey .primary, .component.theme-night-blue .primary {color:#FFF200;}

.component.theme-white, .component.theme-light-grey, .component.theme-yellow {color:#222;}
.component.theme-white .primary, .component.theme-light-grey .primary, .component.theme-yellow .primary {color:#000;}

.component.theme-black a:hover {color:#FFF200;}
.component.theme-light a:hover {color:#4F4F4F;}

.container .c-text-content{display: block;}
.c-text-content__tag-group {display: none;}
.c-text-content__section {margin-bottom: 0;}

.s-header-curtain-menu .e-site-button {font-size:16px;}
.s-header-curtain-menu .e-site-button.primary-button {margin-bottom: 0.5rem;}

figure.lotus-figure {overflow: hidden; margin: 0; width:100%; position: relative;}
figure.lotus-figure.height-screen {height:100vh;}
figure.lotus-figure .lotus-figure__content, figure.lotus-figure .lotus-figure__content img {width:100%; height: 100%;}
figure.lotus-figure img {width:100%; height: 100%; object-fit: cover; object-position: 50% 50%; transform: scale(1); 
    transition:all 2s cubic-bezier(0,0.66,0.33,1); opacity: 0; display: block;}
figure.lotus-figure.active img {transform: scale(1); opacity: 1; }
figure.lotus-figure::after {content:""; position: absolute; top:0; left:0; width:100%; height:100%; opacity: 0; background: rgba(0,0,0,0.35); 
    transition: opacity 0.5s cubic-bezier(0,0.75,0.25,1); pointer-events: none; }
figure.lotus-figure.loading::after {opacity:1; }
figure.lotus-figure .loadingbar {position:absolute; top:50%; left:50%; transform: translate(-50%,-50%); z-index: 2;}

.loadingbar path {animation: loadingbar 1.5s ease 0s; animation-iteration-count:infinite;}
@keyframes loadingbar {0%{transform:translateX(-20px);} 100%{transform:translateX(50px);}}

.lotus-video {position: relative;}
.lotus-video.height-screen .holder {height:100vh;}
.lotus-video.expanding {height:200vh; }
.lotus-video.expanding .holder {height:100vh; position:relative; margin:0 8.33%; transition: all 0.5s cubic-bezier(0,0.75,0.25,1); left:0; right:0; }
.lotus-video.expanding.expanded .holder {margin:0; position: absolute; bottom:0;}
.lotus-video.expanding.fixed .holder {position:fixed; left:0; right:0;}
.lotus-video.expanding.reduced .holder {bottom:0; position: absolute;}
.lotus-video .holder {max-height:100vh;}
.lotus-video video {height:100%; width: 100%; object-fit: cover; display: block; }
.lotus-video .volume {position:absolute; bottom:0; right:0; padding: 1.5rem 2rem; font-size:1.5rem;}
.lotus-video .volume a {color:#FFF200;}
.lotus-video .volume a:hover {color:#FFF;}
.lotus-video .overlay {pointer-events: none;}
@media screen and (max-width: 63.9375em) {
    .lotus-video.expanding .holder {}
}
@media screen and (max-width: 39.9375em) {
    .lotus-video.expanding .holder {}
    .lotus-video .volume {padding:1rem 1.5rem;}
}

.video, .wp-block-video {position:relative;}
.video .mute-control {position:absolute; bottom:2em; left:50%; transform: translateX(-50%); font-size:2em; cursor:pointer;}
video ~ .play {position:absolute; top:50%; left:50%; color:#FFF200; padding:15px 21px; border:2px solid #FFF200; 
		 transform:translateX(-50%) translateY(-50%); transition: all 0.5s cubic-bezier(0,0.75,0.25,1); cursor: pointer; line-height:1em;}
video ~ .play:after {content:""; position: absolute; top:0; left: 0; width:0; bottom:0; background: #FFF200; z-index: -1; transition: width 0.5s cubic-bezier(0,0.75,0.25,1);}
video.playing ~ .play {opacity: 0;}
video ~ .play:hover {color:#000;}
video ~ .play:hover:after {width:100%;}



/*				REVEAL				*/
.emerge {overflow:hidden;}
.emerge.up > .__content {transform: translateY(110%); transition: all 1s cubic-bezier(0,0.75,0.25,1); opacity: 0; padding-top:0.5rem;}
.emerge.down > .__content {transform: translateY(-110%); transition: all 1s cubic-bezier(0,0.75,0.25,1); opacity: 0; padding-bottom:0.5rem;}
.emerge.left > .__content {transform: translateX(110%); transition: all 1s cubic-bezier(0,0.75,0.25,1); opacity: 0; padding-left:0.5rem;}
.emerge.right > .__content {transform: translateX(-110%); transition: all 1s cubic-bezier(0,0.75,0.25,1); opacity: 0; padding-right:0.5rem; }
.emerge.active > .__content {transform: translateY(0); opacity:1; }

.appear.up > .__content {transform: translateY(2rem); transition: all 1s cubic-bezier(0,0.75,0.25,1); opacity: 0;}
.appear.down > .__content {transform: translateY(-2rem); transition: all 1s cubic-bezier(0,0.75,0.25,1); opacity: 0;}
.appear.left > .__content {transform: translateX(2rem); transition: all 1s cubic-bezier(0,0.75,0.25,1); opacity: 0;}
.appear.right > .__content {transform: translateX(-2rem); transition: all 1s cubic-bezier(0,0.75,0.25,1); opacity: 0; }
.appear.active > .__content {transform: translateX(0) translateY(0); opacity:1; }


.spacer {flex-grow:1;}

.padding-tiny {padding: 0.5rem;}
.padding-small {padding: 1rem;}
.padding-normal {padding: 2rem;}
.padding-large {padding: 3rem;}
.padding-huge {padding: 4rem;}
@media print, screen and (min-width: 40em) {
    .padding-tiny {padding: 0.75rem;}
    .padding-small {padding:1.5rem; }
    .padding-normal {padding:3rem; }
    .padding-large {padding:4.5rem; }
    .padding-huge {padding:6rem; }
}
@media print, screen and (min-width: 62em) {
    .padding-tiny {padding: 1rem;}
    .padding-small {padding:2rem; }
    .padding-normal {padding:4rem; }
    .padding-large {padding:6rem; }
    .padding-huge {padding:8rem; }
}

.gap-none {gap:0; }
.gap-tiny {gap:0.25em; }
.gap-small {gap:0.5em; }
.gap-normal {gap:1em; }
.gap-large {gap:2em; }
.gap-huge {gap:4em; }
@media print, screen and (min-width: 40em) {
    .gap-tiny {gap:0.375rem; }
    .gap-small {gap:0.75rem; }
    .gap-normal {gap:1.5rem; }
    .gap-large {gap:3rem; }
    .gap-huge {gap:6rem; }
}
@media print, screen and (min-width: 62em) {
    .gap-tiny {gap:0.5em; }
    .gap-small {gap:1rem; }
    .gap-normal {gap:2rem; }
    .gap-large {gap:4rem; }
    .gap-huge {gap:8rem; }
}


/*		BLOCK: COUNTTO	*/
.countto .countto__content {display:flex; gap:0.75rem; align-items: flex-end;}
.countto .countto__content .value {display: flex; font-size:4rem;}
.countto .countto__content span.digit {height:0.8em; line-height: 1em; display: block; width:0.6em; text-align: center; position: relative; overflow: hidden;  }
.countto .countto__content span.decimal {height:0.8em; line-height: 1em; display: block;  position: relative; }
.countto .countto__content span.digit span {display: block;}
.countto .countto__content span.digit {line-height: 1em; height:0.9em; display: block; }


/*		ACCORDION	*/
.accordion {margin-bottom: 1rem;}
.accordion .section {border-bottom:1px solid rgba(127,127,127,0.25);  }
.accordion .section > a > label {padding: 0.75rem 0; display: flex; justify-content: space-between; cursor: pointer; font-size:1em;}
.accordion .section > a > label i {transition:transform 0.5s cubic-bezier(0,0.66,0.33,1);}
.accordion .section > a > label i.active {transform:rotate(180deg);}
.accordion .section ol, .accordion .section ul {list-style: none; font-size:0.875rem; margin: 0; padding: 0.5rem 0 2rem 0; display:flex; flex-direction:column; gap:0.5rem;}
.accordion .section li {display: flex; gap:1rem; justify-content: space-between;}


/*              LISTS                   */
ol.legal {counter-reset:top sub subsub; list-style: normal;}
ol.legal, ol.legal ol {list-style:none; margin-bottom: 5px; margin-left:1rem;}
ol.legal > li > strong {font-size:2rem; font-weight:300; text-transform: uppercase; margin-top: 1rem; }
ol.legal > li:before {font-size:2rem; font-weight:300 !important; }
ol.legal ol {counter-reset:sub; margin-bottom: 0.25rem;}
ol.legal ol ol{counter-reset:subsub; }
ol.legal ol ol ol{counter-reset:subsubsub; }
ol.legal li {margin-bottom: 0.25rem;}
ol.legal li:before { counter-increment:top; content: counter(top) ". "; font-weight:bold; display: inline-block; padding-right: 10px; }
ol.legal ol li:before { counter-increment:sub; content: counter(top) "." counter(sub) ". "; }
ol.legal ol ol li:before { counter-increment:subsub; content: counter(top) "." counter(sub) "." counter(subsub) ". "; }
ol.legal ol ol ol li:before { counter-increment:subsubsub; content: counter(top) "." counter(sub) "." counter(subsub) "." counter(subsubsub) ". "; }

ol,ul {margin-bottom: 1rem;}



/*              TABLES                   */
table {margin-bottom: 2rem; border-collapse: collapse; width:100%; }
table.data {font-size:0.875rem;}
table th {text-align: left;}
table th, table td {padding:10px; border:none; }
table.tight th, table.tight td {padding:5px; }
table:not(.unstriped) tbody tr:nth-of-type(odd) {background: rgba(128,128,128,0.15);}
table.unstriped:not(.unbordered) tbody tr td {border-top:1px solid rgba(128,128,128,0.1); padding-left: 0;}
table.unstriped:not(.unbordered) tbody tr:last-child td {border-bottom:1px solid rgba(128,128,128,0.1);}
table.unbordered tbody tr td {padding:3px 5px 3px 0;}


/*		SCROLLBAR		*/
.lotus-scrollbar::-webkit-scrollbar { height: 5px; width:5px; }
.lotus-scrollbar::-webkit-scrollbar-track { background: transparent; }
.lotus-scrollbar::-webkit-scrollbar-thumb { background: #FFF200; }



/*		CHECKFRONT		*/
.checkfront {margin:0 -15px;}



/*              SCROLLFIX               */
.scrollfix {position:relative;}
.scrollfix.expanded > div {position: absolute !important; bottom:0;}
.scrollfix.expanded.fixed > div {position: fixed !important; top:0; bottom:auto;}


/*              NAV                     */
nav.navigation {display: flex; justify-content: center;}
nav.navigation .navigation__content {display:flex; gap:1rem; font-size: 1.2rem; align-items: center; justify-content:center; line-height: 1rem;
    padding: 0.5rem 0.75rem; margin:1rem 0; border-radius: 3rem; pointer-events: all;}
nav.navigation.dense .navigation__content {gap:0.5rem;}
nav.navigation ol {list-style: none; margin: 0; padding:0; display: flex; color:#000; gap:0; transition: gap 0.5s cubic-bezier(0,0.66,0.33,1);}
nav.navigation ol.active {gap:0.5rem;}
nav.navigation.small ol.active {gap:0.35rem;}
nav.navigation.dense ol.active {gap:0.25rem;}
nav.navigation.theme-black ol, nav.navigation.theme-neutral-grey ol {color:#fff;}
nav.navigation.theme-white.type-dots .navigation__content {background:rgba(255, 255, 255, 0.48);}
nav.navigation.theme-black.type-dots .navigation__content {background:rgba(83, 83, 76, 0.48);}
nav.navigation.transparent .navigation__content {background: transparent !important; margin:0.5rem 0 !important;}
nav.navigation.theme-black.type-dots ol li {background: #fff;}

nav.navigation ol li {opacity: 0.5; transition: all 0.5s; margin:0;  }
nav.navigation ol li.active { opacity: 1; }
nav.navigation a {transition: opacity 0.5s cubic-bezier(0,0.66,0.33,1); }
nav.navigation.type-dots ol li {background:#4f4f4f; height: 8px; width:1px; transition: all 0.75s cubic-bezier(0,0.66,0.33,1); }
nav.navigation.type-dots ol li:first-child {height: 8px; width:8px; border-radius: 8px 0 0 8px; }
nav.navigation.type-dots ol li:last-child {height: 8px; width:8px; border-radius: 0 8px 8px 0; }
nav.navigation.type-dots ol.active li {width:8px; border-radius: 8px; }
nav.navigation.type-dots ol li.active {background:#fff200; width:16px; }
nav.navigation.small.type-dots ol li {height: 6px;}
nav.navigation.small.type-dots ol li:first-child {height: 6px; width:6px; border-radius: 6px 0 0 6px; }
nav.navigation.small.type-dots ol li:last-child {height: 6px; width:6px; border-radius: 0 6px 6px 0; }
nav.navigation.small.type-dots ol.active li {width:6px; border-radius: 6px; }
nav.navigation.small.type-dots ol li.active {background:#fff200; width:12px; }
nav.navigation.small.type-dots i.fa-light {font-size:0.875rem;}

nav.navigation.type-numerals .navigation__content {flex-wrap: wrap; }
nav.navigation.type-numerals ol li.active {color:#000; }
nav.navigation.type-numerals ol li {display: none; font-size:75%; }
nav.navigation.type-numerals ol li:first-child {display: block; }
nav.navigation.type-numerals ol li:first-child::after {content: '...'; }
nav.navigation.type-numerals ol li:last-child {display: block; }
nav.navigation.type-numerals ol.active li {display: block; font-size:100%;}
nav.navigation.type-numerals ol.active li:first-child::after {content: none; }


nav.navigation.type-arrows .navigation__content {justify-content: space-between; font-size:1rem; margin: 0; width: 100%;}
nav.navigation.type-arrows a {width: 3em; height: 3em; border:1px solid #FFF200; display: flex; justify-content: center; align-items: center; position: relative;}
nav.navigation.type-arrows a:after {content:""; position: absolute; top:0; left: 0; width:0; bottom:0; background: #FFF200; z-index: -1; transition: width 0.5s cubic-bezier(0,0.75,0.25,1);}
nav.navigation.type-arrows a:first-child:after {left:auto; right:0;}
nav.navigation.type-arrows a:hover:after {width:100%;}
nav.navigation.type-arrows a:hover {color:#000;}
nav.navigation.type-arrows i {font-size:1.5em;}
@media screen and (max-width: 39.9375em) {
    nav.navigation.type-arrows {font-size:0.75rem;}
}


nav.navigation.type-numerals.theme-black ol li.active, nav.navigation.type-numerals.theme-neutral-grey ol li.active, 
    nav.navigation.type-dots.theme-black a {color:#fff;}
nav.navigation li, nav.navigation a {cursor: pointer;}
nav.navigation a.disabled {opacity:0.5 !important; pointer-events: none;}
nav.navigation.alignment-west {justify-content: flex-start;}
nav.navigation.alignment-east {justify-content: flex-end;}



.closeups {}
.closeups .left-right {display:flex; gap:1rem; margin-bottom: 1rem; }
.closeups .left, .closeups .right {display:flex; flex-direction: column; gap:1rem;}
.closeups .left {align-items:flex-end; justify-content: space-between; order:-1;}
.closeups .center {justify-content: center; display: flex;}
.closeups p {max-width:400px;}
@media screen and (max-width: 39.9375em) {
    .closeups {padding:4rem 1rem 4rem; }
    .closeups .left-right {flex-direction: column-reverse;}
    .closeups .lotus-figure {height:auto !important;}
    .closeups .right .lotus-figure:last-child {align-self:flex-end;}
    .closeups .center .lotus-figure {width:100% !important;} 
    .closeups .padding-x {padding-left: 1rem !important; padding-right: 1rem !important;}
}
@media screen and (min-width: 40em) {
    .closeups .left, .closeups .right {width:50%; }
}



.lotus-centre-infobox { container-type:inline-size; container-name:lotus-centre-infobox; border:1px solid rgba(128,128,128,0); border-width: 1px 0; }
.lotus-centre-infobox__content {display:flex; flex-direction: column; }
.lotus-centre-infobox__content > * {width:100%; flex-grow: 1;}
.lotus-centre-infobox .lotus-centre-details {padding-top:2.5rem; }
.lotus-centre-infobox h3.dealer-name {margin:0;}
.lotus-centre-infobox .address {margin-top: 1rem;}
.lotus-centre-infobox .contact {display:flex;  flex-wrap: wrap; margin: 2rem 0 1rem;}
.lotus-centre-infobox .contact .phone>a {font-size: 1.4rem; margin: 0 0 1rem;}
.lotus-centre-infobox .contact label {display:block;}
.lotus-centre-infobox .map-canvas {min-height: 300px;}
.lotus-centre-infobox .cta {margin-bottom: 2rem;}
.lotus-centre-infobox .opening-times {display:flex; flex-wrap: wrap; gap:1rem; padding: 2rem 0 0; }
.lotus-centre-infobox .opening-times label {padding: 0;}
.lotus-centre-infobox .opening-times > * {flex-grow: 1; min-width: 200px;}
.lotus-centre-infobox table {font-size:0.9em; width:100%;}
.lotus-centre-infobox td {padding:6px 0.5rem 2px;}
.lotus-centre-infobox td:last-child {text-align:right;}
@container lotus-centre-infobox (inline-size > 1000px) {
    .lotus-centre-infobox__content {flex-direction:row; gap:2rem;}
}


/*		MODAL       		*/
.lotus-modal {position:fixed; top:0; left:0; right:0; bottom:0; display:flex; justify-content: center; align-items: center; z-index: -1; 
    pointer-events: none; opacity: 0; transition: opacity 0.5s cubic-bezier(0,0.75,0.25,1);  }
.lotus-modal .modal__content.theme-black {background: #000; color:#FFF;}
.lotus-modal .modal__content.theme-neutral-grey {background: #4f4f4f; color:#FFF;}
.lotus-modal .modal__content.theme-light-grey {background: #f2f1f0;}
.lotus-modal .modal__content.theme-white {background: #fff;}
.lotus-modal.ready {visibility: visible !important;}
.lotus-modal::before {content:""; opacity: 0; position: fixed; top:0; left:0; width: 100%; height: 100%; background: rgba(0,0,0,.5);
    transition: all 0.5s cubic-bezier(0,0.75,0.25,1); backdrop-filter:blur(7px);  }
.lotus-modal.active::before {opacity:1; }
.lotus-modal .modal__content {background: #f2f1f0; position: relative; min-width:500px; max-width: 80%; width:auto; box-shadow: 0 0 2rem rgba(0,0,0,0.5); 
    transition: all 0.5s cubic-bezier(0,0.75,0.25,1);  }
.lotus-modal.alignment-fullscreen .modal__content {width:100%; height:100%; max-width: 100%; max-height:100%;}
.lotus-modal.alignment-fullscreen .omni {position: fixed;}
.lotus-modal .modal__content {transform:translateY(1em);}
.lotus-modal.alignment-north {align-items: flex-start;}
.lotus-modal.alignment-north .modal__content {transform:translate(0,-100%);}
.lotus-modal.alignment-south {align-items: flex-end;}
.lotus-modal.alignment-south .modal__content {transform:translate(0,100%);}
.lotus-modal.alignment-west {justify-content: flex-start; }
.lotus-modal.alignment-west .modal__content {transform:translate(-100%,0);}
.lotus-modal.alignment-east {justify-content: flex-end;}
.lotus-modal.alignment-east .modal__content {transform:translate(100%,0);}
.lotus-modal.alignment-north .modal__content, .lotus-modal.alignment-south .modal__content {width:100vw; }
.lotus-modal.alignment-east .modal__content, .lotus-modal.alignment-west .modal__content {height:100%; }

.lotus-modal.active {pointer-events: all; opacity: 1 !important; z-index: 101; }
.lotus-modal.active .modal__content {box-shadow: 0 0 2rem rgba(0,0,0,0.5); transform:translate(0,0) !important;}

@media screen and (max-width: 39.9375em) {
    .lotus-modal .modal__content {width:100%; min-width: 100%; height: 100%;}
}


/*              BADGE                   */
figure.badge {display:flex; gap:0.75em; align-items: center; text-transform: uppercase; margin:0; }
figure.badge img {width:3em;}
figure.badge.size-tiny {font-size:0.75rem;}
figure.badge.size-small {font-size:0.875rem;}
figure.badge.size-normal {font-size:1rem;}
figure.badge.size-large {font-size:1.5rem;}
figure.badge.size-huge {font-size:2rem;}


/*              VIDEO BLENDER                   */
.lotus-video-blender {position: relative;}
.lotus-video-blender video {width:100%; height:100%; position:absolute; top:0; left:0; object-fit:cover; z-index:3;}
.lotus-video-blender video {opacity: 0; transition: opacity 2s;}
.lotus-video-blender video.active {z-index:1; opacity: 1;}
.lotus-video-blender video.removing {z-index:0; opacity:1;}


/*				OMNI					*/
.omni { top:0; right:0; background: transparent; cursor: pointer; position:absolute; display:inline-block; pointer-events: all; display: flex; 
    justify-content: center; align-items: center;
    z-index:999; width:48px; height:48px; transition: all 0.5s cubic-bezier(0,0.75,0.25,1); background: #000; }
.omni__content {width: 1.5rem; height:1.5rem; position:relative;}
.omni span {border:1px solid #FFF; display: block; position: absolute; transition: all 0.5s cubic-bezier(0,0.75,0.25,1);  left:0.75rem; top:0.75rem; border-color:#FFF200;}
.omni span:nth-child(1) {transform: translate(-0.7rem,-0.5rem); width:1.4rem;}
.omni span:nth-child(2) {transform: translate(-0.7rem,0); width:1.1rem;}
.omni span:nth-child(3) {transform: translate(-0.7rem,0.5rem); width:0.8rem;}
.omni.normal:hover span {width:100% !important;}
.omni.right span:nth-child(1) {transform: translate(-0.7rem,-0.4rem) rotate(45deg); width:80%;}
.omni.right span:nth-child(2) {opacity: 0;}
.omni.right span:nth-child(3) {transform: translate(-0.7rem,0.4rem) rotate(-45deg);width:80%;}
.omni.close span:nth-child(1) {transform: translate(-0.9rem,0) rotate(-45deg); width: 1.75rem;}
.omni.close span:nth-child(2) {opacity: 0;}
.omni.close span:nth-child(3) {transform: translate(-0.9rem,0) rotate(45deg); width: 1.75rem;}
.omni.left span:nth-child(1) {transform: translate(-0.7rem,-0.4rem) rotate(-45deg); width:80%;}
.omni.left span:nth-child(2) {opacity: 0;}
.omni.left span:nth-child(3) {transform: translate(-0.7rem,0.4rem) rotate(45deg);width:80%;}

@media screen and (max-width: 39.9375em) {
/*    body .omni { padding:1rem; width:56px; height:56px;}*/
}



/*		HELPERS       		*/
@media screen and (min-width: 64em) {
    .hide-for-large {display:none !important;}
}
@media screen and (min-width: 40em) {
    .hide-for-medium {display:none !important;}
}
@media screen and (max-width: 24.9375em) {
    .show-for-small {display:none !important;}
}
@media screen and (max-width: 39.9375em) {
    .show-for-medium {display:none !important;}
}
@media screen and (max-width: 63.9375em) {
    .show-for-large {display:none !important;}
}


/*		TRANSITIONS		*/
.fade-leave-active {position: absolute !important; top:0; left:0; width: 100%; }
.fade-enter-active {position: relative;}
.fade-enter-active, .fade-leave-active {
  transition: all 0.5s cubic-bezier(0,0.75,0.25,1);
}
.fade-leave-to  {
  opacity: 0;
}

.accordion-enter-active {
  transition: all 0.5s cubic-bezier(0,0.75,0.25,1);
}
.accordion-leave-active {
  transition: all 0.5s cubic-bezier(0,0.75,0.25,1);
}
.accordion-enter, .accordion-leave-to  {
  opacity: 0;
}

.slide-enter-active, .slide-leave-active {
    transition: opacity 0.5s, transform 0.5s ; transform: translateX(0);
}
.slide-enter-active {
    z-index:2;
    position: relative;
}
.slide-leave-active {
    position: absolute !important;
}
.slide-enter-from {
    transform: translateX(10.5rem);
    opacity: 0;
}
.slide-leave-to {
    transform: translateX(-0.5rem);
    opacity: 0;
}

.pulse-leave-active {position:relative;}
.pulse-enter-active {position: absolute; right:0; top:0;}
.pulse-enter-active, .pulse-leave-active {
    white-space:nowrap;
    transition: all 0.75s cubic-bezier(0,0.75,0.25,1); transform-origin: 50% 50%;
}
.pulse-enter-from, .pulse-leave-to {
    transform: scale(1.4);
    opacity: 0;
}
.pulse-enter-to, .pulse-leave-from {
    opacity: 1;
    transform: scale(1);
}




@keyframes skeleton {
  0% { background-color: rgba(128,127,126,0.15); }
  50% { background-color: rgba(128,127,126,0.3); }
  100% { background-color: rgba(128,127,126,0.15); }
}




@font-face {
    font-family: "Overpass-Lotus";
    src: url("../../../../assets/fonts/Overpass-Lotus-Headlines.woff") format('woff'), 
	url("../../../../assets/fonts/Overpass-Lotus-Headlines.woff2") format('woff2');
}

@font-face {
    font-family: "Overpass";
    src: url("../../../../assets/fonts/Overpass-VariableFont_wght.ttf") format('ttf');
}
.buttons {display:flex; font-size:1rem; gap:1em; align-items: center; flex-wrap: wrap; padding-left: 0 !important; padding-right: 0 !important;}
.buttons.alignment-center {justify-content: center;}
.buttons.layout-column {flex-direction: column; align-items:start;}
.buttons.alignment-east {justify-content: flex-end}
.buttons.layout-column.alignment-east {align-items: flex-end}
.buttons.gap-none {gap:0.5em 0;}
.buttons.gap-tiny {gap:0.5em;}
.buttons.gap-small {gap:0.5em 1em;}
.buttons.gap-normal {gap:0.5em 2em;}
.buttons.gap-large {gap:0.5em 3em;}
.buttons.gap-huge {gap:0.5em 4em;}

.buttons.layout-column .lotus-button.type-primary + .lotus-button.type-text {margin-top:0.5rem;}

.lotus-button {border:none; background: transparent; text-transform: uppercase; position: relative; align-items: center;
    transition: all 0.35s cubic-bezier(0,0.66,0.33,1), background 1s;  text-transform: uppercase; text-decoration: none !important;
    cursor: pointer; white-space: nowrap; color:inherit; display:flex; line-height:1em; }
.lotus-button.disabled {pointer-events: none; opacity: 0.5;}

.lotus-button label {position:absolute; top:0; font-size:0.75rem; transform: translateY(-50%);}
.lotus-button:hover {box-shadow: none !important; -webkit-box-shadow: none !important; }

.lotus-button.type-primary, .lotus-button.type-secondary {padding:1em 2em 1em 2em; border:1px solid transparent;}

/*.lotus-button.type-primary {margin-right: 1em;}
.buttons.alignment-center .lotus-button.type-primary {margin:0;}
.buttons.alignment-east .lotus-button.type-primary {margin-right: 0;}*/
.lotus-button.type-primary .caret, .lotus-button.type-text .caret {transition: all 0.5s cubic-bezier(0,0.66,0.33,1);}
.lotus-button.caret-end .caret {padding-left: 0.5em;}
.lotus-button.caret-start .caret {padding-right: 0.5em;}

.lotus-button.type-primary.caret-start {padding-left: 1em;}
.lotus-button.type-primary.caret-end {padding-right: 1em;}
.lotus-button.type-primary.caret-start .caret {opacity: 0; transform: translateX(25%); }
.lotus-button.type-primary.caret-end .caret {opacity: 0; transform: translateX(-25%); }
.lotus-button.type-primary.caret-start:hover {padding-left:1em; }
.lotus-button.type-primary.caret-end:hover {padding-right:1em; }
.lotus-button.type-primary:hover .caret {opacity: 1; transform: translateX(0);}

.theme-light .lotus-button.type-primary {background: #000; color:#fff200;}
.theme-light .lotus-button.type-secondary {border-color: #000; color:#000; }
.theme-light .lotus-button.type-secondary:hover {background: #000; color:#fff; }
.theme-light .lotus-button.selected {background: #fff200; color:#000;}

.theme-dark .lotus-button.type-primary {background: #fff200; color:#000;}
.theme-dark .lotus-button.type-primary:hover {color:#000;}
.theme-dark .lotus-button.type-secondary {border-color: #fff200; color:#fff; }
.theme-dark .lotus-button.type-secondary:hover, .theme-dark .lotus-button.type-secondary.active {background: #fff200; color:#000; }
.theme-dark .lotus-button.type-text {color:#FFF !important;}
.theme-dark .lotus-button.type-text .caret {color:#fff200;}
.theme-dark .lotus-button.selected {background: #fff200; color:#000;}

.lotus-button.type-text {background:transparent; padding:1em 0; font-size:0.875em; margin-right:0;}
.lotus-button.type-text .caret {opacity: 1; transform: translateX(0); }
.lotus-button.type-text.caret-start:hover .caret {opacity: 1; transform: translateX(-25%);}
.lotus-button.type-text.caret-end:hover .caret {opacity: 1; transform: translateX(25%);}

.buttons.layout-column .lotus-button.type-text {padding: 0.25em 0;}
.lotus-slider {display: flex; flex-direction: column; gap:0.5rem; padding: 1rem 0 1rem;}
.lotus-slider .range {display: flex; justify-content: space-between; font-size:0.75rem; margin-top: -12px;}
.lotus-slider .slider {position:relative;}
.lotus-slider .slider input::-webkit-slider-thumb {border-radius:50%;}
.lotus-slider .slider-handle {position: absolute; background: #fff200; color:#000; font-size:0.875rem; padding: 2px 5px; bottom:100%; transform: translate(-50%,25%);
    border-radius: 0; user-select: none; white-space: nowrap;}
.lotus-slider .slider-steps {position: relative; width: auto; display: block; height: 8px; pointer-events: none; transform: translateY(-8px); margin:0 5px; }
.lotus-slider input {position: relative;}
.lotus-slider .slider-progression {content:""; background: #fff200; position: absolute; top:11px; left:0; height:3px; box-shadow: 0 0 6px #fff200;
    pointer-events: none;}
.lotus-slider .slider-steps i {height:8px; width:1px; position: absolute; background: rgba(0,0,0,0.2);}

.lotus-slider.theme-black .slider-steps i {background: rgba(255,255,255,0.5);}
.lotus-slider.theme-black .slider input::-webkit-slider-thumb {background: #FFF;}


.chips {display:flex; flex-wrap:wrap; margin: 0; padding:0; align-items: flex-start; }

.chip {padding:0.25em 0.5em; line-height: 1em; display:flex; gap:0.5em; align-items: center; transition: all 0.5s cubic-bezier(0,0.66,0.33,1);
    flex-wrap: nowrap; height:1.5em; border:1px solid; font-size:14px; line-height: 0.5em; }
.chip.closeable {padding-right:0.40em;}
.chip i {transition:color 0.5s cubic-bezier(0,0.66,0.33,1); cursor: pointer; font-size:1em !important;}
.chip i:hover {color:#EF3E36;}

.chips.theme-light .chip {border-color: rgba(0,0,0,0.5); }
.chips.theme-dark .chip {border-color: rgba(255,255,255,0.5); }
.chips.theme-dark .chip:hover {background: #f2f1f0; color:#000; }
.chips .chip.active {background: #222; color:#fff200;}
.chips.theme-dark .chip.active {background: #fff; color:#000; }

/*                   
        CARD GROUP LAYOUTS
*/
.cards .cards__content {display:flex; flex-direction: column;}
.cards.padding-normal .cards__content {}

.cards {grid-template-columns: repeat(24,1fr); grid-column-gap:8px; grid-row-gap:8px; display: grid; }
.cards {padding-left: 0 !important; padding-right: 0 !important;}

@media print, screen and (min-width: 64em) {
    .cards.layout-row > .cards__grid > .cards__content {flex-direction: row;}
    .cards.layout-row.auto .card {width:auto; flex-grow: 1;}
    .cards__content:not(.padding-none) > p {width:75%; min-width:300px;}
    
    .cards.layout-row.alignment-north .cards__content {align-items:flex-start;}
    .cards.layout-row.alignment-center .cards__content {align-items:center;}
    .cards.layout-row.alignment-south .cards__content {align-items:flex-end;}

    .cards.layout-row.alignment-west > .cards__grid > .cards__content {flex-direction: row-reverse;}

}


/*      Accordion       */
.cards.layout-accordion .cards__content {flex-direction: column;}
.cards.layout-accordion .card {display:flex; flex-direction: column; align-items:stretch; border-bottom:2px solid #000; }
.cards.layout-accordion .card figure {order:2; }
.cards.layout-accordion .card .card__title {font-size:1.2rem; font-weight: 500; text-align: left; display:flex; justify-content: space-between;
    align-items: center; cursor: pointer; padding: 0.5rem 0;}
.cards.layout-accordion .card .card__title:after {font: var(--fa-font-light); content: "\f078"; transition: all 0.5s cubic-bezier(0,0.66,0.33,1); }
.cards.layout-accordion .card.active .card__title:after {font: var(--fa-font-light); content: "\f078"; transition: all 0.5s cubic-bezier(0,0.66,0.33,1); transform: rotate(180deg); }
.cards.layout-accordion .card .card__content {align-items: stretch; max-width: 100%; max-height: 0; overflow: hidden; opacity: 0;}
.cards.layout-accordion .card.active .card__content {max-height: none; opacity: 1; transition: all 0.5s cubic-bezier(0,0.66,0.33,1);}



/*                   
        CARD LAYOUTS
*/

.card {width:100%; overflow: hidden; position: relative; }
.card.layout-row .card__grid {display:flex; flex-direction: column;}

.card.layout-row.alignment-north .card__grid {align-items: flex-start;}
.card.layout-row.alignment-south .card__grid {align-items: flex-end;}
.card.layout-row.alignment-center .card__grid { align-items: center;}

.card.layout-row .card__grid > .card__content {width:100%;}

@media print, screen and (max-width: 63.975em) {
    .card figure.lotus-figure {width:100% !important;}
    .card.layout-row.layout-reverse .card__grid {flex-direction:column-reverse;}
    .card.layout-row .card__grid > .card__content {width:100% !important;}
}
@media print, screen and (min-width: 64em) {
    .card.layout-row .card__grid {flex-direction: row;}
    .card.layout-row .card__grid > .lotus-figure {flex-basis:50%; flex-grow: 1;}
    .card.layout-row .card__grid > .card__content {width:50%;}
    .card.layout-row.alignment-west > .card__grid {flex-direction: row-reverse;}
    
    .card.gap-small .card__grid {gap:2rem; }
    .card.gap-normal .card__grid {gap:4rem; }
    .card.gap-large .card__grid {gap:6rem; }
    .card.gap-huge .card__grid {gap:8rem; }
    

}



/*      Overlay             */
.card.layout-overlay .card__grid {height:100%;}
.card.layout-overlay.has-grid .card__grid {grid-template-columns: repeat(24,1fr); grid-column-gap:8px; grid-row-gap:8px; display: grid;}
.card.layout-overlay .card__grid {position:absolute; top:0; left:0; width: 100%; height: 100%;}
.card.layout-overlay .card__content {display:flex; flex-direction: column; height:100%;}
.card.layout-overlay .card__content p {max-width:400px; }

.card.layout-overlay.alignment-west .card__content {align-items: flex-start;}
.card.layout-overlay.alignment-east .card__content {align-items: flex-end;}
.card.layout-overlay.alignment-center .card__content { align-items: center; }
.card.layout-overlay.alignment-north .card__content {justify-content: flex-start;}
.card.layout-overlay.alignment-south .card__content {justify-content: flex-end;}
.card.layout-overlay:not(.alignment-north):not(.alignment-south) .card__content
    { justify-content: center;}

    
.card.layout-overlay.has-grid .card__content {padding-left: 0; padding-right: 0;}
/*                   
        BODY LAYOUTS
*/


section.layout-zig-zag .section__content {display:flex; flex-direction: column;}
section.layout-zig-zag .section__content > * {width:100%;}
section.layout-zig-zag .section__content > p, 
    section.layout-zig-zag .section__content > .buttons,
    section.layout-zig-zag .section__content > ol,
    section.layout-zig-zag .section__content > ul 
        {align-self:flex-end;}
@media print, screen and (min-width: 40em) {
    section.component {grid-template-columns: repeat(24,1fr); grid-column-gap:8px; grid-row-gap:8px; display: grid; }
    section.component {padding-left: 0 !important; padding-right: 0 !important;}
    section.layout-zig-zag .section__content > * {width:85%;}
}
@media print, screen and (min-width: 64em) {
    section.layout-zig-zag .section__content > * {width:70%;}
}

.section__content ul li, .section__content ol li {margin-bottom: 0.5rem;}


blockquote {background: #4f4f4f; padding: 2rem; color:#FFF; margin-top: 1rem; margin-bottom: 2rem;}
blockquote cite {font-style: normal; text-transform: uppercase; font-size:0.75em; opacity: 0.75; }
@media print, screen and (min-width: 40em) {
    blockquote {padding: 2rem 3rem;}
}
/*		BLOCK: FLOWCHART	*/
.flowchart {display: flex; flex-direction: column; gap:2rem; margin-bottom: 2rem;}
.flowchart .nodes {display:flex; justify-content: space-between; gap:1rem;}
.flowchart .node {opacity: 0; transition: all 1s;}
.flowchart .node:not(.active) .node {transition-delay: 0s !important;}
.flowchart .node.active {opacity: 1; }
.flowchart .nodes .node {width:70%; text-align: center; padding: 1.5rem; position: relative; display:flex; justify-content: center; align-items: center; }
.flowchart .nodes .node.half {width:50%;}
.flowchart .nodes .node.primary {background: #FFF200; color:#000;}
.theme-black .flowchart .nodes .node .connector {color:#FFF200;}
.flowchart .nodes .node.secondary {background: #4f4f4f; }
.flowchart .nodes .node.secondary span {color:#FFF;}
.flowchart .nodes .node.tertiary {background: rgba(0,0,0,0.1);}
.flowchart .nodes .node .connector {position: absolute; padding: 0.5rem; left:50%; top:50%; color:#999; }
.flowchart .nodes .node .connector.south {top:100%; }
.flowchart .nodes .node .connector.east {left:100%; }
.flowchart .nodes .node .connector.west {right:100%; left:auto; }
.flowchart .nodes .node span h6 {margin-top:0.5rem;}
.flowchart .nodes.left {justify-content: flex-start;}
.flowchart .nodes.right {justify-content: flex-end;}
@media screen and (max-width: 39.9375em) {
    .flowchart .nodes .node {width: 65%;}
}
@media screen and (max-width: 29.9375em) {
    .flowchart .nodes .node {width: 75%;}
}
.files {display:flex; flex-wrap:wrap; gap:2rem; margin: 2rem 0;}
.files.loading {pointer-events: none;}
.files.loading span.image, .files.loading img {width:88px; height:88px; margin:5px; background: #f2f1f0;}

a.file {display: inline-block; text-decoration: none;}
a.file:visited {text-decoration: line-through;}
figure.file {height:100px; display:flex; flex-direction: row; max-width:400px; flex-grow: 1; border:1px solid rgba(128,128,128,0.25);
    position: relative; overflow: hidden; margin: 0; background: #FFF; gap:5px;}
figure.file img {position: relative; z-index: 1; padding: 5px; transition:padding 0.25s cubic-bezier(0,0.75,0.25,1); }
figure.file figcaption {display: flex; flex-direction: column; justify-content: space-between; text-transform: uppercase; width: 100%;
    z-index: 1; padding: 5px 15px 5px 5px;}
figure.file figcaption .caption {font-size:0.875rem; padding: 5px; }
figure.file figcaption .info {font-size:0.75rem; display: flex; gap:1rem; justify-content: space-between; padding-right: 2px; padding: 5px;  }
figure.file i {transform: translate(0,0); transition:all 0.5s cubic-bezier(0,0.75,0.25,1); line-height: 1;}
figure.file:hover i {transform: translate(2px,2px);}
figure.file:hover img {padding: 0;}
figure.file::after {content:""; position: absolute; right:0; bottom:0; top:0; background: #FFF200; width:100%; 
    transform: translateX(100%); transition: all 0.75s cubic-bezier(0,0.75,0.25,1); }
figure.file:hover::after {transform: translateX(0); }


.files.loading span.image, .files.loading .caption, .files.loading .info  {animation-name: skeleton; animation-duration: 1.5s; animation-iteration-count: infinite; transition:none; }
.files.loading i {display: none;}
.stories {min-height: 100vh; background: #000;}
.stories .title {position: absolute; left: 0; top: 0; width: 100%; height: 100%; display: flex; align-items: center; padding-left: 2rem;
    background: linear-gradient(to right, rgba(0,0,0,0.25), rgba(0,0,0,0), rgba(0,0,0,0)); color:#fff200; }
.stories .title h1 { font-size: 12rem; font-size: min(16vw, 10rem); }
.stories .story {position: relative; }
.stories .stories__content {display:flex; flex-wrap:wrap;}
.stories .story {width:50%;}
.stories .story .lotus-figure {height: 100%;}
.stories .story:nth-child(5n+1) {max-height:100vh; width:100%;}
.stories .story h5, .stories .story p {margin: 0;}
.stories .story button.lotus-button.type-text {padding: 0.5em 0; }
.stories .story i {font-size:1.5rem;}
.stories .story .lotus-button.type-text.caret-end:hover .caret {transform: translate(15%,15%);}

#story .story__content {overflow-y: auto; height: 100%;}

@media screen and (min-width: 40em) {
    .stories .title {padding-left: 4rem;}
    .stories .story i {font-size:2rem;}
}
/*				FAQS				*/
.component.faqs {display:flex; justify-content: space-between; overflow: hidden; }
.component.faqs .content {flex-grow: 1; overflow-y: auto; height: 100%;}
.component.faqs .topics h4 {margin-bottom: 0.5em;}
.component.faqs > .topics {width:45%;}
.component.faqs ol {list-style: none; margin: 0;}
.component.faqs ol.topics {margin:2rem 0;}
.component.faqs ol.topics > li {margin-bottom: 0rem; position: relative;}
.component.faqs ol.topics > li > a {font-size:1.6rem; font-weight: 300; }
.component.faqs ol.topics > li > .marker {position:absolute; right:100%; bottom: 100%; margin-right: 0.25rem; margin-bottom: -0.75rem; overflow: hidden;}
.component.faqs ol.topics > li > .marker i {transform: translateX(-100%) translateY(-100%); transition: all 0.5s cubic-bezier(0,0.75,0.25,1);}
.component.faqs ol.topics > li.active > .marker i {transform: translateX(0) translateY(0); }
.component.faqs ol.subtopics {margin:0.5rem 0 1rem 1.5rem;}
.component.faqs ol.subtopics > li > .marker {overflow: hidden; position: relative; margin-left: 5px; height: 20px; display: inline-block;
    vertical-align: middle; font-size:0.875rem; }
.component.faqs ol.subtopics > li > .marker i {transform: translateX(-100%); transition: all 0.5s cubic-bezier(0,0.75,0.25,1); }
.component.faqs ol.subtopics > li.active > .marker i {transform: translateX(0); }
.component.faqs .search {display:flex; padding:5px ; height: 50px; border:1px solid #000; max-width:400px; margin-bottom: 2rem; background: #fff;  }
.component.faqs .search span {width:4rem; text-align: center; font-size:1.5rem; }
.component.faqs .search span i {padding:5px;}
.component.faqs .search input {border:none !important; margin: 0 !important; flex-grow:1; }
.component.faqs .search input:focus {background: transparent; box-shadow: none;}
.component.faqs .content {height: 100%; overflow-y: auto;}
.component.faqs .answers {width:0; max-width: 0; opacity: 0; transition: all 0.5s cubic-bezier(0,0.75,0.25,1);  }
.component.faqs .answers h5 {transform:translateY(0); opacity:1; transition: all 0.5s cubic-bezier(0,0.75,0.25,1); margin: 0.25em 0;}
.component.faqs .answers.loading h5 {transform:translateY(-50%); opacity:0; transition: none; }
.component.faqs .answers .content {padding-right: 0; padding-bottom: 0; display: flex; flex-direction: column; height: 100%;
    transition:  all 0.5s cubic-bezier(0,0.75,0.25,1); opacity: 0;}
.component.faqs .answers {width:50%; max-width: 100%; opacity: 1; }
.component.faqs.active .answers .content {opacity: 1; }
.component.faqs .answers ol.questions {margin: 1rem 0; padding: 2rem 0; list-style: none; }
.component.faqs .answers li.question-answer {transform:translateX(100px); padding:2rem 0; border-top:2px solid #000;  }
.component.faqs .answers li.question-answer:first-child {border:none;}
.component.faqs .answers.loading li.question-answer {transform:translateX(100px); opacity: 0;  }
.component.faqs .answers:not(.loading) li.question-answer {transform:translateX(0); transition: all 0.5s cubic-bezier(0,0.75,0.25,1); opacity:1;}
.component.faqs .answers li.question-answer label {font-size:0.75rem;}
.component.faqs .answers li.question-answer a.question {font-weight:700; display:flex; justify-content: space-between; align-items: flex-start; }
.component.faqs .answers li.question-answer a.question span {padding-right: 2rem;}
.component.faqs .answers li.question-answer a.question i {font-size:1.2rem; transition: all 0.5s cubic-bezier(0,0.75,0.25,1);  }
.component.faqs .answers li.question-answer.active a.question i {transform: rotate(180deg); }
.component.faqs .answers li.question-answer p.answer { margin: 2rem 0;}
.component.faqs .answers li.question-answer p.answer a {font-weight: bold;}
@media screen and (max-width: 63.9375em) {
    .component.faqs {flex-direction:column; }
    .component.faqs .content {padding: 0;}
    .component.faqs > .topics {order:0;}
    .component.faqs, .component.faqs > .topics {width:100%;}
    .component.faqs {order:2; flex-grow:2; height: 50%;}
    .component.faqs ol.topics > li {margin-bottom: 0.5rem;}
    .component.faqs .answers {width:100% !important; font-size:1rem;  }
    .component.faqs .answers ol.questions {padding-right: 2rem; margin: 0;}
}

.steps.component.blocks {display:flex; list-style: none; margin: 0; padding: 0; gap:1rem; }
.steps.component.blocks > li {flex: 1 1 0px; transition:all 1s cubic-bezier(0,0.66,0.33,1);  }
.steps.component.blocks label {margin-bottom: 0.5rem;}

.steps.component.blocks.blocks.padding-tiny > li {padding:0.5rem;}
.steps.component.blocks.blocks.padding-small > li {padding:1rem;}
.steps.component.padding-normal > li {padding:2rem;}

.steps.component.blocks.cols {display:grid; gap: 3%; }
.steps.component.blocks.progression {gap:0;}
.steps.component.blocks.progression > li {opacity: 0.35; }
.steps.component.blocks.progression > li.active {opacity: 1; background:#fff200; color:#000;}
.steps.component.blocks.progression > li.complete, .steps.component.blocks > li:hover {opacity: 1;}

@media print, screen and (max-width: 62em) {
    .steps.component.blocks {flex-direction: column; display:flex !important;}
    .steps.component.blocks.cols {display:grid; gap: 1rem; }
}



.steps.component.dots {display:flex; list-style: none; margin: 0; padding: 0; gap:1rem; }
.steps.component.dots > li {flex: 1 1 0px; transition:all 1s cubic-bezier(0,0.66,0.33,1);  }
@media print, screen and (max-width: 62em) {
    .steps.component.dots {flex-direction: column; display:flex !important;}
}


.lotus-centre-search {grid-template-columns: repeat(24,1fr); grid-column-gap:8px; grid-row-gap:8px; display: grid; }

.lotus-centre-search.theme-black h3 {color:#fff200;}
.lotus-centre-search .title {  grid-column: 1 / 15; background: url("../images/au-weave.png") center center / cover no-repeat; 
         grid-template-columns: repeat(14,1fr); grid-column-gap:8px; grid-row-gap:8px; display: grid;
}
.lotus-centre-search .title > div {grid-column:3 / 13; padding:8rem 0;}
.lotus-centre-search .lotus-centre-searchbox {display: flex; flex-direction: column; justify-content: center; grid-column: 16 / 23; padding:2rem 0;}
.lotus-centre-search .lotus-centre-searchbox .form {margin: 0;}
@media screen and (max-width: 63.9375em) {
    .lotus-centre-search {display:flex; flex-direction: column;}
    .lotus-centre-search h3 {padding:4rem 0;}
    .lotus-centre-search .title, .lotus-centre-search .lotus-centre-searchbox {display:block; padding:2rem;}
}


.lotus-centre-searchbox .form {position:relative; margin:1rem 0; display: flex; gap:1rem; align-items:center;
    padding:0.75rem 0.75rem;}

.lotus-centre-searchbox .form {border:1px solid #999; }
.lotus-centre-searchbox .form i {color:inherit;}
.lotus-centre-searchbox .form input {margin:0 !important; height:auto; color:inherit; width:100%; background: transparent; border:none !important;}
.lotus-centre-searchbox .form input:focus {background: transparent; border-color:#FFF; }
.lotus-centre-searchbox .form a {cursor: pointer;}
.theme-black > .lotus-centre-searchbox .form input {color:#fff;}
.theme-black > .lotus-centre-searchbox .form input::placeholder {color:#999;}

.lotus-centre-searchbox .lotus-centre {padding:1.5rem 1.5rem 0; cursor: pointer; transition: all 0.5s; border:1px solid rgba(128,128,128,0.25);}
.lotus-centre-searchbox .lotus-centre:hover {background: #FFF200; color:#000;}
.lotus-centre-searchbox .lotus-centre a:after {color:inherit !important;}
.lotus-centre-searchbox .lotus-centre:hover a:after {color:#000 !important;}
.lotus-centre-searchbox .lotus-centre h6 {margin-top: 0; font-size:1.4rem;}
.lotus-centre-searchbox .lotus-centre p {margin:0;}
.lotus-centre-searchbox .lotus-centre .details {display: flex; align-items: center; justify-content: space-between;  }
.lotus-centre-searchbox .closest {padding:1rem 0; display: flex; flex-direction: column; gap:1rem;}
@media screen and (max-width: 39.9375em) {
    .lotus-centre-searchbox  {padding:4rem 0;}
}


.lotus-centre-modal {height:100%; background: #000;}
.lotus-centre-modal .lotus-centre__content {height:100%; transition: all 0.5s cubic-bezier(0,0.9,0.2,1);  }
.lotus-centre-modal .lotus-centre-details { display:flex; flex-direction: column; height:100%; justify-content: space-between; }
.lotus-centre-modal .lotus-scrollbar {flex-grow: 1; overflow-y: auto;}

.lotus-centre-modal .dealer-type {color:#FFF200; text-transform: uppercase;}
.lotus-centre-modal .address {margin-top: 0.5rem;}
.lotus-centre-modal .contact {display:flex; flex-wrap: wrap; padding:1rem 0; gap:0.5rem;}
.lotus-centre-modal .contact > * {flex-grow: 1; min-width: 200px; }
.lotus-centre-modal p.phone {font-size: 1.2rem; margin: 0; min-width: 200px;}
.lotus-centre-modal p.phone label {display:block;}

.lotus-centre-modal .buttons { margin-bottom: 2rem;}

.lotus-centre-modal .opening-times {display:flex; flex-wrap: wrap; gap:1rem;}
.lotus-centre-modal .opening-times label {padding: 0.5rem 10px; display: block;}
.lotus-centre-modal .opening-times > * {flex-grow: 1; min-width: 200px;}
.lotus-centre-modal table {font-size:0.9em; width:100%; margin-bottom: 0;}
.lotus-centre-modal table td {padding: 5px 10px;}
.lotus-centre-modal td:last-child {text-align:right;}

.lotus-centre-modal .map-canvas {height: 300px; opacity: 0; transition:opacity 1s; transition-delay: 1s; box-shadow:0 0 20px rgba(0,0,0,1);}
.lotus-centre-modal.active .map-canvas {height: 300px; opacity: 1; min-height: 200px; }

@media screen and (min-width: 62em) {
}
@media screen and (max-width: 63.9375em) {
}
@media screen and (max-width: 39.9375em) {
}
.lotus-centres-map .map-canvas {width: 100%; height: 100vh;}

.lotus-centre-search-input {position:absolute; top:50%; left:0; display:flex; align-items: flex-start; width: 75%; max-width:480px;
    transition:all 0.5s cubic-bezier(0,0.8,0.2,1); transform: translate(-100%,-50%); pointer-events: none;}
.lotus-centre-search-input.active {transform: translate(0,-50%); pointer-events: all;}
.lotus-centre-search-input a.showhide {padding:0.85rem 1rem; background:#FFF200; pointer-events: all; position: absolute; top:0; left:100%;}
.lotus-centre-search-input form {background:#222;  padding: 1.5rem; width:100%;}
.lotus-centre-search-input fieldset {margin:0 0 1rem; position: relative; display:flex; align-items: center; flex-wrap: nowrap; border:1px solid #999;}
.lotus-centre-search-input fieldset a {padding:0 10px; color:rgba(255,255,255,0.75); }
.lotus-centre-search-input fieldset a:hover {color:#fff;}
.lotus-centre-search-input fieldset a i {font-size:1.5rem; line-height: 1em;}
.lotus-centre-search-input fieldset input {padding:8px 12px 8px 12px; margin: 0 !important; background: transparent; border:none !important; outline: none; color:#FFF; flex-grow: 1; }
.lotus-centre-search-input fieldset input::placeholder {color:#999;}
.lotus-centre-search-input .buttons {font-size:0.875rem;}
.lotus-centre-search-input .buttons a {flex-grow: 1; justify-content: center;}
.lotus-centre-page-details {height:100%; background: #000;}
.lotus-centre-page-details .lotus-centre__content {height:100%; transition: all 0.5s cubic-bezier(0,0.9,0.2,1);  }
.lotus-centre-page-details .lotus-centre-details { display:flex; flex-direction: column; height:100%; justify-content: space-between; }
.lotus-centre-page-details .lotus-scrollbar {flex-grow: 1; overflow-y: auto;}

.lotus-centre-page-details .dealer-type {text-transform: uppercase; display: block; margin-bottom: 1rem;}
.lotus-centre-page-details .address {margin-top: 0.5rem;}
.lotus-centre-page-details .contact {display:flex; flex-wrap: wrap; padding:1rem 0; gap:0.5rem;}
.lotus-centre-page-details .contact > * {flex-grow: 1; min-width: 200px; }
.lotus-centre-page-details p.phone {font-size: 1.2rem; margin: 0; min-width: 200px;}
.lotus-centre-page-details p.phone label {display:block;}

.lotus-centre-page-details .opening-times {display:flex; flex-wrap: wrap; gap:1rem; }
.lotus-centre-page-details .opening-times label {padding: 0.5rem 10px; display: block;}
.lotus-centre-page-details .opening-times > * {flex-grow: 1; min-width: 200px; margin-bottom: 2rem;}
.lotus-centre-page-details table {font-size:0.9em; width:100%; margin-bottom: 0;}
.lotus-centre-page-details table td {padding: 5px 10px;}
.lotus-centre-page-details td:last-child {text-align:right;}

.lotus-centre-page-details .map-canvas {height: 500px; }

@media screen and (min-width: 62em) {
    .lotus-centre-page-details .opening-times {justify-content: flex-end;}
.lotus-centre-page-details .opening-times > * {max-width: 350px;}
}
@media screen and (max-width: 63.9375em) {
}
@media screen and (max-width: 39.9375em) {
}

/*		BLOCK: FRAME-BY-FRAME	*/
.frame-by-frame {position:relative; pointer-events:none;}
.frame-by-frame .fullheight {height:100vh;}
.frame-by-frame canvas {opacity: 0; transition: opacity 0.5s;}
.frame-by-frame.loaded canvas {opacity: 1;}
.frame-by-frame .holder {width:100%; left:0; position: relative; }
.frame-by-frame.fixed .holder {position: fixed; z-index: 0;}
.frame-by-frame.fixed.top .holder {bottom:0; }
.frame-by-frame.fixed.bottom .holder {bottom:0;  }
.frame-by-frame.fixed.scrollbottom.bottom .holder {position: absolute; bottom:0;  }
.frame-by-frame video, .frame-by-frame canvas {height:100%; width: 100%; object-fit: cover; position: absolute;}
.frame-by-frame .frame-by-frame__content {height: 100%; display:flex; z-index: 2; }
.frame-by-frame a {pointer-events:all;}

.frame-by-frame .frame-by-frame__content {align-items: center; justify-content: center; flex-direction: column; padding: 4rem;}
.frame-by-frame.alignment-center .frame-by-frame__content {}
.frame-by-frame.alignment-north .frame-by-frame__content {justify-content: flex-start;}
.frame-by-frame.alignment-south .frame-by-frame__content {justify-content: flex-end;}
.frame-by-frame.alignment-west .frame-by-frame__content {align-items: flex-start;}
.frame-by-frame.alignment-east .frame-by-frame__content {align-items: flex-end;}

.frame-by-frame h2 {line-height: 1em; display:flex; flex-direction: column;}
.frame-by-frame h2 small {font-size:30%; padding: 0.5em;}
.frame-by-frame h2 span+small {align-self: flex-end;}
.frame-by-frame span {display: block; margin-bottom: -0.15em;}

@media screen and (max-width: 39.9375em) {
    .frame-by-frame .frame-by-frame__content {padding: 8rem 2rem;}
}

.features .imagery {display: flex; overflow:hidden; }
.features .imagery::-webkit-scrollbar { display: none;}
.features.layout-column .imagery .feature {transition: transform 1s cubic-bezier(0,0.75,0.25,1); width:75vw; height:30vw; flex:none; padding:0 0.5rem; }
.features .imagery .feature > * {width:100%; height:100%;  }
.features .imagery .lotus-video .holder {height:100%;}
.features__content {display: flex; justify-content: center; gap:2rem; text-align: center;}
.features .copy {max-width:800px; margin: 1rem auto 0;}
@media screen and (max-width: 39.9375em) {
    .features .imagery {padding:0;  }
    .features.layout-column .imagery .feature {padding:0 1rem; width:100vw; height: 50vw;}
}
@media screen and (max-width:800px) {
    .features .copy {padding:0;}
}

.features .panel__content {display:flex; flex-direction: column; align-items: center; text-align: center;}

.features {position: relative; line-height:1.6em;}
.features .feature {cursor: pointer; overflow: hidden;}
.features .intro {margin:0 auto 4rem;}
.features.layout-column .intro {padding:0 1rem; width:75vw;}
.features .intro small {font-size:1.25rem; line-height: 1em; display: block; margin: 0.25em 0;}
.features .content {padding-bottom: 4rem; padding-left: 2rem; padding-right: 2rem;}
.features.light {background:#F2F1F0;}
.features.light .intro small {color:#000; }
.features.dark {background:#000;}
.features.dark .intro small {color:#FFF200; }

.features .feature.sunroof img {object-position: 50% 0%;}
.features .feature.tactile-control img {object-position: 50% 90%;}
.features .feature.seats-textile img {object-position: 25% 50%;}
.features .feature.seat-switches img {object-position: 50% 100%;}

@media screen and (max-width: 39.9375em) {
    .features .intro {width:100%; padding:0 2rem;}
    .features .intro small {font-size:1rem;}
    .features .intro h4 {font-size:2.5rem;}
}
@media screen and (min-width: 40em) {
    .features .content {width:75vw;}
}



.features.layout-row .intro {margin-bottom: 8rem;}
.features.layout-row .features__layout {display: flex; flex-direction: row-reverse; gap:2rem 4rem; align-items:flex-start;}
.features.layout-row .imagery {width:55%; display:block; position: relative;}
.features.layout-row .imagery .feature {width:100%; height:100%; top:0; transition:transform 1s cubic-bezier(0,0.75,0.25,1); }
.features.layout-row .imagery .feature:not(:first-child) {position: absolute;}
.features.layout-row .panel__content {align-items: flex-start; text-align: left;}
.features.layout-row .panel__content .copy {width:75%; margin-left: 0;}
.features.layout-row .features__content {flex-direction: column; width:45%;}
.features.layout-row .content {padding: 0; width:100%;}
@media screen and (max-width: 39.9375em) {
    .features.layout-row .features__layout {flex-direction: column;}
    .features.layout-row .features__layout > * {width: 100%;}
}.gallery {height:50vh;}
.gallery .imagery {display: flex; overflow:hidden; height: 100%; }
.gallery .imagery::-webkit-scrollbar { display: none;}
.gallery .imagery .slide {transition: transform 1s cubic-bezier(0,0.75,0.25,1); width:100%; height: 100%; flex:none; }
.gallery .imagery .slide > * {width:100%; height:100%;  }
.gallery .imagery .lotus-video .holder {height:100%;}
.gallery__content {display: flex; justify-content: center; text-align: center;}
.gallery .navigation.type-arrows {position: absolute; top:50%; transform: translate(0,-50%); z-index: 10; width: 100%; padding:3em;}
@media screen and (max-width: 39.9375em) {
    .gallery .imagery {padding:0;  }
    .-gallery .navigation.type-arrows {padding: 0; bottom:0; top:auto; transform: none;}
}
@media screen and (max-width:800px) {
    .gallery .copy {padding:0;}
}
@media screen and (min-width: 40em) {
}


.gallery.light {background:#F2F1F0;}
.gallery.light .intro small {color:#000; }
.gallery.dark {background:#000;}
.gallery.dark .intro small {color:#FFF200; }

@media screen and (max-width: 39.9375em) {
    .gallery .intro {width:100%; padding:0 2rem;}
    .gallery .intro small {font-size:1rem;}
    .gallery .intro h4 {font-size:2.5rem;}
}
@media screen and (min-width: 40em) {
    .gallery .content {width:75vw;}
}.copy-scroller {width:100%; overflow: hidden;}
.copy-scroller .content {display: flex; overflow:hidden; }
.copy-scroller .content .node {transition: all 0.75s cubic-bezier(0,0.75,0.25,1); flex:none; width:100%; width:30vw; padding-right: 4rem; }

@media screen and (max-width: 64em) {
    .copy-scroller .content .node {width:66vw;}
}/*      LOGIN & HERO       */
#mylotus {position:relative;}
#mylotus .hero {transition: height 0.75s cubic-bezier(0,0.66,0.33,1); }
#mylotus.loggedin .hero {height:30vh;}

#mylotus-login {position:absolute; top:0; left:0; width:100%; height:100%; display:flex; justify-content: center; align-items: center;}
#mylotus-login form {width:500px; z-index: 20;
    background: #f2f1f0; padding: 3rem; transition: all 0.5s; opacity: 1; max-width: 80vw;}
#mylotus-login h4 {margin-bottom: 0.25em;}
#mylotus-login .buttons {justify-content: space-between; margin-top: 1rem;}
#mylotus-login .lotus-button {margin-right: 0 !important;}
body.loggedin #mylotus-login {transform: translate(-50%, -100%); opacity: 0; pointer-events: none;}
@media screen and (max-width: 39.9375em) {
    #mylotus-login {padding: 2rem;}
}


/*      NAV     */
#mylotus nav.mylotus-nav {background: #f2f1f0; padding:1rem 0; display: flex; gap:2rem; text-transform: uppercase;}
#mylotus nav.mylotus-nav a:last-child {flex-grow: 1; text-align: right;}


/*      VEHICLES        */
#vehicles .vehicles.loading .vehicle {background-color: rgba(242,241,240,0.5); animation-name: color; animation-duration: 1.5s; animation-iteration-count: infinite; transition:none; }

#vehicles .panel.has-deadline {background: #FFF200;}
#vehicles .panel dl {display:grid; grid-template-columns:auto auto; column-gap:1rem; }
#vehicles .panel dt {text-align: right; margin: 0;}
#vehicles .panel dd {text-align: left; margin: 0;}
#vehicles .panel dt {text-transform: uppercase; font-size: 0.875rem;}
#vehicles .panel small {opacity: 0.5; margin-bottom: 1rem;}
@media screen and (min-width: 40em) {
    #vehicles .vehicles .vehicle {min-width: 400px;}
}
@media screen and (min-width: 64em) {
    #vehicles .vehicles .vehicle {min-width:500px; width:33%; }
}



#details > div {display:flex; gap:6rem; margin: 2rem 0;}
#details .editing > div {border-bottom:1px solid #ccc; padding-bottom: 1rem; margin-bottom: 1rem;}
@media screen and (max-width: 63.9375em) {
    #details > div {flex-direction: column; gap:2rem;}
}
.phonenumbers .grid, .emailaddresses .grid, .addresses .grid {display:grid; grid-template-columns: auto 1fr 16px; gap:0 1rem; 
      align-items: center; margin-bottom: 0.5rem;}
.phonenumbers input, .emailaddresses input {margin: 0;}

.button-list {list-style: none; padding: 0; margin: 0.5rem 0; }
.button-list a.button {padding: 0.25rem 0;}

#contactprefs ul {list-style: none; margin: 0; padding: 0; display: flex; gap:2rem;}
#contactprefs ul input {margin-right: 0.5rem;}


#emira-configurator {overflow: hidden; transition: all 0.5s; background: #4f4f4f; color:#FFF;}
#emira-configurator.nocontrols, #eletre-configurator.nocontrols, #vehicle-hero {height:50vh; overflow: hidden; }
#eletre-configurator.nocontrols .vue-configurator nav.viewpoints ol {bottom:2rem;}
.configurator-holder {height: 100vh; transition: all 0.5s; opacity: 0; }
.configurator-holder.initialised {opacity: 1; }
#emira-configurator.initialised .vue-configurator, #eletre-configurator.initialised .vue-configurator  {opacity: 1; }
#emira-configurator .button.primary {margin-right: 0;}
#vehicle-hero img {width:100%; height: 100%; object-fit: cover; object-position: center;}
#eletre-configurator {overflow: hidden;}
@media screen and (max-width: 39.9375em) {
    #emira-configurator.nocontrols, #eletre-configurator.nocontrols, #vehicle-hero {height: 30vh;}
}


#mylotus-vehicle {}
#mylotus-vehicle .vehicle__content {overflow-y: auto; height:100%; background: #FFF;}
#mylotus-vehicle .padding-x {padding-left: 2rem; padding-right: 2rem;}
#mylotus-vehicle .padding-y {padding-top: 2rem; padding-bottom: 2rem;}
@media screen and (max-width: 39.9375em) {
    #mylotus-vehicle .padding-x {padding-left: 1rem; padding-right: 1rem;}
    #mylotus-vehicle .padding-y {padding-top: 1rem; padding-bottom: 1rem;}
}

#mylotus-vehicle .vehicle-intro {display:flex;}
#mylotus-vehicle .vehicle-intro .content {flex-grow:2; padding: 4rem;}
#mylotus-vehicle .vehicle-intro ol.order-progress {display: flex; flex-direction: column; margin: 2rem 0; padding: 0; list-style: none; gap:1rem;}
#mylotus-vehicle .vehicle-intro ol.order-progress h4 {margin-bottom: 1rem;}
#mylotus-vehicle .vehicle-intro ol.order-progress li {display: flex; flex-direction: column; background:#F2F1F0; }
#mylotus-vehicle .vehicle-intro ol.order-progress li .__content {display: flex; justify-content: space-between; padding: 2rem; }
#mylotus-vehicle .vehicle-intro ol.order-progress li p:first-of-type {font-size: 1.2rem;}
#mylotus-vehicle .vehicle-intro ol.order-progress li.active {display: flex; justify-content: space-between; background:#FFF200; gap:0 2rem; }
#mylotus-vehicle .vehicle-intro ol.order-progress li.active ~ li {background: #FFF; border:1px solid #CCC; color:#CCC;}
#mylotus-vehicle .vehicle-intro ol.order-progress .button {margin-right: 0;}

#mylotus-vehicle .vehicle-intro .details {flex-grow:1; width:25%; min-width: 500px; background:#4f4f4f; }
#mylotus-vehicle .vehicle-intro .details > div {padding: 2rem;}
#mylotus-vehicle .vehicle-intro .details h5 {margin-bottom:1em;}
#mylotus-vehicle .vehicle-intro .help-details {background: #fff200;}
#mylotus-vehicle .vehicle-intro .order-details {background: #f2f1f0;}
#mylotus-vehicle .vehicle-intro .vehicle-details {color:#FFF;}
#mylotus-vehicle .vehicle-intro .vehicle-config-history {color:#FFF; background: #000;}

#mylotus-vehicle .vehicle-intro .details dl {display: grid; justify-content: space-between; grid-template-columns: 1fr 1fr; gap:0.25rem;}
#mylotus-vehicle .vehicle-intro .details dt {font-weight: 300;  }
#mylotus-vehicle .vehicle-intro .details dd {font-weight: 500; text-align: right; }
#mylotus-vehicle dd.has-tooltip:after {font-family: "Font Awesome 6 Pro"; font-weight: 900; font-size:0.875rem; content: "\f05a"; padding-left:5px;}

#mylotus-vehicle .vehicle-intro .details .specgroups {list-style: none; margin: 0; padding: 0; font-size:0.9em;}
#mylotus-vehicle .vehicle-intro .details .specgroups label {margin: 1rem 0; display: block;}
#mylotus-vehicle .vehicle-intro .details .specgroups li {border-bottom: 1px solid rgba(255,255,255,0.25);}

#mylotus-vehicle .vehicle-intro .history dl {grid-template-columns: 100%; }
#mylotus-vehicle .vehicle-intro .history dd {display:flex; gap:2rem; text-align: left;}
#mylotus-vehicle .vehicle-intro .history dd ul {list-style: none; margin: 0; width:50%; font-size:0.75rem; }
#mylotus-vehicle .vehicle-intro .history dd ul.added {color:#16BAC5;}
#mylotus-vehicle .vehicle-intro .history dd ul.removed {color:#EF3E36;}

#mylotus-vehicle .actions {display:flex; flex-direction:column; gap:0.5rem; align-items: flex-end;}
#mylotus-vehicle .actions a.button.primary {margin-bottom: 1rem;}
#mylotus-vehicle .actions a.button.text {padding:0;}

#mylotus-vehicle .gallery {display:grid; grid-template-columns:30% 30% 40%; height:auto;}
#mylotus-vehicle .gallery figure:nth-child(3) {grid-column: 3; grid-row: 1 / span 2;}
#mylotus-vehicle .gallery figure {margin: 0;}
#mylotus-vehicle .gallery figure img {width:100%; height:100%; object-fit: cover; object-position: center;}

body.vehicle-editing .omni { padding:1rem; width:56px; height:56px;}
body.vehicle-editing .omni {background:#FFF200;}
body.vehicle-editing .omni span {border-color:#000;}
body.vehicle-editing .omni:hover span {border-color:#000;}

#confirmationconfirmation h4 {margin-bottom: 0.5em;}
#confirmationconfirmation a.button {margin-top: 1rem;}
#confirmationconfirmation hr {margin: 2rem 0;}
#confirmationconfirmation label {display:flex; gap:1rem; align-items: center;}

#faqs {background:#f2f1f0;}
#faqs .answers .content {background: transparent;}

@media screen and (max-width: 63.9375em) {
    #mylotus-vehicle .vehicle-intro .content {flex-grow:2; padding: 2rem;}
    #mylotus-vehicle .vehicle-intro {flex-direction: column;}
    #mylotus-vehicle .vehicle-intro .details {width:100%; min-width: 0;}
}
@media screen and (max-width: 39.9375em) {
    #mylotus-vehicle li:not(.complete) {flex-direction: column;}
    #mylotus-vehicle li .actions {align-items: flex-start;}
}

/*              FORMS               */
form label {display: flex; margin-bottom: 0.5rem; gap:1rem; align-items: center;}
input, select, textarea {margin-bottom: 0.5rem;}
.form__content input:not([type=checkbox]):not([type=range]):not([type=radio]), .form__content select, .form__content textarea {border:1px solid #999; box-sizing: border-box; padding: 0.5rem; margin-bottom: 1rem; border-radius: 0; background: transparent;
    appearance: none; box-shadow: none; transition: all 0.5s cubic-bezier(0,0.66,0.33,1); width:100%;}
.form__content input:not([type=radio]):not([type=range]):focus, .form__content select:focus, .form__content textarea:focus {border:1px solid #333; box-shadow:0 2px 10px rgba(0,0,0,0.1); outline:none; }
.form__content input[type=checkbox] {width:20px; height: 20px; border-radius: 0; transition: all 0.25s cubic-bezier(0,0.75,0.25,1); display: block;  }
.form__content input[type=checkbox]:checked {filter: invert(100%) hue-rotate(18deg) brightness(1.7); }

input[type=range]{ appearance: none; -webkit-appearance:none; border-width: 0; }
input[type=range]::-webkit-slider-runnable-track { height: 2px; background: rgba(0,0,0,0.1); 
	box-shadow: none; }
input[type=range]::-webkit-slider-thumb { -webkit-appearance: none; border: none; z-index: 2; position: relative;
    height: 12px; width: 12px; border-radius: 50%; background: #000; margin-top: -5px;
}
.form-nav {display:flex; justify-content: space-between; padding: 0 0.5rem;}

form fieldset {padding:0; margin: 1rem 0; border:none; display:flex; flex-direction: column; gap:1rem;}
form fieldset .fields {display:flex; flex-wrap: wrap; gap:1rem; align-items: flex-start;}
form fieldset legend {font-size:1.4rem; padding:0 0 1rem 0; }
form fieldset legend+div>p {margin-top: 0;}
form fieldset .field {flex-grow: 1; min-width: 250px; flex-basis:25%;}
form fieldset input:not([type=radio]):not([type=checkbox]), form fieldset select {height:40px;}
form fieldset input+small {padding-bottom: 0.05rem; margin-top: -0.5rem; display: block; text-align: right;}
form fieldset input+span.error {padding-bottom: 0.05rem; margin-top: -0.5rem; display: block; text-align: left; color:#EF3E36 !important; font-size:0.875em;}
form fieldset input.uppercase {text-transform: uppercase;}
form fieldset .form-body {margin-top: 0;}
form fieldset .checkboxes, form fieldset .radios {list-style:none; margin-top:1rem; padding:0; display:flex; flex-direction: column;}
form fieldset .checkboxes li, form fieldset .radios li {display:flex; gap:0.5rem;}
form fieldset .checkboxes li label, form fieldset .radios li label {margin: 0; text-transform: none;}
form fieldset ul.renderer-buttons {gap:0.5rem; flex-direction: row; margin: 0; flex-wrap:wrap; margin-bottom: 1rem; }
form fieldset ul.renderer-buttons li {flex-grow: 1; }
form fieldset ul.renderer-buttons li label {border:1px solid #000; padding:0.65rem 0.5rem; text-align: center; opacity:0.5; 
    transition:all 0.25s cubic-bezier(0,0.75,0.25,1); cursor: pointer; justify-content: center; width: 100%; }
form fieldset ul.renderer-buttons li:hover label {opacity:1;}
form fieldset ul.renderer-buttons li.active label {background: #000; color:#fff200; opacity:1;}
form fieldset ul.renderer-buttons input {display: none;}

form ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  opacity: 0.5; 
}.vehicle-grid .vehicles {grid-template-columns: repeat(4,1fr); grid-column-gap:1rem; grid-row-gap:1.5rem; display: grid; max-width: 100vw; margin: 1.5rem 1.5rem 4.5rem;}
.vehicle-grid .vehicle {border:1px solid rgba(128,128,128,0.1); transition: border 0.5s cubic-bezier(0,0.66,0.33,1);}
.vehicle-grid.theme-black .vehicle {border-color:rgba(128,128,128,0.4);}
.vehicle-grid .vehicle:hover {border-color:rgba(128,128,128,0.25);}
.vehicle-grid .vehicle .imagery {cursor: pointer;}
.vehicle-grid .vehicle .imagery img {width: 100%;}
.vehicle-grid .vehicle .navigation {position: absolute; bottom:0; width:100%;}
.vehicle-grid .vehicle .card__grid {height:100%; display:flex; flex-direction: column;}
.vehicle-grid .vehicle .card__grid .card__content {flex-grow:1; display:flex; flex-direction: column; gap:1rem;}

.vehicle-grid .vehicle .title {font-size:1.2rem; display: flex; gap:2rem; justify-content: space-between; align-items: center; margin-top: 0.5rem; text-transform: uppercase;}
.vehicle-grid .vehicle .location {display: flex; gap:0.5rem; font-size:0.875rem;}

.vehicle ul.specs {padding: 0; margin: 1rem 0; list-style: none; display:flex; flex-direction: row; flex-wrap: wrap; gap:1rem;}
.vehicle ul.specs li {width:40%; flex-grow: 1; }
.vehicle ul.specs li label {display: block; font-size:0.75em; text-transform: none; padding-bottom: 3px;}

.vehicle-grid .vehicle section.details {flex-grow:1;}

.vehicle-grid .vehicle .pricing {font-size:1.4rem;}
.vehicle-grid .vehicle .navigation {z-index: 2;}
.vehicle-grid .vehicle .lotus-figure .overlay::before {content:""; position: absolute; top:0; left:0; width:100%; height:100%; z-index: 2; 
    background:linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0), rgba(0,0,0,0), rgba(0,0,0,0.5)); z-index: 2; opacity: 0; transition: opacity 0.5s cubic-bezier(0,0.66,0.33,1);}
.vehicle-grid .vehicle:hover .lotus-figure .overlay::before {opacity: 1;}

.vehicle-grid .vehicle footer {display: flex; gap:1rem; justify-content: space-between; align-items: center; margin-bottom: 0.25rem;}
.vehicle-grid .vehicle footer .lotus-button {font-size: 0.875rem;}

@media screen and (min-width: 64em) {
    .vehicle-grid .vehicle .navigation {opacity: 0; transition: opacity 0.5s cubic-bezier(0,0.66,0.33,1);}
    .vehicle-grid .vehicle:hover .navigation {opacity: 1;}
}
@media screen and (max-width: 99.9375em) {
    .vehicle-grid .vehicles {grid-template-columns: repeat(3,1fr);}
}
@media screen and (max-width: 63.9375em) {
    .vehicle-grid .vehicles {grid-template-columns: repeat(2,1fr);}
}
@media screen and (max-width: 43.9375em) {
    .vehicle-grid .vehicles {margin: 0 0 2.5rem;}
    .vehicle-grid .vehicle {border:none;}
    .vehicle-grid .vehicle .card__content {padding-left: 1rem; padding-right: 1rem;}
    .vehicle-grid .vehicles {grid-template-columns: repeat(1,1fr);}
}


.vehicle-grid .grid-footer {position:fixed; bottom: 0; left:0; width:100%; display:flex; justify-content: space-between; z-index:2;
    background: rgba(0,0,0,0.75); color:#FFF; padding: 0.5rem 2rem; align-items: center; backdrop-filter:blur(16px); gap:1rem;  }
.vehicle-grid .grid-footer label {font-size: 0.675rem;}
.vehicle-grid .grid-footer i {font-size:1.6rem; cursor: pointer;}
.vehicle-grid .grid-footer .filter-by, .vehicle-grid .grid-footer .sort-by, .vehicle-grid .grid-footer .totals  {display: flex; gap:1rem; align-items: center;}
.vehicle-grid .grid-footer .filter-by span, .vehicle-grid .grid-footer .sort-by span {display: flex; flex-direction: column; font-size:0.875rem; cursor: pointer;}
.vehicle-grid .grid-footer .totals span {display: flex; gap:0.5rem; font-size: 2rem; align-items: center;}
.vehicle-grid .grid-footer .sort-by span, .vehicle-grid .grid-footer .sort-by li, .vehicle-grid .grid-footer .chip {text-transform:capitalize;}
.vehicle-grid .grid-footer .sort-by label {text-align: right;}
.vehicle-grid .grid-footer .sort-by .chips {justify-content: flex-end;}
@media screen and (max-width: 39.9375em) {
    .vehicle-grid .grid-footer  {padding: 0.5rem 1rem;}
/*    .vehicle-grid .grid-footer .chips {flex-direction: column;}*/
}

.vehicle-grid .vehicle.skeleton .imagery {aspect-ratio:1.8; animation-name: skeleton; animation-duration: 1.5s; animation-iteration-count: infinite;}
.vehicle-grid .vehicle.skeleton header {animation-name: skeleton; animation-duration: 1.5s; animation-iteration-count: infinite; width:30%; height: 24px; margin-bottom: 1rem;}
.vehicle-grid .vehicle.skeleton section {display:flex; gap:1rem;}
.vehicle-grid .vehicle.skeleton section span {animation-name: skeleton; animation-duration: 1.5s; animation-iteration-count: infinite; width:75%; height: 24px;}
.vehicle-grid .vehicle.skeleton section.tall {margin-bottom: 1rem;}
.vehicle-grid .vehicle.skeleton section.tall span {height:32px}
.vehicle-grid .vehicle.skeleton section.pricing span {width:30%;}
.vehicle-grid .vehicle.skeleton footer span.button {animation-name: skeleton; animation-duration: 1.5s; animation-iteration-count: infinite; width:50%; height: 44px;}

.vehicle-filter {display:flex; flex-direction: column; gap:0; height: 100%;}
.vehicle-filter h5 {padding: 2rem;}
.vehicle-filter .accordion {flex-grow:1; overflow-y: auto; padding: 0 2rem;}
.vehicle-filter .options {display:flex; gap:0.25rem 1rem; flex-wrap: wrap; padding:0.5rem 0 1rem; max-width: 450px;}
.vehicle-filter span.option {display:flex; gap:0.5rem; align-items: center; white-space: nowrap; flex-basis: 20%; }
.vehicle-filter span.option label {font-size:0.75rem; }
.vehicle-filter .range {display: flex; gap:1rem; margin-top: 0.5rem; align-items: center; overflow: hidden;}
.vehicle-filter .range > input, .vehicle-filter .range > select, .vehicle-filter .range > div  {flex-grow:1; flex-basis:50%;}
.vehicle-filter .range i {margin-bottom:1rem; cursor: pointer;}
.vehicle-filter .range label {font-size:0.75rem;}
.vehicle-filter .buttons {justify-content: space-between; padding-left: 2rem !important; flex-direction: row-reverse;}

#vehicle-details > .card__grid > .card__content {height:100dvh; height:calc(100dvh - 64px); display:flex; flex-direction: column;}
#vehicle-details .imagery nav {position:absolute; bottom:0; padding: 0.5rem 1rem; border-radius: 50px;
    margin: 1rem 0; transform: translateX(-50%); left:50%; }
#vehicle-details .imagery img {width:100%; display: block;}
#vehicle-details .imagery figure.lotus-figure::after {opacity: 0.1;}
@media screen and (max-width: 39.9375em) {
    #vehicle-details .cards.details {display: flex; flex-direction: column;}
}
@media screen and (max-width: 63.9375em) {
    #vehicle-details .imagery > *:nth-child(n+2) {display: none;}
}
@media screen and (min-width: 64rem) {
    #vehicle-details .imagery {display:grid; grid-template-columns:repeat(3,1fr); grid-template-rows:1fr 1fr; grid-template-areas:"i1 i1 i2" "i1 i1 i3";
        grid-column-gap:0; grid-row-gap:0;}
    #vehicle-details .imagery > *:nth-child(1) {grid-area: i1}
    #vehicle-details .imagery > *:nth-child(2) {grid-area: i2}
    #vehicle-details .imagery > *:nth-child(3) {grid-area: i3}
    #vehicle-details .imagery nav {margin:0 0;}
}

@media screen and (min-width: 64rem) {
    #vehicle-details .content {display:grid; grid-template-columns:repeat(3,1fr); grid-template-areas:"i1 i1 i2";
        grid-column-gap:0; }
    #vehicle-details .details {grid-area: i1}
    #vehicle-details .callouts {grid-area: i2}
}

#vehicle-details nav.environment {right:0; left:auto; top:0; bottom:auto; transform: none; font-size:1.25rem; color:#FFF; display: flex; gap:0.5rem; padding:1.5rem 2rem;}
#vehicle-details nav.environment i {opacity: 0.5; cursor: pointer; transition: opacity 0.5s cubic-bezier(0,0.66,0.33,1);}
#vehicle-details nav.environment i:hover {opacity:0.75;}
#vehicle-details nav.environment i.active {opacity: 1;}
@media screen and (max-width: 39.9375em) {
    #vehicle-details nav.environment {padding:0.5rem 1.5rem;}
}

/*#vehicle-details .specification {background:rgba(180,179,178,0.1); }*/
#vehicle-details ul.specs {padding: 0; margin: 2rem 0; list-style: none; display:flex; flex-direction: row; flex-wrap: wrap; gap:2rem; width: 100%;}
#vehicle-details ul.specs li {width:auto;  font-size: 1.2rem; min-width:12.5%; }
#vehicle-details ul.specs li label {display: block; font-size:0.75em; text-transform: none; padding-bottom: 3px;}

#vehicle-details .callout {font-size:0.875rem; min-height: 400px;}
#vehicle-details .callout .card__content {gap:1rem;}
@media screen and (max-width: 39.9375em) {
    #vehicle-details .callout {min-height: 300px;}
}

#vehicle-details .vaps label {font-size:1.2rem;}
#vehicle-details .vaps .lotus-button {padding-top: 0.75em; padding-bottom: 0.75em;}
#vehicle-details .vaps p {font-size:0.875rem;}
#vehicle-details #finance label {font-size:1rem; text-transform: none;}
#vehicle-details #finance .controls {margin-bottom: 2rem;}
#vehicle-details #finance .finance-product label {font-size:1.2rem;}
#vehicle-details #finance .finance-product p {font-size:0.875rem; margin-bottom: 0;}
#vehicle-details #finance .payment-options .lotus-button {padding: 0.75em 2em;}

#vehicle-details section.location {display:flex; gap:0.75rem;}

#vehicle-details .fixed-cta {background: #000; color:#FFF; padding:1rem 1.5rem 1rem 5rem; display:flex; align-items: center;
    gap:1rem; justify-content: space-between;}
#vehicle-details .fixed-cta  .lotus-button {white-space: nowrap !important;}
#vehicle-details .fixed-cta .pricing {font-size:1.6rem; display:flex; gap:2rem; flex-grow:1;}
#vehicle-details .fixed-cta .pricing .price {font-weight:200; color:#FFF200; line-height: 1;}
#vehicle-details .fixed-cta .divider {border-left: 1px solid rgba(127,127,127,0.5);}
#vehicle-details .fixed-cta .pricing .regular-payment {}
#vehicle-details .fixed-cta .pricing > span {display:flex; flex-direction: column;}
#vehicle-details .fixed-cta .pricing > span label {font-size:0.75rem; text-transform: none;}
@media screen and (max-width: 63.9375em) {
    #vehicle-details .fixed-cta {padding:1rem 1.5rem 1rem 2.5rem;}
    #vehicle-details .fixed-cta .buttons .button.type-text {padding:0.5rem;}
}
@media screen and (max-width: 750px) {
    #vehicle-details .fixed-cta .buttons {flex-direction: column-reverse; align-items: flex-end;}
}
@media screen and (max-width: 39.9375em) {
    #vehicle-details .fixed-cta {padding:1rem ;}
    #vehicle-details .fixed-cta .pricing {font-size:1.4rem; display:flex; gap:0.5rem; flex-direction: column;}
    #vehicle-details .fixed-cta.has-finance .full-price {display:none !important;}
    #vehicle-details .fixed-cta .divider {display:none !important;}
    #vehicle-details .fixed-cta .pricing > span label {font-size:0.75rem;}
}



#vehicle-details .features div {height: 100%; overflow: hidden; user-select: none;}
#vehicle-details .features .details { flex-grow:1; height: 100%; overflow: hidden; }
#vehicle-details .features .details .section__content {overflow-y:auto; }
#vehicle-details .features .details .section__content > * {width:350px; max-width:70%; }
#vehicle-details .features .navigation.type-numerals .navigation__content {padding: 0;}
@media screen and (max-width: 63.9375em) {
    #vehicle-details .features > .cards__grid {grid-column: 1 / 25 !important;}
}
@media screen and (max-width: 39.9375em) {
    #vehicle-details .features .details {padding: 1rem 0;}
    #vehicle-details .features .details .section__content > * {width:350px; max-width:100%; }
}
.form .short-details {margin-bottom: 2rem;}


.vehicle-valuation .specification {display: flex; gap:2rem;}
.vehicle-valuation .specification dt, .vehicle-valuation .specification dd {margin: 0;}
.vehicle-valuation .specification dd {font-weight: bold; margin-top: 0.25rem;}
.vehicle-valuation .question > label {font-size: 1rem; line-height: 1.5em; padding-bottom:0.5rem; display: block; text-transform: none;}
.vehicle-valuation label li {text-transform: none;}
.vehicle-valuation .question {margin-bottom: 2rem;}
.vehicle-valuation .question-select {display:flex; flex-direction: column;}
.vehicle-valuation .question-select input {margin-left: 0;}
.vehicle-valuation .question-select label {text-transform: none;}
.vehicle-valuation .question-select ul {list-style: none; margin: 0; padding:5px 5px 10px 25px; display: none;}
.vehicle-valuation .question-select .question-select-option.selected ul {display: block;}/*				HELP				*/
#help-button {position:absolute; left:0; top:0; padding:1.1rem 1.25rem 0.9rem; color:#FFF; display:flex; gap:0.75rem; align-items: center; }
#help-button i {font-size:1.6rem; }
#help-button span {font-size:0.875rem; line-height: 1em; }

#help {position:fixed; top:0; left:0; bottom:0; width:100%; z-index: 102; transform:translateX(-100%); color:#000; 
	transition: all 0.5s cubic-bezier(0,0.9,0.2,1);	background: #FFF200; pointer-events: none; display: block; }
#help .help__content {display:flex; align-items: stretch; height: 100%; }
#help .help__content > * {flex-grow:1; width:25%;}
.lotus-modal.active #help {transform: translateX(0); pointer-events: all;}
#help .faqs {display: flex; flex-direction: column; }
.lotus-modal.active #help .faqs {min-width:400px;}
#help .faqs .content {flex-grow: 1; overflow-y: auto; height: 100%;}
#help .faqs ol {list-style: none; margin: 0; padding: 0;}
#help .faqs ol.topics {margin:2rem 0;}
#help .faqs ol.topics > li {margin-bottom: 1.5rem; position: relative;}
#help .faqs ol.topics > li > a {font-size:1.6rem; font-weight: 300; }
#help .faqs ol.topics > li > .marker {position:absolute; right:100%; bottom: 100%; margin-right: 0.25rem; margin-bottom: -0.75rem; overflow: hidden;}
#help .faqs ol.topics > li > .marker i {transform: translateX(-100%) translateY(-100%); transition: all 0.5s cubic-bezier(0,0.75,0.25,1);}
#help .faqs ol.topics > li.active > .marker i {transform: translateX(0) translateY(0); }
#help .faqs ol.subtopics {margin:0.5rem 0 1rem 1.5rem;}
#help .faqs ol.subtopics > li {margin-bottom: 0.25rem;}
#help .faqs ol.subtopics > li > .marker {overflow: hidden; position: relative; margin-left: 5px; height: 20px; display: inline-block;
    vertical-align: middle; font-size:0.875rem; }
#help .faqs ol.subtopics > li > .marker i {transform: translateX(-100%); transition: all 0.5s cubic-bezier(0,0.75,0.25,1); }
#help .faqs ol.subtopics > li.active > .marker i {transform: translateX(0); }
#help .faqs a {opacity: 0; transform: translateX(-200px); }
#help .faqs .search {display:flex; background: #000; color:#FFF; padding:5px ; height: 50px; }
#help .faqs .search span {width:4rem; text-align: center; color:#FFF200; font-size:1.5rem; }
#help .faqs .search span i {padding:5px;}
#help .faqs .search input {border:none;margin: 0; color:#FFF;}
#help .faqs .search input:focus {background: transparent;}
.lotus-modal.active #help .faqs a {transform: translateX(0) !important; opacity: 1; cursor: pointer; }
#help .content {padding: 3rem; height: 100%; overflow-y: auto;}
#help .contact-chat {background:#FFF; position:relative; z-index: 1;}
#help .contact-chat hr {margin: 4rem 0;}
#help .contact {padding: 2rem 0 0;}
#help .answers {width:0; max-width: 0; transition: all 0.5s cubic-bezier(0,0.75,0.25,1); border-left:1px solid rgba(0,0,0,0); opacity: 0; background: #FFF;}
#help .answers h5 {transform:translateY(0); opacity:1; transition: all 0.5s cubic-bezier(0,0.75,0.25,1); }
#help .answers.loading h5 {transform:translateY(-50%); opacity:0; transition: none; }
#help .answers .content {padding-right: 0; padding-bottom: 0; display: flex; flex-direction: column; height: 100%; }
#help .answers.active {width:75%; max-width: 100%; opacity: 1;}
#help .answers ol.questions {margin: 1rem 0; padding:2rem 4rem 2rem 0; list-style: none; overflow-y: auto; flex-grow: 1; height: 50%;}
#help .answers li.question-answer {padding: 2rem 0; transform:translateX(100px); border-bottom:2px solid #000;  }
#help .answers li.question-answer:last-child {border-bottom:none;  }
#help .answers.loading li.question-answer {transform:translateX(100px); opacity: 0;  }
#help .answers:not(.loading) li.question-answer {transform:translateX(0); transition: all 0.5s cubic-bezier(0,0.75,0.25,1); opacity:1;}
#help .answers li.question-answer label {font-size:0.75rem;}
#help .answers li.question-answer a.question {font-weight:700; display:flex; justify-content: space-between; cursor: pointer; align-items: flex-start;
    gap:1rem;}
#help .answers li.question-answer a.question i {font-size:1.2rem; transition: all 0.5s cubic-bezier(0,0.75,0.25,1);  }
#help .answers li.question-answer.active a.question i {transform: rotate(180deg); }
#help .answers li.question-answer p.answer { margin: 1rem 0; line-height: 1.4em;}
#help .answers li.question-answer p.answer a {font-weight: bold;}
#help.show-chat .faqs {height: 0; flex-grow:0;}
@media screen and (max-width: 63.9375em) {
    #help-button { padding:0.75rem 1.25rem 0.75rem;}
    #help .help__content {flex-direction:column; height:100%; transition: all 0.5s cubic-bezier(0,0.75,0.25,1);}
    #help.show-faqs .help__content {transform: translateX(-100%);}
    #help .content {padding: 2rem;}
    #help .faqs, #help .contact-chat {width:100%;}
    #help .faqs {order:2; flex-grow:2; height: 50%;}
    #help .faqs ol.topics > li {margin-bottom: 0.5rem;}
    #help .answers {width:100% !important; max-width: 100%; position: absolute; left: 100%; top:0; height: 100%; width: 100%; }
    #help .answers ol.questions {padding-right: 2rem; margin: 2rem 0;}
    #help .contact-chat .content {padding-bottom: 2rem;}
    #help .contact-chat .chat {max-height:0; overflow: hidden; flex-grow: 1;}
    #help.show-chat .contact-chat .chat {max-height:none; overflow: visible; flex-grow: 1;}
}




/*		ACCESSIBE		*/
body .acsb-trigger {z-index:10 !important;}
body .acsb-trigger-icon path, body .acsb-trigger-icon circle {fill:#000 !important;}
body .acsb-trigger .acsb-trigger-icon svg path, 
    body .acsb-trigger .acsb-trigger-icon svg g, 
    body .acsb-trigger .acsb-trigger-icon svg circle, 
    body .acsb-trigger .acsb-trigger-icon svg rect, 
    body .acsb-trigger .acsb-trigger-icon img path, 
    body .acsb-trigger .acsb-trigger-icon img g, 
    body .acsb-trigger .acsb-trigger-icon img circle, 
    body .acsb-trigger .acsb-trigger-icon img rect, 
    body .acsb-trigger .acsb-trigger-icon .acsb-entity path, 
    body .acsb-trigger .acsb-trigger-icon .acsb-entity g, 
    body .acsb-trigger .acsb-trigger-icon .acsb-entity circle, 
    body .acsb-trigger .acsb-trigger-icon .acsb-entity rect
            {fill:#4F4F4F !important;}

body .acsb-widget .acsb-popup.acsb-language-popup .acsb-languages .acsb-language .acsb-language-flag,
    body .acsb-widget .acsb-main .acsb-header .acsb-language .acsb-language-flag
    {display:none !important;}
body .acsb-widget .acsb-popup.acsb-language-popup .acsb-languages .acsb-language 
    {justify-content: flex-start;}
body .acsb-widget .acsb-popup.acsb-language-popup .acsb-languages .acsb-language:nth-child(8) {display: none !important;}



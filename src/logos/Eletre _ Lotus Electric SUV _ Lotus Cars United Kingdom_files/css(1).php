body .s-overall-settings {background:#000;}

.secondary-nav {position:absolute; top:62px; padding:8px 65px; display: flex; justify-content: space-between;
    width:100%; border-top:1px solid #757575;  transition: all .6s cubic-bezier(0,0,.4,.2);}
.secondary-nav a {pointer-events: all;}
.secondary-nav .buttons {align-items: stretch; font-size:0.875rem;}
.c-header.theme-black .secondary-nav {background: #000;}

@media screen and (min-width:1000px) {
    .secondary-nav .activator {display:none;}
}
@media screen and (max-width: 999px) {
    .secondary-nav {top:50px; padding:8px 2rem;}
    .secondary-nav .buttons.context {position:absolute; top:100%; left:2rem; flex-direction: column; gap:0; visibility: hidden;}
    .secondary-nav .buttons.context.active {visibility: visible;}
}


.padding-x {padding-left:2rem; padding-right: 2rem;}
.padding-y {padding-top:2rem; padding-bottom: 2rem;}
@media screen and (min-width: 40em) {
    .padding-x {padding-left:3rem; padding-right: 3rem;}
    .padding-y {padding-top:3rem; padding-bottom: 3rem;}
}
@media screen and (min-width: 62em) {
    .padding-x {padding-left:4rem; padding-right: 4rem;}
    .padding-y {padding-top:4rem; padding-bottom: 4rem;}
}


#power {min-height:100vh;}
#power .power__content {width: 100%;}
#power .figures {width:100%; }
#power .figures__content {display: flex; justify-content: center; gap:2rem;}
#power .figures .figure {display:flex; align-items: flex-end; justify-content: flex-end; font-weight: 200; }
#power .figures .figure .countto__content {}
#power .figures .value {font-size:6rem; }
#power .figures label {font-size:0.65rem;}
#power .figures small {display: block; color:#AAA; margin-top: 1rem; font-size:0.875rem;}
@media screen and (max-width: 39.9375em) {
    #power .figures .value {font-size:4rem;}
    #power .figures__content {flex-direction: column; gap:2rem; margin-bottom:2rem;}
    #power .figures .figure {justify-content: flex-start;}
}




#variants {padding-bottom: 6rem;}
#variants .emira-side {width:60vw; }
#variants .lotus-figure {}
#variants .specs {display:flex; gap:2rem; padding: 2rem; }
#variants .specs .variant {border:1px solid rgba(0,0,0,0.1); width:33%;}
#variants .specs .variant .title-pricing {display:flex; padding: 2rem; gap:1rem; justify-content: space-between; align-items: center; }
#variants .specs .variant .title-pricing h5 {}
#variants .specs .variant .title-pricing .price {font-size:1.2rem; display: flex; flex-direction: column; align-items: flex-end;}
#variants .specs .variant .title-pricing span.from {font-size:0.65rem; text-transform: uppercase;}
#variants .specs .variant .stats {display:flex; gap:2rem; padding:1.5rem 2rem; list-style: none; margin: 0; background: #f2f1f0; 
    justify-content: space-around; text-align: center;}
#variants .specs .variant .stats .value {font-size:2.4rem; line-height: 1em; font-weight: 200;}
#variants .specs .variant .stats label {font-size:0.675rem; line-height: 1em;}
#variants .specs .variant .copy {padding: 2rem 2rem 0; width:100%;}
#variants .specs .variant .accordion {padding:0 2rem;}
#variants .specs .variant .accordion .section {border-bottom:1px solid rgba(0,0,0,0.1);}
#variants .specs .variant .accordion .section label {padding: 0.5rem 0; display: flex; justify-content: space-between; cursor: pointer;}
#variants .specs .variant .accordion .section label i {transition:transform 0.5s cubic-bezier(0,0.66,0.33,1);}
#variants .specs .variant .accordion .section label i.active {transform:rotate(180deg);}
#variants .specs .variant .buttons {margin:1rem 2rem;}
#variants .specs .section ol {list-style: none; font-size:0.875rem; padding: 0; margin: 0.5rem 0 2rem 0; display:flex; flex-direction:column; gap:0.5rem;}
#variants .specs .section ol li {display: flex; gap:1rem; justify-content: space-between;}
@media screen and (max-width: 63.9375em) {
    #variants {padding-bottom: 3rem;}
    #variants .specs {flex-direction: column; }
    #variants .specs .variant {width:100%;}
    #variants .specs .variant .title-pricing h5 {font-size:2rem;}
}
@media screen and (max-width: 39.9375em) {
    #variants .specs {padding:1rem;}
    #variants .specs .variant .title-pricing {padding:1.5rem 1rem;}
    #variants .specs .variant .title-pricing h5 {font-size:1.6rem;}
    #variants .specs .variant .buttons {margin:1rem;}
    #variants .specs .variant .stats {padding:1.5rem 1rem; gap:1rem;}
    #variants .specs .variant .stats .value {font-size:1.8rem;}
    #variants .specs .variant .copy {padding:1rem 1rem 0;}
    #variants .specs .variant .accordion {padding:0 1rem;}
}


#cta .buttons {margin-bottom: 1rem;}

#disclaimer {font-size: 0.875rem; position: relative; z-index: 2; background: rgba(0,0,0,0.5); backdrop-filter: blur(5px);
    padding-top:8rem !important; padding-bottom: 8rem !important;}

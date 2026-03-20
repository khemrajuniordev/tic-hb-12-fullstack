import{A as e,D as t,E as n,F as r,O as i,P as a,V as o,c as s,g as c,h as l,it as u,k as d,l as f,m as p,nt as m,o as h,r as g,rt as _,s as v,tt as y,u as b,v as x,w as S,x as C}from"./runtime-core.esm-bundler-BqnNe3jF.js";import{F as w,X as T,ft as E,gt as D,i as O,nt as k,pt as A,rt as j,z as M}from"./basedirective-BtgFAgxi.js";import{a as N,o as P,t as F}from"./button-v8-Cfo-i.js";import{c as I,s as L,u as ee}from"./index-BGWw4qDw.js";import{n as te,r as R,t as z}from"./angleright-pAvpiBjU.js";var B=O.extend({name:`menubar`,style:`
    .p-menubar {
        display: flex;
        align-items: center;
        background: dt('menubar.background');
        border: 1px solid dt('menubar.border.color');
        border-radius: dt('menubar.border.radius');
        color: dt('menubar.color');
        padding: dt('menubar.padding');
        gap: dt('menubar.gap');
    }

    .p-menubar-start,
    .p-megamenu-end {
        display: flex;
        align-items: center;
    }

    .p-menubar-root-list,
    .p-menubar-submenu {
        display: flex;
        margin: 0;
        padding: 0;
        list-style: none;
        outline: 0 none;
    }

    .p-menubar-root-list {
        align-items: center;
        flex-wrap: wrap;
        gap: dt('menubar.gap');
    }

    .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content {
        border-radius: dt('menubar.base.item.border.radius');
    }

    .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content > .p-menubar-item-link {
        padding: dt('menubar.base.item.padding');
    }

    .p-menubar-item-content {
        transition:
            background dt('menubar.transition.duration'),
            color dt('menubar.transition.duration');
        border-radius: dt('menubar.item.border.radius');
        color: dt('menubar.item.color');
    }

    .p-menubar-item-link {
        cursor: pointer;
        display: flex;
        align-items: center;
        text-decoration: none;
        overflow: hidden;
        position: relative;
        color: inherit;
        padding: dt('menubar.item.padding');
        gap: dt('menubar.item.gap');
        user-select: none;
        outline: 0 none;
    }

    .p-menubar-item-label {
        line-height: 1;
    }

    .p-menubar-item-icon {
        color: dt('menubar.item.icon.color');
    }

    .p-menubar-submenu-icon {
        color: dt('menubar.submenu.icon.color');
        margin-left: auto;
        font-size: dt('menubar.submenu.icon.size');
        width: dt('menubar.submenu.icon.size');
        height: dt('menubar.submenu.icon.size');
    }

    .p-menubar-submenu .p-menubar-submenu-icon:dir(rtl) {
        margin-left: 0;
        margin-right: auto;
    }

    .p-menubar-item.p-focus > .p-menubar-item-content {
        color: dt('menubar.item.focus.color');
        background: dt('menubar.item.focus.background');
    }

    .p-menubar-item.p-focus > .p-menubar-item-content .p-menubar-item-icon {
        color: dt('menubar.item.icon.focus.color');
    }

    .p-menubar-item.p-focus > .p-menubar-item-content .p-menubar-submenu-icon {
        color: dt('menubar.submenu.icon.focus.color');
    }

    .p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover {
        color: dt('menubar.item.focus.color');
        background: dt('menubar.item.focus.background');
    }

    .p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover .p-menubar-item-icon {
        color: dt('menubar.item.icon.focus.color');
    }

    .p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover .p-menubar-submenu-icon {
        color: dt('menubar.submenu.icon.focus.color');
    }

    .p-menubar-item-active > .p-menubar-item-content {
        color: dt('menubar.item.active.color');
        background: dt('menubar.item.active.background');
    }

    .p-menubar-item-active > .p-menubar-item-content .p-menubar-item-icon {
        color: dt('menubar.item.icon.active.color');
    }

    .p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {
        color: dt('menubar.submenu.icon.active.color');
    }

    .p-menubar-submenu {
        display: none;
        position: absolute;
        min-width: 12.5rem;
        z-index: 1;
        background: dt('menubar.submenu.background');
        border: 1px solid dt('menubar.submenu.border.color');
        border-radius: dt('menubar.submenu.border.radius');
        box-shadow: dt('menubar.submenu.shadow');
        color: dt('menubar.submenu.color');
        flex-direction: column;
        padding: dt('menubar.submenu.padding');
        gap: dt('menubar.submenu.gap');
    }

    .p-menubar-submenu .p-menubar-separator {
        border-block-start: 1px solid dt('menubar.separator.border.color');
    }

    .p-menubar-submenu .p-menubar-item {
        position: relative;
    }

    .p-menubar-submenu > .p-menubar-item-active > .p-menubar-submenu {
        display: block;
        left: 100%;
        top: 0;
    }

    .p-menubar-end {
        margin-left: auto;
        align-self: center;
    }

    .p-menubar-end:dir(rtl) {
        margin-left: 0;
        margin-right: auto;
    }

    .p-menubar-button {
        display: none;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        width: dt('menubar.mobile.button.size');
        height: dt('menubar.mobile.button.size');
        position: relative;
        color: dt('menubar.mobile.button.color');
        border: 0 none;
        background: transparent;
        border-radius: dt('menubar.mobile.button.border.radius');
        transition:
            background dt('menubar.transition.duration'),
            color dt('menubar.transition.duration'),
            outline-color dt('menubar.transition.duration');
        outline-color: transparent;
    }

    .p-menubar-button:hover {
        color: dt('menubar.mobile.button.hover.color');
        background: dt('menubar.mobile.button.hover.background');
    }

    .p-menubar-button:focus-visible {
        box-shadow: dt('menubar.mobile.button.focus.ring.shadow');
        outline: dt('menubar.mobile.button.focus.ring.width') dt('menubar.mobile.button.focus.ring.style') dt('menubar.mobile.button.focus.ring.color');
        outline-offset: dt('menubar.mobile.button.focus.ring.offset');
    }

    .p-menubar-mobile {
        position: relative;
    }

    .p-menubar-mobile .p-menubar-button {
        display: flex;
    }

    .p-menubar-mobile .p-menubar-root-list {
        position: absolute;
        display: none;
        width: 100%;
        flex-direction: column;
        top: 100%;
        left: 0;
        z-index: 1;
        padding: dt('menubar.submenu.padding');
        background: dt('menubar.submenu.background');
        border: 1px solid dt('menubar.submenu.border.color');
        box-shadow: dt('menubar.submenu.shadow');
        border-radius: dt('menubar.submenu.border.radius');
        gap: dt('menubar.submenu.gap');
    }

    .p-menubar-mobile .p-menubar-root-list:dir(rtl) {
        left: auto;
        right: 0;
    }

    .p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content > .p-menubar-item-link {
        padding: dt('menubar.item.padding');
    }

    .p-menubar-mobile-active .p-menubar-root-list {
        display: flex;
    }

    .p-menubar-mobile .p-menubar-root-list .p-menubar-item {
        width: 100%;
        position: static;
    }

    .p-menubar-mobile .p-menubar-root-list .p-menubar-separator {
        border-block-start: 1px solid dt('menubar.separator.border.color');
    }

    .p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content .p-menubar-submenu-icon {
        margin-left: auto;
        transition: transform 0.2s;
    }

    .p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content .p-menubar-submenu-icon:dir(rtl),
    .p-menubar-mobile .p-menubar-submenu-icon:dir(rtl) {
        margin-left: 0;
        margin-right: auto;
    }

    .p-menubar-mobile .p-menubar-root-list > .p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {
        transform: rotate(-180deg);
    }

    .p-menubar-mobile .p-menubar-submenu .p-menubar-submenu-icon {
        transition: transform 0.2s;
        transform: rotate(90deg);
    }

    .p-menubar-mobile .p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {
        transform: rotate(-90deg);
    }

    .p-menubar-mobile .p-menubar-submenu {
        width: 100%;
        position: static;
        box-shadow: none;
        border: 0 none;
        padding-inline-start: dt('menubar.submenu.mobile.indent');
        padding-inline-end: 0;
    }
`,classes:{root:function(e){var t=e.instance;return[`p-menubar p-component`,{"p-menubar-mobile":t.queryMatches,"p-menubar-mobile-active":t.mobileActive}]},start:`p-menubar-start`,button:`p-menubar-button`,rootList:`p-menubar-root-list`,item:function(e){var t=e.instance,n=e.processedItem;return[`p-menubar-item`,{"p-menubar-item-active":t.isItemActive(n),"p-focus":t.isItemFocused(n),"p-disabled":t.isItemDisabled(n)}]},itemContent:`p-menubar-item-content`,itemLink:`p-menubar-item-link`,itemIcon:`p-menubar-item-icon`,itemLabel:`p-menubar-item-label`,submenuIcon:`p-menubar-submenu-icon`,submenu:`p-menubar-submenu`,separator:`p-menubar-separator`,end:`p-menubar-end`},inlineStyles:{submenu:function(e){var t=e.instance,n=e.processedItem;return{display:t.isItemActive(n)?`flex`:`none`}}}}),V={name:`BaseMenubar`,extends:P,props:{model:{type:Array,default:null},buttonProps:{type:null,default:null},breakpoint:{type:String,default:`960px`},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:B,provide:function(){return{$pcMenubar:this,$parentInstance:this}}},H={name:`MenubarSub`,hostName:`Menubar`,extends:P,emits:[`item-mouseenter`,`item-click`,`item-mousemove`],props:{items:{type:Array,default:null},root:{type:Boolean,default:!1},popup:{type:Boolean,default:!1},mobileActive:{type:Boolean,default:!1},templates:{type:Object,default:null},level:{type:Number,default:0},menuId:{type:String,default:null},focusedItemId:{type:String,default:null},activeItemPath:{type:Object,default:null}},list:null,methods:{getItemId:function(e){return`${this.menuId}_${e.key}`},getItemKey:function(e){return this.getItemId(e)},getItemProp:function(e,t,n){return e&&e.item?A(e.item[t],n):void 0},getItemLabel:function(e){return this.getItemProp(e,`label`)},getItemLabelId:function(e){return`${this.menuId}_${e.key}_label`},getPTOptions:function(e,t,n){return this.ptm(n,{context:{item:e.item,index:t,active:this.isItemActive(e),focused:this.isItemFocused(e),disabled:this.isItemDisabled(e),level:this.level}})},isItemActive:function(e){return this.activeItemPath.some(function(t){return t.key===e.key})},isItemVisible:function(e){return this.getItemProp(e,`visible`)!==!1},isItemDisabled:function(e){return this.getItemProp(e,`disabled`)},isItemFocused:function(e){return this.focusedItemId===this.getItemId(e)},isItemGroup:function(e){return D(e.items)},onItemClick:function(e,t){this.getItemProp(t,`command`,{originalEvent:e,item:t.item}),this.$emit(`item-click`,{originalEvent:e,processedItem:t,isFocus:!0})},onItemMouseEnter:function(e,t){this.$emit(`item-mouseenter`,{originalEvent:e,processedItem:t})},onItemMouseMove:function(e,t){this.$emit(`item-mousemove`,{originalEvent:e,processedItem:t})},getAriaPosInset:function(e){return e-this.calculateAriaSetSize.slice(0,e).length+1},getMenuItemProps:function(e,t){return{action:C({class:this.cx(`itemLink`),tabindex:-1},this.getPTOptions(e,t,`itemLink`)),icon:C({class:[this.cx(`itemIcon`),this.getItemProp(e,`icon`)]},this.getPTOptions(e,t,`itemIcon`)),label:C({class:this.cx(`itemLabel`)},this.getPTOptions(e,t,`itemLabel`)),submenuicon:C({class:this.cx(`submenuIcon`)},this.getPTOptions(e,t,`submenuIcon`))}}},computed:{calculateAriaSetSize:function(){var e=this;return this.items.filter(function(t){return e.isItemVisible(t)&&e.getItemProp(t,`separator`)})},getAriaSetSize:function(){var e=this;return this.items.filter(function(t){return e.isItemVisible(t)&&!e.getItemProp(t,`separator`)}).length}},components:{AngleRightIcon:z,AngleDownIcon:te},directives:{ripple:N}},U=[`id`,`aria-label`,`aria-disabled`,`aria-expanded`,`aria-haspopup`,`aria-setsize`,`aria-posinset`,`data-p-active`,`data-p-focused`,`data-p-disabled`],W=[`onClick`,`onMouseenter`,`onMousemove`],G=[`href`,`target`],K=[`id`],q=[`id`];function J(t,a,o,c,l,p){var m=i(`MenubarSub`,!0),h=d(`ripple`);return S(),b(`ul`,C({class:o.level===0?t.cx(`rootList`):t.cx(`submenu`)},o.level===0?t.ptm(`rootList`):t.ptm(`submenu`)),[(S(!0),b(g,null,n(o.items,function(n,i){return S(),b(g,{key:p.getItemKey(n)},[p.isItemVisible(n)&&!p.getItemProp(n,`separator`)?(S(),b(`li`,C({key:0,id:p.getItemId(n),style:p.getItemProp(n,`style`),class:[t.cx(`item`,{processedItem:n}),p.getItemProp(n,`class`)],role:`menuitem`,"aria-label":p.getItemLabel(n),"aria-disabled":p.isItemDisabled(n)||void 0,"aria-expanded":p.isItemGroup(n)?p.isItemActive(n):void 0,"aria-haspopup":p.isItemGroup(n)&&!p.getItemProp(n,`to`)?`menu`:void 0,"aria-setsize":p.getAriaSetSize,"aria-posinset":p.getAriaPosInset(i)},{ref_for:!0},p.getPTOptions(n,i,`item`),{"data-p-active":p.isItemActive(n),"data-p-focused":p.isItemFocused(n),"data-p-disabled":p.isItemDisabled(n)}),[v(`div`,C({class:t.cx(`itemContent`),onClick:function(e){return p.onItemClick(e,n)},onMouseenter:function(e){return p.onItemMouseEnter(e,n)},onMousemove:function(e){return p.onItemMouseMove(e,n)}},{ref_for:!0},p.getPTOptions(n,i,`itemContent`)),[o.templates.item?(S(),s(e(o.templates.item),{key:1,item:n.item,root:o.root,hasSubmenu:p.getItemProp(n,`items`),label:p.getItemLabel(n),props:p.getMenuItemProps(n,i)},null,8,[`item`,`root`,`hasSubmenu`,`label`,`props`])):r((S(),b(`a`,C({key:0,href:p.getItemProp(n,`url`),class:t.cx(`itemLink`),target:p.getItemProp(n,`target`),tabindex:`-1`},{ref_for:!0},p.getPTOptions(n,i,`itemLink`)),[o.templates.itemicon?(S(),s(e(o.templates.itemicon),{key:0,item:n.item,class:y(t.cx(`itemIcon`))},null,8,[`item`,`class`])):p.getItemProp(n,`icon`)?(S(),b(`span`,C({key:1,class:[t.cx(`itemIcon`),p.getItemProp(n,`icon`)]},{ref_for:!0},p.getPTOptions(n,i,`itemIcon`)),null,16)):f(``,!0),v(`span`,C({id:p.getItemLabelId(n),class:t.cx(`itemLabel`)},{ref_for:!0},p.getPTOptions(n,i,`itemLabel`)),u(p.getItemLabel(n)),17,K),p.getItemProp(n,`items`)?(S(),b(g,{key:2},[o.templates.submenuicon?(S(),s(e(o.templates.submenuicon),{key:0,root:o.root,active:p.isItemActive(n),class:y(t.cx(`submenuIcon`))},null,8,[`root`,`active`,`class`])):(S(),s(e(o.root?`AngleDownIcon`:`AngleRightIcon`),C({key:1,class:t.cx(`submenuIcon`)},{ref_for:!0},p.getPTOptions(n,i,`submenuIcon`)),null,16,[`class`]))],64)):f(``,!0)],16,G)),[[h]])],16,W),p.isItemVisible(n)&&p.isItemGroup(n)?(S(),s(m,{key:0,id:p.getItemId(n)+`_list`,menuId:o.menuId,role:`menu`,style:_(t.sx(`submenu`,!0,{processedItem:n})),focusedItemId:o.focusedItemId,items:n.items,mobileActive:o.mobileActive,activeItemPath:o.activeItemPath,templates:o.templates,level:o.level+1,"aria-labelledby":p.getItemLabelId(n),pt:t.pt,unstyled:t.unstyled,onItemClick:a[0]||=function(e){return t.$emit(`item-click`,e)},onItemMouseenter:a[1]||=function(e){return t.$emit(`item-mouseenter`,e)},onItemMousemove:a[2]||=function(e){return t.$emit(`item-mousemove`,e)}},null,8,[`id`,`menuId`,`style`,`focusedItemId`,`items`,`mobileActive`,`activeItemPath`,`templates`,`level`,`aria-labelledby`,`pt`,`unstyled`])):f(``,!0)],16,U)):f(``,!0),p.isItemVisible(n)&&p.getItemProp(n,`separator`)?(S(),b(`li`,C({key:1,id:p.getItemId(n),class:[t.cx(`separator`),p.getItemProp(n,`class`)],style:p.getItemProp(n,`style`),role:`separator`},{ref_for:!0},t.ptm(`separator`)),null,16,q)):f(``,!0)],64)}),128))],16)}H.render=J;var Y={name:`Menubar`,extends:V,inheritAttrs:!1,emits:[`focus`,`blur`],matchMediaListener:null,data:function(){return{mobileActive:!1,focused:!1,focusedItemInfo:{index:-1,level:0,parentKey:``},activeItemPath:[],dirty:!1,query:null,queryMatches:!1}},watch:{activeItemPath:function(e){D(e)?(this.bindOutsideClickListener(),this.bindResizeListener()):(this.unbindOutsideClickListener(),this.unbindResizeListener())}},outsideClickListener:null,container:null,menubar:null,mounted:function(){this.bindMatchMediaListener()},beforeUnmount:function(){this.mobileActive=!1,this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindMatchMediaListener(),this.container&&L.clear(this.container),this.container=null},methods:{getItemProp:function(e,t){return e?A(e[t]):void 0},getItemLabel:function(e){return this.getItemProp(e,`label`)},isItemDisabled:function(e){return this.getItemProp(e,`disabled`)},isItemVisible:function(e){return this.getItemProp(e,`visible`)!==!1},isItemGroup:function(e){return D(this.getItemProp(e,`items`))},isItemSeparator:function(e){return this.getItemProp(e,`separator`)},getProccessedItemLabel:function(e){return e?this.getItemLabel(e.item):void 0},isProccessedItemGroup:function(e){return e&&D(e.items)},toggle:function(e){var t=this;this.mobileActive?(this.mobileActive=!1,L.clear(this.menubar),this.hide()):(this.mobileActive=!0,L.set(`menu`,this.menubar,this.$primevue.config.zIndex.menu),setTimeout(function(){t.show()},1)),this.bindOutsideClickListener(),e.preventDefault()},show:function(){M(this.menubar)},hide:function(e,t){var n=this;this.mobileActive&&(this.mobileActive=!1,setTimeout(function(){M(n.$refs.menubutton)},0)),this.activeItemPath=[],this.focusedItemInfo={index:-1,level:0,parentKey:``},t&&M(this.menubar),this.dirty=!1},onFocus:function(e){this.focused=!0,this.focusedItemInfo=this.focusedItemInfo.index===-1?{index:this.findFirstFocusedItemIndex(),level:0,parentKey:``}:this.focusedItemInfo,this.$emit(`focus`,e)},onBlur:function(e){this.focused=!1,this.focusedItemInfo={index:-1,level:0,parentKey:``},this.searchValue=``,this.dirty=!1,this.$emit(`blur`,e)},onKeyDown:function(e){var t=e.metaKey||e.ctrlKey;switch(e.code){case`ArrowDown`:this.onArrowDownKey(e);break;case`ArrowUp`:this.onArrowUpKey(e);break;case`ArrowLeft`:this.onArrowLeftKey(e);break;case`ArrowRight`:this.onArrowRightKey(e);break;case`Home`:this.onHomeKey(e);break;case`End`:this.onEndKey(e);break;case`Space`:this.onSpaceKey(e);break;case`Enter`:case`NumpadEnter`:this.onEnterKey(e);break;case`Escape`:this.onEscapeKey(e);break;case`Tab`:this.onTabKey(e);break;case`PageDown`:case`PageUp`:case`Backspace`:case`ShiftLeft`:case`ShiftRight`:break;default:!t&&k(e.key)&&this.searchItems(e,e.key);break}},onItemChange:function(e,t){var n=e.processedItem,r=e.isFocus;if(!E(n)){var i=n.index,a=n.key,o=n.level,s=n.parentKey,c=n.items,l=D(c),u=this.activeItemPath.filter(function(e){return e.parentKey!==s&&e.parentKey!==a});l&&u.push(n),this.focusedItemInfo={index:i,level:o,parentKey:s},l&&(this.dirty=!0),r&&M(this.menubar),!(t===`hover`&&this.queryMatches)&&(this.activeItemPath=u)}},onItemClick:function(e){var t=e.originalEvent,n=e.processedItem,r=this.isProccessedItemGroup(n),i=E(n.parent);if(this.isSelected(n)){var a=n.index,o=n.key,s=n.level,c=n.parentKey;this.activeItemPath=this.activeItemPath.filter(function(e){return o!==e.key&&o.startsWith(e.key)}),this.focusedItemInfo={index:a,level:s,parentKey:c},this.dirty=!i,M(this.menubar)}else if(r)this.onItemChange(e);else{var l=i?n:this.activeItemPath.find(function(e){return e.parentKey===``});this.hide(t),this.changeFocusedItemIndex(t,l?l.index:-1),this.mobileActive=!1,M(this.menubar)}},onItemMouseEnter:function(e){this.dirty&&this.onItemChange(e,`hover`)},onItemMouseMove:function(e){this.focused&&this.changeFocusedItemIndex(e,e.processedItem.index)},menuButtonClick:function(e){this.toggle(e)},menuButtonKeydown:function(e){(e.code===`Enter`||e.code===`NumpadEnter`||e.code===`Space`)&&this.menuButtonClick(e)},onArrowDownKey:function(e){var t=this.visibleItems[this.focusedItemInfo.index];if(t&&E(t.parent))this.isProccessedItemGroup(t)&&(this.onItemChange({originalEvent:e,processedItem:t}),this.focusedItemInfo={index:-1,parentKey:t.key},this.onArrowRightKey(e));else{var n=this.focusedItemInfo.index===-1?this.findFirstFocusedItemIndex():this.findNextItemIndex(this.focusedItemInfo.index);this.changeFocusedItemIndex(e,n)}e.preventDefault()},onArrowUpKey:function(e){var t=this,n=this.visibleItems[this.focusedItemInfo.index];if(E(n.parent)){if(this.isProccessedItemGroup(n)){this.onItemChange({originalEvent:e,processedItem:n}),this.focusedItemInfo={index:-1,parentKey:n.key};var r=this.findLastItemIndex();this.changeFocusedItemIndex(e,r)}}else{var i=this.activeItemPath.find(function(e){return e.key===n.parentKey});if(this.focusedItemInfo.index===0)this.focusedItemInfo={index:-1,parentKey:i?i.parentKey:``},this.searchValue=``,this.onArrowLeftKey(e),this.activeItemPath=this.activeItemPath.filter(function(e){return e.parentKey!==t.focusedItemInfo.parentKey});else{var a=this.focusedItemInfo.index===-1?this.findLastFocusedItemIndex():this.findPrevItemIndex(this.focusedItemInfo.index);this.changeFocusedItemIndex(e,a)}}e.preventDefault()},onArrowLeftKey:function(e){var t=this,n=this.visibleItems[this.focusedItemInfo.index],r=n?this.activeItemPath.find(function(e){return e.key===n.parentKey}):null;if(r)this.onItemChange({originalEvent:e,processedItem:r}),this.activeItemPath=this.activeItemPath.filter(function(e){return e.parentKey!==t.focusedItemInfo.parentKey}),e.preventDefault();else{var i=this.focusedItemInfo.index===-1?this.findLastFocusedItemIndex():this.findPrevItemIndex(this.focusedItemInfo.index);this.changeFocusedItemIndex(e,i),e.preventDefault()}},onArrowRightKey:function(e){var t=this.visibleItems[this.focusedItemInfo.index];if(t&&this.activeItemPath.find(function(e){return e.key===t.parentKey}))this.isProccessedItemGroup(t)&&(this.onItemChange({originalEvent:e,processedItem:t}),this.focusedItemInfo={index:-1,parentKey:t.key},this.onArrowDownKey(e));else{var n=this.focusedItemInfo.index===-1?this.findFirstFocusedItemIndex():this.findNextItemIndex(this.focusedItemInfo.index);this.changeFocusedItemIndex(e,n),e.preventDefault()}},onHomeKey:function(e){this.changeFocusedItemIndex(e,this.findFirstItemIndex()),e.preventDefault()},onEndKey:function(e){this.changeFocusedItemIndex(e,this.findLastItemIndex()),e.preventDefault()},onEnterKey:function(e){if(this.focusedItemInfo.index!==-1){var t=T(this.menubar,`li[id="${`${this.focusedItemId}`}"]`),n=t&&T(t,`a[data-pc-section="itemlink"]`);n?n.click():t&&t.click();var r=this.visibleItems[this.focusedItemInfo.index];!this.isProccessedItemGroup(r)&&(this.focusedItemInfo.index=this.findFirstFocusedItemIndex())}e.preventDefault()},onSpaceKey:function(e){this.onEnterKey(e)},onEscapeKey:function(e){if(this.focusedItemInfo.level!==0){var t=this.focusedItemInfo;this.hide(e,!1),this.focusedItemInfo={index:Number(t.parentKey.split(`_`)[0]),level:0,parentKey:``}}e.preventDefault()},onTabKey:function(e){if(this.focusedItemInfo.index!==-1){var t=this.visibleItems[this.focusedItemInfo.index];!this.isProccessedItemGroup(t)&&this.onItemChange({originalEvent:e,processedItem:t})}this.hide()},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(t){var n=e.container&&!e.container.contains(t.target),r=!(e.target&&(e.target===t.target||e.target.contains(t.target)));n&&r&&e.hide()},document.addEventListener(`click`,this.outsideClickListener,!0))},unbindOutsideClickListener:function(){this.outsideClickListener&&=(document.removeEventListener(`click`,this.outsideClickListener,!0),null)},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(t){w()||e.hide(t,!0),e.mobileActive=!1},window.addEventListener(`resize`,this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&=(window.removeEventListener(`resize`,this.resizeListener),null)},bindMatchMediaListener:function(){var e=this;if(!this.matchMediaListener){var t=matchMedia(`(max-width: ${this.breakpoint})`);this.query=t,this.queryMatches=t.matches,this.matchMediaListener=function(){e.queryMatches=t.matches,e.mobileActive=!1},this.query.addEventListener(`change`,this.matchMediaListener)}},unbindMatchMediaListener:function(){this.matchMediaListener&&=(this.query.removeEventListener(`change`,this.matchMediaListener),null)},isItemMatched:function(e){return this.isValidItem(e)&&this.getProccessedItemLabel(e)?.toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase())},isValidItem:function(e){return!!e&&!this.isItemDisabled(e.item)&&!this.isItemSeparator(e.item)&&this.isItemVisible(e.item)},isValidSelectedItem:function(e){return this.isValidItem(e)&&this.isSelected(e)},isSelected:function(e){return this.activeItemPath.some(function(t){return t.key===e.key})},findFirstItemIndex:function(){var e=this;return this.visibleItems.findIndex(function(t){return e.isValidItem(t)})},findLastItemIndex:function(){var e=this;return j(this.visibleItems,function(t){return e.isValidItem(t)})},findNextItemIndex:function(e){var t=this,n=e<this.visibleItems.length-1?this.visibleItems.slice(e+1).findIndex(function(e){return t.isValidItem(e)}):-1;return n>-1?n+e+1:e},findPrevItemIndex:function(e){var t=this,n=e>0?j(this.visibleItems.slice(0,e),function(e){return t.isValidItem(e)}):-1;return n>-1?n:e},findSelectedItemIndex:function(){var e=this;return this.visibleItems.findIndex(function(t){return e.isValidSelectedItem(t)})},findFirstFocusedItemIndex:function(){var e=this.findSelectedItemIndex();return e<0?this.findFirstItemIndex():e},findLastFocusedItemIndex:function(){var e=this.findSelectedItemIndex();return e<0?this.findLastItemIndex():e},searchItems:function(e,t){var n=this;this.searchValue=(this.searchValue||``)+t;var r=-1,i=!1;return this.focusedItemInfo.index===-1?r=this.visibleItems.findIndex(function(e){return n.isItemMatched(e)}):(r=this.visibleItems.slice(this.focusedItemInfo.index).findIndex(function(e){return n.isItemMatched(e)}),r=r===-1?this.visibleItems.slice(0,this.focusedItemInfo.index).findIndex(function(e){return n.isItemMatched(e)}):r+this.focusedItemInfo.index),r!==-1&&(i=!0),r===-1&&this.focusedItemInfo.index===-1&&(r=this.findFirstFocusedItemIndex()),r!==-1&&this.changeFocusedItemIndex(e,r),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(function(){n.searchValue=``,n.searchTimeout=null},500),i},changeFocusedItemIndex:function(e,t){this.focusedItemInfo.index!==t&&(this.focusedItemInfo.index=t,this.scrollInView())},scrollInView:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:-1,t=e===-1?this.focusedItemId:`${this.$id}_${e}`,n=T(this.menubar,`li[id="${t}"]`);n&&n.scrollIntoView&&n.scrollIntoView({block:`nearest`,inline:`start`})},createProcessedItems:function(e){var t=this,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:``,a=[];return e&&e.forEach(function(e,o){var s=(i===``?``:i+`_`)+o,c={item:e,index:o,level:n,key:s,parent:r,parentKey:i};c.items=t.createProcessedItems(e.items,n+1,c,s),a.push(c)}),a},containerRef:function(e){this.container=e},menubarRef:function(e){this.menubar=e?e.$el:void 0}},computed:{processedItems:function(){return this.createProcessedItems(this.model||[])},visibleItems:function(){var e=this,t=this.activeItemPath.find(function(t){return t.key===e.focusedItemInfo.parentKey});return t?t.items:this.processedItems},focusedItemId:function(){return this.focusedItemInfo.index===-1?null:`${this.$id}${D(this.focusedItemInfo.parentKey)?`_`+this.focusedItemInfo.parentKey:``}_${this.focusedItemInfo.index}`}},components:{MenubarSub:H,BarsIcon:R}};function X(e){"@babel/helpers - typeof";return X=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},X(e)}function Z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Q(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Z(Object(n),!0).forEach(function(t){ne(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Z(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function ne(e,t,n){return(t=re(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function re(e){var t=ie(e,`string`);return X(t)==`symbol`?t:t+``}function ie(e,t){if(X(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(X(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var ae=[`aria-haspopup`,`aria-expanded`,`aria-controls`,`aria-label`];function oe(e,n,r,a,o,s){var c=i(`BarsIcon`),u=i(`MenubarSub`);return S(),b(`div`,C({ref:s.containerRef,class:e.cx(`root`)},e.ptmi(`root`)),[e.$slots.start?(S(),b(`div`,C({key:0,class:e.cx(`start`)},e.ptm(`start`)),[t(e.$slots,`start`)],16)):f(``,!0),t(e.$slots,e.$slots.button?`button`:`menubutton`,{id:e.$id,class:y(e.cx(`button`)),toggleCallback:function(e){return s.menuButtonClick(e)}},function(){return[e.model&&e.model.length>0?(S(),b(`a`,C({key:0,ref:`menubutton`,role:`button`,tabindex:`0`,class:e.cx(`button`),"aria-haspopup":!!(e.model.length&&e.model.length>0),"aria-expanded":o.mobileActive,"aria-controls":e.$id,"aria-label":e.$primevue.config.locale.aria?.navigation,onClick:n[0]||=function(e){return s.menuButtonClick(e)},onKeydown:n[1]||=function(e){return s.menuButtonKeydown(e)}},Q(Q({},e.buttonProps),e.ptm(`button`))),[t(e.$slots,e.$slots.buttonicon?`buttonicon`:`menubuttonicon`,{},function(){return[l(c,m(x(e.ptm(`buttonicon`))),null,16)]})],16,ae)):f(``,!0)]}),l(u,{ref:s.menubarRef,id:e.$id+`_list`,role:`menubar`,items:s.processedItems,templates:e.$slots,root:!0,mobileActive:o.mobileActive,tabindex:`0`,"aria-activedescendant":o.focused?s.focusedItemId:void 0,menuId:e.$id,focusedItemId:o.focused?s.focusedItemId:void 0,activeItemPath:o.activeItemPath,level:0,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,pt:e.pt,unstyled:e.unstyled,onFocus:s.onFocus,onBlur:s.onBlur,onKeydown:s.onKeyDown,onItemClick:s.onItemClick,onItemMouseenter:s.onItemMouseEnter,onItemMousemove:s.onItemMouseMove},null,8,[`id`,`items`,`templates`,`mobileActive`,`aria-activedescendant`,`menuId`,`focusedItemId`,`activeItemPath`,`aria-labelledby`,`aria-label`,`pt`,`unstyled`,`onFocus`,`onBlur`,`onKeydown`,`onItemClick`,`onItemMouseenter`,`onItemMousemove`]),e.$slots.end?(S(),b(`div`,C({key:1,class:e.cx(`end`)},e.ptm(`end`)),[t(e.$slots,`end`)],16)):f(``,!0)],16)}Y.render=oe;var se={class:`flex flex-col min-h-screen bg-gray-50`},ce={class:`shadow-md sticky top-0 z-50`},le={class:`flex gap-4 items-center`},ue={key:0,class:`text-sm font-semibold`},de={class:`flex-1 w-full max-w-7xl mx-auto p-6`},fe={class:`flex flex-col lg:flex-row gap-8`},pe={class:`flex-[3]`},me={class:`flex-[1] min-w-[320px]`},he={class:`bg-white p-6 rounded-lg shadow-sm sticky top-24 border border-gray-100`},ge={class:`bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded`},_e={class:`m-0 mb-1`},ve={class:`text-blue-700`},ye={class:`m-0 text-lg`},be={class:`text-blue-900 font-bold`},$={key:0,class:`flex flex-col gap-4`},xe={class:`font-semibold text-gray-800`},Se={class:`block text-sm font-normal text-gray-500 whitespace-nowrap`},Ce={class:`flex items-center gap-3`},we={class:`w-6 text-center font-bold`},Te={key:1,class:`text-center text-gray-500 py-8 px-4 border-2 border-dashed rounded-lg bg-gray-50`},Ee=c({__name:`ConsumerLayout`,setup(e){let t=ee(),r=[{label:`Vitrine (Home)`,icon:`pi pi-home`,command:()=>t.push(`/`)},{label:`Acesso Admin`,icon:`pi pi-shield`,command:()=>t.push(`/admin`)}],c=h(()=>I.cart.getItems()),d=h(()=>I.cart.getTotalItems()),m=h(()=>I.cart.getFinalPrice().toFixed(2)),_=()=>{t.push(`/checkout`)};return(e,t)=>{let h=i(`router-link`),y=i(`RouterView`);return S(),b(`div`,se,[v(`header`,ce,[l(o(Y),{model:r,class:`border-none rounded-none px-6 py-4 bg-white`},{start:a(()=>[l(h,{to:`/`,class:`text-xl font-bold text-blue-800 no-underline`},{default:a(()=>[...t[3]||=[p(` TIC-HUB Store `,-1)]]),_:1})]),end:a(()=>[v(`div`,le,[o(I).auth.isAuthenticated?(S(),b(`span`,ue,`Logado como: `+u(o(I).auth.role),1)):f(``,!0),o(I).auth.isAuthenticated?f(``,!0):(S(),s(o(F),{key:1,label:`Logar (User)`,size:`small`,onClick:t[0]||=e=>o(I).loginAs(`USER`)})),o(I).auth.isAuthenticated?(S(),s(o(F),{key:3,label:`Logout`,severity:`danger`,size:`small`,onClick:t[2]||=e=>o(I).logout()})):(S(),s(o(F),{key:2,label:`Logar (Admin)`,severity:`info`,size:`small`,onClick:t[1]||=e=>o(I).loginAs(`ADMIN`)}))])]),_:1})]),v(`main`,de,[v(`div`,fe,[v(`section`,pe,[l(y)]),v(`aside`,me,[v(`div`,he,[t[9]||=v(`h2`,{class:`text-2xl font-bold mb-4 text-gray-800 flex items-center gap-2`},[v(`i`,{class:`pi pi-shopping-cart text-xl`}),p(` Carrinho `)],-1),v(`div`,ge,[v(`p`,_e,[t[4]||=v(`strong`,null,`Itens:`,-1),t[5]||=p(),v(`span`,ve,u(d.value),1)]),v(`p`,ye,[t[6]||=v(`strong`,null,`Total:`,-1),t[7]||=p(),v(`span`,be,`R$ `+u(m.value),1)])]),c.value.length>0?(S(),b(`div`,$,[(S(!0),b(g,null,n(c.value,e=>(S(),b(`div`,{key:e.product.id,class:`border-b pb-4 flex flex-col gap-2`},[v(`div`,xe,[p(u(e.product.name)+` `,1),v(`span`,Se,` R$ `+u(e.product.price.toFixed(2))+` × `+u(e.quantity),1)]),v(`div`,Ce,[l(o(F),{icon:`pi pi-minus`,class:`w-8 h-8 p-0`,severity:`secondary`,outlined:``,onClick:t=>o(I).removeFromCart(e.product.id)},null,8,[`onClick`]),v(`span`,we,u(e.quantity),1),l(o(F),{icon:`pi pi-plus`,class:`w-8 h-8 p-0`,severity:`secondary`,outlined:``,onClick:t=>o(I).addToCart(e.product)},null,8,[`onClick`]),l(o(F),{icon:`pi pi-trash`,severity:`danger`,text:``,class:`ml-auto p-0 w-8 h-8`,onClick:t=>o(I).deleteFromCart(e.product.id)},null,8,[`onClick`])])]))),128)),l(o(F),{label:`Finalizar Compra`,icon:`pi pi-check`,severity:`success`,class:`mt-4 w-full`,size:`large`,onClick:_})])):(S(),b(`div`,Te,[...t[8]||=[v(`i`,{class:`pi pi-box mb-2 text-2xl`},null,-1),v(`p`,{class:`m-0`},`Seu carrinho está vazio.`,-1)]]))])])])])])}}});export{Ee as default};
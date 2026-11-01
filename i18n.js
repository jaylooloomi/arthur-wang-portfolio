(() => {
 const originals=JSON.parse(JSON.stringify(products));
 const originalExhibitions=JSON.parse(JSON.stringify(exhibitions));
 const zh=['所有產品','主題展覽','關於','搜尋產品、主題或關鍵字…','全站搜尋','查看搜尋結果','把時間，<br>留給值得<br><span class="red">親自做的事。</span>','從開發、會議到日常工作，用我做的開源工具，少一點重複，多一點創造。','探索所有產品','主題展覽','策展人','進入展覽','探索產品','搜尋你需要的工具…','搜尋產品','全部','AI 開發','生產力','桌面工具','精選順序','類別排序','名稱排序','產品排序','找不到符合的產品。','清除搜尋與分類','關閉詳情','開源','開啟產品','查看 GitHub','下載產品','它能幫你做什麼','適合這些時候','如何開始使用','支援平台與使用條件','原始產品圖片與歷版主視覺','閱讀完整安裝與使用說明','商品展示圖 · 參考 README 原圖生成，非實際介面截圖','內容依作者 README 整理 · 功能與安裝方式以來源文件及實際版本為準。','關於有空製造所','由 Arthur Wang 製作的開源工具，從 AI 開發、會議紀錄到桌面陪伴，讓工具接手重複工作，把時間留給值得親自做的事。','產品主視覺參考各 README 的原始圖片生成；詳情同時保留來源圖片與使用說明。','瀏覽展出作品','章魚策展人與產品展品','選擇主題展覽','另開分頁查看','產品情境示意圖，參考 README 原圖生成','件產品','產品資料來自作者的 GitHub README；卡片主視覺為參考原圖生成的情境插畫。','語言'];
 let locale='zh-TW';
 const t=i=>locale==='zh-TW'?zh[i]:window.PORTFOLIO_LOCALES[locale].ui[i];
 const control=document.createElement('select');control.id='language';
 control.innerHTML='<option value="zh-TW" lang="zh-Hant">繁體中文</option><option value="en" lang="en">English</option><option value="ja" lang="ja">日本語</option><option value="ko" lang="ko">한국어</option>';
 document.querySelector('.header-search').before(control);
 const originalShow=show;
 function translateTree(root){
  if(locale==='zh-TW')return;
  const pairs=zh.map((s,i)=>[s,t(i)]).filter(([s])=>!s.includes('<')).sort((a,b)=>b[0].length-a[0].length);
  // Only replace complete phrases or the fixed labels in generated HTML.
  const translate=s=>{for(const [a,b]of pairs)s=s.replaceAll(a,b);return s.replaceAll('（另開分頁）',locale==='en'?' (opens in a new tab)':locale==='ja'?'（新しいタブで開く）':' (새 탭에서 열기)').replaceAll('產品情境插畫',t(45)).replaceAll('原始圖片',t(44));};
  const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);let node;while(node=walker.nextNode())node.nodeValue=translate(node.nodeValue);
  root.querySelectorAll('[aria-label],[alt],[title]').forEach(el=>{for(const attr of ['aria-label','alt','title'])if(el.hasAttribute(attr))el.setAttribute(attr,translate(el.getAttribute(attr)));});
 }
 show=html=>{originalShow(html);translateTree($('#detail-body'));};
 const originalUpdate=update;
 update=()=>{originalUpdate();$('#count').textContent=products.filter(p=>!document.querySelector('[data-id="'+p.id+'"]').hidden).length+' '+t(46);};
 const originalSelect=selectExhibition;
 selectExhibition=(index,focus=false)=>{originalSelect(index,focus);$('#enter').setAttribute('aria-label',t(11)+': '+exhibitions[activeExhibition].title);};
 function setLanguage(next,persist=true){
  locale=Object.hasOwn(window.PORTFOLIO_LOCALES,next)?next:'zh-TW';
  document.documentElement.lang=locale==='zh-TW'?'zh-Hant':locale;control.value=locale;control.setAttribute('aria-label',t(48));
  document.title='有空製造所 — Arthur Wang'+(locale==='zh-TW'?' 的開源產品展覽':locale==='en'?' · Open-source collection':locale==='ja'?' · オープンソース作品集':' · 오픈 소스 작품집');
  const meta=document.querySelector('meta[name="description"]');if(meta)meta.content=t(7);
  if(persist){try{localStorage.setItem('portfolio-language',locale);}catch{}const url=new URL(location.href);url.searchParams.set('lang',locale);history.replaceState(null,'',url);}
  document.querySelectorAll('nav a').forEach((el,i)=>el.textContent=t(i));
  $('#global-search').placeholder=t(3);$('#global-search').setAttribute('aria-label',t(4));$('.search-submit').setAttribute('aria-label',t(5));
  $('.intro h1').innerHTML=t(6);$('.intro p').textContent=t(7);
  const introLink=$('.intro .primary');introLink.lastChild.textContent=t(8);
  $('.feature').setAttribute('aria-label',t(9));$('.exhibition-eyebrow').firstChild.textContent=t(9)+' ';
  $('.exhibition-curator p').firstChild.textContent=t(10)+' ';
  $('#enter').firstChild.textContent=t(11)+' ';$('.toolbar>b').textContent=t(12);
  $('#search').placeholder=t(13);$('#search').setAttribute('aria-label',t(14));
  document.querySelectorAll('.chips button').forEach((button,i)=>{button.textContent=t(15+i);button.dataset.category=categories[i];});
  // Internal category keys remain independent of translated labels.
  document.querySelectorAll('.chips button').forEach((button,i)=>button.onclick=()=>{category=categories[i];update();});
  [...$('#sort').options].forEach((option,i)=>option.textContent=t(19+i));$('#sort').setAttribute('aria-label',t(22));
  $('#empty').firstChild.textContent=t(23)+' ';$('#reset').textContent=t(24);$('.close').setAttribute('aria-label',t(25));
  document.querySelector('.exhibition-tabs').setAttribute('aria-label',t(43));$('.exhibition-art').alt=t(42);
  $('#notice').firstChild.textContent=t(47)+' ';
  products.forEach((p,i)=>{
   Object.assign(p,originals[i],locale==='zh-TW'?{}:window.PRODUCT_LOCALES[locale][i]);
   p.gallery=originals[i].gallery.map((g,j)=>({...g,caption:locale==='zh-TW'?g.caption:p.captions[j]}));
   const card=document.querySelector('[data-id="'+p.id+'"]');
   card.querySelector('.card-copy>p').textContent=p.description;card.querySelector('.product-highlight>span:last-child').textContent=p.highlight;
   card.querySelector('.product-badge').textContent=t(26);card.querySelector('img').alt=p.name+' — '+t(45);
   card.querySelectorAll('.tag').forEach((tag,j)=>tag.textContent='#'+p.tags[j]);
   card.querySelector('.open').innerHTML=t(27)+' <span aria-hidden="true">→</span>';card.querySelector('.open').setAttribute('aria-label',t(27)+': '+p.name);
   card.querySelector('.card-github').setAttribute('aria-label',p.name+' GitHub ↗');card.querySelector('.card-github').title=t(28);
  });
  exhibitions.forEach((e,i)=>{Object.assign(e,originalExhibitions[i]);if(locale!=='zh-TW'){const [title,english,subtitle,note]=window.PORTFOLIO_LOCALES[locale].exhibitions[i];Object.assign(e,{title,english,subtitle,note});}});
  selectExhibition(activeExhibition);update();
  document.dispatchEvent(new CustomEvent('languagechange',{detail:{locale}}));
 }
 control.onchange=()=>setLanguage(control.value);
 let saved;try{saved=localStorage.getItem('portfolio-language');}catch{}
 const requested=new URLSearchParams(location.search).get('lang');
 setLanguage(requested||saved||'zh-TW',false);
 window.portfolioI18n={setLanguage,get locale(){return locale;},translateTree};
})();

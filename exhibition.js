// Curated collections of the author's five real open-source products.
const exhibitions=[
 {number:'01',title:'生成的形狀',english:'The Next Form',subtitle:'當創意遇上生成時代，\n我們如何重新定義「作品」？',curator:'Arthur Wang',note:'從自動開發、會議記錄到桌面工具，\n本次展覽精選 5 件讓想法走進日常的\n開源產品。',category:'全部'},
 {number:'02',title:'留給重要的事',english:'Time Well Spent',subtitle:'讓工具整理日常，\n為真正重要的事留一點空間。',curator:'Arthur Wang',note:'從會議紀錄到任務素材整理，\n探索數位工具如何讓工作更從容。\n本展收錄 2 件生產力作品。',category:'生產力'},
 {number:'03',title:'桌邊的陪伴',english:'A Little Companion',subtitle:'把額度收進桌面小島，\n讓小夥伴陪你安排工作節奏。',curator:'Arthur Wang',note:'一眼掌握多個 AI 服務的額度，\n留一點空間給專注，也給休息。\n本展收錄 Quota Pebble。',category:'桌面工具'}
];
let activeExhibition=0;
const exhibitionTabs=[...document.querySelectorAll('[data-slide]')];
function selectExhibition(index,focus=false){
 activeExhibition=(index+exhibitions.length)%exhibitions.length;
 const e=exhibitions[activeExhibition];
 for(const [key,value] of Object.entries(e)){const target=document.getElementById('exhibition-'+key);if(target)target.textContent=value;}
 document.getElementById('exhibition-panel').setAttribute('aria-labelledby','exhibition-tab-'+activeExhibition);
 document.getElementById('enter').setAttribute('aria-label','進入展覽：'+e.title);
 exhibitionTabs.forEach((tab,i)=>{tab.setAttribute('aria-selected',String(i===activeExhibition));tab.tabIndex=i===activeExhibition?0:-1;});
 if(focus)exhibitionTabs[activeExhibition].focus();
}
exhibitionTabs.forEach(tab=>{
 tab.addEventListener('click',()=>selectExhibition(Number(tab.dataset.slide)));
 tab.addEventListener('keydown',event=>{
  const actions={ArrowRight:activeExhibition+1,ArrowLeft:activeExhibition-1,Home:0,End:2};
  if(Object.hasOwn(actions,event.key)){event.preventDefault();selectExhibition(actions[event.key],true);}
 });
});
document.getElementById('enter').onclick=()=>{
 const e=exhibitions[activeExhibition];
 show('<small>主題展覽 '+e.number+' · '+e.curator+'</small><h2 id="detail-title">'+e.title+' / '+e.english+'</h2><img src="hero-options/with-products/exhibition-01.png" alt="章魚策展人與產品展品"><p>'+e.subtitle.replaceAll('\n','<br>')+'</p><p>'+e.note.replaceAll('\n','<br>')+'</p><button class="primary" id="browse-exhibit">瀏覽展出作品 →</button>');
};
document.getElementById('detail').addEventListener('click',event=>{
 if(event.target.id!=='browse-exhibit')return;
 document.getElementById('detail').close();
 document.getElementById('reset').click();
 const target=exhibitions[activeExhibition].category;
 [...document.querySelectorAll('.chips button')].find(b=>b.textContent===target).click();
 document.getElementById('products').scrollIntoView();
});
selectExhibition(0);

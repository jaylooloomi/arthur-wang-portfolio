const products=window.PORTFOLIO_DATA.products;
const $=s=>document.querySelector(s);
const categories=['全部','AI 開發','生產力','桌面工具'];
let category='全部';
if(location.search.includes('wireframe'))document.body.classList.add('wire');
const escapeHTML=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
function update(){
 const query=$('#search').value.trim().toLowerCase();
 let list=products.filter(p=>(category==='全部'||p.category===category)&&[p.name,p.description,...p.tags].join(' ').toLowerCase().includes(query));
 if($('#sort').value==='name')list.sort((a,b)=>a.name.localeCompare(b.name,'en'));
 if($('#sort').value==='category')list.sort((a,b)=>a.category.localeCompare(b.category,'zh-Hant')||a.order-b.order);
 document.querySelectorAll('.card').forEach(card=>card.hidden=true);
 list.forEach((p,index)=>{const card=document.querySelector('[data-id="'+p.id+'"]');card.hidden=false;card.style.order=index;});
 $('#count').textContent=list.length+' 件產品';$('#empty').hidden=list.length>0;
 document.querySelectorAll('.chips button').forEach(b=>{b.classList.toggle('active',(b.dataset.category||b.textContent)===category);b.setAttribute('aria-pressed',String((b.dataset.category||b.textContent)===category));});
}
categories.forEach(c=>{const b=document.createElement('button');b.textContent=c;b.onclick=()=>{category=c;update();};$('#categories').append(b);});
$('#search').oninput=()=>{$('#global-search').value=$('#search').value;update();};
$('#global-search').oninput=()=>{$('#search').value=$('#global-search').value;update();};
$('#global-search').onkeydown=e=>{if(e.key==='Enter')$('#products').scrollIntoView();};
$('.search-submit').onclick=()=>$('#products').scrollIntoView();
$('#sort').onchange=update;
$('#reset').onclick=()=>{category='全部';$('#search').value=$('#global-search').value='';update();};
function show(html){$('#detail-body').innerHTML=html;if(!$('#detail').open)$('#detail').showModal();$('#detail').scrollTop=0;}
function productDetails(p){
 const e=escapeHTML;
 const items=arr=>arr.map(t=>'<li>'+e(t)+'</li>').join('');
 const link=(url,label,primary=false)=>'<a class="detail-action '+(primary?'primary':'secondary')+'" href="'+e(url)+'" target="_blank" rel="noopener noreferrer">'+label+' <span aria-hidden="true">↗</span></a>';
 show('<div class="detail-meta">'+e(p.category)+' <span>／ 開源 · MIT</span></div><h2 id="detail-title">'+e(p.name)+'</h2><p class="detail-lead">'+e(p.description)+'</p>'+
 '<p class="detail-highlight"><span aria-hidden="true">✦</span> '+e(p.highlight)+'</p><figure class="detail-hero"><img src="'+e(p.image)+'" alt="'+e(p.name)+' 產品情境插畫"><figcaption>商品展示圖 · 參考 README 原圖生成，非實際介面截圖</figcaption></figure>'+
 '<div class="detail-tags">'+p.tags.map(t=>'<span class="tag">#'+e(t)+'</span>').join('')+'</div>'+
 '<div class="detail-actions">'+link(p.githubUrl,'查看 GitHub',true)+(p.downloadUrl?link(p.downloadUrl,'下載產品'):'')+'</div>'+
 '<section class="detail-section"><h3>它能幫你做什麼</h3><ul>'+items(p.features)+'</ul></section>'+
 '<section class="detail-section"><h3>適合這些時候</h3><ul>'+items(p.scenarios)+'</ul></section>'+
 '<section class="detail-section"><h3>如何開始使用</h3><ol>'+items(p.steps)+'</ol><a class="readme-link" href="'+e(p.githubUrl)+'#readme" target="_blank" rel="noopener noreferrer">閱讀完整安裝與使用說明 ↗</a></section>'+
 '<section class="detail-section platform"><h3>支援平台與使用條件</h3><p><strong>'+e(p.platform)+'</strong></p><p>'+e(p.requirements)+'</p><p class="detail-note">'+e(p.notes)+'</p></section>'+
 '<section class="detail-section original-gallery"><h3>原始產品圖片與歷版主視覺</h3>'+p.gallery.map(g=>'<figure><a href="'+e(g.image)+'" target="_blank" rel="noopener noreferrer" aria-label="另開分頁查看 '+e(p.name)+' 原始圖片"><img loading="lazy" src="'+e(g.image)+'" alt="'+e(g.caption)+'"></a><figcaption>'+e(g.caption)+'</figcaption></figure>').join('')+'</section>'+
 '<div class="detail-actions detail-bottom">'+link(p.githubUrl,'查看 GitHub',true)+(p.downloadUrl?link(p.downloadUrl,'下載產品'):'')+'</div><p class="source-note">內容依作者 README 整理 · 功能與安裝方式以來源文件及實際版本為準。</p>');
}
document.querySelectorAll('.open').forEach(b=>b.onclick=()=>productDetails(products.find(p=>p.id===b.closest('.card').dataset.id)));
$('#nav-exhibition').onclick=e=>{e.preventDefault();$('#enter').click();};
$('#about').onclick=e=>{e.preventDefault();show('<h2 id="detail-title">關於有空製造所</h2><p>由 Arthur Wang 製作的開源工具，從 AI 開發、會議紀錄到桌面陪伴，讓工具接手重複工作，把時間留給值得親自做的事。</p><p>產品主視覺參考各 README 的原始圖片生成；詳情同時保留來源圖片與使用說明。</p>');};
$('.close').onclick=()=>$('#detail').close();
update();

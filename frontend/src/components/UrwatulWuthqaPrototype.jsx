import React, { useState } from "react";

// عروۃ الوثقیٰ - Single-file React prototyping component
// Light-weight version for the scaffold preview (no Tailwind required).

export default function UrwatulWuthqaPrototype() {
  const [route, setRoute] = useState("home");
  const [search, setSearch] = useState("");
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [messages, setMessages] = useState([
    { from: "ai", text: "السلام علیکم — میں آپ کی کس طرح مدد کر سکتا ہوں؟" },
  ]);

  const courses = [
    { id: 1, title: "پہلا دورہ: مقدمہ الفقہ", level: "بنیادی", progress: 20 },
    { id: 2, title: "تفسیرِ بنیادی", level: "درمیانہ", progress: 60 },
    { id: 3, title: "عربی گرامر: ابتدائی", level: "بنیادی", progress: 5 },
  ];

  const hadiths = [
    { id: 1, text: "حضرت ابو ہریرہ رضی اللہ عنہ سے روایت ہے...", grade: "صحیح" },
    { id: 2, text: "حضرت انس رضی اللہ عنہ سے روایت ہے...", grade: "حسن" },
  ];

  const quranChapters = [
    { id: 1, name: "الفاتحہ", ayaCount: 7 },
    { id: 2, name: "البقرہ", ayaCount: 286 },
    { id: 3, name: "آلِ عمران", ayaCount: 200 },
  ];

  function navigate(to) {
    setRoute(to);
    setSelectedCourse(null);
  }

  function sendMessage(text) {
    if (!text) return;
    const newMsg = { from: "user", text };
    setMessages((m) => [...m, newMsg]);
    // Mock AI response
    setTimeout(() => {
      setMessages((m) => [...m, { from: "ai", text: "یہ ایک نمونہ جواب ہے — حوالہ: مشکوٰۃ/بخاری/فتح" }]);
    }, 800);
  }

  return (
    <div style={{display:'flex', minHeight:'100vh', direction:'rtl'}}>
      <aside style={{width:280, padding:20, background:'#fff', borderRight:'1px solid #eee'}}>
        <div style={{display:'flex', gap:12, marginBottom:18}}>
          <div style={{width:48,height:48,borderRadius:999,background:'#10b981',color:'#fff',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:700}}>ع</div>
          <div>
            <div style={{fontWeight:700}}>عروۃ الوثقیٰ</div>
            <div style={{fontSize:13,color:'#6b7280'}}>AI دینی و عصری علوم</div>
          </div>
        </div>
        <nav>
          <button onClick={()=>navigate('home')} style={{display:'block', width:'100%', textAlign:'right', padding:10, borderRadius:8, background: route==='home'?'#f1f5f9':'transparent'}}>ڈیش بورڈ</button>
          <button onClick={()=>navigate('quran')} style={{display:'block', width:'100%', textAlign:'right', padding:10, borderRadius:8, background: route==='quran'?'#f1f5f9':'transparent'}}>قرآن</button>
          <button onClick={()=>navigate('hadith')} style={{display:'block', width:'100%', textAlign:'right', padding:10, borderRadius:8, background: route==='hadith'?'#f1f5f9':'transparent'}}>احادیث</button>
          <button onClick={()=>navigate('courses')} style={{display:'block', width:'100%', textAlign:'right', padding:10, borderRadius:8, background: route==='courses'?'#f1f5f9':'transparent'}}>درسی کورسز</button>
          <button onClick={()=>navigate('community')} style={{display:'block', width:'100%', textAlign:'right', padding:10, borderRadius:8, background: route==='community'?'#f1f5f9':'transparent'}}>کمیونٹی</button>
        </nav>
      </aside>

      <main style={{flex:1,padding:24}}>
        <header style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:20}}>
          <div style={{width:'50%'}}>
            <input value={search} onChange={(e)=>setSearch(e.target.value)} placeholder='آیت، حدیث یا موضوع تلاش کریں...' style={{width:'100%', padding:10, borderRadius:8, border:'1px solid #e5e7eb'}} />
          </div>
          <div style={{display:'flex', gap:8, alignItems:'center'}}>
            <button onClick={()=>alert('Notifications')} style={{padding:8}}>🔔</button>
            <div style={{width:40,height:40,borderRadius:999,background:'#e2e8f0',display:'flex',alignItems:'center',justifyContent:'center'}}>U</div>
          </div>
        </header>

        {route==='home' && (
          <section>
            <h2 style={{fontSize:22,fontWeight:700, marginBottom:12}}>خوش آمدید — عروۃ الوثقیٰ</h2>
            <div style={{display:'flex', gap:16}}>
              <div style={{flex:2, background:'#fff', padding:16, borderRadius:8}}>
                <h3 style={{fontWeight:600}}>جاری کورسز</h3>
                <div style={{marginTop:10}}>
                  {courses.map(c=>(
                    <div key={c.id} style={{display:'flex',justifyContent:'space-between',padding:12,border:'1px solid #f1f5f9',borderRadius:8,marginBottom:8}}>
                      <div style={{textAlign:'right'}}>
                        <div style={{fontWeight:600}}>{c.title}</div>
                        <div style={{fontSize:13,color:'#6b7280'}}>سطح: {c.level}</div>
                      </div>
                      <div style={{fontSize:13,color:'#6b7280'}}>{c.progress}%</div>
                    </div>
                  ))}
                </div>
              </div>

              <aside style={{flex:1, background:'#fff', padding:16, borderRadius:8}}>
                <h3 style={{fontWeight:600}}>آڈیو لیکچرز</h3>
                <div style={{marginTop:10}}>
                  <div style={{display:'flex',alignItems:'center',gap:10}}>
                    <div style={{width:36,height:36,borderRadius:6,background:'#f3f4f6',display:'flex',alignItems:'center',justifyContent:'center'}}>▶</div>
                    <div style={{flex:1}}>
                      <div style={{fontWeight:600}}>تفسیر محمد</div>
                      <div style={{fontSize:13,color:'#6b7280'}}>20 منٹ</div>
                    </div>
                    <button style={{background:'transparent',border:'none',color:'#059669'}}>Play</button>
                  </div>
                </div>
              </aside>
            </div>
          </section>
        )}

        {route==='quran' && (
          <section>
            <h2 style={{fontSize:22,fontWeight:700}}>قرآن</h2>
            <div style={{display:'flex',gap:16}}>
              <div style={{flex:2, background:'#fff', padding:16, borderRadius:8}}>
                <h3 style={{fontWeight:600}}>سورہ منتخب کریں</h3>
                <ul style={{marginTop:10}}>
                  {quranChapters.map(s=>(
                    <li key={s.id} style={{display:'flex',justifyContent:'space-between',padding:12,border:'1px solid #f1f5f9',borderRadius:8,marginBottom:8}}>
                      <div style={{textAlign:'right'}}>
                        <div style={{fontWeight:600}}>{s.name}</div>
                        <div style={{fontSize:13,color:'#6b7280'}}>آیات: {s.ayaCount}</div>
                      </div>
                      <button onClick={()=>alert('Open Surah: '+s.name)} style={{color:'#059669'}}>کھولیں</button>
                    </li>
                  ))}
                </ul>
              </div>

              <aside style={{flex:1, background:'#fff', padding:16, borderRadius:8}}>
                <h3 style={{fontWeight:600}}>تلاوت</h3>
                <div style={{fontSize:13,color:'#6b7280'}}>تازہ ترین تلاوتیں اور ریکمنڈڈ قاری</div>
              </aside>
            </div>
          </section>
        )}

        {route==='hadith' && (
          <section>
            <h2 style={{fontSize:22,fontWeight:700}}>احادیث</h2>
            <div style={{background:'#fff',padding:16,borderRadius:8}}>
              {hadiths.map(h=>(
                <div key={h.id} style={{padding:12,border:'1px solid #f1f5f9',borderRadius:8,marginBottom:8}}>
                  <div style={{textAlign:'right'}}>{h.text}</div>
                  <div style={{fontSize:13,color:'#6b7280',marginTop:8}}>درجہ: {h.grade}</div>
                </div>
              ))}
            </div>
          </section>
        )}

        {route==='courses' && (
          <section>
            <h2 style={{fontSize:22,fontWeight:700}}>درسی کورسز</h2>
            <div style={{display:'flex',gap:16}}>
              <div style={{flex:2, background:'#fff', padding:16, borderRadius:8}}>
                {courses.map(c=>(
                  <div key={c.id} style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:12,border:'1px solid #f1f5f9',borderRadius:8,marginBottom:8}}>
                    <div style={{textAlign:'right'}}>
                      <div style={{fontWeight:600}}>{c.title}</div>
                      <div style={{fontSize:13,color:'#6b7280'}}>سطح: {c.level}</div>
                    </div>
                    <div style={{display:'flex',gap:8,alignItems:'center'}}>
                      <button onClick={()=>setSelectedCourse(c)} style={{background:'#10b981',color:'#fff',padding:'6px 12px',borderRadius:6}}>کھولیں</button>
                      <div style={{fontSize:13,color:'#6b7280'}}>{c.progress}%</div>
                    </div>
                  </div>
                ))}
              </div>
              <aside style={{flex:1, background:'#fff', padding:16, borderRadius:8}}>
                <h3 style={{fontWeight:600}}>سرٹیفیکیشن</h3>
                <div style={{fontSize:13,color:'#6b7280',marginTop:8}}>کورس مکمل کرنے پر سرٹیفیکیٹ</div>
                <div style={{marginTop:12}}><button onClick={()=>alert('Request Certificate')} style={{width:'100%',padding:10,background:'#2563eb',color:'#fff',borderRadius:6}}>سرٹیفیکیٹ مانگیں</button></div>
              </aside>
            </div>

            {selectedCourse && (
              <div style={{position:'fixed',inset:0,display:'flex',alignItems:'center',justifyContent:'center',background:'rgba(0,0,0,0.4)'}}>
                <div style={{width:'90%',maxWidth:720,background:'#fff',padding:20,borderRadius:8}}>
                  <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                    <h4 style={{fontWeight:700}}>{selectedCourse.title}</h4>
                    <button onClick={()=>setSelectedCourse(null)} style={{border:'none',background:'transparent'}}>بند کریں</button>
                  </div>
                  <p style={{textAlign:'right'}}>یہاں کورس کی تفصیل، لیکچرز، اسائنمنٹس اور کوئزز آئیں گے۔</p>
                  <div style={{display:'flex',gap:8,justifyContent:'flex-end',marginTop:12}}>
                    <button style={{padding:'8px 12px',borderRadius:6,border:'1px solid #e5e7eb'}}>ڈاؤنلوڈ نوٹس</button>
                    <button style={{padding:'8px 12px',borderRadius:6,background:'#10b981',color:'#fff'}}>لیکچر سنیں</button>
                  </div>
                </div>
              </div>
            )}
          </section>
        )}

        {route==='community' && (
          <section>
            <h2 style={{fontSize:22,fontWeight:700}}>کمیونٹی فورم</h2>
            <div style={{display:'flex',gap:16}}>
              <div style={{flex:2, background:'#fff', padding:16, borderRadius:8}}>
                <div style={{padding:12,border:'1px solid #f1f5f9',borderRadius:8,marginBottom:8}}>
                  <div style={{fontWeight:700}}>سوال: نماز کے مسائل</div>
                  <div style={{fontSize:13,color:'#6b7280',marginTop:8}}>معزز استاذہ سے رہنمائی چاہتے ہیں؛ جوابات میں حوالہ درج کریں۔</div>
                  <div style={{display:'flex',gap:8,justifyContent:'flex-end',marginTop:10}}>
                    <button style={{padding:6,borderRadius:6}}>جواب دیں</button>
                    <button style={{padding:6,borderRadius:6,background:'#10b981',color:'#fff'}}>ملاحظہ کریں</button>
                  </div>
                </div>
              </div>
              <aside style={{flex:1, background:'#fff', padding:16, borderRadius:8}}>
                <h3 style={{fontWeight:700}}>آنے والے ویبینارز</h3>
                <div style={{fontSize:13,color:'#6b7280',marginTop:8}}>تاریخ: 25 اگست 2025 — موضوع: دینی تعلیم میں AI</div>
              </aside>
            </div>
          </section>
        )}

      </main>
    </div>
  );
}

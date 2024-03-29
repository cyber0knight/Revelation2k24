let htmlContent = '';
fetch('https://script.google.com/macros/s/AKfycbwtS-dKkGeR6ihR1Ct_00LyC8WpKQXj84TsDtzWLtY8zqo6q0T7av-qqG0dpbQuQXUI6Q/exec')
                .then(response => response.json())
                .then(eventData => {
                    console.log(eventData);
                    
    
                    eventData.forEach(event => {
                        if(event.eventName == "Code Storm") {
                            htmlContent += String(event.count);
                            console.log(htmlContent);
                            const elements = document.getElementById("COUNTER");
                            elements.setAttribute("fb-count-target", htmlContent);
                            console.log(elements.getAttribute("fb-count-target"));
                        }
                        
                        (function () { "use strict"; const T = (t, e = {}) => { const { action: a = "start", duration: c = 1e3, delay: n = 16 } = e; if (a === "stop") { f(t); return } if (f(t), !/[0-9]/.test(t.innerHTML)) return; const o = h(t.innerHTML, { duration: c || t.getAttribute("data-duration"), delay: n || t.getAttribute("data-delay") }); t._countUpOrigInnerHTML = t.innerHTML, t.innerHTML = o[0] || "&nbsp;", t.style.visibility = "visible"; const i = function () { t.innerHTML = o.shift() || "&nbsp;", o.length ? (clearTimeout(t.countUpTimeout), t.countUpTimeout = setTimeout(i, n)) : t._countUpOrigInnerHTML = void 0 }; t.countUpTimeout = setTimeout(i, n) }, f = t => { clearTimeout(t.countUpTimeout), t._countUpOrigInnerHTML && (t.innerHTML = t._countUpOrigInnerHTML, t._countUpOrigInnerHTML = void 0), t.style.visibility = "" }, h = (t, e = {}) => { const { duration: a = 1e3, delay: c = 16 } = e, n = a / c, o = t.toString().split(/(<[^>]+>|[0-9.][,.0-9]*[0-9]*)/), i = []; for (let r = 0; r < n; r++)i.push(""); for (let r = 0; r < o.length; r++)if (/([0-9.][,.0-9]*[0-9]*)/.test(o[r]) && !/<[^>]+>/.test(o[r])) { let s = o[r]; const L = [...s.matchAll(/[.,]/g)].map(u => ({ char: u[0], i: s.length - u.index - 1 })).sort((u, d) => u.i - d.i); s = s.replace(/[.,]/g, ""); let H = i.length - 1; for (let u = n; u >= 1; u--) { let d = parseInt(s / n * u, 10); d = L.reduce((l, { char: M, i: b }) => l.length <= b ? l : l.slice(0, -b) + M + l.slice(-b), d.toString()), i[H--] += d } } else for (let s = 0; s < n; s++)i[s] += o[r]; return i[i.length] = t.toString(), i }, g = { target: 1e3, time: 1500, delay: 0 }, y = t => { if (!t) return; const e = t.getAttribute("fb-count-target"), a = t.hasAttribute("fb-count-time") ? Number(t.getAttribute("fb-count-time")) : g.time, c = t.hasAttribute("fb-count-delay") ? Number(t.getAttribute("fb-count-delay")) : g.delay, n = () => { t.innerHTML = e.toString(), T(t, { duration: a }) }; c ? setTimeout(n, c) : n() }, p = new IntersectionObserver(t => { t.forEach(e => { e.isIntersecting && (y(e.target), p.unobserve(e.target)) }) }, { threshold: 1 }), m = async () => { document.querySelectorAll("[fb-count]").forEach(e => p.observe(e)) }; document.readyState === "complete" ? m() : window.addEventListener("load", m) })();
                    });
                })
                .catch(error => console.error('Error fetching event counts:', error));
                

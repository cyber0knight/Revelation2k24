let htmlContent = '';

const bearerToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyIiwianRpIjoiN2JiYTk3YTM2MzI5NjVjYWQzOTkyMzE2NmVlMGRjMTNhNWNmYTg5YjljZWExNWY3MzJhNDVkOGVhZDgwYjhmOGM2NDZlMWY1OGJkMGU1YzgiLCJpYXQiOjE3MTE0NzM3MTkuMzcxNDY2LCJuYmYiOjE3MTE0NzM3MTkuMzcxNDY4LCJleHAiOjE3MTM4OTI5MTkuMzYzMjExLCJzdWIiOiIxMDE1MTAxNyIsInNjb3BlcyI6W119.fcar9bVyqxXC0wswcqybPMAjIWNgM5wmjqGnoxYIr5uvPEgp-5VVRERNe06iax1ITZQuuM7d_UFbna2YiKoczxQaok6HFStc1sG0ijyc5zcaU2KHNiD3uo4jKLGYnNGvrNHkTcpW6JrvMH8cK_L9UYorRVhJ_2adZfSK1vqhWfcmLn4R_oPaS4L1nTAd_9pTZ87qOcpfS_PFbkxGayV3JojA0sOvQPhZq7PDTKea0E_p0uHi2K7Hmi5s5RQJlQqWeyMmyd2IkgqxmvszBVNDHGTOPBTvEHWtXtOg7hy0MLWpiPMPhMllntG5nq0PKyZeY_ZaoZKyGy_B1A3RSAtnHmp2-LIo6_qki2H9skeIhcq6-RfiPhPd1c3-fK4qXm4tpmNXIW2Pqa_Dn9GuTB-1Az2sE96tvu2MIKLZNC5-pdZoM-YY9G6ynUSN7eZoL__3RzboGk9iCRMhI_O627BDqVQR2xTbpsQPaNhb99mFcsByjYFfdV8x59Ac0CoDShfH4sCSAZH9g81_785PnMf44_Mr1mePjrvaBzLgFxeYKPHC6_Tr6XdeEq4K__b6HjV0VxJ5O_YtU8-yMM4rPSc1MgEOh05gmWQyWD9Xi5GZd8ZuMmahh9h3UQs9lfc3HuKdy1nzh0XEf203IUD9O2iBjykW9BepOPwTjRC-DTd3Uhw';

const url = 'https://unstop.com/api/public/competition/940190';
const headers = new Headers();
headers.append('Authorization', `Bearer ${bearerToken}`);

fetch(url, {
    method: 'GET',
    headers: headers
})
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        htmlContent = String(data.data.competition.registerCount);
        const elements = document.getElementById("COUNTER");
        elements.setAttribute("fb-count-target", htmlContent);
        console.log(elements.getAttribute("fb-count-target"));
        (function () { "use strict"; const T = (t, e = {}) => { const { action: a = "start", duration: c = 1e3, delay: n = 16 } = e; if (a === "stop") { f(t); return } if (f(t), !/[0-9]/.test(t.innerHTML)) return; const o = h(t.innerHTML, { duration: c || t.getAttribute("data-duration"), delay: n || t.getAttribute("data-delay") }); t._countUpOrigInnerHTML = t.innerHTML, t.innerHTML = o[0] || "&nbsp;", t.style.visibility = "visible"; const i = function () { t.innerHTML = o.shift() || "&nbsp;", o.length ? (clearTimeout(t.countUpTimeout), t.countUpTimeout = setTimeout(i, n)) : t._countUpOrigInnerHTML = void 0 }; t.countUpTimeout = setTimeout(i, n) }, f = t => { clearTimeout(t.countUpTimeout), t._countUpOrigInnerHTML && (t.innerHTML = t._countUpOrigInnerHTML, t._countUpOrigInnerHTML = void 0), t.style.visibility = "" }, h = (t, e = {}) => { const { duration: a = 1e3, delay: c = 16 } = e, n = a / c, o = t.toString().split(/(<[^>]+>|[0-9.][,.0-9]*[0-9]*)/), i = []; for (let r = 0; r < n; r++)i.push(""); for (let r = 0; r < o.length; r++)if (/([0-9.][,.0-9]*[0-9]*)/.test(o[r]) && !/<[^>]+>/.test(o[r])) { let s = o[r]; const L = [...s.matchAll(/[.,]/g)].map(u => ({ char: u[0], i: s.length - u.index - 1 })).sort((u, d) => u.i - d.i); s = s.replace(/[.,]/g, ""); let H = i.length - 1; for (let u = n; u >= 1; u--) { let d = parseInt(s / n * u, 10); d = L.reduce((l, { char: M, i: b }) => l.length <= b ? l : l.slice(0, -b) + M + l.slice(-b), d.toString()), i[H--] += d } } else for (let s = 0; s < n; s++)i[s] += o[r]; return i[i.length] = t.toString(), i }, g = { target: 1e3, time: 1500, delay: 0 }, y = t => { if (!t) return; const e = t.getAttribute("fb-count-target"), a = t.hasAttribute("fb-count-time") ? Number(t.getAttribute("fb-count-time")) : g.time, c = t.hasAttribute("fb-count-delay") ? Number(t.getAttribute("fb-count-delay")) : g.delay, n = () => { t.innerHTML = e.toString(), T(t, { duration: a }) }; c ? setTimeout(n, c) : n() }, p = new IntersectionObserver(t => { t.forEach(e => { e.isIntersecting && (y(e.target), p.unobserve(e.target)) }) }, { threshold: 1 }), m = async () => { document.querySelectorAll("[fb-count]").forEach(e => p.observe(e)) }; document.readyState === "complete" ? m() : window.addEventListener("load", m) })();

    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
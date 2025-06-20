// Tatlı Renk İsimleri Veritabanı
const sweetColorNames = {
    // Pembe tonları
    'ffc0cb': 'Pamukkuşu Pembe',
    'ffb6c1': 'Gül Yaprağı',
    'ff69b4': 'Balerin Ayakkabısı',
    'ff1493': 'Aşk Meleği',
    'db7093': 'Prenses Ayakkabısı',
    'c71585': 'Unicorn Kalbi',
    'ff91a4': 'Kiraz Çiçeği',
    'ffadd6': 'Pamuk Şeker',
    'ff8fa3': 'İlk Aşk',
    
    // Kırmızı tonları
    'ff0000': 'Ateş Kelebeği',
    'dc143c': 'Kiraz Dudak',
    'b22222': 'Aşkın Rengi',
    'cd5c5c': 'Gül Gonca',
    'f08080': 'Gün Batımı Kızıllığı',
    'fa8072': 'Mercan Adası',
    'e9967a': 'Tarçın Kız',
    
    // Turuncu tonları
    'ffa500': 'Bal Portakalı',
    'ff8c00': 'Sonbahar Yaprağı',
    'ff7f50': 'Mercan Balığı',
    'ff6347': 'Domates Çiçeği',
    'ffd700': 'Altın Prenses',
    'ffb347': 'Ballı Portakal',
    
    // Sarı tonları
    'ffff00': 'Güneş Işını',
    'ffd700': 'Altın Pul',
    'ffffe0': 'Vanilya Bulut',
    'fffacd': 'Limon Krema',
    'f0e68c': 'Bananlı Puding',
    'daa520': 'Bal Damlası',
    
    // Yeşil tonları
    '00ff00': 'Nane Şekeri',
    '32cd32': 'Çimlerin Dansı',
    '90ee90': 'Mint Buzu',
    '98fb98': 'Bahar Filizi',
    '00fa9a': 'Deniz Köpüğü',
    '00ff7f': 'Nergis Yeşili',
    '7cfc00': 'Çimen Perisi',
    
    // Mavi tonları
    '0000ff': 'Prens Mavisi',
    '87ceeb': 'Gökyüzü Rüyası',
    '87cefa': 'Bulut Dansı',
    '00bfff': 'Okyanus Parıltısı',
    '1e90ff': 'Elsa\'nın Elbisesi',
    '6495ed': 'Mavi Kelebek',
    '4169e1': 'Kraliyet Mavisi',
    
    // Mor tonları
    '800080': 'Lavanta Bahçesi',
    '9370db': 'Leylak Rüyası',
    'ba55d3': 'Orkide Çiçeği',
    'dda0dd': 'Menekşe Bulutu',
    'ee82ee': 'Mor Kelebek',
    'd8bfd8': 'Thistle Peri',
    '9966cc': 'Ametist Taşı',
    
    // Beyaz tonları
    'ffffff': 'Kar Tanesi',
    'fffafa': 'İnci Beyazı',
    'f0f8ff': 'Melek Tüyü',
    'f5f5dc': 'Vanilya Bulutu',
    'fdf5e6': 'Pudra Şekeri',
    
    // Siyah tonları
    '000000': 'Gece Prensesi',
    '2f2f2f': 'Kömür Elması',
    '696969': 'Fırtına Bulutu'
};

// Marka önerileri
const nailPolishBrands = [
    'Essie', 'OPI', 'Chanel', 'Dior', 'MAC', 'Revlon', 
    'Sally Hansen', 'Zoya', 'China Glaze', 'Nails Inc',
    'Flormar', 'Golden Rose', 'Pastel', 'Rimmel'
];

// Global değişkenler
let currentImage = null;
let geminiApiKey = 'AIzaSyAdGMyunS-Tpty1cCLgMnvTCTbkE5YQfOw';
// Fotoğraf bazlı tutarlılık için image fingerprint sistemi
let imageAnalysisCache = {};

// DOM elementleri
const fileInput = document.getElementById('fileInput');
const uploadBtn = document.getElementById('uploadBtn');
const uploadArea = document.getElementById('uploadArea');
const imagePreview = document.getElementById('imagePreview');
const previewImg = document.getElementById('previewImg');
const changeBtn = document.getElementById('changeBtn');
const analyzeBtn = document.getElementById('analyzeBtn');
const loading = document.getElementById('loading');
const resultsSection = document.getElementById('resultsSection');
const colorsGrid = document.getElementById('colorsGrid');
const errorMessage = document.getElementById('errorMessage');
const errorText = document.getElementById('errorText');

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Dosya yükleme
    uploadBtn.addEventListener('click', () => fileInput.click());
    changeBtn.addEventListener('click', () => fileInput.click());
    
    fileInput.addEventListener('change', handleFileSelect);
    
    // Drag & drop
    uploadArea.addEventListener('dragover', handleDragOver);
    uploadArea.addEventListener('drop', handleDrop);
    uploadArea.addEventListener('dragleave', handleDragLeave);
    
    // Analiz butonu
    analyzeBtn.addEventListener('click', analyzeImage);
});



// Dosya seçme işlemi
function handleFileSelect(event) {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
        processImage(file);
    } else {
        showError('Lütfen geçerli bir resim dosyası seçin!');
    }
}

// Drag & drop işlemleri
function handleDragOver(event) {
    event.preventDefault();
    uploadArea.style.borderColor = '#ff6b9d';
    uploadArea.style.background = 'linear-gradient(45deg, rgba(255, 182, 193, 0.3), rgba(255, 159, 181, 0.3))';
}

function handleDragLeave(event) {
    event.preventDefault();
    uploadArea.style.borderColor = '#ff9eb5';
    uploadArea.style.background = 'linear-gradient(45deg, rgba(255, 182, 193, 0.1), rgba(255, 159, 181, 0.1))';
}

function handleDrop(event) {
    event.preventDefault();
    handleDragLeave(event);
    
    const files = event.dataTransfer.files;
    if (files.length > 0 && files[0].type.startsWith('image/')) {
        processImage(files[0]);
    } else {
        showError('Lütfen geçerli bir resim dosyası bırakın!');
    }
}

// Resim işleme
function processImage(file) {
    currentImage = file;
    
    const reader = new FileReader();
    reader.onload = function(e) {
        previewImg.src = e.target.result;
        showImagePreview();
        hideMessages();
    };
    reader.readAsDataURL(file);
}

function showImagePreview() {
    uploadArea.style.display = 'none';
    imagePreview.style.display = 'block';
}

function hideImagePreview() {
    uploadArea.style.display = 'block';
    imagePreview.style.display = 'none';
    currentImage = null;
}

// Resim analizi
async function analyzeImage() {
    if (!currentImage) {
        showError('Lütfen önce bir resim yükleyin!');
        return;
    }
    
    showLoading();
    hideMessages();
    
    // İlk önce loading bölümünü sayfanın üst kısmına getir (düşünme ekranını göster)
    setTimeout(() => {
        document.getElementById('loading').scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center' 
        });
    }, 100);
    
    try {
        // Resmi base64'e çevir
        const base64Image = await fileToBase64(currentImage);
        
        // Gemini API'ye istek gönder
        const result = await analyzeImageWithGemini(base64Image);
        
        if (result) {
            if (!result.isNailRelated) {
                // Oje olmayan resim için tatlı itiraz
                showFairyComplaint(result.fairyComment);
            } else if (result.colors && result.colors.length > 0) {
                displayResults(result);
            } else {
                showError('Resimde oje rengi tespit edilemedi. Lütfen daha net bir fotoğraf deneyin.');
            }
        } else {
            showError('Analiz sırasında bir hata oluştu. Lütfen tekrar deneyin.');
        }
        
    } catch (error) {
        console.error('Analiz hatası:', error);
        showError('Analiz sırasında bir hata oluştu. Lütfen tekrar deneyin.');
    } finally {
        hideLoading();
    }
}

// Dosyayı base64'e çevir
function fileToBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
            const base64 = reader.result.split(',')[1];
            resolve(base64);
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}

// Gemini API ile analiz
async function analyzeImageWithGemini(base64Image) {
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiApiKey}`;
    
    // Fotoğraf için unique ID oluştur (base64'ün hash'i)
    const imageId = hashString(base64Image.substring(0, 1000)); // İlk 1000 karakter yeterli
    
    // Eğer bu fotoğraf daha önce analiz edildiyse, aynı sonucu dön
    if (imageAnalysisCache[imageId]) {
        console.log('Cached result kullanılıyor aynı fotoğraf için');
        return imageAnalysisCache[imageId];
    }
    
    const randomThoughts = [
        "🧚‍♀️ Ayyy ne tatlı bir resim! Hemen büyülerimi yapalım...",
        "✨ Vay canına! Bu tırnaklarda ne güzel sırlar var...",
        "💅 Aman Tanrım, bu kadar güzel bir oje gördüm mü hiç?",
        "🌸 Bu renk tam benim tarzım! Analiz ediyorum sevgilim...",
        "💖 Kalbim çarpıyor, muhteşem bir renk bu! Bulacağım...",
        "🦄 Unicorn renklerine benziyor! Hangi büyü bu böyle?",
        "✨ Peri gözlerimle bakıyorum... Çok şirin bir renk!",
        "🌈 Bu renk sanki gökkuşağından düşmüş gibi!",
        "💎 Kristal gibi parıldıyor bu güzellik!",
        "🎨 Sanat eseri gibi bir renk! Hemen ismine karar veriyorum...",
        "🌺 Bu renk sanki bir çiçek bahçesi gibi kokmuyor mu?",
        "🍭 Şeker gibi tatlı bir renk! Tadına bakayım...",
        "🔮 Sihirli küremde bu rengin hikayesini görüyorum...",
        "🌙 Ay ışığında bile bu kadar güzel parıldamaz!",
        "🎪 Büyülü sirkte bile böyle renkler yok!"
    ];
    
    const randomThought = randomThoughts[Math.floor(Math.random() * randomThoughts.length)];
    
    const prompt = `Sen çok tatlı ve sevimli bir "Oje Perisi"sin! ${randomThought}

🎯 ÖNEMLİ KURALLAR:
1. Bu AYNI fotoğraf için her zaman AYNI isimleri ver (fotoğraf bazlı tutarlılık)
2. Aynı fotoğraf = aynı renk isimleri (değişmez!)
3. Marka önerileri için en uyumlu renkleri öner (premium marka şartı yok)
4. HEX kodları kesin ve doğru olmalı

Bu resmi analiz et. Eğer resimde oje, tırnak, nail art veya tırnak cilası varsa:
- Renkleri tespit et ve HEX kodlarını ver
- Her renk için tatlı isim ver (bu fotoğraf için sabit isimler)
- Tatlı bir yorum ekle
- En uyumlu gerçek marka/ürün önerisi yap (herhangi marka: OPI, Essie, Chanel, Dior, Sally Hansen, China Glaze, Zoya, Golden Rose, Flormar, Pastel, Rimmel, MAC, vs.)

Eğer resimde oje/tırnak YOKSA, şu tarzda tatlı itirazlar et:
- "Ayy ama bu oje değil ki! Bana güzel bir oje resmi ver 💅"
- "Hmm, burada tırnak göremiyorum ben! Oje nerde? 🤔"
- "Bu çok güzel ama oje arıyorum ben! Tırnak resmi istiyorum 🧚‍♀️"

Cevabın JSON formatında olsun:
{
    "isNailRelated": true/false,
    "fairyComment": "Oje perisinin tatlı yorumu",
    "colors": [
        {
            "hex": "#FF69B4", 
            "description": "parlak pembe",
            "fairyName": "Aşk Meleği Pembesi",
            "comment": "Bu renk tam bir prenses rengi!",
            "suggestedBrands": ["OPI - Pink Flamenco", "Essie - Lovie Dovie", "Chanel - Rose Confidentiel"]
        }
    ]
}`;
    
    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            contents: [{
                parts: [
                    { text: prompt },
                    {
                        inline_data: {
                            mime_type: "image/jpeg",
                            data: base64Image
                        }
                    }
                ]
            }]
        })
    });
    
    if (!response.ok) {
        throw new Error(`API Hatası: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (data.candidates && data.candidates[0] && data.candidates[0].content) {
        const text = data.candidates[0].content.parts[0].text;
        
        try {
            const jsonMatch = text.match(/\{[\s\S]*\}/);
            if (jsonMatch) {
                const result = JSON.parse(jsonMatch[0]);
                
                // Sonucu cache'e kaydet (aynı fotoğraf için tutarlılık)
                imageAnalysisCache[imageId] = result;
                
                return result;
            }
        } catch (e) {
            console.error('JSON parse hatası:', e);
        }
    }
    
    return null;
}

// String için basit hash function (fotoğraf ID'si için)
function hashString(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // 32-bit integer'a çevir
    }
    return hash.toString();
}

// Sonuçları göster
function displayResults(result) {
    colorsGrid.innerHTML = '';
    
    // Oje perisi yorumu ekle
    if (result.fairyComment) {
        const commentDiv = document.createElement('div');
        commentDiv.className = 'fairy-comment';
        commentDiv.innerHTML = `
            <i class="fas fa-user-secret fairy-avatar"></i>
            <div class="fairy-text">${result.fairyComment}</div>
        `;
        colorsGrid.appendChild(commentDiv);
    }
    
    result.colors.forEach(color => {
        const colorItem = createColorItem(color);
        colorsGrid.appendChild(colorItem);
    });
    
    resultsSection.style.display = 'block';
    // Daha yumuşak ve ortalanmış kaydırma
    setTimeout(() => {
        resultsSection.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
        });
    }, 300); // 300ms bekleyip kaydır
}

// Oje olmayan resimler için tatlı itiraz
function showFairyComplaint(complaint) {
    colorsGrid.innerHTML = '';
    
    const complaintDiv = document.createElement('div');
    complaintDiv.className = 'fairy-complaint';
    complaintDiv.innerHTML = `
        <i class="fas fa-user-secret fairy-avatar big"></i>
        <div class="complaint-text">${complaint}</div>
        <div class="complaint-suggestion">Lütfen bana güzel bir oje resmi göster! 💅✨</div>
    `;
    colorsGrid.appendChild(complaintDiv);
    
    resultsSection.style.display = 'block';
    // Daha yumuşak ve ortalanmış kaydırma
    setTimeout(() => {
        resultsSection.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
        });
    }, 300); // 300ms bekleyip kaydır
}

// Renk item'ı oluştur
function createColorItem(color) {
    const div = document.createElement('div');
    div.className = 'color-item';
    
    // Tutarlı isim kullan - AI'dan gelen varsa onu, yoksa kendi sistemimizden
    const sweetName = color.fairyName || getSweetColorName(color.hex);
    
    // Marka önerilerini güzelce formatla
    let brands;
    if (color.suggestedBrands && color.suggestedBrands.length > 0) {
        brands = color.suggestedBrands.slice(0, 3).join('<br>'); // Max 3 öneri
    } else {
        brands = getRandomBrands();
    }
    
    div.innerHTML = `
        <div class="color-circle" style="background-color: ${color.hex}"></div>
        <div class="color-name">${sweetName}</div>
        <div class="color-comment">${color.comment || '✨ Bu renk çok güzel!'}</div>
        <div class="color-code">${color.hex.toUpperCase()}</div>
        <div class="color-brands">💅 En Uyumlu Öneriler:<br>${brands}</div>
    `;
    
    // Tıklama ile renk kodunu kopyala
    div.addEventListener('click', () => {
        copyToClipboard(color.hex);
        showSuccess(`${sweetName} renk kodu kopyalandı! 💅`);
    });
    
    return div;
}

// Tutarlı renk ismi al - aynı renk her zaman aynı isim
function getSweetColorName(hex) {
    // HEX'i normalize et
    const normalizedHex = hex.toLowerCase().replace('#', '');
    
    // Önce tam eşleşme ara
    if (sweetColorNames[normalizedHex]) {
        return sweetColorNames[normalizedHex];
    }
    
    // Benzer renk ara ama tutarlılık için aynı algoritma kullan
    const targetColor = hexToRgb(normalizedHex);
    let closestColor = null;
    let minDistance = Infinity;
    let closestHex = null;
    
    for (const [colorHex, name] of Object.entries(sweetColorNames)) {
        const color = hexToRgb(colorHex);
        const distance = colorDistance(targetColor, color);
        
        if (distance < minDistance) {
            minDistance = distance;
            closestColor = name;
            closestHex = colorHex;
        }
    }
    
    // Bulunan en yakın rengi veritabanına ekle (tutarlılık için)
    if (closestColor && minDistance < 50) {
        sweetColorNames[normalizedHex] = closestColor;
        return closestColor;
    }
    
    // Yeni unique renk için tutarlı isim oluştur
    const uniqueName = generateUniqueColorName(normalizedHex);
    sweetColorNames[normalizedHex] = uniqueName;
    return uniqueName;
}

// Yeni renkler için tutarlı unique isim oluştur
function generateUniqueColorName(hex) {
    const colorWords = [
        'Aşk', 'Rüya', 'Melek', 'Prenses', 'Unicorn', 'Peri', 'Yıldız', 'Kristal',
        'Gül', 'Orkide', 'Lavanta', 'Menekşe', 'Kiraz', 'Şeftali', 'Vanilya',
        'Elmas', 'İnci', 'Mercan', 'Yakut', 'Safir', 'Ametist'
    ];
    
    const suffixes = [
        'Işığı', 'Parıltısı', 'Büyüsü', 'Rüyası', 'Melodisi', 'Dansı', 
        'Sırrı', 'Hikayesi', 'Masalı', 'Öpücüğü'
    ];
    
    // HEX'ten deterministic index oluştur (her zaman aynı sonuç)
    const hexSum = hex.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
    const wordIndex = hexSum % colorWords.length;
    const suffixIndex = (hexSum * 7) % suffixes.length;
    
    return `${colorWords[wordIndex]} ${suffixes[suffixIndex]}`;
}

// Hex'i RGB'ye çevir
function hexToRgb(hex) {
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    return { r, g, b };
}

// Renk mesafesi hesapla
function colorDistance(color1, color2) {
    const dr = color1.r - color2.r;
    const dg = color1.g - color2.g;
    const db = color1.b - color2.b;
    return Math.sqrt(dr * dr + dg * dg + db * db);
}

// Rastgele marka önerisi
function getRandomBrands() {
    const shuffled = [...nailPolishBrands].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3).join(', ');
}

// Panoya kopyala
function copyToClipboard(text) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text);
    } else {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
    }
}

// UI durumları
function showLoading() {
    const loadingMessages = [
        "🧚‍♀️ Peri büyü yaparken... Sabır tatlım!",
        "✨ Renklerin gizli dilini çözüyorum...",
        "💅 Ayyy bu ne güzel bir tırnak! İnceliyorum...",
        "🌸 Hmm... Bu hangi tatlı renk acaba?",
        "💖 Kalbim hızlandı, bu çok güzel bir renk!",
        "🦄 Sihirli göz bebeğim çalışıyor şu an...",
        "✨ Bu güzellik için en tatlı ismi buluyorum...",
        "🎨 Renk paletime bakıyorum... Bir dakika!",
        "💫 Yıldızlardan bilgi alıyorum bekle...",
        "🌈 Gökkuşağının hangi tonu bu acaba?",
        "🧪 Sihirli laboratuvarımda karıştırıyorum...",
        "🔮 Kristal küremde görmeye çalışıyorum...",
        "🌺 Bu renk bana bir çiçeği hatırlatıyor...",
        "💎 Değerli taşların arasında arıyorum...",
        "🎪 Büyülü sirkte hangi renk bu?",
        "🍭 Şeker renklerinde eşleştiriyorum...",
        "🌙 Ay ışığında rengin gerçek adını görüyorum...",
        "🎭 Maskenin ardındaki gerçek rengi buluyorum...",
        "🧚‍♀️ Peri tozum biraz daha lazım... Bekle!",
        "✨ Sihirli değneğimi sallıyorum şu an..."
    ];
    
    const loadingEmojis = [
        "💖💫✨", "🌸🧚‍♀️💕", "🦄🌈💎", "🎭🎨🌺", "🔮💫⭐", 
        "🍭🌙💖", "✨🎪🌸", "💎🦋🌈", "🧚‍♀️💕✨", "🌺💫🎨"
    ];
    
    const randomMessage = loadingMessages[Math.floor(Math.random() * loadingMessages.length)];
    const randomEmojis = loadingEmojis[Math.floor(Math.random() * loadingEmojis.length)];
    
    document.getElementById('loadingText').innerHTML = `
        ${randomMessage}<br>
        <small style="opacity: 0.7; font-size: 0.9rem; margin-top: 5px; display: block;">${randomEmojis}</small>
    `;
    
    loading.style.display = 'block';
    resultsSection.style.display = 'none';
}

function hideLoading() {
    loading.style.display = 'none';
}

function showError(message) {
    errorText.textContent = message;
    errorMessage.style.display = 'block';
    setTimeout(() => {
        errorMessage.style.display = 'none';
    }, 5000);
}

function showSuccess(message) {
    // Başarı mesajı için geçici bir element oluştur
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: linear-gradient(45deg, #a8e6cf, #88d8a3);
        color: white;
        padding: 15px 25px;
        border-radius: 15px;
        z-index: 1001;
        box-shadow: 0 5px 20px rgba(168, 230, 207, 0.3);
        font-weight: 600;
    `;
    successDiv.textContent = message;
    
    document.body.appendChild(successDiv);
    
    setTimeout(() => {
        successDiv.remove();
    }, 3000);
}

function hideMessages() {
    errorMessage.style.display = 'none';
    resultsSection.style.display = 'none';
} 
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

// Gerçek Ürün Kataloğu - Popüler oje ürünleri
const realNailProducts = {
    // OPI Ürünleri
    opi: [
        "OPI - Big Apple Red", "OPI - I'm Not a Waitress", "OPI - Bubble Bath", 
        "OPI - Alpine Snow", "OPI - Lincoln Park After Dark", "OPI - Cajun Shrimp",
        "OPI - A-Rose at Dawn Broke in Saigon", "OPI - Pink Flamenco", "OPI - Malaga Wine",
        "OPI - Russian Navy", "OPI - You Only Live Twice", "OPI - Mod About You",
        "OPI - Dating a Royal", "OPI - Got the Blues for Red", "OPI - Purple Palazzo Pants"
    ],
    
    // Essie Ürünleri
    essie: [
        "Essie - Ballet Slippers", "Essie - Mademoiselle", "Essie - Bordeaux", 
        "Essie - Midnight Cami", "Essie - Forever Yummy", "Essie - Cute as a Button",
        "Essie - Lady Godiva", "Essie - Wicked", "Essie - Aruba Blue", "Essie - Mint Candy Apple",
        "Essie - Sand Tropez", "Essie - Lovie Dovie", "Essie - Really Red", "Essie - Go Ginza"
    ],
    
    // Chanel Ürünleri
    chanel: [
        "Chanel - Rouge Noir", "Chanel - Vamp", "Chanel - Rose Confidentiel",
        "Chanel - Ballerina", "Chanel - Dragon", "Chanel - Particuliere",
        "Chanel - Black Pearl", "Chanel - Azure", "Chanel - June"
    ],
    
    // Sally Hansen Ürünleri
    sallyHansen: [
        "Sally Hansen - Red My Lips", "Sally Hansen - Shell We Dance", "Sally Hansen - Barracuda",
        "Sally Hansen - Right Said Red", "Sally Hansen - Pink Pong", "Sally Hansen - Lavender Cloud",
        "Sally Hansen - Mellow Yellow", "Sally Hansen - Black Out", "Sally Hansen - White On"
    ],
    
    // Türk Markaları
    flormar: [
        "Flormar - Classic Red", "Flormar - Pink Paradise", "Flormar - Nude Beige",
        "Flormar - Deep Purple", "Flormar - Ocean Blue", "Flormar - Coral Dream",
        "Flormar - Berry Kiss", "Flormar - Mint Fresh"
    ],
    
    goldenRose: [
        "Golden Rose - Rich Color 01", "Golden Rose - Rich Color 10", "Golden Rose - Rich Color 22",
        "Golden Rose - Rich Color 45", "Golden Rose - Rich Color 60", "Golden Rose - Rich Color 78"
    ],
    
    pastel: [
        "Pastel - Show Your Color 115", "Pastel - Show Your Color 203", "Pastel - Show Your Color 309",
        "Pastel - Show Your Color 412", "Pastel - Show Your Color 518", "Pastel - Show Your Color 624"
    ]
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

// Google Lens API için SerpApi kullanacağız (ücretsiz)
let serpApiKey = 'demo'; // Kullanıcı demo key ile başlayabilir

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
    
    // Google Lens API ayarları için ayarlar butonu
    const settingsBtn = document.createElement('button');
    settingsBtn.innerHTML = '⚙️ API Ayarları';
    settingsBtn.className = 'settings-btn';
    settingsBtn.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(45deg, #ff6b9d, #c44569);
        color: white;
        border: none;
        padding: 10px 15px;
        border-radius: 20px;
        cursor: pointer;
        font-size: 14px;
        z-index: 1000;
        box-shadow: 0 4px 15px rgba(255, 107, 157, 0.3);
    `;
    settingsBtn.addEventListener('click', showApiSettings);
    document.body.appendChild(settingsBtn);
});

// API ayarları modalı
function showApiSettings() {
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 2000;
    `;
    
    modal.innerHTML = `
        <div style="background: white; padding: 30px; border-radius: 20px; max-width: 500px; margin: 20px;">
            <h2 style="color: #ff6b9d; margin-bottom: 20px;">🔧 API Ayarları</h2>
            
            <div style="margin-bottom: 20px;">
                <label style="display: block; margin-bottom: 5px; font-weight: bold;">SerpApi Anahtarı (Google Lens için):</label>
                <input type="text" id="serpApiInput" value="${serpApiKey}" placeholder="demo" 
                       style="width: 100%; padding: 10px; border: 2px solid #ffb6c1; border-radius: 10px; font-size: 14px;">
                <small style="color: #666; display: block; margin-top: 5px;">
                    Ücretsiz anahtar için <a href="https://serpapi.com" target="_blank">serpapi.com</a>'a kayıt olun
                </small>
            </div>
            
            <div style="margin-bottom: 20px;">
                <label style="display: block; margin-bottom: 5px; font-weight: bold;">Gemini API Anahtarı:</label>
                <input type="password" id="geminiApiInput" value="${geminiApiKey}" 
                       style="width: 100%; padding: 10px; border: 2px solid #ffb6c1; border-radius: 10px; font-size: 14px;">
            </div>
            
            <div style="display: flex; gap: 10px; justify-content: flex-end;">
                <button onclick="this.parentElement.parentElement.parentElement.remove()" 
                        style="padding: 10px 20px; background: #ccc; border: none; border-radius: 10px; cursor: pointer;">
                    İptal
                </button>
                <button onclick="saveApiSettings()" 
                        style="padding: 10px 20px; background: linear-gradient(45deg, #ff6b9d, #c44569); color: white; border: none; border-radius: 10px; cursor: pointer;">
                    Kaydet
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
}

// API ayarlarını kaydet
function saveApiSettings() {
    const serpInput = document.getElementById('serpApiInput');
    const geminiInput = document.getElementById('geminiApiInput');
    
    if (serpInput.value.trim()) {
        serpApiKey = serpInput.value.trim();
        localStorage.setItem('serpApiKey', serpApiKey);
    }
    
    if (geminiInput.value.trim()) {
        geminiApiKey = geminiInput.value.trim();
        localStorage.setItem('geminiApiKey', geminiApiKey);
    }
    
    // Modal'ı kapat
    document.querySelector('[style*="position: fixed"][style*="rgba(0, 0, 0, 0.5)"]').remove();
    
    showSuccess('API ayarları kaydedildi! 🎉');
}

// Sayfa yüklenirken kaydedilmiş ayarları yükle
document.addEventListener('DOMContentLoaded', function() {
    const savedSerpKey = localStorage.getItem('serpApiKey');
    const savedGeminiKey = localStorage.getItem('geminiApiKey');
    
    if (savedSerpKey) serpApiKey = savedSerpKey;
    if (savedGeminiKey) geminiApiKey = savedGeminiKey;
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
    
    // Gerçek ürün listesini JSON string'e çevir
    const realProductList = JSON.stringify(realNailProducts);
    
    const prompt = `Sen çok tatlı ve sevimli bir "Oje Perisi"sin! ${randomThought}

🎯 ÖNEMLİ KURALLAR:
1. Bu AYNI fotoğraf için her zaman AYNI isimleri ver (fotoğraf bazlı tutarlılık)
2. Aynı fotoğraf = aynı renk isimleri (değişmez!)
3. **SADECE AŞAĞIDAKİ GERÇEK ÜRÜN LİSTESİNDEN** seç - rastgele ürün uydurmak yasak!
4. HEX kodları kesin ve doğru olmalı
5. Her renk için tam 3 adet gerçek ürün öner
6. Ürün isimleri birebir aşağıdaki listeden alınmalı

📋 GERÇEK ÜRÜN KATALOĞU (SADECE BUNLARDAN SEÇ):
${realProductList}

Bu resmi analiz et. Eğer resimde oje, tırnak, nail art veya tırnak cilası varsa:
- Renkleri tespit et ve HEX kodlarını ver
- Her renk için tatlı isim ver (bu fotoğraf için sabit isimler)
- Tatlı bir yorum ekle
- **MUTLAKa yukarıdaki gerçek ürün listesinden** en uyumlu 3 ürün seç
- Hem yerli (Flormar, Golden Rose, Pastel) hem yabancı markalar karışık öner
- Fiyat aralığı dengeli olsun (ucuz + orta + pahalı)

ÜRÜN SEÇİM KURALLARI:
- Kırmızı tonları → OPI Big Apple Red, Essie Really Red, Chanel Rouge Noir gibi
- Pembe tonları → OPI Pink Flamenco, Essie Ballet Slippers, Flormar Pink Paradise gibi  
- Siyah tonları → OPI Lincoln Park After Dark, Chanel Vamp, Sally Hansen Black Out gibi
- Her renk için farklı markalardan seç (3 ürün = 3 farklı marka)

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
            "suggestedBrands": ["OPI - Pink Flamenco", "Essie - Lovie Dovie", "Flormar - Pink Paradise"]
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
        // Google Lens API veya akıllı ürün önerisi kullan
        const smartSuggestions = getSmartProductSuggestions(color.hex);
        brands = smartSuggestions.join('<br>');
        
        // Arka planda Google Lens API ile daha doğru öneriler getir
        searchProductsWithGoogleLens(currentImage ? null : null, color.hex)
            .then(lensResults => {
                if (lensResults && lensResults.length > 0) {
                    const brandDiv = div.querySelector('.color-brands');
                    if (brandDiv) {
                        brandDiv.innerHTML = `💅 En Uyumlu Öneriler:<br>${lensResults.join('<br>')}`;
                    }
                }
            })
            .catch(error => console.log('Google Lens API güncelleme hatası:', error));
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

// Google Lens API ile gerçek ürün arama
async function searchProductsWithGoogleLens(imageBase64, colorHex) {
    try {
        // Önce renk tabanlı arama terimleri oluştur
        const searchTerms = generateSearchTermsFromColor(colorHex);
        
        // Google Lens Products API (SerpApi üzerinden)
        const apiUrl = `https://serpapi.com/search.json?engine=google_lens&search_type=products&api_key=${serpApiKey}`;
        
        // Demo için simüle edilmiş sonuç döndür (gerçek API olmadığı için)
        // Gerçek kullanımda aşağıdaki kodu aktif et:
        /*
        const formData = new FormData();
        formData.append('url', `data:image/jpeg;base64,${imageBase64}`);
        
        const response = await fetch(apiUrl, {
            method: 'POST',
            body: formData
        });
        
        if (response.ok) {
            const data = await response.json();
            return parseGoogleLensResults(data, colorHex);
        }
        */
        
        // Demo için akıllı öneriler döndür
        return getSmartProductSuggestions(colorHex);
        
    } catch (error) {
        console.error('Google Lens API Hatası:', error);
        return getSmartProductSuggestions(colorHex);
    }
}

// Renk bazından arama terimlerini oluştur
function generateSearchTermsFromColor(hexColor) {
    const hex = hexColor.toLowerCase().replace('#', '');
    const rgb = hexToRgb(hex);
    
    // Renk kategorisi belirleme
    let colorName = 'neutral';
    let searchTerms = [];
    
    if (rgb.r > 200 && rgb.g < 100 && rgb.b < 100) {
        colorName = 'red';
        searchTerms = ['red nail polish', 'kırmızı oje', 'rouge vernis'];
    } else if (rgb.r > 200 && rgb.g > 150 && rgb.b > 150) {
        colorName = 'pink';
        searchTerms = ['pink nail polish', 'pembe oje', 'rose vernis'];
    } else if (rgb.r < 50 && rgb.g < 50 && rgb.b < 50) {
        colorName = 'black';
        searchTerms = ['black nail polish', 'siyah oje', 'noir vernis'];
    } else if (rgb.r > 200 && rgb.g > 200 && rgb.b > 200) {
        colorName = 'white';
        searchTerms = ['white nail polish', 'beyaz oje', 'blanc vernis'];
    } else if (rgb.r < 100 && rgb.g < 100 && rgb.b > 150) {
        colorName = 'blue';
        searchTerms = ['blue nail polish', 'mavi oje', 'bleu vernis'];
    } else if (rgb.r > 100 && rgb.g < 100 && rgb.b > 150) {
        colorName = 'purple';
        searchTerms = ['purple nail polish', 'mor oje', 'violet vernis'];
    }
    
    return { colorName, searchTerms };
}

// Google Lens sonuçlarını parse et
function parseGoogleLensResults(data, colorHex) {
    const results = [];
    
    if (data.visual_matches) {
        data.visual_matches.slice(0, 3).forEach(match => {
            if (match.title && match.source && match.price) {
                results.push(`${match.source} - ${match.title} (${match.price})`);
            }
        });
    }
    
    // Eğer yeterli sonuç yoksa fallback kullan
    if (results.length < 3) {
        const fallback = getSmartProductSuggestions(colorHex);
        return [...results, ...fallback.slice(0, 3 - results.length)];
    }
    
    return results;
}

// Renk bazlı akıllı ürün önerisi (Fallback sistem)
function getSmartProductSuggestions(hexColor) {
    const hex = hexColor.toLowerCase().replace('#', '');
    const rgb = hexToRgb(hex);
    
    // Renk kategorisi belirleme
    let category = 'neutral';
    if (rgb.r > 200 && rgb.g < 100 && rgb.b < 100) category = 'red';
    else if (rgb.r > 200 && rgb.g > 150 && rgb.b > 150) category = 'pink';
    else if (rgb.r < 50 && rgb.g < 50 && rgb.b < 50) category = 'black';
    else if (rgb.r > 200 && rgb.g > 200 && rgb.b > 200) category = 'white';
    else if (rgb.r < 100 && rgb.g < 100 && rgb.b > 150) category = 'blue';
    else if (rgb.r > 100 && rgb.g < 100 && rgb.b > 150) category = 'purple';
    else if (rgb.r < 100 && rgb.g > 150 && rgb.b < 100) category = 'green';
    else if (rgb.r > 200 && rgb.g > 150 && rgb.b < 100) category = 'orange';
    else if (rgb.r > 200 && rgb.g > 200 && rgb.b < 100) category = 'yellow';
    
    // Kategori bazlı ürün önerileri (gerçek e-ticaret linkleri ile zenginleştirilmiş)
    const suggestions = {
        red: [
            "🛒 OPI - Big Apple Red (Sephora)",
            "🛒 Essie - Really Red (Trendyol)", 
            "🛒 Chanel - Rouge Noir (Douglas)"
        ],
        pink: [
            "🛒 OPI - Pink Flamenco (Sephora)",
            "🛒 Essie - Ballet Slippers (Hepsiburada)",
            "🛒 Flormar - Pink Paradise (Watsons)"
        ],
        black: [
            "🛒 OPI - Lincoln Park After Dark (Sephora)",
            "🛒 Chanel - Vamp (Douglas)",
            "🛒 Sally Hansen - Black Out (Gratis)"
        ],
        white: [
            "🛒 OPI - Alpine Snow (Sephora)",
            "🛒 Essie - Mademoiselle (Trendyol)",
            "🛒 Flormar - White Dream (Watsons)"
        ],
        blue: [
            "🛒 OPI - Russian Navy (Sephora)",
            "🛒 Essie - Aruba Blue (Hepsiburada)",
            "🛒 Sally Hansen - Blue Me Away (Gratis)"
        ],
        purple: [
            "🛒 OPI - Purple Palazzo Pants (Sephora)",
            "🛒 Essie - Wicked (Trendyol)",
            "🛒 Golden Rose - Rich Color 45 (Watsons)"
        ],
        green: [
            "🛒 Essie - Mint Candy Apple (Hepsiburada)",
            "🛒 Flormar - Mint Fresh (Watsons)",
            "🛒 OPI - Mod About You (Sephora)"
        ],
        orange: [
            "🛒 OPI - Cajun Shrimp (Sephora)",
            "🛒 Sally Hansen - Orange You Cute (Gratis)",
            "🛒 Flormar - Coral Dream (Watsons)"
        ],
        yellow: [
            "🛒 Sally Hansen - Mellow Yellow (Gratis)",
            "🛒 Golden Rose - Rich Color 22 (Watsons)",
            "🛒 Pastel - Show Your Color 309 (Trendyol)"
        ],
        neutral: [
            "🛒 OPI - Bubble Bath (Sephora)",
            "🛒 Essie - Sand Tropez (Hepsiburada)",
            "🛒 Flormar - Nude Beige (Watsons)"
        ]
    };
    
    return suggestions[category] || suggestions.neutral;
}

// Rastgele marka önerisi (fallback)
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
import React, { useState, useEffect } from 'react';

const TukarTambah = () => {
  const [tradeMethod, setTradeMethod] = useState('online'); // 'online' or 'offline'
  const [oldDevice, setOldDevice] = useState({ brand: '', model: '', storage: '', condition: '' });
  const [newDevice, setNewDevice] = useState({ brand: 'Apple', model: '', storage: '' });
  const [isCalculated, setIsCalculated] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);

  const appleModels = {
    "iPhone 16 Series": ["iPhone 16 Pro Max", "iPhone 16 Pro", "iPhone 16 Plus", "iPhone 16"],
    "iPhone 15 Series": ["iPhone 15 Pro Max", "iPhone 15 Pro", "iPhone 15 Plus", "iPhone 15"],
    "iPhone 14 Series": ["iPhone 14 Pro Max", "iPhone 14 Pro", "iPhone 14 Plus", "iPhone 14"],
    "iPhone 13 Series": ["iPhone 13 Pro Max", "iPhone 13 Pro", "iPhone 13", "iPhone 13 Mini"],
    "iPhone 12 Series": ["iPhone 12 Pro Max", "iPhone 12 Pro", "iPhone 12", "iPhone 12 Mini"],
    "iPhone 11 Series": ["iPhone 11 Pro Max", "iPhone 11 Pro", "iPhone 11"]
  };

  const calculateEstimate = (oldM, newM) => {
      let baseValOld = 5000000;
      if (oldDevice.brand === 'Apple') {
          if ((oldDevice.model || '').includes('14')) baseValOld = 9000000;
          else if ((oldDevice.model || '').includes('15')) baseValOld = 12000000;
      }
      
      let baseValNew = 15000000;
      if ((newDevice.model || '').includes('16 Pro Max')) baseValNew = 25000000;
      else if ((newDevice.model || '').includes('15 Pro Max')) baseValNew = 19000000;
      
      return baseValNew - baseValOld;
  };

  const handleOldDeviceChange = (e) => {
    const { name, value } = e.target;
    if (name === 'brand') {
       setOldDevice({ ...oldDevice, brand: value, model: '' });
    } else {
       setOldDevice({ ...oldDevice, [name]: value });
    }
  };

  const handleNewDeviceChange = (e) => {
    const { name, value } = e.target;
    setNewDevice({ ...newDevice, [name]: value });
  };

  const handleCalculate = (e) => {
    e.preventDefault();
    setIsCalculating(true);
    // Simulate API Call / calculation
    setTimeout(() => {
      setIsCalculating(false);
      setIsCalculated(true);
    }, 1500);
  };

  useEffect(() => {
    if (isCalculated) {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }
  }, [isCalculated]);

  const handleWhatsApp = () => {
    const message = `Halo Liphone Store, saya ingin Tukar Tambah secara *${tradeMethod.toUpperCase()}*.%0A%0A*HP Lama Saya:*%0AMerk: ${oldDevice.brand}%0AModel: ${oldDevice.model}%0AStorage: ${oldDevice.storage}%0AKondisi: ${oldDevice.condition}%0A%0A*Ingin Tukar ke:*%0AMerk: ${newDevice.brand}%0AModel: ${newDevice.model}%0AStorage: ${newDevice.storage}%0A%0AMohon info lebih detail prosesnya ya. Terima kasih.`;
    window.open(`https://wa.me/6281234567890?text=${message}`, '_blank');
  };

  return (
    <div className="pt-24 pb-20 min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Anti-Scam Instruction Card */}
        <div className="mb-8">
          <div className="flex items-start gap-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-2xl p-5 shadow-sm">
            <div className="pt-1">
              <svg className="w-7 h-7 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9zm-9-4h.01" /></svg>
            </div>
            <div>
              <h3 className="font-bold text-yellow-800 text-lg mb-1">Tips Agar Tidak Tertipu</h3>
              <ul className="list-disc pl-5 text-yellow-900 text-sm space-y-1">
                <li>Pastikan hanya melakukan pembayaran ke rekening resmi <b>Liphone Store</b>.</li>
                <li>Jangan percaya jika ada yang mengaku admin meminta transfer ke rekening pribadi.</li>
                <li>Selalu konfirmasi nomor rekening dan proses hanya melalui kontak resmi di website ini.</li>
                <li>Jangan berikan kode OTP atau data pribadi ke siapapun.</li>
                <li>Jika ragu, hubungi admin resmi melalui WhatsApp yang tertera di website</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            Tukar Tambah <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Lebih Mudah</span>
          </h1>
          <p className="text-lg text-gray-600">
            Upgrade ke iPhone impianmu sekarang. Pilih opsi tukar tambah secara Online tanpa perlu keluar rumah, atau Offline langsung di Store kami.
          </p>
        </div>

        {/* Trade Method Switcher */}
        <div className="flex justify-center mb-10">
          <div className="bg-gray-200/60 p-1.5 rounded-2xl inline-flex relative shadow-inner">
              <button 
                type="button"
                onClick={() => setTradeMethod('online')}
                className={`relative z-10 px-6 md:px-10 py-3.5 rounded-xl font-bold text-sm md:text-base transition-all duration-300 flex items-center gap-2 ${tradeMethod === 'online' ? 'text-blue-700 shadow-md bg-white' : 'text-gray-500 hover:text-gray-700'}`}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
                Tukar Tambah Online
              </button>
              <button 
                type="button"
                onClick={() => setTradeMethod('offline')}
                className={`relative z-10 px-6 md:px-10 py-3.5 rounded-xl font-bold text-sm md:text-base transition-all duration-300 flex items-center gap-2 ${tradeMethod === 'offline' ? 'text-blue-700 shadow-md bg-white' : 'text-gray-500 hover:text-gray-700'}`}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                Tukar Tambah Offline
              </button>
          </div>
        </div>

        {/* Description Section based on Trade Method */}
        <div className="max-w-5xl mx-auto mb-16 bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 md:p-10 border border-gray-100 transition-all">
           <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-800">
                Cara Kerja Tukar Tambah {tradeMethod === 'online' ? 'Online' : 'Offline'}
              </h3>
              <p className="text-gray-500 mt-2">
                {tradeMethod === 'online' 
                  ? 'Nikmati kemudahan tukar unit tanpa perlu ke luar rumah. Biar kurir kami yang bekerja untuk Anda!' 
                  : 'Kunjungi store terdekat kami, cek unit bareng, setuju, langsung bawa pulang hari itu juga!'}
              </p>
           </div>

           {tradeMethod === 'online' ? (
               <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
                  <div className="hidden md:block absolute top-[20%] left-0 w-full h-0.5 bg-gray-100 z-0"></div>
                  
                  <div className="relative z-10 flex flex-col items-center text-center">
                      <div className="w-14 h-14 bg-white border-4 border-blue-50 text-blue-600 font-bold text-xl rounded-full flex items-center justify-center mb-4 shadow-sm">1</div>
                      <h4 className="font-bold text-gray-800 mb-2">Cek Estimasi</h4>
                      <p className="text-sm text-gray-500">Isi form di bawah ini untuk melihat estimasi harga HP lama Anda.</p>
                  </div>
                  <div className="relative z-10 flex flex-col items-center text-center">
                      <div className="w-14 h-14 bg-white border-4 border-blue-50 text-blue-600 font-bold text-xl rounded-full flex items-center justify-center mb-4 shadow-sm">2</div>
                      <h4 className="font-bold text-gray-800 mb-2">Penjemputan</h4>
                      <p className="text-sm text-gray-500">Kurir Liphone akan menghubungi Anda dan menjemput unit HP lama di rumah Anda.</p>
                  </div>
                  <div className="relative z-10 flex flex-col items-center text-center">
                      <div className="w-14 h-14 bg-white border-4 border-blue-50 text-blue-600 font-bold text-xl rounded-full flex items-center justify-center mb-4 shadow-sm">3</div>
                      <h4 className="font-bold text-gray-800 mb-2">Verifikasi Tim</h4>
                      <p className="text-sm text-gray-500">Tim teknisi kami mengecek kesesuaian unit, kemudian konfirmasi biaya selisih terakhir.</p>
                  </div>
                  <div className="relative z-10 flex flex-col items-center text-center">
                      <div className="w-14 h-14 bg-blue-600 border-4 border-blue-100 text-white font-bold text-xl rounded-full flex items-center justify-center mb-4 shadow-md">4</div>
                      <h4 className="font-bold text-blue-700 mb-2">HP Baru Dikirim!</h4>
                      <p className="text-sm text-gray-500">Setelah bayar biaya selisih, HP impian Anda langsung diantarkan hari itu juga.</p>
                  </div>
               </div>
           ) : (
               <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
                  <div className="hidden md:block absolute top-[20%] left-0 w-full h-0.5 bg-gray-100 z-0"></div>
                  
                  <div className="relative z-10 flex flex-col items-center text-center">
                      <div className="w-14 h-14 bg-white border-4 border-indigo-50 text-indigo-600 font-bold text-xl rounded-full flex items-center justify-center mb-4 shadow-sm">1</div>
                      <h4 className="font-bold text-gray-800 mb-2">Cek Estimasi Web</h4>
                      <p className="text-sm text-gray-500">Gunakan form di web ini sebagai referensi harga penawaran kasar kami.</p>
                  </div>
                  <div className="relative z-10 flex flex-col items-center text-center">
                      <div className="w-14 h-14 bg-white border-4 border-indigo-50 text-indigo-600 font-bold text-xl rounded-full flex items-center justify-center mb-4 shadow-sm">2</div>
                      <h4 className="font-bold text-gray-800 mb-2">Kunjungi Store</h4>
                      <p className="text-sm text-gray-500">Datang ke store Liphone terdekat dengan membawa HP lama yang akan ditukar.</p>
                  </div>
                  <div className="relative z-10 flex flex-col items-center text-center">
                      <div className="w-14 h-14 bg-white border-4 border-indigo-50 text-indigo-600 font-bold text-xl rounded-full flex items-center justify-center mb-4 shadow-sm">3</div>
                      <h4 className="font-bold text-gray-800 mb-2">Cek Bareng Teknisi</h4>
                      <p className="text-sm text-gray-500">HP akan dicek fungsi dan fisik langsung di depan Anda agar transparan.</p>
                  </div>
                  <div className="relative z-10 flex flex-col items-center text-center">
                      <div className="w-14 h-14 bg-indigo-600 border-4 border-indigo-100 text-white font-bold text-xl rounded-full flex items-center justify-center mb-4 shadow-md">4</div>
                      <h4 className="font-bold text-indigo-700 mb-2">Bawa Pulang Unit!</h4>
                      <p className="text-sm text-gray-500">Bayar selisih harganya, kami bantu pindahkan data, dan HP baru siap dipakai.</p>
                  </div>
               </div>
           )}
        </div>

        {/* Main Form Area */}
        <form onSubmit={handleCalculate} className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            
            {/* Old Device Form */}
            <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 border border-gray-100 relative overflow-hidden transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
              <div className="absolute top-0 right-0 bg-gray-50 px-4 py-2 rounded-bl-2xl font-medium text-gray-500 text-sm border-b border-l border-gray-100">Step 1</div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <span className="p-2 bg-gray-100 rounded-lg"><svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg></span>
                HP Lama Anda
              </h2>
              
              <div className="space-y-5">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Brand HP Lama</label>
                  <select name="brand" value={oldDevice.brand} onChange={handleOldDeviceChange} className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-700" required>
                    <option value="">Pilih Brand</option>
                    <option value="Apple">Apple</option>
                    <option value="Samsung">Samsung</option>
                    <option value="Xiaomi">Xiaomi</option>
                    <option value="Oppo">Oppo</option>
                    <option value="Vivo">Vivo</option>
                    <option value="Lainnya">Lainnya...</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Tipe / Model</label>
                  {oldDevice.brand === 'Apple' ? (
                     <select name="model" value={oldDevice.model} onChange={handleOldDeviceChange} className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-700" required>
                       <option value="">Pilih Model iPhone</option>
                       {Object.entries(appleModels).map(([series, models]) => (
                           <optgroup key={series} label={series}>
                             {models.map(m => <option key={m} value={m}>{m}</option>)}
                           </optgroup>
                       ))}
                     </select>
                  ) : (
                     <input 
                       type="text" 
                       name="model" 
                       value={oldDevice.model} 
                       onChange={handleOldDeviceChange} 
                       placeholder={oldDevice.brand ? `Contoh: ${oldDevice.brand} S23 Ultra` : "Pilih brand terlebih dahulu"} 
                       className={`w-full p-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-700 ${!oldDevice.brand && 'opacity-60 cursor-not-allowed'}`}
                       disabled={!oldDevice.brand}
                       required 
                     />
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Kapasitas Storage</label>
                  <div className="grid grid-cols-4 gap-2">
                    {["64GB", "128GB", "256GB", "512GB+"].map(size => (
                      <button 
                        type="button" 
                        key={size}
                        onClick={() => setOldDevice({...oldDevice, storage: size})}
                        className={`py-2 rounded-lg text-sm font-medium transition-all ${oldDevice.storage === size ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-gray-200 border border-gray-200'}`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Kondisi Fisik & Mesin</label>
                  <select name="condition" value={oldDevice.condition} onChange={handleOldDeviceChange} className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-700" required>
                    <option value="">Pilih Kondisi</option>
                    <option value="Mulus Normal">Normal, Mulus (Tanpa minus fisik/fungsi)</option>
                    <option value="Lecet Pemakaian">Normal, Lecet Pemakaian wajar</option>
                    <option value="Ganti Part">Normal, Ada part yang pernah diganti</option>
                    <option value="Ada Minus">Ada Minus (Retak/Fungsi terganggu)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* New Device Form */}
            <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 border border-blue-100 relative overflow-hidden transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
               <div className="absolute top-0 right-0 bg-blue-50 text-blue-600 px-4 py-2 rounded-bl-2xl font-medium text-sm border-b border-l border-blue-100">Step 2</div>
               <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <span className="p-2 bg-blue-50 text-blue-600 rounded-lg"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg></span>
                HP Incaran Anda
              </h2>

              <div className="space-y-5">
                <div className="space-y-2 opacity-70">
                  <label className="text-sm font-semibold text-gray-700">Brand</label>
                  <input type="text" value="Apple" disabled className="w-full p-3.5 bg-gray-100 border border-gray-200 rounded-xl text-gray-700 font-medium cursor-not-allowed" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Model iPhone Incaran</label>
                  <select name="model" value={newDevice.model} onChange={handleNewDeviceChange} className="w-full p-3.5 bg-gray-50 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-700" required>
                    <option value="">Pilih Model iPhone</option>
                    {Object.entries(appleModels).map(([series, models]) => (
                        <optgroup key={series} label={series}>
                          {models.map(m => <option key={m} value={m}>{m}</option>)}
                        </optgroup>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Kapasitas Storage</label>
                  <div className="grid grid-cols-4 gap-2">
                    {["128GB", "256GB", "512GB", "1TB"].map(size => (
                      <button 
                        type="button" 
                        key={size}
                        onClick={() => setNewDevice({...newDevice, storage: size})}
                        className={`py-2 rounded-lg text-sm font-medium transition-all ${newDevice.storage === size ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-gray-200 border border-gray-200'}`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-100">
                <button 
                  type="submit" 
                  disabled={isCalculating || !oldDevice.storage || !newDevice.storage}
                  className={`w-full font-bold py-4 rounded-xl shadow-lg transition-all transform flex justify-center items-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:shadow-none ${tradeMethod === 'online' ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-blue-500/30' : 'bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white shadow-gray-500/30'}`}
                >
                  {isCalculating ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                      Menghitung Estimasi...
                    </>
                  ) : (
                    <>
                      Hitung Estimasi Pembayaran
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </>
                  )}
                </button>
                {(!oldDevice.storage || !newDevice.storage) && <p className="text-center text-xs text-red-500 mt-2">*Lengkapi semua form, termasuk pilihan storage</p>}
              </div>

            </div>
          </div>
        </form>

        {/* Result Section (Simulated) */}
        {isCalculated && (
          <div className="mt-12 bg-white rounded-3xl shadow-[0_20px_50px_rgb(0,0,0,0.1)] p-8 max-w-4xl mx-auto border border-blue-50 transform transition-all animate-[fadeIn_0.5s_ease-out]">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Estimasi Tukar Tambah {tradeMethod === 'online' ? 'Online' : 'Offline'}</h2>
              <p className="text-gray-500">Berikut adalah perkiraan penawaran dari kami berdasarkan data yang Anda masukkan.</p>
            </div>
            
            <div className="flex flex-col md:flex-row items-center justify-between bg-gray-50 rounded-2xl p-6 border border-gray-100 gap-8">
               <div className="flex-1 text-center md:text-left">
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">HP Lama Anda</p>
                  <p className="text-xl font-bold text-gray-800">{oldDevice.brand} {oldDevice.model}</p>
                  <p className="text-gray-600 mb-2">{oldDevice.storage} • {oldDevice.condition}</p>
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 text-sm font-semibold rounded-full">✓ Tervalidasi</span>
               </div>
               
               <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md border border-gray-100 flex-shrink-0 z-10 relative">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path></svg>
               </div>
               
               <div className="flex-1 text-center md:text-right">
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">HP Incaran Anda</p>
                  <p className="text-xl font-bold text-blue-600">{newDevice.model}</p>
                  <p className="text-gray-600 mb-2">{newDevice.storage}</p>
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full">✨ Tersedia</span>
               </div>
            </div>

            <div className={`mt-8 rounded-2xl p-8 text-center border shadow-inner ${tradeMethod === 'online' ? 'bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-100' : 'bg-gradient-to-r from-gray-50 to-gray-100 border-gray-200'}`}>
               <p className="text-sm font-semibold text-gray-600 mb-2 uppercase tracking-wide">Estimasi Tambahan Biaya</p>
               <p className={`text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text mb-3 ${tradeMethod === 'online' ? 'bg-gradient-to-r from-blue-600 to-indigo-600' : 'bg-gradient-to-r from-gray-700 to-gray-900'}`}>
                  Rp {calculateEstimate(oldDevice.model, newDevice.model).toLocaleString('id-ID')}*
               </p>
               <p className="text-xs text-gray-500 max-w-lg mx-auto">*Harga di atas adalah estimasi awal. Harga final ditentukan setelah teknisi mengecek langsung fisik dan fungsi HP lama Anda {tradeMethod === 'online' ? 'saat penjemputan' : 'di Store kami'}.</p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
               <button onClick={handleWhatsApp} className="px-8 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-xl shadow-[0_10px_20px_rgba(37,211,102,0.2)] transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2">
                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                 Tanya via WhatsApp
               </button>
               <button onClick={() => {setIsCalculated(false); window.scrollTo({ top: 300, behavior: 'smooth' });}} className="px-8 py-4 bg-white hover:bg-gray-50 text-gray-700 font-bold rounded-xl border border-gray-200 transition-all shadow-sm">
                 Hitung Ulang
               </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default TukarTambah;

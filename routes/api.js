// Jika ada bug / eror mohon maklumi om , ini cuma latihan buat sy untuk belajar dikit" soal programing
// Gada reupload" 😏
// Klo mau colong fitur, jgn asal colong bodoh ntr api eror

// Thanks to ( jgn di hapus jamet)
/*
<p> Eka Danuarta</p>
<p> Ojan</p>
<p> Farhan</p>
<p> ZeeoneOfc </p>
<p> ALL HUMAN</p>
*/
__path = process.cwd()

//var aexm = require('@lolikillers/aexm-api');
var express = require('express');
var db = require(__path + '/database/db');
try {
var kuhong = db.get('ojan'); // jan diubah
} catch (e) {
	console.log('WELCOME TO MY API!') // boleh diubah
}

var { openai } = require(__path+'/lib/openai.js')
var tiny = require('tinyurl')
var mmk = require('mumaker')
var axios = require('axios');
var qs = require('qs');
var ytdl = require('ytdl-core');
var yts = require('yt-search')
var ytpl = require('ytpl');
var secure = require('ssl-express-www');
var cors = require('cors');
var xfarr = require('../lib/xfarr')
var dylux = require('api-dylux')
var scrapeYt = require("scrape-yt");
var fetch = require('node-fetch');
var cheerio = require('cheerio');
var request = require('request');
var fs = require('fs');
var router  = express.Router();
var creator = 'Zexxa Dev' // ubah jadi nama lu
const listkey = ["Zexxabot","Zexxa","Kira"]; // ubah apikey nya, tambah aja klo mau
var mbuh = require(__path + '/lib/lambuh.js')
var { otakudesu, covid, ongoing, komiku, tebakgambar, surah, sholat, lirik, chara,wattpad, playstore, linkwa, pinterest ,igdl,igstory, igstalk,twitter,fbdown,youtube,tiktok, kodepos, enchance, toanime } = require(__path + '/lib/scrape.js');
var { color, bgcolor } = require(__path + '/lib/color.js');
var { fetchJson } = require(__path + '/lib/fetcher.js')
var options = require(__path + '/lib/options.js');
var { getBuffer } = require(__path + '/lib/functions.js');

var {
	Vokal,
	Base,
	Searchnabi,
    Gempa
} = require('./../lib');
var cookie = "HSID=A7EDzLn3kae2B1Njb;SSID=AheuwUjMojTWvA5GN;APISID=cgfXh13rQbb4zbLP/AlvlPJ2xBJBsykmS_;SAPISID=m82rJG4AC9nxQ5uG/A1FotfA_gi9pvo91C;__Secure-3PAPISID=m82rJG4AC9nxQ5uG/A1FotfA_gi9pvo91C;VISITOR_INFO1_LIVE=RgZLnZtCoPU;LOGIN_INFO=AFmmF2swRQIhAOXIXsKVou2azuz-kTsCKpbM9szRExAMUD-OwHYiuB6eAiAyPm4Ag3O9rbma7umBK-AG1zoGqyJinh4ia03csp5Nkw:QUQ3MjNmeXJ0UHFRS3dzaTNGRmlWR2FfMDRxa2NRYTFiN3lfTEdOVTc4QUlwbUI4S2dlVngxSG10N3ZqcHZwTHBKano5SkN2dDlPSkhRMUtReE42TkhYeUVWS3kyUE1jY2I1QzA1MDZBaktwd1llWU9lOWE4NWhoZV92aDkxeE9vMTNlcG1uMU9rYjhOaDZWdno2ZzN3TXl5TVNhSjNBRnJaMExrQXpoa2xzRVUteFNWZDI5S0Fn;PREF=app=desktop&f4=4000000&al=id;SID=2wezCMTUkWN3YS1VmS_DXaEU84J0pZIQdemM8Zry-uzWm8y1njBpLTOpxSfN-EaYCRSiDg.;YSC=HCowA1fmvzo;__Secure-3PSID=2wezCMTUkWN3YS1VmS_DXaEU84J0pZIQdemM8Zry-uzWm8y1dajgWzlBh9TgKapGOwuXfA.;SIDCC=AJi4QfFK0ri9fSfMjMQ4tOJNp6vOb9emETXB_nf2S05mvr2jBlmeEvlSsQSzPMuJl_V0wcbL1r8;__Secure-3PSIDCC=AJi4QfGeWHx-c4uTpU1rXCciO1p0s2fJWU07KrkZhWyD1Tqi8LyR-kHuBwHY9mViVYu1fRh2PA";

_ = require('lodash')
__path = process.cwd();

loghandler = {
    error: {
        status: false,
        code: 503,
        message: 'Service Unavaible, Sedang dalam perbaikan',
        maintained_by: `${creator}`
    },
    apikey: {
    	status: false,
    	code: 403,
    	message: 'Forbiden, Invalid apikey, hubungi saya di whatsapp untuk mendapatkan apikey anda',
    	maintained_by: `${creator}`
    },
    noapi: {
      status: false,
      code: 403,
      message: 'Enter Apikey, one of them, Zexxabot, Zexxa, Kira',
      maintained_by: creator
    },
    noturl: {
    	status: false,
    	code: 403,
    	message: 'Forbiden, Invlid url, masukkan parameter url',
    	maintanied_by: `${creator}`,
    },
    query: {
      status: false,
      code: 403,
      message: 'Forbiden, where the query?',
      creator: creator,
    }
}

var len = 15
        var arr = '123456789abcdefghijklmnopqrstuvwxyz'
        var random = '';

        for (var i = len; i > 0; i--) {
            random += arr[Math.floor(Math.random() * arr.length)];
        }

        var lenn = 5
        var randomlagi = '';

        for (var i = lenn; i > 0; i--) {
            randomlagi += arr[Math.floor(Math.random() * arr.length)];
        }

        var randomTextNumber = random+randomlagi+'---------Apriliya-Putri-Fatmawati'+'LOLI--KILLERS';
        
 
 async function cekApiKey(api) {
 	ap = await lolkill.findOne({apikey:api})
 return ap;
 }
 
 router.get('/addapikey', (req, res, next) => {
    var apikey = req.query.apikey,
        apikeyInput  = req.query.apikeyInput,
        email = req.query.email;

    if (!apikey) return res.json(loghandler.apikey)
    if (!(apikeyInput && email)) return res.json(loghandler.notAddApiKey)
    if (apikey != `${keyapi}`) return res.json(loghandler.invalidKey)

    try {
        lolkill.insert({
            apikey: apikeyInput,
            email: email
        })
        .then(() => {
              res.json({
                  status: true,
                  creator: `${creator}`,
                  result: 'berhasil menambah data, status : ' + status + ', apikey : ' + apikeyInput + ', email : ' + email + ', nomor_hp : ' + nomorhp + ', name :  ' + name + ', age : ' + age + ', country : ' + country + ', exp : ' + exp
              })
        })
    } catch (e) {
        console.log(e)
        res.json(loghandler.error)
    }
})

router.get('/cekapikey', async (req, res, next) => {
	var apikeyInput = req.query.apikey
	if(!apikeyInput) return res.json(loghandler.apikey)
	a = await cekApiKey(apikeyInput)
	if (a) {
	json = JSON.stringify({
		status: true,
		creator: creator,
		result: {
            status:a.status,
			id: a._id,
			apikey: a.apikey,
			more_info: {
				email: a.email,
				nomor_hp: a.nomor_hp,
				name: a.name,
				age: a.age,
				country: a.country,
				exp:a.exp,
			},
		},
		message: `jangan lupa follow ${creator}`
	})
} else {
	json = JSON.stringify({
		status: false
	})
}
res.send(JSON.parse(json))
})
//ai
router.get('/ai/gpt', async(req, res, next) => {
  var apikey = req.query.apikey
  var text = req.query.query
  var user = 'Date.now()'
  if (!apikey) return res.json(loghandler.apikey)
  if (!text) return res.json(loghandler.query)
  if(listkey.includes(apikey)) {
    openai(text, user)
    .then(data => {
      res.json({
        author: creator,
        status: true,
        result: {
          data
        }
      })
    })
    .catch(e => {
      console.log(e)
      res.json(loghandler.error)
    })
  } else {
    res.json(loghandler.apikey)
  }
})
router.get('/ai/openai', async(req, res, next) => {
  var apikey = req.query.apikey
  var text = req.query.text
  var user = 'Date.now()'
  if(!apikey) return res.json(loghandler.noapi)
  if(!text) return res.json(loghandler.query)
  if (listkey.includes(apikey)) {
    fetch(encodeURI(`https://vihangayt.me/tools/chatgpt4?q=${text}`))
    .then(response => response.json())
    .then(async data => {
      var message = data.data
      res.json({
        author: creator,
        status: true,
        result:{
          message
        }
      })
    })
    .catch(e => {
      console.log(e)
      res.json(loghandler.error)
    })
  } else {
    res.json(loghandler.apikey)
  }
})
router.get('/ai/bard', async(req, res, next) => {
  var apikey = req.query.apikey
  var text = req.query.text
  if (!apikey) return res.json(loghandler.noapi)
  if (!text) return res.json(loghandler.query)
  try {
    if (listkey.includes(apikey)) {
      fetch(encodeURI(`https://api.azz.biz.id/api/bard?q=${text}&key=global`))
      .then(response => response.json())
      .then(async data => {
        var message = data.respon
        res.json({
          author: creator,
          status: true,
          result: {
            message
          }
        })
      })
    } else {
      res.json(loghandler.apikey)
    }
  } catch (error) {
    console.log(error)
    res.json(loghandler.error)
  }
})
router.get('/ai/animediff', async(req, res, next) => {
  var apikey = req.query.apikey
  var prompt = req.query.prompt
  if(!prompt) return res.json({author: creator, status: false, message: 'where the prompt?'})
  if(!apikey) return res.json(loghandler.apikey)
  if (listkey.includes(apikey)) {
    try {
      axios({
        method: 'get',
        url: `https://api.azz.biz.id/api/animediffusion?q=${prompt}&key=mangea`,
        responseType: 'arraybuffer',
      })
      .then(async data => {
        var buff = data.data
        await fs.writeFileSync(__path+'/tmp/animediff.jpg', buff)
        res.sendFile(__path+'/tmp/animediff.jpg')
      })
    } catch (error) {
      res.json(loghandler.error)
    }
  } else {
    res.json(loghandler.apikey)
  }
})
router.get('/ai/stablediff', async(req, res, next) => {
  var apikey = req.query.apikey
  var prompt = req.query.prompt
  if(!prompt) return res.json({author: creator, status: false, message: 'where the prompt?'})
  if(!apikey) return res.json(loghandler.apikey)
  if (listkey.includes(apikey)) {
    try {
      axios.get(`https://api.azz.biz.id/api/stablediffusion?q=${prompt}&key=mangea`, {responseType: 'arraybuffer'})
      .then(async data => {
        //console.log(data)
        var buf = data.data;
        //console.log(buf)
        await fs.writeFileSync(__path+'/tmp/diffusion.jpg', buf)
        res.sendFile(__path+'/tmp/diffusion.jpg')
      })
    } catch (error) {
      console.log(error)
      res.json(loghandler.error)
    }
  } else {
    res.json(loghandler.apikey)
  }
})
//sticker
router.get('/sticker/dinokuning', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/Kira-Master/database/main/sticker/dinokuning.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/sticker/patrick', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI('https://raw.githubusercontent.com/Leuthra/Database/main/sticker/patrick.json'))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/sticker/amongus', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI('https://raw.githubusercontent.com/Kira-Master/database/main/sticker/among.json'))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/sticker/animegif', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI('https://raw.githubusercontent.com/Kira-Master/database/main/sticker/animegif.json'))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/sticker/animestick', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI('https://raw.githubusercontent.com/Kira-Master/database/main/sticker/animestick.json'))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/sticker/dadu', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI('https://raw.githubusercontent.com/Kira-Master/database/main/sticker/dadu.json'))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/sticker/doge', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI('https://raw.githubusercontent.com/Kira-Master/database/main/sticker/doge.json'))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/sticker/kawanspongebob', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI('https://raw.githubusercontent.com/Kira-Master/database/main/sticker/kawanspongebob.json'))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/sticker/manusialidi', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI('https://raw.githubusercontent.com/Kira-Master/database/main/sticker/manusialidi.json'))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/sticker/mukalu', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI('https://raw.githubusercontent.com/Kira-Master/database/main/sticker/mukalu.json'))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/sticker/paimon', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI('https://raw.githubusercontent.com/Kira-Master/database/main/sticker/paimon.json'))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/sticker/patrickgif', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI('https://raw.githubusercontent.com/Kira-Master/database/main/sticker/patrickgif.json'))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/sticker/rabbit', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI('https://raw.githubusercontent.com/Kira-Master/database/main/sticker/rabbit.json'))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/sticker/random', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI('https://raw.githubusercontent.com/Kira-Master/database/main/sticker/random.json'))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/sticker/spongebob', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI('https://raw.githubusercontent.com/Kira-Master/database/main/sticker/spongebob.json'))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
// cecan
router.get('/cecan/china', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/Kira-Master/database/main/cecan/china.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/cecan/vietnam', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/Kira-Master/database/main/cecan/vietnam.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/cecan/thailand', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/Kira-Master/database/main/cecan/thailand.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/cecan/indonesia', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/Kira-Master/database/main/cecan/indonesia.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/cecan/korea', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/Kira-Master/database/main/cecan/korea.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/cecan/japan', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/Kira-Master/database/main/cecan/japan.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/cecan/malaysia', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/Kira-Master/database/main/cecan/malaysia.json`))
        .then(response => response.json())
        .then(async data => {        
        var result = data[Math.floor(Math.random() * data.length)];
          var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
          await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
          res.sendFile(__path +'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})

// asupan
router.get('/asupan/cecan', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
          fetch(encodeURI(`https://raw.githubusercontent.com/Kira-Master/database/main/dosa/cecan.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/asupan/hijaber', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/Kira-Master/database/main/dosa/hijaber.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/asupan/asupan', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/Kira-Master/database/main/dosa/asupan.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.mp4', data)
        res.sendFile(__path+'/tmp/chika.mp4')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/asupan/cogan', async (req, res, next) => {
  var apikey = req.query.apikey
  if(!apikey) return res.json(loghandler.apikey)
  if (listkey.includes(apikey)) {
    fetch(encodeURI('https://raw.githubusercontent.com/Kira-Master/database/main/cecan/cogan.json'))
    .then(response => response.json())
    .then(async data => {
      var result = data[Math.floor(Math.random() * data.length)]
      res.json({
        author: creator,
        status: true,
        result: {
          url: result
        }
      })
    })
    .catch(e => {
      console.log(e);
      res.json(loghandler.error)
    })
  } else {
    res.json(loghandler.apikey)
  }
})
router.get('/asupan/rikagusriani', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/Kira-Master/database/main/dosa/rikagusriani.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.mp4', data)
        res.sendFile(__path+'/tmp/chika.mp4')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/asupan/santuy', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/Kira-Master/database/master/dosa/santuy.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.mp4', data)
        res.sendFile(__path+'/tmp/chika.mp4')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/asupan/ukhty', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/Kira-Master/database/master/dosa/ukhty.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.mp4', data)
        res.sendFile(__path+'/tmp/chika.mp4')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/asupan/bocil', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/Kira-Master/database/master/dosa/bocil.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.mp4', data)
        res.sendFile(__path+'/tmp/chika.mp4')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/asupan/gheayubi', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/Kira-Master/database/master/dosa/geayubi.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.mp4', data)
        res.sendFile(__path+'/tmp/chika.mp4')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})

//downloader
router.get('/download/facebook', async (req, res, next) => {
          var apikey = req.query.apikey
          var url = req.query.url
       	if(!apikey) return res.json(loghandler.apikey)
       if (!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter url"})
        if(listkey.includes(apikey)){
       dylux.fbdl(url)
        .then(data => {
        var result = data;
             res.json({
             status: 200,
               author: creator,
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/download/gdrive', async (req, res, next) => {
          var apikey = req.query.apikey
          var url = req.query.url
       	if(!apikey) return res.json(loghandler.apikey)
       if (!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter url"})
        if(listkey.includes(apikey)){
       dylux.GDriveDl(url)
        .then(data => {
        var result = data;
             res.json({
             status: 200,
               author: creator,
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/download/xnxxdl', async (req, res, next) => {
          var apikey = req.query.apikey
          var url = req.query.url
       	if(!apikey) return res.json(loghandler.apikey)
       if (!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter url"})
        if(listkey.includes(apikey)){
       dylux.xnxxdl(url)
        .then(data => {
        var result = data;
             res.json({
             status: 200,
               author: creator,
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/download/mediafireDl', async (req, res, next) => {
          var apikey = req.query.apikey
          var url = req.query.url
       	if(!apikey) return res.json(loghandler.apikey)
       if (!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter url"})
        if(listkey.includes(apikey)){
       dylux.mediafireDl(url)
        .then(data => {
        var result = data;
             res.json({
             status: 200,
               author: creator,
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/download/xvideosdl', async (req, res, next) => {
          var apikey = req.query.apikey
          var url = req.query.url
       	if(!apikey) return res.json(loghandler.apikey)
       if (!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter url"})
        if(listkey.includes(apikey)){
       dylux.xvideosdl(url)
        .then(data => {
        var result = data;
             res.json({
             status: 200,
               author: creator,
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/download/scdl', async (req, res, next) => {
          var apikey = req.query.apikey
          var url = req.query.url
       	if(!apikey) return res.json(loghandler.apikey)
       if (!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter url"})
        if(listkey.includes(apikey)){
       dylux.soundcloudDl(url)
        .then(data => {
        var result = data;
             res.json({
             status: 200,
               author: creator,
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/download/sfileDl', async (req, res, next) => {
          var apikey = req.query.apikey
          var url = req.query.url
       	if(!apikey) return res.json(loghandler.apikey)
       if (!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter url"})
        if(listkey.includes(apikey)){
       dylux.sfileDl(url)
        .then(data => {
        var result = data;
             res.json({
             status: 200,
               author: creator,
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/download/instagram', async (req, res, next) => {
          var apikey = req.query.apikey
          var url = req.query.url
       	if(!apikey) return res.json(loghandler.apikey)
       if (!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter url"})
        if(listkey.includes(apikey)){
         fetch(encodeURI(`https://api.akuari.my.id/downloader/igdl2?link=${url}`))
      .then(response => response.json())
	    .then(data => {
		var result = data.respon;
		res.json({
      status: 200,
      author: creator,
			result
		})
		})
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/download/igstory', async (req, res, next) => {
          var apikey = req.query.apikey
          var url = req.query.q
       	if(!apikey) return res.json(loghandler.apikey)
       if (!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter url"})
        if(listkey.includes(apikey)){
       dylux.igstory(url)
	.then(data => {
		var result = data;
		res.json({
      status: 200,
      author: creator,
			result
		})
		})
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/download/pinterest', async (req, res, next) => {
          var apikey = req.query.apikey
          var url = req.query.q
       	if(!apikey) return res.json(loghandler.apikey)
       if (!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter q"})
        if(listkey.includes(apikey)){
       pinterest(url)
	.then(data => {
		var result = data;
		res.json({
      author: creator,
      status: 200,
			result
		})
		})
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/download/tiktok', async (req, res, next) => {
          var apikey = req.query.apikey
          var url = req.query.url
       	if(!apikey) return res.json(loghandler.apikey)
       if (!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter url"})
        if(listkey.includes(apikey)){
       dylux.tiktok(url)
	.then(data => {
		var result = data;
		res.json({
      status: 200,
      author: creator,
			result
		})
		})
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/download/ytmp3', async (req, res, next) => {
          var apikey = req.query.apikey
          var url = req.query.url
       	if(!apikey) return res.json(loghandler.apikey)
       if (!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter url"})
        if(listkey.includes(apikey)){
       dylux.ytmp3(url)
			.then(data => {
		var result = data;
		res.json({
      author: creator,
      status: 200,
			result
		})
		})
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/download/ytsearch', async (req, res, next) => {
          var apikey = req.query.apikey
       	var url = req.query.query
       	if(!apikey) return res.json(loghandler.apikey)
       if (!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter query"})
        if(listkey.includes(apikey)){
       yts(url)
        .then(data => {
        var result = data;
             res.json({
             status: 200,
             	author: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/download/ytmp4', async (req, res, next) => {
          var apikey = req.query.apikey
       	var url = req.query.url
       	if(!apikey) return res.json(loghandler.apikey)
       if (!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter url"})
        if(listkey.includes(apikey)){
       dylux.ytmp4(url)
        .then(data => {
        var result = data;
             res.json({
             status: 200,
             	author: 'Zexxa Dev',
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
//lk21
router.get('/lk21/search', async (req, res, next) => {
          var apikey = req.query.apikey
       	var url = req.query.film
       	if(!apikey) return res.json(loghandler.apikey)
       if (!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter film"})
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://wibu-api.eu.org/api/lk21/search?title=${url}`))
        .then(response => response.json())
        .then(data => {
        var result = data.result;
             res.json({
             	author: 'Zexxa Dev',
               status: 200,
                 response: result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/lk21/terbaru', async (req, res, next) => {
          var apikey = req.query.apikey
       	var url = req.query.film
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://lk21-api-zahirr.herokuapp.com/newupload`))
        .then(response => response.json())
        .then(data => {
        var result = data.result;
             res.json({
             status: 200,
             	author: 'Zexxa Dev',
                 result: result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/lk21/comingsoon', async (req, res, next) => {
          var apikey = req.query.apikey
       	var url = req.query.film
       	if(!apikey) return res.json(loghandler.apikey)
       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://lk21-api-zahirr.herokuapp.com/comingsoon`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'Zexxa Dev',
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/lk21/tvseries', async (req, res, next) => {
          var apikey = req.query.apikey
       	var url = req.query.film
       	if(!apikey) return res.json(loghandler.apikey)
       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://lk21-api-zahirr.herokuapp.com/tv`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'Zexxa Dev',
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/lk21/year', async (req, res, next) => {
          var apikey = req.query.apikey
       	var url = req.query.tahun
       	if(!apikey) return res.json(loghandler.apikey)
       if (!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter tahun"})      
       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://lk21-api-zahirr.herokuapp.com/year?year=${url}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'Zexxa Dev',
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/lk21/country', async (req, res, next) => {
          var apikey = req.query.apikey
       	var url = req.query.country
       	if(!apikey) return res.json(loghandler.apikey)
       if (!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter country"})      
       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://lk21-api-zahirr.herokuapp.com/country?country=${url}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: creator,
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/lk21/genre', async (req, res, next) => {
          var apikey = req.query.apikey
       	var url = req.query.tipe
       	if(!apikey) return res.json(loghandler.apikey)
       if (!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter tipe"})      
       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://lk21-api-zahirr.herokuapp.com/genre?genre=${url}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: creator,
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})

// film apik
router.get('/filmapik/search', async (req, res, next) => {
          var apikey = req.query.apikey
       	var url = req.query.film
       	if(!apikey) return res.json(loghandler.apikey)
       if (!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter film"})      
       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://filmapik-api-zahirr.herokuapp.com/search?q=${url}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: creator,
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/filmapik/kategori', async (req, res, next) => {
          var apikey = req.query.apikey
       	var url = req.query.film
       	if(!apikey) return res.json(loghandler.apikey)
       if (!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter film"})      
       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://filmapik-api-zahirr.herokuapp.com/category?search=${film}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: creator,
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/filmapik/play', async (req, res, next) => {
          var apikey = req.query.apikey
       	var url = req.query.id
       	if(!apikey) return res.json(loghandler.apikey)
       if (!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter id"})      
       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://filmapik-api-zahirr.herokuapp.com/play?id=${url}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: creator,
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/filmapik/terbaru', async (req, res, next) => {
          var apikey = req.query.apikey
       	var url = req.query.id
       	if(!apikey) return res.json(loghandler.apikey)
         if(listkey.includes(apikey)){
       fetch(encodeURI(`https://filmapik-api-zahirr.herokuapp.com/latest`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: creator,
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})

// news
router.get('/news/cnn', async (req, res, next) => {
          var apikey = req.query.apikey
       	var url = req.query.type
       	if(!apikey) return res.json(loghandler.apikey)
       if (!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter type"})      
       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://api.akuari.my.id/info/cnn`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             status: 200,
             	author: creator,
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/news/cnbc', async (req, res, next) => {
          var apikey = req.query.apikey
       	var url = req.query.type
       	if(!apikey) return res.json(loghandler.apikey)
       if (!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter type"})      
       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://api.akuari.my.id/info/cnbindonesia`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             status: 200,
             	author: creator,
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/news/republika', async (req, res, next) => {
          var apikey = req.query.apikey
       	var url = req.query.type
       	if(!apikey) return res.json(loghandler.apikey)
       if (!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter type"})      
       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://news-api-zhirrr.vercel.app/v1/republika-news/${url}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             status: 200,
             	author: creator,
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/news/tempo', async (req, res, next) => {
          var apikey = req.query.apikey
       	var url = req.query.type
       	if(!apikey) return res.json(loghandler.apikey)
       if (!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter type"})      
       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://news-api-zhirrr.vercel.app/v1/tempo-news/${url}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             status: 200,
             	author: creator,
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/news/antara', async (req, res, next) => {
          var apikey = req.query.apikey
       	var url = req.query.type
       	if(!apikey) return res.json(loghandler.apikey)
       if (!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter type"})      
       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://news-api-zhirrr.vercel.app/v1/antara-news/${url}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: creator,
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/news/kumparan', async (req, res, next) => {
          var apikey = req.query.apikey
       	var url = req.query.type
       	if(!apikey) return res.json(loghandler.apikey)
         if(listkey.includes(apikey)){
       fetch(encodeURI(`https://api.akuari.my.id/info/merdeka`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: creator,
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})

//photooxy
router.get('/photooxy/naruto', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.text
       	if(!apikey) return res.json(loghandler.apikey)
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})      
         if(listkey.includes(apikey)){
       try {
            mmk.photooxy('https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html', text)
                                .then(data => {
                                    var response = data.image;
                                        res.json({
                                            result:{
                                                response,
                                            },
                                        	message: `Ok`,
											status: `Success`,
											maintanied_by: `${creator}`
                                        })
                                })
                        
                    
                
         } catch (e) {
         	console.log(e);
         	res.json(loghandler.error)
}
} else {
  res.json(loghandler.apikey)
}
})
router.get('/photooxy/grafity_text', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.text
       	if(!apikey) return res.json(loghandler.apikey)
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})      
         if(listkey.includes(apikey)){
       try {
            mmk.photooxy('https://photooxy.com/banner-cover/graffiti-text-cover-222.html', text)                        
  .then(data => {
  
var response = data.image;                                 
res.json({
                                            result:{
                                                response,
                                            },
                                        	message: `Ok`,
	status: `Success`,
	maintanied_by: `${creator}`
                                        })
        
                        
  })        
                
         } catch (e) {
         	console.log(e);
         	res.json(loghandler.error)
}
} else {
  res.json(loghandler.apikey)
}
})
router.get('/photooxy/petterns', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.text
       	if(!apikey) return res.json(loghandler.apikey)
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})      
         if(listkey.includes(apikey)){
       try {
         mmk.photooxy('https://photooxy.com/logo-and-text-effects/bevel-text-between-royal-patterns-166.html', text)
                      .then(data => {
                                    var response = data.image;
                                        res.json({
                                            result:{
                                                response,
                                            },
                                        	message: `Ok`,
											status: `Success`,
											maintanied_by: `${creator}`
                                        })
                                })
                        
                    
                
         } catch (e) {
         	console.log(e);
         	res.json(loghandler.error)
}
} else {
  res.json(loghandler.apikey)
}
})
router.get('/photooxy/text_on_cup', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.text
       	if(!apikey) return res.json(loghandler.apikey)
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})      
         if(listkey.includes(apikey)){
       try {
            /*request.post({
                url: "https://photooxy.com/logo-and-text-effects/write-text-on-the-cup-392.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())*/
         mmk.photooxy('https://photooxy.com/logo-and-text-effects/write-text-on-the-cup-392.html', text)
                                .then(data => {
                                    var response = data.image;
                                        res.json({
                                            result:{
                                                response,
                                            },
                                        	message: `Ok`,
											status: `Success`,
											maintanied_by: `${creator}`
                                        })
                                })
                        /*})
                    }
                })*/
         } catch (e) {
         	console.log(e);
         	res.json(loghandler.error)
}
} else {
  res.json(loghandler.apikey)
}
})
router.get('/photooxy/3d_summer', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.text
       	if(!apikey) return res.json(loghandler.apikey)
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})      
         if(listkey.includes(apikey)){
       try {
            /*request.post({
                url: "https://photooxy.com/logo-and-text-effects/3d-summer-text-effect-367.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())*/
         mmk.photooxy('https://photooxy.com/logo-and-text-effects/3d-summer-text-effect-367.html', text)
                                .then(data => {
                                    var response = data.image;
                                    
                                        res.json({
                                            result:{
                                                response,
                                            },
                                        	message: `Ok`,
											status: `Success`,
											maintanied_by: `${creator}`
                                        })
                                })
                        /*})
                    }
                })*/
         } catch (e) {
         	console.log(e);
         	res.json(loghandler.error)
}
} else {
  res.json(loghandler.apikey)
}
})
router.get('/photooxy/3d_nature', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.text
       	if(!apikey) return res.json(loghandler.apikey)
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})      
         if(listkey.includes(apikey)){
       try {
            /*request.post({
                url: "https://photooxy.com/logo-and-text-effects/make-nature-3d-text-effects-364.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())*/
         mmk.photooxy('https://photooxy.com/logo-and-text-effects/make-nature-3d-text-effects-364.html', text)
                                .then(data => {
                                    var response = data.image;
                                        res.json({
                                            result:{
                                                response,
                                            },
                                        	message: `Ok`,
											status: `Success`,
											maintanied_by: `${creator}`
                                        })
                                })
                        /*})
                    }
                })*/
         } catch (e) {
         	console.log(e);
         	res.json(loghandler.error)
}
} else {
  res.json(loghandler.apikey)
}
})
router.get('/photooxy/wolf_metal', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.text
       	if(!apikey) return res.json(loghandler.apikey)
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})      
         if(listkey.includes(apikey)){
       try {
            /*request.post({
                url: "https://photooxy.com/logo-and-text-effects/create-a-wolf-metal-text-effect-365.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())*/
         mmk.photooxy('https://photooxy.com/logo-and-text-effects/create-a-wolf-metal-text-effect-365.html', text)
                                .then(data => {
                                    var response = data.image;
                                        
                                        res.json({
                                            result:{
                                                response,
                                            },
                                        	message: `Ok`,
											status: `Success`,
											maintanied_by: `${creator}`
                                        })
                                })
                       /* })
                    }
                })*/
         } catch (e) {
         	console.log(e);
         	res.json(loghandler.error)
}
} else {
  res.json(loghandler.apikey)
}
})
router.get('/photooxy/wood_heart', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.text
       	if(!apikey) return res.json(loghandler.apikey)
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})      
         if(listkey.includes(apikey)){
       try {
            /*request.post({
                url: "https://photooxy.com/logo-and-text-effects/write-art-quote-on-wood-heart-370.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())*/
         mmk.photooxy('https://photooxy.com/logo-and-text-effects/write-art-quote-on-wood-heart-370.html', text)
                                .then(data => {
                                    var urlnya = data.image;
                                        res.json({
                                            result:{
                                                response:urlnya,
                                            },
                                        	message: `Ok`,
											status: `Success`,
											maintanied_by: `${creator}`
                                        })
                                })
                        /*})
                    }
                })*/
         } catch (e) {
         	console.log(e);
         	res.json(loghandler.error)
}
} else {
  res.json(loghandler.apikey)
}
})
router.get('/photooxy/flower_heart', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.text
       	if(!apikey) return res.json(loghandler.apikey)
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})      
         if(listkey.includes(apikey)){
       try {
            /*request.post({
                url: "https://photooxy.com/logo-and-text-effects/text-inside-the-flower-heart-369.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())*/
         mmk.photooxy('https://photooxy.com/logo-and-text-effects/text-inside-the-flower-heart-369.html', text)
                                .then(data => {
                                    var urlnya = data.image;
                                    
                                        res.json({
                                            result:{
                                                response:urlnya,
                                            },
                                        	message: `Ok`,
											status: `Success`,
											maintanied_by: `${creator}`
                                        })
                                })
                       /* })
                    }
                })*/
         } catch (e) {
         	console.log(e);
         	res.json(loghandler.error)
}
} else {
  res.json(loghandler.apikey)
}
})
router.get('/photooxy/wooden_board', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.text
       	if(!apikey) return res.json(loghandler.apikey)
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})      
         if(listkey.includes(apikey)){
       try {
            /*request.post({
                url: "https://photooxy.com/logo-and-text-effects/writing-on-wooden-boards-368.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())*/
         mmk.photooxy('https://photooxy.com/logo-and-text-effects/writing-on-wooden-boards-368.html', text)
                                .then(data => {
                                    var urlnya = data.image;
                      
                                        res.json({
                                            result:{
                                                response:urlnya,
                                            },
                                        	message: `Ok`,
											status: `Success`,
											maintanied_by: `${creator}`
                                        })
                                })
                        /*})
                    }
                })*/
         } catch (e) {
         	console.log(e);
         	res.json(loghandler.error)
}
} else {
  res.json(loghandler.apikey)
}
})
router.get('/photooxy/tiktok_effect', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.text
       var text2 = req.query.text2
       	if(!apikey) return res.json(loghandler.apikey)
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})      
       if (!text2) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text2"})      
         if(listkey.includes(apikey)){
       try {
           /* request.post({
                url: "https://photooxy.com/logo-and-text-effects/make-tik-tok-text-effect-375.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&text_2=${text2}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())*/
         mmk.photooxy('https://photooxy.com/logo-and-text-effects/make-tik-tok-text-effect-375.html', [text, text2])
                                .then(data => {
                                    var urlnya = data.image;
                            
                                        res.json({
                                            result:{
                                                response:urlnya,
                                            },
                                        	message: `Ok`,
											status: `Success`,
											maintanied_by: `${creator}`
                                        })
                                })
                        /*})
                    }
                })*/
         } catch (e) {
         	console.log(e);
         	res.json(loghandler.error)
}
} else {
  res.json(loghandler.apikey)
}
})
router.get('/photooxy/double_heart', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.text
       	if(!apikey) return res.json(loghandler.apikey)
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})      
         if(listkey.includes(apikey)){
       try {
            /*request.post({
                url: "https://photooxy.com/logo-and-text-effects/love-text-effect-372.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())*/
         mmk.photooxy('https://photooxy.com/logo-and-text-effects/love-text-effect-372.html', text)
                                .then(data => {
                                    var urlnya = data.image;
                                        //delete_url = data.data.delete_url;
                                        res.json({
                                            result:{
                                                response:urlnya,
                                            },
                                        	message: `Ok`,
											status: `Success`,
											maintanied_by: `${creator}`
                                        })
                                })
                       /* })
                    }
                })*/
         } catch (e) {
         	console.log(e);
         	res.json(loghandler.error)
}
} else {
  res.json(loghandler.apikey)
}
})
router.get('/photooxy/coffee_cup', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.text
       	if(!apikey) return res.json(loghandler.apikey)
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})      
         if(listkey.includes(apikey)){
       try {
            /*request.post({
                url: "https://photooxy.com/logo-and-text-effects/put-any-text-in-to-coffee-cup-371.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())*/
         mmk.photooxy('https://photooxy.com/logo-and-text-effects/put-any-text-in-to-coffee-cup-371.html', text)
                                .then(data => {
                                    var urlnya = data.image;
                                        //delete_url = data.data.delete_url;
                                        res.json({
                                            result:{
                                                response:urlnya,
                                            },
                                        	message: `Ok`,
											status: `Success`,
											maintanied_by: `${creator}`
                                        })
                                })
                       /* })
                    }
                })*/
         } catch (e) {
         	console.log(e);
         	res.json(loghandler.error)
}
} else {
  res.json(loghandler.apikey)
}
})
router.get('/photooxy/under_grass', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.text
       	if(!apikey) return res.json(loghandler.apikey)
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})      
         if(listkey.includes(apikey)){
       try {
           /* request.post({
                url: "https://photooxy.com/logo-and-text-effects/make-quotes-under-grass-376.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())*/
         mmk.photooxy('https://photooxy.com/logo-and-text-effects/make-quotes-under-grass-376.html', text)
                                .then(data => {
                                    var urlnya = data.image;
                                        //delete_url = data.data.delete_url;
                                        res.json({
                                            result:{
                                                response:urlnya,
                                            },
                                        	message: `Ok`,
											status: `Success`,
											maintanied_by: `${creator}`
                                        })
                                })
                        /*})
                    }
                })*/
         } catch (e) {
         	console.log(e);
         	res.json(loghandler.error)
}
} else {
  res.json(loghandler.apikey)
}
})
router.get('/photooxy/text_on_cup2', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.text
       	if(!apikey) return res.json(loghandler.apikey)
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})      
         if(listkey.includes(apikey)){
       try {
            /*request.post({
                url: "https://photooxy.com/logo-and-text-effects/put-text-on-the-cup-387.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())*/
         mmk.photooxy('https://photooxy.com/logo-and-text-effects/put-text-on-the-cup-387.html', text)
                                .then(data => {
                                    var urlnya = data.image;
                                        res.json({
                                            result:{
                                                response:urlnya,
                                            },
                                        	message: `Ok`,
											status: `Success`,
											maintanied_by: `${creator}`
                                        })
                                })
                       /* })
                    }
                })*/
         } catch (e) {
         	console.log(e);
         	res.json(loghandler.error)
}
} else {
  res.json(loghandler.apikey)
}
})
router.get('/photooxy/romantic_text', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.text
       	if(!apikey) return res.json(loghandler.apikey)
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})      
         if(listkey.includes(apikey)){
       try {
            /*request.post({
                url: "https://photooxy.com/logo-and-text-effects/romantic-messages-for-your-loved-one-391.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())*/
         mmk.photooxy('https://photooxy.com/logo-and-text-effects/romantic-messages-for-your-loved-one-391.html', text)
                                .then(data => {
                                    var urlnya = data.image;
                                        //delete_url = data.data.delete_url;
                                        res.json({
                                            result:{
                                                response:urlnya,
                                            },
                                        	message: `Ok`,
											status: `Success`,
											maintanied_by: `${creator}`
                                        })
                                })
                       /* })
                    }
                })*/
         } catch (e) {
         	console.log(e);
         	res.json(loghandler.error)
}
} else {
  res.json(loghandler.apikey)
}
})
router.get('/photooxy/burn_paper', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.text
       	if(!apikey) return res.json(loghandler.apikey)
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})      
         if(listkey.includes(apikey)){
       try {
           /* request.post({
                url: "https://photooxy.com/logo-and-text-effects/write-text-on-burn-paper-388.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())*/
         mmk.photooxy('https://photooxy.com/logo-and-text-effects/write-text-on-burn-paper-388.html', text)
                                .then(data => {
                                    var urlnya = data.image;
                                  
                                        res.json({
                                            result:{
                                                url:urlnya,
                                            },
                                        	message: `Ok`,
											status: `Success`,
											maintanied_by: `${creator}`
                                        })
                                })
                        /*})
                    }
                })*/
         } catch (e) {
         	console.log(e);
         	res.json(loghandler.error)
}
} else {
  res.json(loghandler.apikey)
}
})
router.get('/photooxy/shadow_text', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.text
       	if(!apikey) return res.json(loghandler.apikey)
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})      
         if(listkey.includes(apikey)){
       try {
           /* request.post({
                url: "https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())*/
         mmk.photooxy('https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html', text)
                                .then(data => {
                                    var urlnya = data.image;
                                        res.json({
                                            result:{
                                                response:urlnya,
                                            },
                                        	message: `Ok`,
											status: `Success`,
											maintanied_by: `${creator}`
                                        })
                                })
                        /*})
                    }
                })*/
         } catch (e) {
         	console.log(e);
         	res.json(loghandler.error)
}
} else {
  res.json(loghandler.apikey)
}
})

// search api
router.get('/search/joox', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.query
       	if(!apikey) return res.json(loghandler.apikey)
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter query"})      
         if(listkey.includes(apikey)){
       fetch(encodeURI(`https://arnz-api-production.up.railway.app/api/joox/search?q=${text}`))
        .then(response => response.json())
        .then(data => {
        var data = data;
             res.json({
             	message: `Ok`,
             	status: `Success`,
             	data,
             	maintanied_by: `${creator}`
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/search/wallpaper', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.query
       	if(!apikey) return res.json(loghandler.apikey)
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter query"})      
         if(listkey.includes(apikey)){
       chara(text)
	.then(data => {
		var result = data;
		res.json({
		status: 200,
		author: creator,
			result
		})
		})
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/search/stickerpack', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.query
       	if(!apikey) return res.json(loghandler.apikey)
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter query"})      
         if(listkey.includes(apikey)){
       dylux.StickerSearch(text)
	.then(data => {
		var result = data;
		res.json({
		status: 200,
		author: creator,
			result
		})
		})
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/search/xvideos', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.query
       	if(!apikey) return res.json(loghandler.apikey)
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter query"})      
         if(listkey.includes(apikey)){
       dylux.xvideosSearch(text)
	.then(data => {
		var result = data;
		res.json({
		author: creator,
		status: 200,
			result
		})
		})
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/search/sfile', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.query
       	if(!apikey) return res.json(loghandler.apikey)
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter query"})      
         if(listkey.includes(apikey)){
       dylux.sfileSearch(text)
	.then(data => {
		var result = data;
		res.json({
		author: creator,
		status: 200,
			result
		})
		})
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/search/lyrics', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.query
       	if(!apikey) return res.json(loghandler.apikey)
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter query"})      
         if(listkey.includes(apikey)){
       dylux.lyrics(text)
	.then(data => {
		var result = data;
		res.json({
		author: creator,
		status: 200,
			result
		})
		})
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/search/gimage', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.query
       	if(!apikey) return res.json(loghandler.apikey)
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter query"})      
         if(listkey.includes(apikey)){
       dylux.googleImage(text)
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/search/scsearch', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.query
       	if(!apikey) return res.json(loghandler.apikey)
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter query"})      
         if(listkey.includes(apikey)){
       dylux.scsearch(text)
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/search/npms', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.query
       	if(!apikey) return res.json(loghandler.apikey)
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter query"})      
         if(listkey.includes(apikey)){
       dylux.npmSearch(text)
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/search/phsearch', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.query
       	if(!apikey) return res.json(loghandler.apikey)
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter query"})      
         if(listkey.includes(apikey)){
       dylux.phSearch(text)
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/search/xnxx', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.query
       	if(!apikey) return res.json(loghandler.apikey)
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter query"})      
         if(listkey.includes(apikey)){
       dylux.xnxxSearch(text)
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/search/wattpad', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.query
       	if(!apikey) return res.json(loghandler.apikey)
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter query"})      
         if(listkey.includes(apikey)){
       wattpad(text)
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/search/komiku', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.query
       	if(!apikey) return res.json(loghandler.apikey)
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter query"})      
         if(listkey.includes(apikey)){
       komiku(text)
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/search/otaku', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.query
       	if(!apikey) return res.json(loghandler.apikey)
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter query"})      
         if(listkey.includes(apikey)){
       otakudesu(text)
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/search/anime', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.query
       	if(!apikey) return res.json(loghandler.apikey)
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter query"})      
         if(listkey.includes(apikey)){
       xfarr.anime.anime(text)
		 .then(data => {
        var data = data;
             res.json({
             	message: `Ok`,
             	status: `Success`,
             	maintanied_by: `${creator}`,
             	data
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})

// anime
router.get('/anime/searchanime', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.query
       	if(!apikey) return res.json(loghandler.apikey)
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter query"})      
         if(listkey.includes(apikey)){
       xfarr.anime.anime(text)
        .then(data => {
        var data = data;
             res.json({
             	message: `Ok`,
             	status: `Success`,
             	maintanied_by: `${creator}`,
             	data
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/anime/kiryu', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.query
       	if(!apikey) return res.json(loghandler.apikey)
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter query"})      
         if(listkey.includes(apikey)){
         fetch(encodeURI(`https://api.shanndevapi.com/api/anime/kiryu?title=${text}`))
         .then(response => response.json())
	.then(data => {
		var result = data.result;
		res.json({
		author: creator,
		status: 200,
			result: { 
			result
			}
		})
		})
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/anime/manga', async (req, res, next) => {
  var apikey = req.query.apikey
  var text = req.query.query
  if (!apikey) return res.json(loghandler.apikey)
  if (!text) return res.json({ status: false, creator: creator, message: 'input query parameter!!'})
  if (listkey.includes(apikey)) {
    fetch(encodeURI('https://api.shanndevapi.com/api/anime/manga?query=' +text))
    .then(response => response.json())
    .then(data => {
      var data = data.result
      res.json({
        author: creator,
        status: 200,
        result: {
          data
        }
      })
    })
    .catch(e => {
      console.log(e);
      res.json(loghandler.error)
    })
  } else {
    res.json(loghandler.apikey)
  }
})
router.get('/anime/samehadaku_genre', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.query
       	if(!apikey) return res.json(loghandler.apikey)
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter query"})      
         if(listkey.includes(apikey)){
       fetch(encodeURI(`https://arnz-samehadaku.herokuapp.com/genre/${text}`))
        .then(response => response.json())
        .then(data => {
        var data = data;
             res.json({
             	data,
             	message: `Ok`,
             	status: `Success`,
             	maintanied_by: `${creator}`
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/anime/samehadaku_page', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://arnz-samehadaku.herokuapp.com/season`))
        .then(response => response.json())
        .then(data => {
        var data = data;
             res.json({
             	data,
             	message: `Ok`,
             	status: `Success`,
             	maintanied_by: `${creator}`
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})

//nsfw
router.get('/nsfw/ass', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/Kira-Master/source/main/nsfw/ass.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/nsfw/ahegao', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/Kira-Master/source/main/nsfw/ahegao.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/nsfw/bdsm', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/Kira-Master/source/main/nsfw/bdsm.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/nsfw/blowjob', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/Kira-Master/source/main/nsfw/blowjob.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/nsfw/cuckold', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/Kira-Master/source/main/nsfw/cuckold.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/nsfw/cum', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/Kira-Master/source/main/nsfw/cum.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/nsfw/ero', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/Kira-Master/source/main/nsfw/ero.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/nsfw/femdom', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/Kira-Master/source/main/nsfw/femdom.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/nsfw/foot', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/Kira-Master/source/main/nsfw/foot.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/nsfw/gangbang', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/Kira-Master/source/main/nsfw/gangbang.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/nsfw/glasses', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/Kira-Master/source/main/nsfw/glasses.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/nsfw/hentai', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/Kira-Master/source/main/nsfw/hentai.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/nsfw/hentaigif', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/Kira-Master/source/main/nsfw/hnt_gifs.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/nsfw/jahy', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/Kira-Master/source/main/nsfw/jahy.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/nsfw/masturbation', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/Kira-Master/source/main/nsfw/masturbation.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/nsfw/neko', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/Kira-Master/source/main/nsfw/nsfwNeko.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/nsfw/orgy', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/Kira-Master/source/main/nsfw/orgy.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/nsfw/panties', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/Kira-Master/source/main/nsfw/panties.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/nsfw/pussy', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/Kira-Master/source/main/nsfw/pussy.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/nsfw/thighs', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/Kira-Master/source/main/nsfw/thighs.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/nsfw/yuri', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/Kira-Master/source/main/nsfw/yuri.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})

// islamic
router.get('/islam/tahlil', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/Kira-Master/database/main/data/dataTahlil.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/islam/wirid', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/Kira-Master/database/main/data/dataWirid.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/islam/ayatkursi', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/Kira-Master/database/main/data/dataAyatKursi.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/islam/doaharian', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/Kira-Master/database/main/data/dataDoaHarian.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/islam/bacaanshalat', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/Kira-Master/database/main/data/dataBacaanShalat.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/islam/niatshalat', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/Kira-Master/database/main/data/dataNiatShalat.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/islam/kisahnabi', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.q
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/Kira-Master/database/main/islami/${text}.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/islam/asmaulhusna', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/Kira-Master/database/main/data/dataAsmaulHusna.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/islam/niatsubuh', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatShubuh.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/islam/niatzuhur', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatDzuhur.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/islam/niatmagrib', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatMaghrib.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/islam/niatisya', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatIsya.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/islam/niatashar', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatAshar.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})

//game
router.get('/games/tebakgambar', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI('https://raw.githubusercontent.com/Kira-Master/database/main/games/tebakgambar.json'))
         .then(response => response.json())
	.then(async data => {
		var result = data[Math.floor(Math.random() * data.length)];
		res.json({
      author: creator,
      status: true,
			result: {
        result
      }
		})
		})
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/games/lengkapikalimat', async(req, res, next) => {
  var apikey = req.query.apikey
  if(!apikey) return res.json(loghandler.apikey)
  if (listkey.includes(apikey)) {
    fetch(encodeURI('https://raw.githubusercontent.com/Kira-Master/database/main/games/lengkapikalimat.json'))
    .then(response => response.json())
    .then(async data => {
      var result = data[Math.floor(Math.random() * data.length)]
      res.json({
        author: creator,
        status: true,
        result: {
          result
        }
      })
    })
    .catch(e => {
      console.log(e);
      res.json(loghandler.error)
    })
  } else {
    res.json(loghandler.apikey)
  }
})
router.get('/games/tebaklirik', async(req, res, next) => {
  var apikey = req.query.apikey
  if(!apikey) return res.json(loghandler.apikey)
  if (listkey.includes(apikey)) {
    fetch(encodeURI('https://github.com/Kira-Master/database/blob/main/games/tebaklirik.json'))
    .then(response => response.json())
    .then(async data => {
      var result = data[Math.floor(Math.random() * data.length)]
      var response = data.result
      res.json({
        author: creator,
        status: true,
        response
      })
    })
    .catch(e => {
      console.log(e);
      res.json(loghandler.error)
    })
  } else {
    res.json(loghandler.apikey)
  }
})
router.get('/games/family100', async(req, res, next) => {
  var apikey = req.query.apikey
  if(!apikey) return res.json(loghandler.apikey)
  if (listkey.includes(apikey)) {
    fetch(encodeURI('https://raw.githubusercontent.com/Kira-Master/database/main/games/family100.json'))
    .then(response => response.json())
    .then(async data => {
      var result = data[Math.floor(Math.random() * data.length)]
      res.json({
        author: creator,
        status: true,
        result
      })
    })
    .catch(e => {
      console.log(e);
      res.json(loghandler.error)
    })
  } else {
    res.json(loghandler.apikey)
  }
})
router.get('/games/tebakgame', async(req, res, next) => {
  var apikey = req.query.apikey
  if(!apikey) return res.json(loghandler.apikey)
  if (listkey.includes(apikey)) {
    fetch(encodeURI('https://raw.githubusercontent.com/Kira-Master/database/main/games/tebakgame.json'))
    .then(response => response.json())
    .then(async data => {
      var result = data[Math.floor(Math.random() * data.length)]
      res.json({
        author: creator,
        status: true,
        result: {
          result
        }
      })
    })
    .catch(e => {
      console.log(e);
      res.json(loghandler.error)
    })
  } else {
    res.json(loghandler.apikey)
  }
})
router.get('/games/abcdasar', async (req, res, next) => {
  var apikey = req.query.apikey
  if(!apikey) return res.json(loghandler.apikey)
  if (listkey.includes(apikey)) {
    fetch(encodeURI('https://raw.githubusercontent.com/Kira-Master/database/main/games/abclimadasar.json'))
    .then(response => response.json())
    .then(async data => {
      var result = data[Math.floor(Math.random() * data.length)]
      res.json({
        author: creator,
        status: true,
        result: {
          result
        }
      })
    })
    .catch(e => {
      console.log(e);
      res.json(loghandler.error)
    })
  } else {
    res.json(loghandler.apikey)
  }
})
router.get('/games/dare', async (req, res, next) => {
  var apikey = req.query.apikey
  if(!apikey) return res.json(loghandler.apikey)
  if (listkey.includes(apikey)) {
    fetch(encodeURI('https://raw.githubusercontent.com/Kira-Master/database/main/text/dare.json'))
    .then(response => response.json())
    .then(async data => {
      var dare = data[Math.floor(Math.random() * data.length)]
      res.json({
        author: creator,
        status: true,
        result: {
          dare
        }
      })
    })
    .catch(e => {
      console.log(e);
      res.json(loghandler.error)
    })
  } else {
    res.json(loghandler.apikey)
  }
})
router.get('/games/truth', async (req, res, next) => {
  var apikey = req.query.apikey
  if(!apikey) return res.json(loghandler.apikey)
  if (listkey.includes(apikey)) {
    fetch(encodeURI('https://raw.githubusercontent.com/Kira-Master/database/main/text/truth.json'))
    .then(response => response.json())
    .then(async data => {
      var truth = data[Math.floor(Math.random() * data.length)]
      res.json({
        author: creator,
        status: 200,
        result: {
          truth
        }
      })
    })
    .catch(e => {
      console.log(e);
      res.json(loghandler.error)
    })
  } else {
    res.json(loghandler.apikey)
  }
})
//tool
router.get('/tool/nobg', async(req, res, next) => {
  var apikey = req.query.apikey
  var text = req.query.url
  if(!apikey) return res.json(loghandler.apikey)
  if(!text) return res.json({author: creator, status: false, message: 'where the url?!'})
  if (listkey.includes(apikey)) {
    axios.get(`https://xzn.wtf/api/removebg?url=${text}&apikey=zexxabot`, {responseType: 'arraybuffer'})
    .then(async data => {
      var buffer = data.data
      var buff = Buffer.from(buffer, "binary")
      await fs.writeFileSync(__path+ '/tmp/nobg.png', buff)
      res.sendFile(__path+'/tmp/nobg.png')
    })
    .catch(e => {
      console.log(e)
      res.json(loghandler.error)
    })
  } else {
    res.json(loghandler.apikey)
  }
})
router.get('/tool/decode64', async (req, res, next) => {
  var apikey = req.query.apikey
  var text = req.query.query
  if(!apikey) return res.json(loghandler.apikey)
  if(!text) return res.json(loghandler.query)
  if (listkey.includes(apikey)) {
    fetch(encodeURI('https://api.shanndevapi.com/api/tool/dbase64?text=' +text))
    .then(response => response.json())
    .then(data => {
      var data = data.result
      res.json({
        author: creator,
        status: true,
        result: {
          data
        }
      })
    })
    .catch(e => {
      console.log(e);
      res.json(loghandler.error)
    })
  } else {
    res.json(loghandler.apikey)
  }
})
router.get('/tool/encode64', async(req, res, next) => {
  var apikey = req.query.apikey
  var text = req.query.query
  if (!apikey) return res.json(loghandler.apikey)
  if (!text) return res.json(loghandler.query)
  if (listkey.includes(apikey)) {
    fetch(encodeURI('https://api.shanndevapi.com/api/tool/dbase64?text=' +text))
    .then(response => response.json())
    .then(data => {
      var data = data.result
      res.json({
        author: creator,
        status: true,
        result: {
          data
        }
      })
    })
    .catch(e => {
      console.log(e);
      res.json(loghandler.error)
    })
  } else {
    res.json(loghandler.apikey)
  }
})
router.get('/tool/tinyurl', async(req, res, next) => {
  var apikey = req.query.apikey
  var text = req.query.text
  if(!apikey) return res.json(loghandler.apikey)
  if(!text) return res.json(loghandler.query)
  if (listkey.includes(apikey)) {
    tiny.shorten(text)
    .then(async data => {
      var result = data
      res.json({
        author: creator,
        status: true,
        result: {
        result
        }
      })
    })
    .catch(e => {
      console.log(e);
      res.json(loghandler.error)
    })
  } else {
    res.json(loghandler.apikey)
  }
})
// other
router.get('/other/ghstalk', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.username
       	if(!apikey) return res.json(loghandler.apikey)
        if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter username"})
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://vihangayt.me/stalk/githubuser?q=${text}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: creator,
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/tool/remini', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.url
       	if(!apikey) return res.json(loghandler.apikey)
        if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter url"})
        if(listkey.includes(apikey)){
       enchance(text)
        .then(data => {
        var result = data;
             res.json({
             	author: creator,
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/other/toanime', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.url
       	if(!apikey) return res.json(loghandler.apikey)
        if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter url"})
        if(listkey.includes(apikey)){
       toanime(text)
        .then(data => {
        var result = data;
             res.json({
             	author: creator,
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/other/repostalk', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.url
       	if(!apikey) return res.json(loghandler.apikey)
       if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter url"})
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://vihangayt.me/stalk/githubrepo?url=${text}`))
        .then(response => response.json())
        .then(data => {
        var result = data.data;
             res.json({
             	author: creator,
             	code: 200,
                 result: {
                 result
                 },
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/other/hilih', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.kata
       	if(!apikey) return res.json(loghandler.apikey)
        if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://api.akuari.my.id/converter/hilih?kata=${text}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/other/fakeinfo', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.country
       	if(!apikey) return res.json(loghandler.apikey)
       //if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter country"})
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://vihangayt.me/tools/fakeinfo`))
        .then(response => response.json())
        .then(data => {
        var result = data.data;
             res.json({
             author: creator,
             status: 200,
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/other/iplookup', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.query
       	if(!apikey) return res.json(loghandler.apikey)
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter query"})      
         if(listkey.includes(apikey)){
         fetch(encodeURI(`https://vihangayt.me/stalk/ip?q=${text}`))
        .then(response => response.json())
       
		 .then(data => {
        var result = data.data;
             res.json({
             	message: `Ok`,
             	status: `Success`,
             	maintanied_by: `${creator}`,
             	result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/other/drakorasi', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.search
       	if(!apikey) return res.json(loghandler.apikey)
       if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter search"})
        if(listkey.includes(apikey)){
       fetch(encodeURI(`http://docs-api-zahirrr.herokuapp.com/api/drakorasia?search=${text}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/other/translate', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.kata
       	if(!apikey) return res.json(loghandler.apikey)
       if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://api.akuari.my.id/edukasi/terjemah?query=${text}&kode=en}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/other/infotsunami', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.kata
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://api.akuari.my.id/info/tsunami`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/other/infocuacadunia', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.kata
       	if(!apikey) return res.json(loghandler.apikey)
       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://api.akuari.my.id/info/cuaca-bandara`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/other/cuacabandara', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.kata
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://api.akuari.my.id/info/cuaca-bandara`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/other/kodepos', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.kota
       	if(!apikey) return res.json(loghandler.apikey)
       if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kota"})
        if(listkey.includes(apikey)){
       kodepos(text)
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/other/coviddunia', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.kata
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://covid19-api-zhirrr.vercel.app/api/world`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/other/covidindo', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.kata
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
      mbuh.covid()        
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/other/kbbi', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.kata
       	if(!apikey) return res.json(loghandler.apikey)
       if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://api.akuari.my.id/edukasi/kbbi?query=${text}`))
        .then(response => response.json())
        .then(data => {
        var result = data.hasil;
             res.json({
             author: creator,
                 result: {
                 result
                 }
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})

module.exports = router

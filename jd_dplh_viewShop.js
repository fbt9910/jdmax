/*
活动名称：大牌联合浏览豆专用
环境变量：jd_dplh_viewShop_ids // 活动ID 多个用, @ 换行分割
        jd_dplh_viewShop_threads // 控制并发线程数（正整数），默认1，最大10，尽量使用默认值，否则请开启代理运行
        jd_dplh_viewShop_interval // 自定义运行间隔时长（整数，单位毫秒），默认1000
        jd_dplh_viewShop_notify // 是否推送通知（true/false），默认不推送
        jd_dplh_viewShop_pinFilter // 账号pin过滤，多个用@进行分割

高并发脚本，谨慎使用并发
活动限制IP严重，建议使用代理

cron:1 1 1 1 *

*/

const $ = new Env('大牌联合浏览豆专用')
var iｉl='jsjiami.com.v7';const Iil1ll=iii1II;(function(il1iII,iilli,IlllIl,II11lI,lI1IIi,I1l11I,Ilil1l){return il1iII=il1iII>>0x1,I1l11I='hs',Ilil1l='hs',function(iIIiii,iilll,il1iI1,IlllIi,iIIiil){const Iiilil=iii1II;IlllIi='tfi',I1l11I=IlllIi+I1l11I,iIIiil='up',Ilil1l+=iIIiil,I1l11I=il1iI1(I1l11I),Ilil1l=il1iI1(Ilil1l),il1iI1=0x0;const i1l1Ii=iIIiii();while(!![]&&--II11lI+iilll){try{IlllIi=parseInt(Iiilil(0x1ee,'#J2J'))/0x1*(-parseInt(Iiilil(0x181,'o[t5'))/0x2)+parseInt(Iiilil(0x14e,'z)[$'))/0x3*(-parseInt(Iiilil(0x11f,'$R4&'))/0x4)+parseInt(Iiilil(0x1cc,'$Y%F'))/0x5+parseInt(Iiilil(0x20d,'Gl[A'))/0x6*(parseInt(Iiilil(0x192,'(60Q'))/0x7)+parseInt(Iiilil(0x1a3,'[Dz$'))/0x8*(-parseInt(Iiilil(0x1ef,'vS!h'))/0x9)+parseInt(Iiilil(0x187,'o[t5'))/0xa*(-parseInt(Iiilil(0x171,'[Dz$'))/0xb)+-parseInt(Iiilil(0x1b4,'w9^2'))/0xc;}catch(I1iIIi){IlllIi=il1iI1;}finally{iIIiil=i1l1Ii[I1l11I]();if(il1iII<=II11lI)il1iI1?lI1IIi?IlllIi=iIIiil:lI1IIi=iIIiil:il1iI1=iIIiil;else{if(il1iI1==lI1IIi['replace'](/[FKHXApOlGEYDuNLrJUMd=]/g,'')){if(IlllIi===iilll){i1l1Ii['un'+I1l11I](iIIiil);break;}i1l1Ii[Ilil1l](iIIiil);}}}}}(IlllIl,iilli,function(I1iIIl,lI1IIl,i1ilI,iii1lI,i1ilI1,Iiilii,Iil1li){return lI1IIl='\x73\x70\x6c\x69\x74',I1iIIl=arguments[0x0],I1iIIl=I1iIIl[lI1IIl](''),i1ilI=`\x72\x65\x76\x65\x72\x73\x65`,I1iIIl=I1iIIl[i1ilI]('\x76'),iii1lI=`\x6a\x6f\x69\x6e`,(0x16beda,I1iIIl[iii1lI](''));});}(0x182,0x8a57d,Iii11l,0xc3),Iii11l)&&(iｉl=0x47f4);const jdCookie=require(Iil1ll(0xfb,'NhUb')),common=require(Iil1ll(0x1ec,'6WDK')),notify=require(Iil1ll(0x195,'ps@G')),getToken=require('./utils/Rebels_Token'),CryptoJS=require(Iil1ll(0x1e9,'kA6F'));console[Iil1ll(0x133,'2bw4')](''),console[Iil1ll(0x1f7,'k4ol')](Iil1ll(0x118,'kA6F')+$[Iil1ll(0x179,'x9tI')]+Iil1ll(0x17f,'%zzo')),console['log'](Iil1ll(0x1ea,'sPHO')),console['log'](Iil1ll(0x1b9,'Gl[A')),console[Iil1ll(0x1fa,'$R4&')](Iil1ll(0x15e,'$Q4z')),console['log'](Iil1ll(0x168,'JF@7')),console[Iil1ll(0x101,'[duN')]('jd_dplh_viewShop_pinFilter\x20//\x20账号pin过滤，多个用@进行分割'),console[Iil1ll(0x191,'%zzo')](Iil1ll(0x1ab,'^B3Z')+$[Iil1ll(0x1b2,'mR7F')]+'提示结束=========='),console[Iil1ll(0x1d7,'sWD4')]('');const dplhIdList=(process[Iil1ll(0x143,'wfKe')][Iil1ll(0xfa,'[ie9')]||'')[Iil1ll(0x160,'#8O&')](/[,@\n]+/g)['map'](IlIIi=>IlIIi['trim']())[Iil1ll(0x17b,'$Q4z')](Boolean);let taskThreads=process[Iil1ll(0x113,'rSKg')][Iil1ll(0xe3,'@29e')]||'1';function iii1II(_0x5a3f43,_0x408330){const _0x40374b=Iii11l();return iii1II=function(_0x2246b1,_0x330786){_0x2246b1=_0x2246b1-0xe3;let _0xc1b9f3=_0x40374b[_0x2246b1];if(iii1II['oflUGj']===undefined){var _0x38f0de=function(_0x3d98f3){const _0x4542a0='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x4f3255='',_0x3b406f='';for(let _0x3bafbd=0x0,_0x261fd3,_0x1598ae,_0x5ed7c8=0x0;_0x1598ae=_0x3d98f3['charAt'](_0x5ed7c8++);~_0x1598ae&&(_0x261fd3=_0x3bafbd%0x4?_0x261fd3*0x40+_0x1598ae:_0x1598ae,_0x3bafbd++%0x4)?_0x4f3255+=String['fromCharCode'](0xff&_0x261fd3>>(-0x2*_0x3bafbd&0x6)):0x0){_0x1598ae=_0x4542a0['indexOf'](_0x1598ae);}for(let _0x495b4d=0x0,_0x12b58d=_0x4f3255['length'];_0x495b4d<_0x12b58d;_0x495b4d++){_0x3b406f+='%'+('00'+_0x4f3255['charCodeAt'](_0x495b4d)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x3b406f);};const _0x4ef3a5=function(_0xe154c0,_0x45f7cb){let _0x2f04b6=[],_0x12de96=0x0,_0x5d44d6,_0x144c06='';_0xe154c0=_0x38f0de(_0xe154c0);let _0x5d5a76;for(_0x5d5a76=0x0;_0x5d5a76<0x100;_0x5d5a76++){_0x2f04b6[_0x5d5a76]=_0x5d5a76;}for(_0x5d5a76=0x0;_0x5d5a76<0x100;_0x5d5a76++){_0x12de96=(_0x12de96+_0x2f04b6[_0x5d5a76]+_0x45f7cb['charCodeAt'](_0x5d5a76%_0x45f7cb['length']))%0x100,_0x5d44d6=_0x2f04b6[_0x5d5a76],_0x2f04b6[_0x5d5a76]=_0x2f04b6[_0x12de96],_0x2f04b6[_0x12de96]=_0x5d44d6;}_0x5d5a76=0x0,_0x12de96=0x0;for(let _0xc8df2=0x0;_0xc8df2<_0xe154c0['length'];_0xc8df2++){_0x5d5a76=(_0x5d5a76+0x1)%0x100,_0x12de96=(_0x12de96+_0x2f04b6[_0x5d5a76])%0x100,_0x5d44d6=_0x2f04b6[_0x5d5a76],_0x2f04b6[_0x5d5a76]=_0x2f04b6[_0x12de96],_0x2f04b6[_0x12de96]=_0x5d44d6,_0x144c06+=String['fromCharCode'](_0xe154c0['charCodeAt'](_0xc8df2)^_0x2f04b6[(_0x2f04b6[_0x5d5a76]+_0x2f04b6[_0x12de96])%0x100]);}return _0x144c06;};iii1II['ZdGOks']=_0x4ef3a5,_0x5a3f43=arguments,iii1II['oflUGj']=!![];}const _0x4ed080=_0x40374b[0x0],_0x3fb991=_0x2246b1+_0x4ed080,_0x347f78=_0x5a3f43[_0x3fb991];return!_0x347f78?(iii1II['HPrqJE']===undefined&&(iii1II['HPrqJE']=!![]),_0xc1b9f3=iii1II['ZdGOks'](_0xc1b9f3,_0x330786),_0x5a3f43[_0x3fb991]=_0xc1b9f3):_0xc1b9f3=_0x347f78,_0xc1b9f3;},iii1II(_0x5a3f43,_0x408330);}function Iii11l(){const I1iIII=(function(){return[...[iｉl,'DjXsDjuKiFLHaANmiF.XJcOoJmGA.lUNvdEM7Ypr==','WPPVW6dcG8oK','fZRdKSkqWRS','WQKiWP/cSSo2W7XtWQvLw3VcIG','4P+pW6JMNAZNNzlORktMSylcIa','Bh0F','WPK1D8ogWQ/dTG','W6JdOSk6W55um3y','aCotjMpdMmoejta','WQvVWOpcVc0uwmkTywTe','lsraWOP9','W47cOaBdJrPRW4q8vNa','W6VcVmorqGG','4PIjqEIfPUwSKUs5SUI+PoIJJoMuMUMAN+AvUEMxSEITQ+E9SEMxVEIVGa','kK7cMaXdpSoGwq','W6ZdPCkQW4fioh3dIG','W5JcUmkfF8kw','qCkUW6fdWRaW','lNFdVCow','vsz8WPneWQJcUG','wcNcKebqx8k+WROwE0jGeq','WRbZWRZcUJ0F','smody8kBW7q','W4VdS0m','WQXwz8o/WQS','pMVcP8o3s17dUmk6W7a5WPOdALdcRLpcNSk0jCoFWPJcO8orWP/cGwqCWPlMJiBLIj3LU6pLJBlNU6tNQi7MLiFVV7/PU4dOR5mF77665P2U5As5uHO','W5ZdQaNdSG0','EWWweZi','CHddI1a','mWJdHmkKWQXnfGJcMa','pmkYWRziWQK','umk6W7TLWRy','W6G1WPG','WRnyW4RcQ8kMWRP9WQbYfxBcQSo8WRT5i3JcQ8oxW5lcK1VcVwfxmmkHlutdHmociwNdI3eU','nSkiWPzx','W7TtW4JdOmkZWOzNWQnpxG','W7ddUmkSW590oa','ra4WgGC','ASklWPvZWRpdVCkCW5pdVKr0W4tcVX7dN8otySoHbftcImo6WRhcTIjuaJVdV8oDE08yWQ/dRSkTWRi','WOueBmoIWPC','cgVdJmk7','W4CeW6NdRgKrW63cGx3dQSonWRPWWO9gymkYW4q1W6tcKq','W54aW6xdVa','q1GMpIq','W41zW6NcHrxdVmkcW7f/WOpdMc8D','aI1OWQjFW6Pv','v8k6W7TN','cGtcNJ7cQq','W5tdPuNdSbfw','pw1qWQj9','sg/dISk5WRhdR8oPWO8XW7xcVmoyWRtdT8o4W4lcN8oosSo4jWJdPvFcL8oqW7RdNmkfW7FdRa','gvBcSZnc','W4FcGmkLbCoMWQK','cCoonMBdISoo','CSk9W5FdL2/dQGnOW7W/q8kK','l0/cNa','WOddQfJcK0iLWOO','jq/dLmk4WQPYgHxcJeOOWO0','W4ldOvddSa','DqePhZBcVHhdMsxcMCoHgmo7','W5hcOSoHqtddUW','bCounNZdHmoplGPDWOWwW4/cMYKYWOldSG','k10e','de08fG','bI1NWQfoW7a','W6a0WO3cNLaAWOKaumkdqSoV','ds19WOvvW7DnW47cJXdcPN42Eq','WPqbWQNdH0NcOmoC','m2dcL8o3shZdPCkiW480','WRVdI8k6W6rHoCk8W4XfntDWcCkbsHi0qfiKESkFW7dcICoZW48','8kwnKwxLVi/LPABcGbS','ob3cT8kyCmklwei','WQVdICk/W69l','bSo5WPddId8XqSoxW5W','zCk8pxeRWP3cH8opWQnsW65kdMatqLy8W7GGmcjxW7lMTldLIRLbsSkq5AA75lM455wIWP3cOCo2D+AoOEIJPowlLowlVq','WQ4oWPW','WQTPWORcHuS7WP9CCCkhr8oVtSkRrWjTWQ7cUmoec8k+gW','DeNdQ3xdMsyhh8kQWRBcKSkrwmoLW55TkSotW5qkWPS','ttJcKSkTemkcWPrnW6W','W6pcMmk2W4vjbSkeW50','W4L4yCooba','ymk2W5vJWQC','qmkUW611WQOMW6BdTgO','m8o/WOpcLslcOq','k1tcJXbfymkQbq','utPRWPDAWORcQSoXtq','o8oPusrUW4ldN8ozWQXQW45/cG','xYb1','EKxdQSorbCothaC','W5T5W7m','WR1VWQG','WOPKxmoZ','bshcH8kJ','dhpdMWSkcCoIWPO9zvC','cIRcVG/cHsaHW5vr','W40aW7JdQq','pmonqq','W6BdRCkLW7Xr','fZVcQqlcUsiLW5XEWOBcGL3cOCoqW5hdJmo0W5xcGr4C','WPtORipMSOBLPydOTRBdUUkFT8kR5PAI5zg55BMy5PEu5OYN','W4VcSSoXCde','WPDwB8oJWPa','WQu8DmonWPW','hSoueMhdUq','rxRdLmkYWQZdPa','ACogrSkJW5BdOq'],...(function(){return[...['WRNdM8krW7bIB8o7WRXzntXGpCkmsWubu0PNvCkfW6RdK8o/W47dQ8o+WPO9jeKvlSoyuSoV','W6VdHbe','omoYfLS','zZRdJmkIa0xdSSknW6qhWRK','W6eNWOVcKa','W5RcUbBdNSkl','c3pdHH8ea8oIWQKUDKmxmSk7WORcS8orjmoBsSoDjSooxIJcSqiSBG','kvCgBmoLv1q+W7pcH2pdISoIW53dSHBcSCoQosFcMG','W6HoW5ldOq','W7ZdMmkoW5Xi','WRpcLCoV','q8kVW5b2WRC6','W4PPrCod','WRnyW4RcQ8kMWRP9WQbYfxBcQSo8WRT5i3JcQ8oxW5lcK1VcVxnCk8k4Df7dMmouFKNdJwm+','hItcPrBdH2CSW5zoWO/cOeBcQ8kxWPJdI8op','aWzeWPXc','W4VcO8kUB8kKuCkjW61rmYldKCoOoY4/DmkAzcpdTSoLWPfiWQHOWQ7cKwq','WRNdJSkwW5bJpmk6W6DYpYzonmkpsG','W5zDD8oGbG','gd3cUc/cJW','ixxdPmo6WRK','wCk/W5bIWQ44W6FdHxVcUSo9WR8mBSkwW4mPW6lcN0P5WRWXgW','xIzHWOfbWQVcRq','dmoCmw4','44kv6lwG5yYi','yxyinWBcLSoR','EbSShI0','WOyGDCoiWQ8','4P65CoACS+IbNoAUUoEJSowLH+EtNmoY','dKK/fg5T','fdFcOG','WOtdVflcHhm/WPrK','beiwfg4','if0Mb3G','i8owr1zjW5S','WRSxE8oKWRC','WRZdRmkPW69K','zLa5oqi','W4tcV8o4','dtHnWRDv','yCokt8kZW6hdTIRdReRdLeS+wmkWzqLIWQddIvGc','phVcJmoJsaJcV8okW6W5WPetxL3cR0tcQ8kJpmkaWPtcSCodW4ldIdHfW5JdGKFdUSowpYSuWPX1','W4/cV8oZrIZdP3bNmmovW67dImorg8k9b8o5','hY/cUCkYWRCQCqi','z8kZWRdcPSkeg3WEka9eW5aZf8opW6WXvHlcSq','zvRcSSkmF8knrf3cON4','lInpWOXn','aemCfxm','W7dcVcFdG8kMCW','WQldH8kkW7bDpmkNW6C','W5JcM8kJ','W47cUCoN','WP4nWQ7dUe/cQmoBW5zvWQBdVbK/bq','6lw25y2v5PEg5PwQ','BSk4WOhcPmkDea','bxxdHH0','d3HbWRT+','vSkuucpdMfi','kCkoWPy','gg/dKCkggCkNWQ1gW4RdRCo1oqlcImolqW','6lwX5y+55PEk5PAC','ihFcQCoqua','W49SxmoOhCknW6y','WQRdR8kKWOjBlNFdLXJdJCktAMJdIqyeWR8sW57dKNtdQutcVf4OWPldM8oRse/cTwVdTY9jhIrrW73cQerhW4pdQCo0','pKhcISoXEG','WR7dRNHkWORcVsxcGmk7WPmMDCoAwr0','WQK8W4ugW6S2','bqTzWQXB','fSoIWO7dLG','WRBdQx0','WRtcKmoatGnWgabPlbjLWRJdHX5tjXRcKJL0W7ef','W6CJW4tdONO','WQaHW5aSW6SjW5pcNSoqW7VdOCkP','wwRdICk9','wmk2W5tcHxzJuSkaWPjt','5BAL6k6W572e6lsN6l+96l6o6ko85B245yIK6lEe5y6g','WPddUmkW','px/dVCkUna','WOVdT13cGLu','jmksWOjqWRVdUG','lSkeWOHk','W6m2W7RdPwjjtCkNzgXqaG','vJ1GWP1AWONcPSoHvCkVlri','WP8bWQi','WRJdOM5jW47cSYFcQSk4WOu','FsvcWPfE','lmoUWOZcHIpcUG','tx7dJSk0','m8kNWPbEWRO','i8ossKTi','z+IVHEAWOEwtHEw4OXi','jSodsLDzW6FdIa','WQHgW6lcMSogWPJcMv4','a0S6gNi','iSkoWP5DWQ/dMSkhW73dLLi','fMrUWOfq','hwFdS8kRfa','WRlcNSotWReLmCk1WQPsp2q/','W6ysW5NdPh8','WQ5rW6xcJq','WRXiW6xcJCogWPdcH1a','WQDgW6S','vY5MWPm','WR/dOMvEWPFcUG','4PURvEISR+wgOowUPUs6Q+w/RUIMT+EzJ+EoTowHLEwpNUMhTUwtNEwgT+I/H+IJOUIeO+AFLq','ymotW4y','W7dcVdtdNSk9z8obW4JcTG'],...(function(){return['pbtcSCkCAmklrLm','nuNcNHDLmSoQwG','o1ddJG4u','iMtcSsTK','gdxcICkLWQaWBa','qCk+zWRdRq','WOWG5lI05yMYua','WPtdSKpcN2i','mftcMHrdkq','44gP5O6o56E244g36kYC5ysp6i+/5y2LA8kmWQ5zWQFdNG','dI7cNa','WPtdRx/cGuG','EutdR8oEdmkoEe/cRhJcHW','W4ZcUCkN','bIDU','j29yWRvxlq','guVdJq','W6KXcq','h2pcJ8kPW6JdSmk8WODQW6BdPCklW6/dUmkK','WQBdJSkmW7rfpmk5W7y','CamPfW','C8oLWRJcPrJcQba','WQ0nWPhcVCkUWO9bWRHUva','dIL9WQC','WRauWPu6W6mL','E0/dUNJdVsOEcCkvWRC','WQpdISkvW6XWnSkX','8yUORcS','vSkuucRdMev2','WQyaWO8E','av40eM5G','wsTnWPzyWQJcQ8onumkNlWdcU8oQASk0WPH/W7ziWOOwWRVcPwq','W63cKmkexmk1','m8kaWP1mWRNdM8ku','W5LPwmow','WQmgWPawW6u','W5OjW6pdUhCDW7pcMG','lvy8BmohxLeoW7pcI0xdKSoEW57dTapcP8oTmZBcHYZdMmkKvCkcWPhdH8kB6iwa5AYM5lIq6l676kkW6zsE6zUS5Pwf6zs5772A6BQ96k6TmSosWPrZ','4PUNeUIgIEwUKUs7VUI/OUIHTEMwPEMyKEAuLoMvN+ISM+E/O+MwR+ITTa','W7dcUcRdNSkN','eKddUIaH','n8oQWOVcLqpcUWLe','W4hdP8k2bhhdRh8xp8oaWRhcHa','lrZcOa','u8kqstldRu9+W6q','iCoOWPBcIchcUXbyW5eV','W70tWRNcS0O','y3C2nXpcImoWASkOFZFdISkucSoNW5PokvnfWQ7dNttdO2VdIbBMMlZLKzZPGl3NNOhcOHxcIq9uWQtcIaeoW4VdSepVVkFPUiRORyVKURdMJjVPGOm','W7yYWO3cMeWWWOuvwG','WQueWPuQW4W','pCklWPDlWQ4','WQddSMHAWOBcOtG','wwFdN8k/WQ0','ium/b39RWOXbW4CkW7NdOq','W4WpW7O','E0/dUNJdVsOEcCkdWR/cVSkFuW','WQumWPxdQCkTWOfxWPLb','DKpdQq','jrdcVCkmBSkhrLNcVx7cLwLwWRHtCSoNv8kDW6uM','EaCZettcVW','kmkaWOK','CtJcVq','W6/cS8oztt0','W6e/gH0','bSoCkgO','s8kXW6L0WQW','ivSpFmosqa','xmk5WQxcRSkD','agRdMbqkbCoTWROTELWvmCk7WPpdS8kdD8oosmoFomostJJcOHq3zuKP','WRyMW4eGW7W3W4u','5y6H6yAr6kY45PMOW5z6DCkofCoEW7WpW7pcHG','mLRcNYn6','W7nqW4SQW4yxW5fQW4a','WPqZBCoiWQ3dTZFcO8kBW5a','W4dcUCoVwsddQxa','DSoDB8kGW6y','FZPlWPHI','xCk+W6PIWOWXW6ldTxVcTSoBWQCWBCkqW5y/W7JcK11K','W7bqW4XjWR0TW6PIW7blWQm','hsLGWRi','pMVcP8o3s17dUmk6W7a5WPOdALdcRLpcNSkUiSozWPtcPmom','fCoaebpdSNb7W7ddLa','WP0kW7i6W6W','WQvmW6NcNCoaWPZcH1RdPSktvH9gW77dJ8kdWRyTWRlcUZ8','WQpdGCkXW7n9','bY16WRvBW79d','4PILzUISIowgUEwUUos4NUw8QEINSUEAP+EnJEwIPUwnKUMhREwtLUwgLEI+UoIHHEIhT+AFUW','ySogwCkKW5RdVcK','fthcQW','CuZcKmoUWRz4lbdcL0u','kNtdU8osWOG','BKlcNq','WPRdM8kXbCo6WRyyWQqqW5hcRSobjvLyWPWNemkMW5XyW7VdP13dTLKr','W7GpW4BdPfi','WQCpWO0','bY/cJq','hmo4yNzk','n0NcLGvLlSoKr8oy','W49TrCowhG','BSkRexW8WP8','WPNdT8kCW7DY','W6WOWPZcNvCZWOKa','zSobsCk7W4BdTYldSa','iGe+qYtcTqhcMepdHCk+hmkRW5e0WO3dVmkjWRHOtJneWPuWxSozEWfXh3C'];}())];}())];}());Iii11l=function(){return I1iIII;};return Iii11l();};const runInterval=process[Iil1ll(0x1a5,'JF@7')][Iil1ll(0x158,'k4ol')]||Iil1ll(0x1bc,'sWD4'),isNotify=(process['env'][Iil1ll(0x189,'Gl[A')]||process[Iil1ll(0x16f,'sP9V')][Iil1ll(0x114,'f][9')])===Iil1ll(0x212,'[Dz$'),pinFilter=(process[Iil1ll(0x197,'o[t5')][Iil1ll(0x1e5,'vS!h')]||'')[Iil1ll(0x127,'926#')]('@');interaction=[];let cookiesArr=Object[Iil1ll(0x11e,'KTvP')](jdCookie)[Iil1ll(0x214,'f][9')](IiI1l=>jdCookie[IiI1l])[Iil1ll(0x209,'CZ$k')](illlII=>illlII);!cookiesArr[0x0]&&($[Iil1ll(0x146,'Aham')]($[Iil1ll(0x1fc,'wfKe')],Iil1ll(0x142,'%zzo')),process[Iil1ll(0x131,'2bw4')](0x1));!(async()=>{const iillI=Iil1ll,iIII11={'Pdstm':function(IiI1i,llll1){return IiI1i(llll1);},'WGtGc':function(lil11l){return lil11l();},'zfZoZ':iillI(0x177,'[duN')};notify[iillI(0x104,'[ie9')]({'title':$[iillI(0x1df,'Akq2')]}),await iIII11[iillI(0x1a2,'(60Q')](Main);if(isNotify&&notify['getMessage']()){if(iIII11[iillI(0x1e8,'vS!h')]!==iillI(0x1bb,'#UJ%'))await notify[iillI(0x117,'*t&1')]();else{const I1lIl1=iIII11['Pdstm'](i1l1I,IiilIi);I1lIl1>=0x0&&(iii1Ii['waitTime']=I1lIl1);}}})()[Iil1ll(0x1bf,'@29e')](lil11i=>$[Iil1ll(0x110,'#ic7')](lil11i))[Iil1ll(0x1b3,'k4ol')](()=>$[Iil1ll(0x105,'w9^2')]());async function Main(){const lI1III=Iil1ll,IlIIl={'NjPcv':'2.0','viWnT':function(lI1liI,i1i1Ii){return lI1liI>i1i1Ii;},'ZvHSt':lI1III(0xf3,'JF@7'),'boMfi':function(lllii,iI11Ii){return lllii(iI11Ii);},'TESOl':function(iIII1l,lllil){return iIII1l>=lllil;},'RufQt':function(iI11Il,iIII1i){return iI11Il===iIII1i;},'JKOmG':lI1III(0x106,'^)UR'),'RRNrk':function(iil1i1,il1i11){return iil1i1<il1i11;},'jczvG':lI1III(0x14b,'*t&1'),'DkFJw':function(IlIll1,IlIII){return IlIll1>IlIII;}};try{if(dplhIdList[lI1III(0xeb,'Akq2')]===0x0){console[lI1III(0x1eb,'o[t5')](lI1III(0x18f,'6WDK'));return;}const ilil1l=[...new Set(dplhIdList)];try{const illlIi=parseInt(taskThreads);IlIIl['viWnT'](illlIi,0x0)&&illlIi!==0x1&&(taskThreads=illlIi);}catch{if(lI1III(0x111,'j3yD')!==IlIIl[lI1III(0x1d3,'sWD4')]){const IiI1I=IiiIil({'actId':IiiIii,...IIlll,'method':liliI,'userId':ll1lI,'buyerNick':l1iii||''}),illlIl={'jsonRpc':IlIIl[lI1III(0x123,'k4ol')],'params':{'commonParameter':{'m':lI1III(0x20c,'x9tI'),'oba':IiI1I[lI1III(0x112,'kA6F')],'timestamp':IiI1I['timeStamp'],'userId':IIlli},'admJson':{'actId':l1iil,...ii1l1,'method':lIIill,'userId':I11iIi,'buyerNick':I1ilII||''}}};return IlIIl[lI1III(0x207,'x9tI')](I11iIl['indexOf'](lI1III(0xf8,'[duN')),-0x1)&&delete illlIl['params']['admJson'][lI1III(0x21e,'mR7F')],illlIl;}else taskThreads=0x1;}taskThreads=Math[lI1III(0xec,'%zzo')](taskThreads,0xa),$[lI1III(0x139,'NhUb')]=null;if(runInterval)try{if(lI1III(0x204,'[duN')===lI1III(0x11b,'#J2J'))IlI1l[lI1III(0x14c,'vS!h')]=lilIil;else{const IIIIIi=IlIIl[lI1III(0xfd,'Akq2')](parseInt,runInterval);IlIIl['TESOl'](IIIIIi,0x0)&&(IlIIl['RufQt'](IlIIl[lI1III(0x1cb,'JF@7')],IlIIl['JKOmG'])?$['waitTime']=IIIIIi:lili1[lI1III(0x1b5,'$R4&')](ll1l1,IllIIi));}}catch{console[lI1III(0x100,'ps@G')](lI1III(0x1ad,'sP9V'));}ilil1l[lI1III(0x208,'*t&1')]>0x0&&console[lI1III(0x1fa,'$R4&')]('🏬\x20共计\x20'+ilil1l[lI1III(0x174,'#UJ%')]+'\x20个活动\x0a');for(let I1lIil=0x0;IlIIl['RRNrk'](I1lIil,ilil1l['length']);I1lIil++){const IIIl1i=IlIIl[lI1III(0x1d1,'^)UR')][lI1III(0xe9,'gY#H')]('|');let liiII1=0x0;while(!![]){switch(IIIl1i[liiII1++]){case'0':console['log'](lI1III(0x1e6,'x9tI')+$[lI1III(0x152,'Rb1a')]+lI1III(0x13f,'$R4&'));continue;case'1':I1lIil!==ilil1l[lI1III(0x1e0,'j3yD')]-0x1&&console[lI1III(0x133,'2bw4')]('');continue;case'2':$[lI1III(0x21b,'vS!h')]=![];continue;case'3':IlIIl[lI1III(0xfc,'j3yD')]($[lI1III(0x1c9,'sP9V')][lI1III(0x124,'z)[$')],0x0)&&(cookiesArr=cookiesArr['filter']((IIIl1l,lllll)=>!$[lI1III(0x1ed,'Rb1a')][lI1III(0x19f,'CZ$k')](lllll+0x1)),$[lI1III(0x173,'NhUb')]=[]);continue;case'4':await common[lI1III(0x12a,'2bw4')](taskThreads,cookiesArr,taskFnc);continue;case'5':$[lI1III(0x166,'z)[$')]=ilil1l[I1lIil];continue;case'6':$[lI1III(0x211,'$Q4z')]=[];continue;case'7':$['runEnd']=![];continue;}break;}}}catch(i11ili){console[lI1III(0x14a,'eFUr')]('❌\x20脚本运行遇到了错误\x0a'+i11ili);}}async function taskFnc(iil1l1,lllli){const IIliIi=Iil1ll,iiili1={'jbkaU':function(ilil1I,i11il1){return ilil1I+i11il1;},'NBHjA':IIliIi(0x13b,'w9^2'),'AjDUj':function(ii1iiI,lllilI){return ii1iiI==lllilI;},'agkih':function(ilil11,illlI1){return ilil11===illlI1;},'KXgPc':IIliIi(0x1c7,'gY#H'),'HqBpG':function(IIIl11,I1lIi1){return IIIl11==I1lIi1;},'mCLou':'xHuGI','HaKds':IIliIi(0x190,'CZ$k'),'qzdCL':function(liiIIi,lil11I){return liiIIi==lil11I;},'sSuLT':IIliIi(0x170,'Rb1a'),'SUQDb':IIliIi(0x1c1,'[Dz$'),'gzFae':function(Iliii1,iIiIi){return Iliii1||iIiIi;},'yrEwU':function(iil1ll,iiilil,iil1li){return iil1ll(iiilil,iil1li);},'fnGgt':IIliIi(0x217,'[Dz$'),'IjQwM':function(lillIl,iIiIl){return lillIl||iIiIl;},'SHdTJ':IIliIi(0x10d,'0tfC'),'lyqhm':IIliIi(0x1c6,'KTvP'),'hzSxZ':IIliIi(0x196,'sP9V'),'LuYjJ':function(iiilii,li1i1i){return iiilii!==li1i1i;},'eOGLT':IIliIi(0xf1,'gY#H'),'YEgTm':'JJOaM','rCjfr':'application/json','rnTsl':IIliIi(0x1ba,'Zz#3'),'BSOmN':IIliIi(0x122,'rSKg'),'cflQl':IIliIi(0xf5,'j3yD'),'gpPlj':IIliIi(0x1d2,'*t&1'),'OsUlD':'Cookie','bmVdc':function(IlIli1,illIiI){return IlIli1<illIiI;},'HXywc':function(lI1lli,Ill1l){return lI1lli>Ill1l;},'pxeju':function(llI1Il,ii1iii){return llI1Il||ii1iii;},'BPZqF':'POST','SmZey':IIliIi(0x1dd,'x9tI'),'LZDTv':IIliIi(0x18b,'#ic7'),'IuVYV':function(i11iil,Ill1i){return i11iil(Ill1i);},'GlILG':function(ii1iil,lllI1l){return ii1iil+lllI1l;},'ySGqu':function(i11iii,llI1Ii){return i11iii+llI1Ii;},'sZRXB':function(lllI1i,li1i1l){return lllI1i(li1i1l);},'AdXHp':IIliIi(0x215,'@29e'),'aDJKR':function(II1i1,lI1lll){return II1i1-lI1lll;},'FRiSZ':IIliIi(0x10a,'^)UR'),'txQCk':IIliIi(0x1f8,'NhUb'),'vMYeb':function(iIiII,iil1lI,iiiliI){return iIiII(iil1lI,iiiliI);},'xjfrr':function(li1i1I,illIii){return li1i1I*illIii;},'grAOO':function(ii1il1,lI1llI,illIil){return ii1il1(lI1llI,illIil);},'vFagf':function(Ill1I,i11iiI){return Ill1I*i11iiI;},'aettp':function(lIli11,lllI1I){return lIli11===lllI1I;},'LJMmX':'XAGcb','YpPiX':'WJxoM','wVqim':IIliIi(0x140,'^B3Z'),'RAzzJ':IIliIi(0x1a1,'2bw4'),'EybqE':IIliIi(0x13a,'sWD4'),'iNMZx':function(lillI1,IlIlii,i1l1i1){return lillI1(IlIlii,i1l1i1);},'AWjMi':function(liil11,iiillI){return liil11*iiillI;}};if($[IIliIi(0x151,'o[t5')])return{'runEnd':!![]};const ill11i=iiili1[IIliIi(0x161,'w9^2')](decodeURIComponent,common[IIliIi(0x1e2,'j3yD')](iil1l1,iiili1['AdXHp'])),lllill=ill11i[IIliIi(0x1f2,'@29e')](0x0,0x2),ill11l=ill11i[IIliIi(0x1bd,'(60Q')](ill11i[IIliIi(0x135,'rSKg')]-0x2),I1lIiI=Math[IIliIi(0x175,'KTvP')](iiili1[IIliIi(0x13c,'sWD4')](ill11i[IIliIi(0x1e0,'j3yD')],0x4),0x0),lllili='*'[IIliIi(0x107,'Qs&N')](I1lIiI),IliiiI=iiili1[IIliIi(0x213,'0tfC')](lllill,lllili)+ill11l,Ill11=IIliIi(0xe6,'6WDK')+lllli+'】'+IliiiI+'：',liiIII=notify[IIliIi(0x157,'Akq2')](lllli,ill11i);if(pinFilter[IIliIi(0x1a6,'gY#H')]>0x0&&(pinFilter[IIliIi(0x1a8,'x9tI')](ill11i)||pinFilter[IIliIi(0x1ae,'sWD4')](iiili1[IIliIi(0x1cf,'%zzo')](encodeURIComponent,ill11i)))){if(IIliIi(0x206,'gY#H')!==IIliIi(0x1c5,'#UJ%'))IiiIl1['shopList']=lIIil1?.[IIliIi(0x20e,'6WDK')]?.[IIliIi(0x1da,'Zz#3')]||[];else{liiIII[IIliIi(0x121,'$Y%F')](IIliIi(0x119,'^)UR')),console[IIliIi(0x147,'j3yD')](liiIII[IIliIi(0x109,'#J2J')]()),$[IIliIi(0x186,'@29e')]['push'](lllli);return;}}const li1i11=await common[IIliIi(0x102,'$Y%F')](iil1l1);if(!li1i11&&typeof li1i11===IIliIi(0x183,'[duN')){console[IIliIi(0x1eb,'o[t5')](Ill11+IIliIi(0x103,'926#')),liiIII['fix'](iiili1['FRiSZ']),$[IIliIi(0x202,'%zzo')]['push'](lllli);return;}const iI11I1=common[IIliIi(0x16a,'o[t5')](ill11i);let il1i1l='',IlIlll=$[IIliIi(0x182,'gY#H')],IIIl1I=iiili1[IIliIi(0x10b,'Gl[A')],iil1ii='',IlIlli=IIliIi(0x210,'w9^2'),il1i1i=IIliIi(0x1f4,'sWD4')+IlIlli,lil111='',i11ilI=![];iil1ii=await iiili1['vMYeb'](getToken,iil1l1,il1i1i),await $['wait'](iiili1[IIliIi(0x1b0,'Aham')](parseInt,iiili1[IIliIi(0x17a,'@29e')]($[IIliIi(0x132,'2bw4')],0x1)+0x1f4,0xa));if(!iil1ii)return;await llllI(IIliIi(0x1db,'#UJ%')),await $[IIliIi(0x15b,'t9FA')](iiili1['grAOO'](parseInt,iiili1[IIliIi(0x1be,'KTvP')](iiili1[IIliIi(0x126,'KTvP')]($[IIliIi(0x165,'Qs&N')],0x1),0x1f4),0xa));if(iiili1[IIliIi(0x180,'sWD4')](il1i1l,''))return;if($['runEnd']||i11ilI)return;$['shopList']='',await llllI('shopList'),await $[IIliIi(0x1ca,'sP9V')](parseInt(iiili1[IIliIi(0x11c,'^B3Z')]($['waitTime'],0x1)+0x1f4,0xa));if($['shopList']){if(iiili1[IIliIi(0x19b,'t9FA')](iiili1['LJMmX'],iiili1[IIliIi(0x20f,'#8O&')])){const llI1I1=IIliIi(0x1a0,'#UJ%'),IlIlil=IIliIi(0x163,'[duN'),lIli1I=new lI11Il()[IIliIi(0x129,'926#')](),II1il=new lIII1i('\x27','g'),lllI11=new l11i11('~','g'),I1lIll=IilIl1(lIII1l['stringify'](l1iIIi))[IIliIi(0x153,'vS!h')](II1il,'%27')['replace'](lllI11,IIliIi(0x194,'NhUb')),I1lIli=iiili1[IIliIi(0x193,'mR7F')](iiili1['jbkaU']('f',IlIlil),'D')+I1lIll+'c'+lIli1I+llI1I1,II1ii=lilIi[IIliIi(0x20b,'Zz#3')](I1lIli[IIliIi(0x1a9,'$R4&')]())['toString']();return{'sign':II1ii,'timeStamp':lIli1I};}else for(let IIIIII of $[IIliIi(0xff,'vS!h')]||[]){iiili1['aettp'](iiili1['wVqim'],iiili1['RAzzJ'])?i1ilil['log'](''):($[IIliIi(0x1fd,'w9^2')]=iiili1['EybqE'],$[IIliIi(0x1e4,'Gl[A')]=IIIIII[IIliIi(0x1c4,'0tfC')],await llllI(IIliIi(0xe4,'k4ol')),await $[IIliIi(0x188,'j3yD')](iiili1[IIliIi(0x219,'j3yD')](parseInt,iiili1[IIliIi(0x16b,'KTvP')]($[IIliIi(0x162,'z)[$')],0x1)+0x5dc,0xa)));}}if($[IIliIi(0x1b1,'@29e')])return{'runEnd':!![]};await $[IIliIi(0x15b,'t9FA')](parseInt(iiili1[IIliIi(0x1aa,'j3yD')](iiili1['AWjMi']($[IIliIi(0xed,'^B3Z')],0x1),0x1f4),0xa));async function ii1ii1(ii1ilI,lI1ll1){const IllIiI=IIliIi;try{switch(ii1ilI){case'activity_load':if(lI1ll1[IllIiI(0x17e,'#ic7')]&&lI1ll1[IllIiI(0x150,'j3yD')]?.[IllIiI(0xfe,'#8O&')]==0xc8)iiili1[IllIiI(0x115,'sP9V')]!==iiili1['NBHjA']?Illl1I['log'](lliiiI):il1i1l=lI1ll1[IllIiI(0x156,'o[t5')][IllIiI(0x134,'k4ol')]?.[IllIiI(0x10f,'rSKg')]?.[IllIiI(0x1f5,'k4ol')];else iiili1[IllIiI(0x12d,'^)UR')](lI1ll1[IllIiI(0x1ce,'@29e')]?.[IllIiI(0x1d4,'ps@G')],0x1f4)?iiili1['agkih'](iiili1['KXgPc'],'pTuCL')?(console[IllIiI(0x1de,'$Q4z')](''+Ill11+lI1ll1[IllIiI(0x116,'#ic7')]),liiIII[IllIiI(0xf4,'[duN')](''+lI1ll1[IllIiI(0x1d9,'(60Q')]),i11ilI=!![]):lIIiil['log']('❓'+l1lIii+'\x20'+I11iI1['stringify'](l1lIil)):console[IllIiI(0x172,'Rb1a')]('❓'+ii1ilI+'\x20'+JSON['stringify'](lI1ll1));break;case'shopList':if(lI1ll1[IllIiI(0x1d8,'^B3Z')]&&iiili1['HqBpG'](lI1ll1[IllIiI(0x125,'*t&1')]?.[IllIiI(0xf0,'926#')],0xc8))$[IllIiI(0x15d,'sP9V')]=lI1ll1?.[IllIiI(0xe5,'x9tI')]?.['data']||[];else lI1ll1[IllIiI(0x1ce,'@29e')]?.[IllIiI(0x1f3,'z)[$')]==0x1f4?iiili1['mCLou']===iiili1[IllIiI(0xf2,'vS!h')]?console[IllIiI(0x1f7,'k4ol')](''+Ill11+lI1ll1[IllIiI(0x120,'k4ol')]):ii1ll[IllIiI(0x1d5,'x9tI')](IliI1l,lliiil):console['log']('❓'+ii1ilI+'\x20'+JSON[IllIiI(0x1fe,'%zzo')](lI1ll1));break;case iiili1['HaKds']:if(lI1ll1[IllIiI(0x16c,'rSKg')]&&iiili1['qzdCL'](lI1ll1[IllIiI(0x1fb,'#wXI')]?.[IllIiI(0x141,'sWD4')],0xc8))$[IllIiI(0x1e3,'$Y%F')]=lI1ll1?.['data']?.['data'],console[IllIiI(0x198,'wfKe')](''+Ill11+(lI1ll1[IllIiI(0x1b7,'Zz#3')]||$[IllIiI(0xe4,'k4ol')]?.['remark']||'')),liiIII[IllIiI(0x164,'NhUb')](''+(lI1ll1[IllIiI(0x1c0,'6WDK')]||$[IllIiI(0x1a7,'0tfC')]?.[IllIiI(0x1d0,'Zz#3')]||''));else lI1ll1[IllIiI(0x178,'eFUr')]?.[IllIiI(0x1dc,'[duN')]==0x1f4?console[IllIiI(0x200,'926#')](''+Ill11+lI1ll1[IllIiI(0x1e1,'6WDK')]):console['log']('❓'+ii1ilI+'\x20'+JSON[IllIiI(0x169,'6WDK')](lI1ll1));break;}}catch(IlIliI){console['log'](IllIiI(0xea,'gY#H')+ii1ilI+IllIiI(0x128,'$Q4z')+(IlIliI[IllIiI(0x18e,'j3yD')]||IlIliI));}}async function llllI(l1iII1){const i1il1=IIliIi,iiill1={'jNrbA':i1il1(0x15f,'$Q4z')};if($['runEnd'])return;let lIli1i=il1i1i,IIIII1=null,I1lIlI=null,ii1ill='POST';switch(l1iII1){case iiili1['sSuLT']:lIli1i+=iiili1['SUQDb'],I1lIlI={'open_id':'','mix_nick':iiili1['gzFae'](il1i1l,''),'user_id':IIIl1I},IIIII1=iiili1[i1il1(0x184,'CZ$k')](lllil1,'/jdJoinCardtf/activity/load',Object['assign']({'jdToken':iil1ii,'source':'01','inviteNick':lil111||''}));break;case i1il1(0x1e7,'NhUb'):lIli1i+=iiili1[i1il1(0xee,'Akq2')],I1lIlI={'open_id':'','mix_nick':iiili1[i1il1(0x1ac,'[duN')](il1i1l,''),'user_id':IIIl1I},IIIII1=lllil1('/jdJoinCardtf/shop/shopList',{});break;case'mission':lIli1i+=iiili1['SHdTJ'],I1lIlI={'open_id':'','mix_nick':il1i1l||'','user_id':IIIl1I},IIIII1=lllil1(iiili1[i1il1(0xe8,'#UJ%')],Object['assign']({'missionType':$['missionType']},$[i1il1(0x12c,'KTvP')]?{'goodsNumId':$[i1il1(0x1c3,'[Dz$')]}:{}));break;default:console['log'](i1il1(0x1a4,'#8O&')+l1iII1);return;}const II1iI={};IIIII1&&(i1il1(0x17c,'[ie9')!==iiili1['hzSxZ']?(iliIII=iIIl1i['filter']((liil1i,lI1lil)=>!Iliil1[i1il1(0x18c,'2bw4')][i1il1(0x1af,'0tfC')](lI1lil+0x1)),ill111[i1il1(0xf6,'CZ$k')]=[]):Object['assign'](IIIII1,II1iI));I1lIlI&&(iiili1[i1il1(0x185,'k4ol')](iiili1[i1il1(0x13e,'Qs&N')],iiili1['YEgTm'])?Object[i1il1(0x11d,'KTvP')](I1lIlI,II1iI):llIllI['log']('❓'+I1ilI1+'\x20'+iillll[i1il1(0x138,'#8O&')](lIIilI)));const llI1II={'url':lIli1i,'method':ii1ill,'headers':{'Accept':iiili1['rCjfr'],'Accept-Encoding':i1il1(0x218,'%zzo'),'Accept-Language':iiili1[i1il1(0x18d,'vS!h')],'Connection':iiili1[i1il1(0x1b8,'#wXI')],'Content-Type':'application/x-www-form-urlencoded','Cookie':iil1l1,'User-Agent':iI11I1,'X-Requested-With':'XMLHttpRequest'},'params':I1lIlI,'data':IIIII1,'timeout':0x7530};if(iiili1[i1il1(0x15c,'o[t5')](ii1ill,i1il1(0x1f9,'[Dz$'))){if(i1il1(0x144,'^B3Z')===iiili1[i1il1(0x201,'0tfC')])delete llI1II[i1il1(0x216,'t9FA')],delete llI1II['headers'][i1il1(0x16e,'Akq2')];else{IiilI1[i1il1(0x108,'KTvP')](i1il1(0x136,'NhUb'));return;}}il1i1i[i1il1(0x19e,'6WDK')](i1il1(0x21a,'Aham'))&&(Object['assign'](llI1II[i1il1(0x1cd,'j3yD')],{'Origin':i1il1(0xf7,'Gl[A'),'Content-Type':iiili1[i1il1(0x1f0,'t9FA')]}),delete llI1II[i1il1(0xe7,'JF@7')][iiili1['OsUlD']]);const lIli1l=0x1;let lillIi=0x0,illIi1=null;while(iiili1[i1il1(0x12e,'#J2J')](lillIi,lIli1l)){iiili1[i1il1(0x19d,'vS!h')](lillIi,0x0)&&(i1il1(0x21c,'t9FA')===i1il1(0x167,'6WDK')?await $[i1il1(0x1c8,'#J2J')](0x3e8):i1l1li['log'](iiill1[i1il1(0x10e,'Gl[A')]));const lI1lii=await common['request'](llI1II);if(!lI1lii[i1il1(0x13d,'wfKe')]){illIi1='🚫\x20'+l1iII1+'\x20请求失败\x20➜\x20'+lI1lii['error'],lillIi++;continue;}if(!lI1lii[i1il1(0x14d,'#UJ%')]){if(i1il1(0xef,'Akq2')!=='Bqwtb')return;else{illIi1=i1il1(0x154,'rSKg')+l1iII1+i1il1(0x203,'ps@G'),lillIi++;continue;}}await iiili1['yrEwU'](ii1ii1,l1iII1,lI1lii[i1il1(0x1ff,'sP9V')]);break;}lillIi>=lIli1l&&console[i1il1(0x191,'%zzo')](illIi1);}function lllil1(i1i11I,il1iIl){const I1l111=IIliIi,iii1ii=iil1il({'actId':IlIlll,...il1iIl,'method':i1i11I,'userId':IIIl1I,'buyerNick':iiili1[I1l111(0x16d,'*t&1')](il1i1l,'')}),il1iIi={'jsonRpc':I1l111(0x11a,'[duN'),'params':{'commonParameter':{'m':iiili1['BPZqF'],'oba':iii1ii[I1l111(0x1c2,'KTvP')],'timestamp':iii1ii[I1l111(0x19a,'sWD4')],'userId':IIIl1I},'admJson':{'actId':IlIlll,...il1iIl,'method':i1i11I,'userId':IIIl1I,'buyerNick':il1i1l||''}}};return i1i11I['indexOf'](iiili1[I1l111(0x1f1,'@29e')])>-0x1&&delete il1iIi[I1l111(0x148,'^)UR')][I1l111(0x10c,'t9FA')][I1l111(0x21d,'%zzo')],il1iIi;}function iil1il(iii1il){const IIii1l=IIliIi;if(iiili1[IIii1l(0x12b,'Akq2')](iiili1[IIii1l(0x199,'926#')],iiili1[IIii1l(0x159,'Aham')])){const II11li='6cc5dbd8900e434b94c4bdb0c16348ed',I1l11i=IIii1l(0x12f,'vS!h'),iIIiiI=new Date()[IIii1l(0x15a,'KTvP')](),liiI1i=new RegExp('\x27','g'),ililIi=new RegExp('~','g'),lilIIl=iiili1['IuVYV'](encodeURIComponent,JSON['stringify'](iii1il))[IIii1l(0x155,'Qs&N')](liiI1i,IIii1l(0x137,'KTvP'))['replace'](ililIi,IIii1l(0x176,'Gl[A')),ililIl=iiili1[IIii1l(0x1b6,'CZ$k')](iiili1[IIii1l(0x205,'#wXI')](iiili1['jbkaU']('f',I1l11i),'D')+lilIIl,'c')+iIIiiI+II11li,liiI1l=CryptoJS[IIii1l(0x149,'Gl[A')](ililIl['toLowerCase']())[IIii1l(0xf9,'wfKe')]();return{'sign':liiI1l,'timeStamp':iIIiiI};}else ll1il[IIii1l(0x19c,'sPHO')](IiiIiI['headers'],{'Origin':IIii1l(0x20a,'vS!h'),'Content-Type':IIii1l(0x17d,'w9^2')}),delete lilii['headers'][iiili1[IIii1l(0x130,'sP9V')]];}}var version_ = 'jsjiami.com.v7';
// prettier-ignore
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}

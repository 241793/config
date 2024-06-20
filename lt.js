
DS = 0
NAME = "中国联通";
VALY = ["zgltck"];
VER = "1.1.2";
CK = "";
LOGS = 0;
usid = 0;
Notify = 1;
nowhour = Math.round(new Date().getHours()).toString();

const 哇哈哈_0x5e7375 = require("fs"),
      {
  v4: 哇哈哈_0x54fc9e
} = require("uuid");

DCFHOST = process.env.DCFHOST;
dcfkey = encodeURIComponent(process.env.dcfkey);
IP = "";
IPCITY = "";

class 哇哈哈_0xad71c {
  constructor(_0x1d24cf) {
    this.phone = _0x1d24cf;

    let _0x36e383 = this.phone.slice(-4);

    this._ = ++usid;
    this.f = "小主 [" + this._ + "]" + _0x36e383;
    this.message = "";
    this.logs = true;
  }

  async login() {
    let _0x1f6477 = $.getFormattedDate(),
        _0x24d345 = $.DecryptCrypto("0", "AES", "CBC", "Pkcs7", "{\"phone\":\"" + this.phone + "\",\"timestamp\":\"" + _0x1f6477 + "\"}", "woreadst^&*12345", "16-Bytes--String"),
        _0x1dadc6 = {
      accesstoken: "ODZERTZCMjA1NTg1MTFFNDNFMThDRDYw"
    },
        _0x2fe0d0 = "{\"sign\":\"" + _0x24d345 + "\"}",
        _0x2b5959 = await $.task("post", "https://10010.woread.com.cn/ng_woread_service/rest/account/login", _0x1dadc6, _0x2fe0d0);

    if (_0x2b5959.code == "0000") {
      console.log("【" + this.f + "】登陆成功");
      this.userindex = _0x2b5959.data.userindex;
      this.verifycode = _0x2b5959.data.verifycode;
      this.userid = _0x2b5959.data.userid;
      this.token = _0x2b5959.data.token;
      this.logs = true;
    } else {
      this.logs = false;
    }
  }

  async taskinfo() {
    let _0x325fe7 = $.getFormattedDate(),
        _0x2ff384 = $.DecryptCrypto("0", "AES", "CBC", "Pkcs7", "{\"timestamp\":\"" + _0x325fe7 + "\",\"token\":\"" + this.token + "\",\"userId\":\"" + this.userid + "\",\"userIndex\":\"" + this.userindex + "\",\"userAccount\":\"" + this.phone + "\",\"verifyCode\":\"" + this.verifycode + "\"}", "woreadst^&*12345", "16-Bytes--String"),
        _0x5c5959 = {
      accesstoken: "ODZERTZCMjA1NTg1MTFFNDNFMThDRDYw"
    },
        _0x39bc05 = "{\"sign\":\"" + _0x2ff384 + "\"}",
        _0x27f698 = await $.task("post", "https://10010.woread.com.cn/ng_woread_service/rest/activity423/queryActiveInfo", _0x5c5959, _0x39bc05);

    _0x27f698.code == "0000" && (this.activeId = _0x27f698.data.activeId);
  }

  async tasklist() {
    let _0x1cc531 = $.getFormattedDate(),
        _0x10a378 = $.DecryptCrypto("0", "AES", "CBC", "Pkcs7", "{\"activeIndex\":" + this.activeId + ",\"timestamp\":\"" + _0x1cc531 + "\",\"token\":\"" + this.token + "\",\"userId\":\"" + this.userid + "\",\"userIndex\":\"" + this.userindex + "\",\"userAccount\":\"" + this.phone + "\",\"verifyCode\":\"" + this.verifycode + "\"}", "woreadst^&*12345", "16-Bytes--String"),
        _0x153797 = {
      accesstoken: "ODZERTZCMjA1NTg1MTFFNDNFMThDRDYw"
    },
        _0x3e3971 = "{\"sign\":\"" + _0x10a378 + "\"}",
        _0x2bb179 = await $.task("post", "https://10010.woread.com.cn/ng_woread_service/rest/activity423/queryActiveTaskList", _0x153797, _0x3e3971);

    if (_0x2bb179.code == "0000") {
      let _0x746121 = _0x2bb179.data.filter(_0x414f30 => {
        const _0x13af9d = _0x414f30.taskDetail.taskName;
        return _0x13af9d === "阅读240分钟" || _0x13af9d === "阅读120分钟";
      });

      _0x746121.sort((_0x1211ed, _0x4fe139) => _0x4fe139.secondTaskId - _0x1211ed.secondTaskId);

      let _0x4ef556 = $.getNextDayTimestamp();

      if (_0x4ef556 != "请在规定时间段内抢任务") {
        let _0x296327 = $.time(13),
            _0xa8b480 = _0x4ef556 - _0x296327 - DS;

        _0x296327 <= _0x4ef556 && (console.log(this.f + "抢阅读任务时间未到，等待" + _0xa8b480 / 1000 + "秒后开始疯狂抢任务..."), await $.wait(_0xa8b480), await this.receivetask(_0x746121));
      } else {
        console.log("【" + this.f + "】" + _0x4ef556);
      }
    }
  }

  async receivetask(_0x5e4ba3) {
    for (let _0x19f78d of _0x5e4ba3) {
      let _0x5b1429 = _0x19f78d.secondTaskId,
          _0x423d16 = _0x19f78d.taskDetail.materialGroup.bindActiveName,
          _0x556180 = $.getFormattedDate(),
          _0x2a3250 = $.DecryptCrypto("0", "AES", "CBC", "Pkcs7", "{\"activeId\":" + this.activeId + ",\"taskId\":" + _0x5b1429 + ",\"timestamp\":\"" + _0x556180 + "\",\"token\":\"" + this.token + "\",\"userId\":\"" + this.userid + "\",\"userIndex\":\"" + this.userindex + "\",\"userAccount\":\"" + this.phone + "\",\"verifyCode\":\"" + this.verifycode + "\"}", "woreadst^&*12345", "16-Bytes--String"),
          _0x1e6fcc = {
        accesstoken: "ODZERTZCMjA1NTg1MTFFNDNFMThDRDYw"
      },
          _0xbf5af1 = "{\"sign\":\"" + _0x2a3250 + "\"}",
          _0x6cb30c = await $.task("post", "https://10010.woread.com.cn/ng_woread_service/rest/activity423/receiveActiveTask", _0x1e6fcc, _0xbf5af1);

      if (_0x6cb30c.code == "0000") {
        console.log("【" + this.f + "】抢【" + _0x423d16 + "】任务结果:" + _0x6cb30c.data + ",当前时间:" + $.CurrentTime());
        this.message += "\n【" + this.f + "】抢【" + _0x423d16 + "】任务结果:" + _0x6cb30c.data + ",当前时间:" + $.CurrentTime();
      } else {
        console.log("【" + this.f + "】抢【" + _0x423d16 + "】任务结果:" + _0x6cb30c.message + ",当前时间:" + $.CurrentTime());
        this.message += "\n【" + this.f + "】抢【" + _0x423d16 + "】任务结果:" + _0x6cb30c.message + ",当前时间:" + $.CurrentTime();
      }
    }
  }

  async taskstatus() {
    let _0x55dd3c = $.getFormattedDate(),
        _0x15bade = $.DecryptCrypto("0", "AES", "CBC", "Pkcs7", "{\"activeIndex\":" + this.activeId + ",\"timestamp\":\"" + _0x55dd3c + "\",\"token\":\"" + this.token + "\",\"userId\":\"" + this.userid + "\",\"userIndex\":\"" + this.userindex + "\",\"userAccount\":\"" + this.phone + "\",\"verifyCode\":\"" + this.verifycode + "\"}", "woreadst^&*12345", "16-Bytes--String"),
        _0x56ef65 = {
      accesstoken: "ODZERTZCMjA1NTg1MTFFNDNFMThDRDYw"
    },
        _0x440fce = "{\"sign\":\"" + _0x15bade + "\"}",
        _0x2b01a4 = await $.task("post", "https://10010.woread.com.cn/ng_woread_service/rest/activity423/queryCurTaskStatus", _0x56ef65, _0x440fce);

    if (_0x2b01a4.code == "0000" && _0x2b01a4.data.length >= 1) {
      for (let _0x13cf1f of _0x2b01a4.data) {
        console.log("【" + this.f + "】【" + _0x13cf1f.taskDetail.materialGroup.bindActiveName + "】任务完成进度:" + _0x13cf1f.taskDetail.currentValue + "/" + _0x13cf1f.taskDetail.taskValue);

        if (_0x13cf1f.taskDetail.currentValue < _0x13cf1f.taskDetail.taskValue) {
          await this.doread();
        } else {
          _0x13cf1f.taskDetail.currentValue == _0x13cf1f.taskDetail.taskValue && (console.log("【" + this.f + "】【" + _0x13cf1f.taskDetail.materialGroup.bindActiveName + "】任务已完成"), await this.getreward(_0x13cf1f.taskDetail.materialGroup.bindActiveName, _0x13cf1f.id));
        }
      }
    }
  }

  async doread() {
    let _0x5e680e = $.getFormattedDate(),
        _0x2c8b3e = $.DecryptCrypto("0", "AES", "CBC", "Pkcs7", "{\"readTime\":\"2\",\"cntindex\":\"409672\",\"cntIndex\":409672,\"cnttype\":\"1\",\"cntType\":1,\"cardid\":\"11891\",\"catid\":\"118411\",\"pageIndex\":\"10683\",\"chapterseno\":1,\"channelid\":\"\",\"chapterid\":\"-1\",\"readtype\":1,\"isend\":\"0\",\"timestamp\":\"" + _0x5e680e + "\",\"token\":\"" + this.token + "\",\"userId\":\"" + this.userid + "\",\"userIndex\":\"" + this.userindex + "\",\"userAccount\":\"" + this.phone + "\",\"verifyCode\":\"" + this.verifycode + "\"}", "woreadst^&*12345", "16-Bytes--String"),
        _0x5c5345 = {
      accesstoken: "ODZERTZCMjA1NTg1MTFFNDNFMThDRDYw"
    },
        _0x390b27 = "{\"sign\":\"" + _0x2c8b3e + "\"}",
        _0x31b56b = await $.task("post", "https://10010.woread.com.cn/ng_woread_service/rest/history/addReadTime", _0x5c5345, _0x390b27);

    _0x31b56b.code == "0000" ? (console.log("【" + this.f + "】上传阅读时长成功"), await $.wait(121000, 128000), await this.taskstatus()) : await $.wait(121000, 128000);
  }

  async getreward(_0x3cccdf, _0x1da0c7) {
    let _0x17698e = $.getFormattedDate(),
        _0x4f746a = $.DecryptCrypto("0", "AES", "CBC", "Pkcs7", "{\"taskId\":" + _0x1da0c7 + ",\"timestamp\":\"" + _0x17698e + "\",\"token\":\"" + this.token + "\",\"userId\":\"" + this.userid + "\",\"userIndex\":\"" + this.userindex + "\",\"userAccount\":\"" + this.phone + "\",\"verifyCode\":\"" + this.verifycode + "\"}", "woreadst^&*12345", "16-Bytes--String"),
        _0x48d6dd = {
      accesstoken: "ODZERTZCMjA1NTg1MTFFNDNFMThDRDYw"
    },
        _0xaae67e = "{\"sign\":\"" + _0x4f746a + "\"}",
        _0x1121cc = await $.task("post", "https://10010.woread.com.cn/ng_woread_service/rest/activity423/completeActiveTask", _0x48d6dd, _0xaae67e);

    _0x1121cc.code == "0000" ? (console.log("【" + this.f + "】完成【" + _0x1121cc.data.taskDetail.taskName + "】任务，获得【" + _0x1121cc.data.exchangeResult.materialGroupInfo.groupName + "】奖励成功🎉🎉"), this.message += "\n【" + this.f + "】完成【" + _0x1121cc.data.taskDetail.taskName + "】任务，获得【" + _0x1121cc.data.exchangeResult.materialGroupInfo.groupName + "】奖励成功🎉🎉") : console.log("【" + this.f + "】完成【" + _0x3cccdf + "】任务，结果:" + _0x1121cc.message);
  }

  async lotterystatus() {
    let _0x294fb8 = $.getFormattedDate(),
        _0x56cc79 = $.DecryptCrypto("0", "AES", "CBC", "Pkcs7", "{\"activeIndex\":" + this.activeId + ",\"timestamp\":\"" + _0x294fb8 + "\",\"token\":\"" + this.token + "\",\"userId\":\"" + this.userid + "\",\"userIndex\":\"" + this.userindex + "\",\"userAccount\":\"" + this.phone + "\",\"verifyCode\":\"" + this.verifycode + "\"}", "woreadst^&*12345", "16-Bytes--String"),
        _0x400b22 = {
      accesstoken: "ODZERTZCMjA1NTg1MTFFNDNFMThDRDYw"
    },
        _0x2e7bbc = "{\"sign\":\"" + _0x56cc79 + "\"}",
        _0x4b5e59 = await $.task("post", "https://10010.woread.com.cn/ng_woread_service/rest/activity423/queryReadStatus", _0x400b22, _0x2e7bbc);

    if (_0x4b5e59.code == "0000") {
      if (_0x4b5e59.data == "4") {
        await this.lottery();
      } else {
        _0x4b5e59.data == "3" && (console.log("【" + this.f + "】暂无阅读抽奖机会,明天再来试试运气吧"), this.message += "\n【" + this.f + "】暂无阅读抽奖机会,明天再来试试运气吧");
      }
    }
  }

  async lottery() {
    let _0x28922c = $.getFormattedDate(),
        _0x8b2f1b = $.DecryptCrypto("0", "AES", "CBC", "Pkcs7", "{\"activeIndex\":" + this.activeId + ",\"timestamp\":\"" + _0x28922c + "\",\"token\":\"" + this.token + "\",\"userId\":\"" + this.userid + "\",\"userIndex\":\"" + this.userindex + "\",\"userAccount\":\"" + this.phone + "\",\"verifyCode\":\"" + this.verifycode + "\"}", "woreadst^&*12345", "16-Bytes--String"),
        _0x2f9809 = {
      accesstoken: "ODZERTZCMjA1NTg1MTFFNDNFMThDRDYw"
    },
        _0x3d6c1f = "{\"sign\":\"" + _0x8b2f1b + "\"}",
        _0xbb867d = await $.task("post", "https://10010.woread.com.cn/ng_woread_service/rest/activity423/drawReadActivePrize", _0x2f9809, _0x3d6c1f);

    _0xbb867d.code == "0000" && (console.log("【" + this.f + "】完成阅读任务抽奖成功,获得:【" + _0xbb867d.data.prizedesc + "】奖励"), this.message += "\n【" + this.f + "】完成阅读任务抽奖成功,获得:【" + _0xbb867d.data.prizedesc + "】奖励", await $.wait(2000, 4000), await this.lotterystatus());
  }

  async addDrawTimes() {
    let _0x12bc83 = $.getFormattedDate(),
        _0x1971b9 = $.DecryptCrypto("0", "AES", "CBC", "Pkcs7", "{\"userid\":\"" + this.userid + "\",\"activetyindex\":6640,\"timestamp\":\"" + _0x12bc83 + "\",\"token\":\"" + this.token + "\",\"userId\":\"" + this.userid + "\",\"userIndex\":\"" + this.userindex + "\",\"userAccount\":\"" + this.phone + "\",\"verifyCode\":\"" + this.verifycode + "\"}", "woreadst^&*12345", "16-Bytes--String"),
        _0x1536d9 = {
      accesstoken: "ODZERTZCMjA1NTg1MTFFNDNFMThDRDYw"
    },
        _0x495197 = "{\"sign\":\"" + _0x1971b9 + "\"}",
        _0x4f5a0b = await $.task("post", "https://10010.woread.com.cn/ng_woread_service/rest/basics/addDrawTimes", _0x1536d9, _0x495197);

    _0x4f5a0b.code == "0000" && (console.log("【" + this.f + "】完成阅读打卡任务成功,获得抽奖机会"), this.message += "\n【" + this.f + "】完成阅读打卡任务成功,获得抽奖机会");
  }

  async checkUserTakeActive() {
    let _0x3e57da = $.getFormattedDate(),
        _0x23d5b0 = $.DecryptCrypto("0", "AES", "CBC", "Pkcs7", "{\"activeIndex\":6640,\"timestamp\":\"" + _0x3e57da + "\",\"token\":\"" + this.token + "\",\"userId\":\"" + this.userid + "\",\"userIndex\":\"" + this.userindex + "\",\"userAccount\":\"" + this.phone + "\",\"verifyCode\":\"" + this.verifycode + "\"}", "woreadst^&*12345", "16-Bytes--String"),
        _0x5d7f11 = {
      accesstoken: "ODZERTZCMjA1NTg1MTFFNDNFMThDRDYw"
    },
        _0x4ed53e = "{\"sign\":\"" + _0x23d5b0 + "\"}",
        _0x3e0f23 = await $.task("post", "https://10010.woread.com.cn/ng_woread_service/rest/activity/checkUserTakeActive", _0x5d7f11, _0x4ed53e);

    _0x3e0f23.code == "0000" ? _0x3e0f23.data > 0 && (await this.dodraw()) : (console.log("【" + this.f + "】暂无打卡抽奖机会,明天再来试试运气吧"), this.message += "\n【" + this.f + "】暂无打卡抽奖机会,明天再来试试运气吧");
  }

  async dodraw() {
    let _0x1faca3 = $.getFormattedDate(),
        _0x268992 = $.DecryptCrypto("0", "AES", "CBC", "Pkcs7", "{\"activeindex\":6640,\"timestamp\":\"" + _0x1faca3 + "\",\"token\":\"" + this.token + "\",\"userId\":\"" + this.userid + "\",\"userIndex\":\"" + this.userindex + "\",\"userAccount\":\"" + this.phone + "\",\"verifyCode\":\"" + this.verifycode + "\"}", "woreadst^&*12345", "16-Bytes--String"),
        _0x289793 = {
      accesstoken: "ODZERTZCMjA1NTg1MTFFNDNFMThDRDYw"
    },
        _0x5892e3 = "{\"sign\":\"" + _0x268992 + "\"}",
        _0x389a20 = await $.task("post", "https://10010.woread.com.cn/ng_woread_service/rest/basics/doDraw", _0x289793, _0x5892e3);

    if (_0x389a20.code == "0000") {
      console.log("【" + this.f + "】完成打卡任务抽奖成功,获得:【" + _0x389a20.data.prizedesc + "】奖励");
      await $.wait(2000, 4000);
      await this.checkUserTakeActive();
    }
  }

  async userinfo() {
    let _0x17bdd2 = $.getFormattedDate(),
        _0x54c0e2 = $.DecryptCrypto("0", "AES", "CBC", "Pkcs7", "{\"timestamp\":\"" + _0x17bdd2 + "\",\"token\":\"" + this.token + "\",\"userId\":\"" + this.userid + "\",\"userIndex\":\"" + this.userindex + "\",\"userAccount\":\"" + this.phone + "\",\"verifyCode\":\"" + this.verifycode + "\"}", "woreadst^&*12345", "16-Bytes--String"),
        _0x41ca4b = {
      accesstoken: "ODZERTZCMjA1NTg1MTFFNDNFMThDRDYw"
    },
        _0x5e56b7 = "{\"sign\":\"" + _0x54c0e2 + "\"}",
        _0x12bbfd = await $.task("post", "https://10010.woread.com.cn/ng_woread_service/rest/phone/vouchers/queryTicketAccount", _0x41ca4b, _0x5e56b7);

    _0x12bbfd.code == "0000" && (console.log("【" + this.f + "】已赚取:" + _0x12bbfd.data.totalNum / 100 + "元话费券，当前余额:" + _0x12bbfd.data.usableNum / 100 + "元话费券"), this.message += "\n【" + this.f + "】已赚取:" + _0x12bbfd.data.totalNum / 100 + "元话费券，当前余额:" + _0x12bbfd.data.usableNum / 100 + "元话费券");
  }

}

$ = 哇哈哈_0x5ec58c();
!(async () => {

  if (1 == 0) {
    console.log("【" + NAME + "】当前版本号：V" + VER + ",正在更新脚本，请稍等......");

    const _0x504ab0 = require("fs").promises,
          _0x5a84e3 = process.argv[1];

    await _0x504ab0.writeFile(_0x5a84e3, _0x35269a.scriptData);
    console.log("脚本更新完成，请重新运行脚本");
  } else {
    if (1 == 1) {
      console.log("正在运行脚本：【" + NAME + "】V" + VER);
      console.log("📢 请认真阅读以下声明\n 【免责声明】   \n📌 脚本文件仅用于测试和学习研究   \n📌 脚本文件任何人不得用于商业以及非法用途   \n📌 禁止任何公众号、自媒体进行任何形式的转发   \n📌 脚本文件请在下载试用后24小时内自行删除   \n📌 因使用脚本造成软件平台的一切损失皆由使用者承担   \n📌 脚本文件如有不慎被破解或修改由破解或修改者承担   \n📌 如不接受此条款请立即删除脚本文件");



      if (true) {


        await $.ExamineCookie();

          await $.Multithreading("login");

          let _0x19f922 = $.cookie_list.filter(_0x391768 => _0x391768.logs == true);

          if (_0x19f922.length == 0) {
            console.log("Cookie格式错误 或 账号被禁封");
            return;
          } else {
            await $.Multithreading("taskinfo");
            await $.Multithreading("tasklist");
            await $.Multithreading("taskstatus");
            await $.Multithreading("lotterystatus");
            await $.Multithreading("addDrawTimes");
            await $.Multithreading("checkUserTakeActive");
            await $.Multithreading("userinfo");
          }

      } else {
        if (_0x4ce22f.message == "更新成功") {
          console.log("数据更新成功，请重新运行脚本");
          return;
        } else {
          let _0x4bf2f2 = require("path"),
              _0x2823c5 = _0x4bf2f2.basename(__filename);

          console.log("无效卡密，停止运行文件[" + _0x2823c5 + "]");
          return;
        }
      }
    } else {
      console.log("脚本更新失败，不进行覆盖操作，请稍后重试！");
      console.log("正在运行脚本：【" + NAME + "】V" + VER);
      console.log("📢 请认真阅读以下声明\n 【免责声明】   \n📌 脚本文件仅用于测试和学习研究   \n📌 脚本文件任何人不得用于商业以及非法用途   \n📌 禁止任何公众号、自媒体进行任何形式的转发   \n📌 脚本文件请在下载试用后24小时内自行删除   \n📌 因使用脚本造成软件平台的一切损失皆由使用者承担   \n📌 脚本文件如有不慎被破解或修改由破解或修改者承担   \n📌 如不接受此条款请立即删除脚本文件");

      let _0xa0fd9c = await $.getkami(),
          _0x374854 = await $.readUUID();

      if (_0xa0fd9c.dcfkey) {
        if (_0xa0fd9c.Notify != "") {
          console.log(_0xa0fd9c.Notify);
          NOTIFY = _0xa0fd9c.Notify;
        }

        TSdata = $.time(13);

        if (_0xa0fd9c.MAC == null) {
          console.log("请提交正确的MAC地址后再运行脚本！");
          return;
        } else {
          if (_0xa0fd9c.MAC != null) {
            if (_0xa0fd9c.MAC != _0x374854) {
              let _0x261a79 = require("path"),
                  _0x202422 = _0x261a79.basename(__filename);

              console.log("本次MAC地址与数据库记录不匹配，停止运行文件[" + _0x202422 + "]");
              return;
            }
          }
        }

        if (_0xa0fd9c.Delete == 1) {
          let _0x5bb40d = require("path"),
              _0xcf6dd9 = _0x5bb40d.basename(__filename);

          console.log("关闭服务器跑路啦，帮你删除脚本文件[" + _0xcf6dd9 + "]");
          哇哈哈_0x5e7375.unlink(_0xcf6dd9, _0x52ab1a => {});
          return;
        }

        if (TSdata <= _0xa0fd9c.Data) {
          console.log("尊贵的" + _0xa0fd9c.UserName + "小主,您的卡密有效期到：" + _0xa0fd9c.DataTime);
        } else {
          let _0x37f498 = require("path"),
              _0x2f5598 = _0x37f498.basename(__filename);

          console.log("卡密已过期，停止运行文件[" + _0x2f5598 + "]");
          return;
        }

        await $.ExamineCookie();

        if ($.cookie_list.length < _0xa0fd9c.xianjin) {
          await $.Multithreading("login");

          let _0x40054e = $.cookie_list.filter(_0x2f1f3b => _0x2f1f3b.logs == true);

          if (_0x40054e.length == 0) {
            console.log("Cookie格式错误 或 账号被禁封");
            return;
          } else {
            await $.Multithreading("taskinfo");
            await $.Multithreading("tasklist");
            await $.Multithreading("taskstatus");
            await $.Multithreading("lotterystatus");
            await $.Multithreading("addDrawTimes");
            await $.Multithreading("checkUserTakeActive");
            await $.Multithreading("userinfo");
          }
        } else {
          console.log("账号数量超过限制，请减少账号数量后重试！");
        }
      } else {
        if (_0xa0fd9c.message == "更新成功") {
          console.log("数据更新成功，请重新运行脚本");
          return;
        } else {
          let _0x51010b = require("path"),
              _0x3f2e08 = _0x51010b.basename(__filename);

          console.log("无效卡密，停止运行文件[" + _0x3f2e08 + "]");
          return;
        }
      }
    }
  }

  let _0x2f20e9 = [];

  for (let _0x5e2c10 of $.cookie_list) {
    if (_0x5e2c10.message) {
      _0x2f20e9.push(_0x5e2c10.message);
    }
  }

  if (_0x2f20e9.length > 0) {
    await $.SendMsg(_0x2f20e9.join("\n"));
  }
})().catch(_0x196e96 => {
  console.log(_0x196e96);
}).finally(() => {});

function 哇哈哈_0x5ec58c() {
  return new class {
    constructor() {
      this.cookie_list = [];
      this.message = "";
      this.CryptoJS = require("crypto-js");
      this.NodeRSA = require("node-rsa");
      this.request = require("request");
      this.Sha_Rsa = require("jsrsasign");
    }

    async Multithreading(_0x3242e3, _0x5cdb26, _0x1d6450) {
      let _0x55dd04 = [];
      !_0x1d6450 && (_0x1d6450 = 1);

      while (_0x1d6450--) {
        for (let _0x2896b6 of $.cookie_list) {
          _0x55dd04.push(_0x2896b6[_0x3242e3](_0x5cdb26));
        }
      }

      await Promise.allSettled(_0x55dd04);
    }

    ExamineCookie() {
      let _0x53946f = process.env[VALY] || CK,
          _0x14d8d6 = 0;

      if (_0x53946f) {
        for (let _0x492dd4 of _0x53946f.split("\n").filter(_0x532550 => !!_0x532550)) {
          $.cookie_list.push(new 哇哈哈_0xad71c(_0x492dd4));
        }

        _0x14d8d6 = $.cookie_list.length;
      } else {
        console.log("\n【" + NAME + "】：未填写变量: " + VALY);
      }

      console.log("共找到" + _0x14d8d6 + "个账号");
      return $.cookie_list;
    }

    task(_0x345124, _0x3f2fc8, _0x34f853, _0x5e8325, _0x4bb908) {
      if (_0x345124 == "delete") {
        _0x345124 = _0x345124.toUpperCase();
      } else {
        _0x345124 = _0x345124;
      }

      if (_0x345124 == "post") {
        delete _0x34f853["content-type"];
        delete _0x34f853["Content-type"];
        delete _0x34f853["content-Type"];

        if ($.safeGet(_0x5e8325)) {
          _0x34f853["Content-Type"] = "application/json;charset=UTF-8";
        } else {
          _0x34f853["Content-Type"] = "application/x-www-form-urlencoded";
        }

        _0x5e8325 && (_0x34f853["Content-Length"] = $.lengthInUtf8Bytes(_0x5e8325));
      }

      _0x345124 == "get" && (delete _0x34f853["content-type"], delete _0x34f853["Content-type"], delete _0x34f853["content-Type"], delete _0x34f853["Content-Length"]);
      _0x34f853.Host = _0x3f2fc8.replace("//", "/").split("/")[1];
      return new Promise(async _0x19202f => {
        if (_0x345124.indexOf("T") < 0) {
          var _0x48bde4 = {
            url: _0x3f2fc8,
            headers: _0x34f853,
            body: _0x5e8325,
            proxy: "http://" + _0x4bb908
          };
        } else {
          var _0x48bde4 = {
            url: _0x3f2fc8,
            headers: _0x34f853,
            form: JSON.parse(_0x5e8325),
            proxy: "http://" + _0x4bb908
          };
        }

        !_0x4bb908 && delete _0x48bde4.proxy;

        this.request[_0x345124.toLowerCase()](_0x48bde4, (_0x2972b2, _0x16e1ed, _0x1763cc) => {
          try {
            _0x1763cc && LOGS == 1 && (console.log("================ 请求 ================"), console.log(_0x48bde4), console.log("================ 返回 ================"), $.safeGet(_0x1763cc) ? console.log(JSON.parse(_0x1763cc)) : console.log(_0x1763cc));
          } catch (_0x2cd9a7) {
            console.log(_0x2cd9a7, _0x3f2fc8 + "\n" + _0x34f853);
          } finally {
            let _0x38fa6d = "";

            if (!_0x2972b2) {
              if ($.safeGet(_0x1763cc)) {
                _0x38fa6d = JSON.parse(_0x1763cc);
              } else {
                _0x1763cc.indexOf("/") != -1 && _0x1763cc.indexOf("+") != -1 ? _0x38fa6d = _0x1763cc : _0x38fa6d = _0x1763cc;
              }
            } else {
              _0x38fa6d = _0x3f2fc8 + "   API请求失败，请检查网络重试\n" + _0x2972b2;
            }

            return _0x19202f(_0x38fa6d);
          }
        });
      });
    }

    async readUUID() {
      const _0x2b256a = "uuid.txt";
      await $.generateUUID(_0x2b256a);

      try {
        const _0x328413 = 哇哈哈_0x5e7375.readFileSync(_0x2b256a, "utf8"),
              _0x4b5fd8 = _0x328413.trim();

        return _0x4b5fd8;
      } catch (_0x29c1c9) {
        return null;
      }
    }

    generateUUID(_0x3e9e88) {
      if (哇哈哈_0x5e7375.existsSync(_0x3e9e88)) {
        return;
      }

      const _0x18d62e = 哇哈哈_0x54fc9e();

      哇哈哈_0x5e7375.writeFile(_0x3e9e88, _0x18d62e, "utf8", _0x138de3 => {
        if (_0x138de3) {
          console.error("写入文件出错: " + _0x138de3.message);
          return;
        }
      });
    }

    async getkami() {
      let _0x509637 = await $.readUUID();

      await $.getCurrentIP();
      await $.getIPCITY();

      let _0x523629 = await $.task("get", "http://" + DCFHOST + "/querys?DCFKEY=" + dcfkey + "&MAC=" + _0x509637 + "&JSHOST=" + IP + "&JSCITY=" + IPCITY, {});

      return _0x523629;
    }

    async getIPCITY() {
      let _0x4cda3e = await $.task("get", "http://ip-api.com/json/" + IP + "?lang=zh-CN", {}),
          _0x39db41 = _0x4cda3e.regionName + _0x4cda3e.city;

      IPCITY = encodeURIComponent(_0x39db41);
    }

    async getCurrentIP() {
      let _0x18414b = await $.task("get", "https://httpbin.org/ip", {});

      IP = _0x18414b.origin;
    }

    async SendMsg(_0x5a49ce) {
      if (!_0x5a49ce) {
        return;
      }

      if (Notify == 10) {
        var _0x538c00 = require("./sendNotify");

        await _0x538c00.sendNotify(NAME, NOTIFY + "\n\n" + _0x5a49ce);
      }
    }

    lengthInUtf8Bytes(_0x10d6b3) {
      let _0x5a3dea = encodeURIComponent(_0x10d6b3).match(/%[89ABab]/g);

      return _0x10d6b3.length + (_0x5a3dea ? _0x5a3dea.length : 0);
    }

    randomArr(_0x54fa21) {
      return _0x54fa21[parseInt(Math.random() * _0x54fa21.length, 10)];
    }

    wait(_0x572f5d) {
      return new Promise(_0x52e75c => setTimeout(_0x52e75c, _0x572f5d));
    }

    time(_0x1b09a8) {
      if (_0x1b09a8 == 10) {
        return Math.round(+new Date() / 1000);
      } else {
        return +new Date();
      }
    }

    getNextDayTimestamp() {
      const _0x1e5e3d = new Date();

      if (nowhour == 23) {
        _0x1e5e3d.setDate(_0x1e5e3d.getDate() + 1);

        _0x1e5e3d.setHours(0, 0, 0, 0);

        return _0x1e5e3d.getTime();
      } else {
        if (nowhour == 0) {
          _0x1e5e3d.setDate(_0x1e5e3d.getDate());

          _0x1e5e3d.setHours(0, 0, 0, 0);

          return _0x1e5e3d.getTime();
        } else {
          let _0x3aef5c = "请在规定时间段内抢任务";
          return _0x3aef5c;
        }
      }
    }

    CurrentTime() {
      const _0x3650bd = new Date(),
            _0x1f5a90 = String(_0x3650bd.getHours()).padStart(2, "0"),
            _0x493fd9 = String(_0x3650bd.getMinutes()).padStart(2, "0"),
            _0xb658c2 = String(_0x3650bd.getSeconds()).padStart(2, "0"),
            _0x35a955 = String(_0x3650bd.getMilliseconds()).padStart(3, "0");

      let _0x14a28f = _0x1f5a90 + ":" + _0x493fd9 + ":" + _0xb658c2 + "." + _0x35a955;

      return _0x14a28f;
    }

    getFormattedDate() {
      const _0xa47102 = new Date(),
            _0x490189 = _0xa47102.getFullYear(),
            _0x3f6dc2 = (_0xa47102.getMonth() + 1).toString().padStart(2, "0"),
            _0x3f9da3 = _0xa47102.getDate().toString().padStart(2, "0"),
            _0x447080 = _0xa47102.getHours().toString().padStart(2, "0"),
            _0x10fbb9 = _0xa47102.getMinutes().toString().padStart(2, "0"),
            _0x8a2585 = _0xa47102.getSeconds().toString().padStart(2, "0");

      return "" + _0x490189 + _0x3f6dc2 + _0x3f9da3 + _0x447080 + _0x10fbb9 + _0x8a2585;
    }

    safeGet(_0x1f1561) {
      try {
        if (typeof JSON.parse(_0x1f1561) == "object") {
          return true;
        }
      } catch (_0x338573) {
        return false;
      }
    }

    SJS(_0x5b7cf4, _0x38eeb4) {
      if (_0x38eeb4 == 0) {
        let _0x35b1c2 = "QWERTYUIOPASDFGHJKLZXCVBNM01234567890123456789",
            _0x29d700 = _0x35b1c2.length,
            _0x126007 = "";

        for (let _0x1612dc = 0; _0x1612dc < _0x5b7cf4; _0x1612dc++) {
          _0x126007 += _0x35b1c2.charAt(Math.floor(Math.random() * _0x29d700));
        }

        return _0x126007;
      } else {
        if (_0x38eeb4 == 1) {
          let _0x33bb93 = "qwertyuiopasdfghjklzxcvbnm0123456789",
              _0x50cb37 = _0x33bb93.length,
              _0x47b0af = "";

          for (let _0xa86b5f = 0; _0xa86b5f < _0x5b7cf4; _0xa86b5f++) {
            _0x47b0af += _0x33bb93.charAt(Math.floor(Math.random() * _0x50cb37));
          }

          return _0x47b0af;
        } else {
          let _0x1d6e76 = "0123456789",
              _0x18d159 = _0x1d6e76.length,
              _0x2aed1c = "";

          for (let _0xcff0e2 = 0; _0xcff0e2 < _0x5b7cf4; _0xcff0e2++) {
            _0x2aed1c += _0x1d6e76.charAt(Math.floor(Math.random() * _0x18d159));
          }

          return _0x2aed1c;
        }
      }
    }

    encodeUnicode(_0x5b5c6f) {
      var _0x2c4241 = [];

      for (var _0xed21e8 = 0; _0xed21e8 < _0x5b5c6f.length; _0xed21e8++) {
        _0x2c4241[_0xed21e8] = ("00" + _0x5b5c6f.charCodeAt(_0xed21e8).toString(16)).slice(-4);
      }

      return "\\u" + _0x2c4241.join("\\u");
    }

    base64ToHex(_0x40ab80) {
      const _0x4854c7 = atob(_0x40ab80),
            _0xce6113 = new Uint8Array(_0x4854c7.length);

      for (let _0xea0be5 = 0; _0xea0be5 < _0x4854c7.length; _0xea0be5++) {
        _0xce6113[_0xea0be5] = _0x4854c7.charCodeAt(_0xea0be5);
      }

      let _0x255d7d = "";

      for (let _0x28c768 = 0; _0x28c768 < _0xce6113.length; _0x28c768++) {
        const _0x1f7651 = _0xce6113[_0x28c768].toString(16).padStart(2, "0");

        _0x255d7d += _0x1f7651;
      }

      return _0x255d7d;
    }

    decodeUnicode(_0x10b878) {
      _0x10b878 = _0x10b878.replace(/\\u/g, "%u");
      return unescape(unescape(_0x10b878));
    }

    RT(_0x36464d, _0x3715d2) {
      return Math.round(Math.random() * (_0x3715d2 - _0x36464d) + _0x36464d);
    }

    arrNull(_0xee3f4b) {
      var _0x5d9d78 = _0xee3f4b.filter(_0x321d13 => {
        return _0x321d13 && _0x321d13.trim();
      });

      return _0x5d9d78;
    }

    nowtime() {
      return new Date(new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 28800000);
    }

    timecs() {
      let _0x5cb741 = $.nowtime();

      JSON.stringify(_0x5cb741).indexOf(" ") >= 0 && (_0x5cb741 = _0x5cb741.replace(" ", "T"));
      return new Date(_0x5cb741).getTime() - 28800000;
    }

    rtjson(_0xb36dab, _0x3e289b, _0x20f9e3, _0x1efbb5) {
      return _0x1efbb5 == 0 ? JSON.stringify(_0xb36dab.split(_0x3e289b).reduce((_0xaf1013, _0x3f2610) => {
        let _0x5fdc01 = _0x3f2610.split(_0x20f9e3);

        _0xaf1013[_0x5fdc01[0].trim()] = _0x5fdc01[1].trim();
        return _0xaf1013;
      }, {})) : _0xb36dab.split(_0x3e289b).reduce((_0x1cccd5, _0x1714ee) => {
        let _0x57bf3a = _0x1714ee.split(_0x20f9e3);

        _0x1cccd5[_0x57bf3a[0].trim()] = _0x57bf3a[1].trim();
        return _0x1cccd5;
      }, {});
    }

    MD5Encrypt(_0x3a391c, _0x4e79e1) {
      if (_0x3a391c == 0) {
        return this.CryptoJS.MD5(_0x4e79e1).toString().toLowerCase();
      } else {
        if (_0x3a391c == 1) {
          return this.CryptoJS.MD5(_0x4e79e1).toString().toUpperCase();
        } else {
          if (_0x3a391c == 2) {
            return this.CryptoJS.MD5(_0x4e79e1).toString().substring(8, 24).toLowerCase();
          } else {
            if (_0x3a391c == 3) {
              return this.CryptoJS.MD5(_0x4e79e1).toString().substring(8, 24).toUpperCase();
            }
          }
        }
      }
    }

    SHA_Encrypt(_0x39d71d, _0x1e9b56, _0x2b1f18) {
      if (_0x39d71d == 0) {
        return this.CryptoJS[_0x1e9b56](_0x2b1f18).toString(this.CryptoJS.enc.Base64);
      } else {
        return this.CryptoJS[_0x1e9b56](_0x2b1f18).toString();
      }
    }

    HmacSHA_Encrypt(_0x142b5b, _0x438683, _0xceaecd, _0x21450a) {
      if (_0x142b5b == 0) {
        return this.CryptoJS[_0x438683](_0xceaecd, _0x21450a).toString(this.CryptoJS.enc.Base64);
      } else {
        return this.CryptoJS[_0x438683](_0xceaecd, _0x21450a).toString();
      }
    }

    Base64(_0x1fef40, _0x523925) {
      if (_0x1fef40 == 0) {
        return this.CryptoJS.enc.Base64.stringify(this.CryptoJS.enc.Utf8.parse(_0x523925));
      } else {
        return this.CryptoJS.enc.Utf8.stringify(this.CryptoJS.enc.Base64.parse(_0x523925));
      }
    }

    DecryptCrypto(_0x390a97, _0x199fe1, _0x670f34, _0x33a206, _0x1fc247, _0x42d919, _0x220d87) {
      if (_0x390a97 == 0) {
        const _0x1b1014 = this.CryptoJS[_0x199fe1].encrypt(this.CryptoJS.enc.Utf8.parse(_0x1fc247), this.CryptoJS.enc.Utf8.parse(_0x42d919), {
          iv: this.CryptoJS.enc.Utf8.parse(_0x220d87),
          mode: this.CryptoJS.mode[_0x670f34],
          padding: this.CryptoJS.pad[_0x33a206]
        }),
              _0x4f6c27 = _0x1b1014.ciphertext.toString();

        return Buffer.from(_0x4f6c27, "utf-8").toString("base64");
      } else {
        const _0x3cb5d2 = this.CryptoJS[_0x199fe1].decrypt(_0x1fc247, this.CryptoJS.enc.Utf8.parse(_0x42d919), {
          iv: this.CryptoJS.enc.Utf8.parse(_0x220d87),
          mode: this.CryptoJS.mode[_0x670f34],
          padding: this.CryptoJS.pad[_0x33a206]
        });

        return _0x3cb5d2.toString(this.CryptoJS.enc.Utf8);
      }
    }

    RSA(_0x451158, _0x4348ec) {
      const _0x214c26 = require("node-rsa");

      let _0x56747b = new _0x214c26("-----BEGIN PUBLIC KEY-----\n" + _0x4348ec + "\n-----END PUBLIC KEY-----");

      _0x56747b.setOptions({
        encryptionScheme: "pkcs1"
      });

      return _0x56747b.encrypt(_0x451158, "base64", "utf8");
    }

    getSHA1withRSA(_0x2db9d5) {
      const _0x2a60bb = rs.KEYUTIL.getKey(privateKeyString),
            _0x2c692b = new rs.KJUR.crypto.Signature({
        alg: "SHA1withRSA"
      });

      _0x2c692b.init(_0x2a60bb);

      _0x2c692b.updateString(_0x2db9d5);

      const _0x42e5db = _0x2c692b.sign(),
            _0x49b550 = rs.hextob64u(_0x42e5db);

      return _0x49b550;
    }

    hexToBase64(_0x1c1584) {
      const _0x58689f = [];

      for (let _0x3c4769 = 0; _0x3c4769 < _0x1c1584.length; _0x3c4769 += 2) {
        _0x58689f.push(parseInt(_0x1c1584.substr(_0x3c4769, 2), 16));
      }

      const _0x638ec0 = btoa(String.fromCharCode(..._0x58689f));

      return _0x638ec0;
    }

    Sha1withRsa(_0x2fb737) {
      const {
        KEYUTIL: _0x1d4785,
        KJUR: _0x28c2ca,
        b64utoutf8: _0x432682,
        utf8tob64: _0x23202a
      } = require("jsrsasign"),
            _0xabbd21 = _0x1d4785.getKey(Key),
            _0x382821 = new _0x28c2ca.crypto.Signature({
        alg: "SHA1withRSA"
      });

      _0x382821.init(_0xabbd21);

      _0x382821.updateString(_0x2fb737);

      const _0x191edf = _0x382821.sign();

      let _0x38cc4d = $.hexToBase64(_0x191edf);

      return _0x38cc4d;
    }

  }();
}

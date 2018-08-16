
    function checkCashRegister(price, cash, cid) {
        // Here is your change, ma'am.
        let lookupdic = {
            "PENNY": 0.01,
            "NICKEL": 0.05,
            "DIME": 0.1,
            "QUARTER": 0.25,
            "ONE": 1,
            "FIVE": 5,
            "TEN": 10,
            "TWENTY": 20,
            "ONE HUNDRED": 100
        }
        let result = { status: "", change: [] };
        let total = cid.map(x => x[1]).reduce((x, y) => (x * 1000 + y * 1000) / 1000);
        let give = cash - price;
        if (total === give) {
            result.status = "CLOSED";
            result.change = cid;
        } else if (total >= give) {
            result.status = "OPEN";
            for (let i = cid.length - 1; i >= 0; i--) {
                let num = Math.floor(give / lookupdic[cid[i][0]]);
                if (num >= 1) {
                    if (cid[i][1] > 0) {// 该单位对应的余额总数大于0 可用于找零
                        let canuse = Math.min(cid[i][1] * 1000 / 1000, num * (lookupdic[cid[i][0]] * 1000) / 1000);
                        result.change.push([cid[i][0], canuse]);
                        console.log(give, canuse);
                        give = (give * 1000 - canuse * 1000) / 1000;
                    }
                }
                if (give === 0) {
                    break;
                }
            }
            if (give !== 0) {
                result = { status: "INSUFFICIENT_FUNDS", change: [] };
            }

        } else {
            result.status = "INSUFFICIENT_FUNDS";
        }

        return result;
    }

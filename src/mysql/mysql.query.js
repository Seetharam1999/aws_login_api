"use strict";
exports.__esModule = true;
var mysql_config_1 = require("./mysql.conect");
var SqlManager = /** @class */ (function () {
    function SqlManager() {
        this._mysql = mysql_config_1.mysql.getMysql();
    }
    SqlManager.prototype.ExecuteQuery = function (qry) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._mysql.query(qry, function (error, results, fields) {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(results);
                }
            });
        });
    };
    SqlManager.prototype.Get = function (qry, params) {
        var _this = this;
        console.log(params);
        // let query = this._mysql.format(qry, params);
        return new Promise(function (resolve, reject) {
            _this._mysql.query(qry, params, function (error, results, fields) {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(results);
                }
            });
        });
    };
    return SqlManager;
}());
exports.SqlManager = SqlManager;
/**
 * 站点配置
 * www PC 端配置
 * wap 手机端配置
 *
 * title_suffix 网站标题后缀
 * title 网站标题
 * keywords 网站关键字
 * description 网站描述
 */
module.exports = {

    /** ******************************
     * 全站默认配置信息
     *******************************/
    default: {
        title_suffix: ' - 做生意，用有赞',
        title: '有赞',
        keywords: '有赞微商城,有赞微小店,有赞收银,有赞批发,有赞零售,有赞餐饮,有赞美业',
        description: '有赞，做移动互联网时代好用的开店工具，基于SaaS模式，整合资源、深度挖掘，向商户提供强大的微商城系统和完整的移动电商解决方案，在移动零售服务生态里联合服务商、开发者、经营专家，共建服务生态，服务百万商家。'
    },

    /** ******************************
     * www 默认配置信息
     *******************************/
    www_default: {

    },

    /** ******************************
     * wap 默认配置信息
     *******************************/
    wap_default: {

    },

    /** ******************************
     * 以下是 www 配置
     *******************************/

    '/': {
        title_suffix: '',
        title: '有赞 - 做生意，用有赞'
    }


    /** ******************************
     * 以下是 wap 配置
     *******************************/

};

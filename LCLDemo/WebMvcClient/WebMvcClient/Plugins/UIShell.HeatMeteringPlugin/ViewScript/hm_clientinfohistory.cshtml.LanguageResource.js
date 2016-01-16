﻿$.LCLPageModel.Resource.InitLanguageResource = function () { 
    // 资源初始化 
    $.LCLPageModel.Resource.PageLanguageResource = $.LCLPageModel.Resource.LanguageResourceInfo[pageAttr.LanguageId]; 
$('#btnSavewfrout').html($.LCLPageModel.Resource.PageLanguageResource.Page_Command_Save); 
$('#btnCancelwfrout').html($.LCLPageModel.Resource.PageLanguageResource.Page_Command_Cancel); 
$('#btnSearchwfrout').html($.LCLPageModel.Resource.PageLanguageResource.Page_Command_Search); 
$('#search_title').html($.LCLPageModel.Resource.PageLanguageResource.Page_label_Search_title); 
$('#search_key').html($.LCLPageModel.Resource.PageLanguageResource.Page_label_Search_key); 
$('#grid_wfrout').attr('title', $.LCLPageModel.Resource.PageLanguageResource.Page_title); 
    $('#ff_lab_hm_clientinfohistory_id').html($.LCLPageModel.Resource.PageLanguageResource.HM_ClientInfoHistory_Model_ID); 
    $('#ff_lab_hm_clientinfohistory_user_id').html($.LCLPageModel.Resource.PageLanguageResource.HM_ClientInfoHistory_Model_User_ID); 
    $('#ff_lab_hm_clientinfohistory_recordtype').html($.LCLPageModel.Resource.PageLanguageResource.HM_ClientInfoHistory_Model_RecordType); 
    $('#ff_lab_hm_clientinfohistory_record').html($.LCLPageModel.Resource.PageLanguageResource.HM_ClientInfoHistory_Model_Record); 
    $('#ff_lab_hm_clientinfohistory_isdelete').html($.LCLPageModel.Resource.PageLanguageResource.HM_ClientInfoHistory_Model_IsDelete); 
    $('#ff_lab_hm_clientinfohistory_adddate').html($.LCLPageModel.Resource.PageLanguageResource.HM_ClientInfoHistory_Model_AddDate); 
    $('#ff_lab_hm_clientinfohistory_updatedate').html($.LCLPageModel.Resource.PageLanguageResource.HM_ClientInfoHistory_Model_UpdateDate); 
    $('#ff_lab_hm_clientinfohistory_chargeannual_id').html($.LCLPageModel.Resource.PageLanguageResource.HM_ClientInfoHistory_Model_ChargeAnnual_ID); 
    $('#ff_lab_hm_clientinfohistory_clientinfo_id').html($.LCLPageModel.Resource.PageLanguageResource.HM_ClientInfoHistory_Model_ClientInfo_ID); 

} 
//初始化页面中文资源 
$.LCLPageModel.Resource.LanguageResourceInfo['2052'] = { 
    Page_title: '采暖变更历史', 
    Page_Command_Grid_Operate: '操作', 
    Page_Command_Add: '添加', 
    Page_Command_Edit: '修改', 
    Page_Command_Del: '删除', 
    Page_Command_Save: '保存', 
    Page_Command_Cancel: '取消', 
    Page_Command_Search: '查询', 
    Page_label_Search_title: '信息查询', 
    Page_label_Search_key: '搜', 
    LCLMessageBox_AlertTitle: '温馨提示', 
    LCLMessageBox_Message1: '请选择一行', 
    LCLMessageBox_Message2: '请先勾选要删除的数据', 
    LCLMessageBox_Message3: '是否删除选中数据', 
    HM_ClientInfoHistory_Model_ID: '编号', 
    HM_ClientInfoHistory_Model_User_ID: '用户', 
    HM_ClientInfoHistory_Model_RecordType: '变更类别', 
    HM_ClientInfoHistory_Model_Record: '变更信息', 
    HM_ClientInfoHistory_Model_IsDelete: '删除标记', 
    HM_ClientInfoHistory_Model_AddDate: '添加时间', 
    HM_ClientInfoHistory_Model_UpdateDate: '更新时间', 
    HM_ClientInfoHistory_Model_ChargeAnnual_ID: 'ChargeAnnual_ID', 
    HM_ClientInfoHistory_Model_ClientInfo_ID: 'ClientInfo_ID', 
}; 
//初始化页面英文资源 
$.LCLPageModel.Resource.LanguageResourceInfo['1033'] = { 
    Page_title: 'HM_ClientInfoHistory', 
    Page_Command_Grid_Operate: 'Operate', 
    Page_Command_Add: 'Add', 
    Page_Command_Edit: 'Edit', 
    Page_Command_Del: 'Delete', 
    Page_Command_Save: 'Save', 
    Page_Command_Cancel: 'Cancel', 
    Page_Command_Search: 'Search', 
    Page_label_Search_title: 'info query', 
    Page_label_Search_key: 'key', 
    LCLMessageBox_AlertTitle: 'AlertTitle', 
    LCLMessageBox_Message1: 'Please select row', 
    LCLMessageBox_Message2: 'Please delete data', 
    LCLMessageBox_Message3: 'is delete data', 
    HM_ClientInfoHistory_Model_ID: 'ID', 
    HM_ClientInfoHistory_Model_User_ID: 'User_ID', 
    HM_ClientInfoHistory_Model_RecordType: 'RecordType', 
    HM_ClientInfoHistory_Model_Record: 'Record', 
    HM_ClientInfoHistory_Model_IsDelete: 'IsDelete', 
    HM_ClientInfoHistory_Model_AddDate: 'AddDate', 
    HM_ClientInfoHistory_Model_UpdateDate: 'UpdateDate', 
    HM_ClientInfoHistory_Model_ChargeAnnual_ID: 'ChargeAnnual_ID', 
    HM_ClientInfoHistory_Model_ClientInfo_ID: 'ClientInfo_ID', 
}; 


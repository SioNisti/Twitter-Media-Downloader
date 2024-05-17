( function () {

var SCRIPT_NAME = 'twMediaDownloader',
    OAUTH_POPUP_WINDOW_NAME = SCRIPT_NAME + '-OAuthAuthorization'; // twMediaDownloader.user.js と合わせる

// x OAuth 認証用ポップアップとして起動した場合は、x.initialize() により tokens 取得用処理を実施（内部でx.initializePopupWindow()を呼び出し）
// ※ユーザースクリプトでの処理（拡張機能の場合、session.jsにて実施）
x.initialize( {
    popup_window_name : OAUTH_POPUP_WINDOW_NAME
} );

} )();

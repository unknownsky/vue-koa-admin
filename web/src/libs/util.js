let util = {

};
util.title = function (title) {
    title = title ? title + ' - Home' : 'vue-admin';
    window.document.title = title;
};

export default util;
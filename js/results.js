const bindings = {shapeResults: ko.observable([]), colorResults: ko.observable([]), queryImage: ko.observable("")};
ko.applyBindings(bindings);

const fetchResults = function () {
    const e = JSON.parse(sessionStorage.getItem("results"));
    const n = sessionStorage.getItem("queryImage");
    bindings.shapeResults(e.slice(0, 20));
    bindings.colorResults(e.slice(20, 40));
    bindings.queryImage(n);
};
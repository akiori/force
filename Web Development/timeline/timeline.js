// @ts-ignore
const d3 = window.d3;

const margin = { top: 40, right: 32, bottom: 40, left: 40 };
const innerW = 1000;
const rowPadding = 2;
const rowHeight = 20;
const textOffset = 3;

let dateParse = d3.timeParse("%m/%d/%Y");

/*
data = d3.csv("https://gist.githubusercontent.com/Aias/c93216aef46798dfc5dd3ed0b4b66282/raw/53c48c118f917f9320e78cd23a53d9675f72f813/fake_claims_2.csv", claim => ({
        claim_type: claim.claim_type,
        date_received: dateParse(claim.date_received),
        claim_amount: +claim.claim_amount
    }))
*/

const data = [
    {
        claim_type: "Home Health",
        date_received: "2018-01-02T16:00:00.000Z",
        claim_amount: 200,
    },
    {
        claim_type: "Home Health",
        date_received: "2018-02-02T16:00:00.000Z",
        claim_amount: 200,
    },
    {
        claim_type: "Home Health",
        date_received: "2018-03-02T16:00:00.000Z",
        claim_amount: 200,
    },
    {
        claim_type: "Home Health",
        date_received: "2018-04-02T16:00:00.000Z",
        claim_amount: 200,
    },
    {
        claim_type: "Home Health",
        date_received: "2018-05-02T16:00:00.000Z",
        claim_amount: 200,
    },
    {
        claim_type: "Home Health",
        date_received: "2018-06-02T16:00:00.000Z",
        claim_amount: 200,
    },
    {
        claim_type: "Home Health",
        date_received: "2018-07-02T16:00:00.000Z",
        claim_amount: 200,
    },
    {
        claim_type: "Home Health",
        date_received: "2018-08-02T16:00:00.000Z",
        claim_amount: 200,
    },
    {
        claim_type: "Home Health",
        date_received: "2018-09-02T16:00:00.000Z",
        claim_amount: 200,
    },
    {
        claim_type: "Home Health",
        date_received: "2018-09-09T16:00:00.000Z",
        claim_amount: 150,
    },
    {
        claim_type: "Home Health",
        date_received: "2018-09-16T16:00:00.000Z",
        claim_amount: 100,
    },
    {
        claim_type: "Home Health",
        date_received: "2018-09-23T16:00:00.000Z",
        claim_amount: 125,
    },
    {
        claim_type: "Home Health",
        date_received: "2018-10-02T16:00:00.000Z",
        claim_amount: 200,
    },
    {
        claim_type: "Home Health",
        date_received: "2018-11-02T16:00:00.000Z",
        claim_amount: 200,
    },
    {
        claim_type: "Home Health",
        date_received: "2018-12-02T16:00:00.000Z",
        claim_amount: 200,
    },
    {
        claim_type: "Oral",
        date_received: "2018-02-14T16:00:00.000Z",
        claim_amount: 100,
    },
    {
        claim_type: "Oral",
        date_received: "2018-08-14T16:00:00.000Z",
        claim_amount: 80,
    },
    {
        claim_type: "Hospice",
        date_received: "2018-11-19T16:00:00.000Z",
        claim_amount: 400,
    },
    {
        claim_type: "Hospice",
        date_received: "2018-12-07T16:00:00.000Z",
        claim_amount: 200,
    },
    {
        claim_type: "Hospice",
        date_received: "2018-12-12T16:00:00.000Z",
        claim_amount: 300,
    },
    {
        claim_type: "Hospice",
        date_received: "2018-12-14T16:00:00.000Z",
        claim_amount: 500,
    },
    {
        claim_type: "Hospice",
        date_received: "2018-12-27T16:00:00.000Z",
        claim_amount: 250,
    },
    {
        claim_type: "Hospital Outpatient",
        date_received: "2018-03-31T16:00:00.000Z",
        claim_amount: 1000,
    },
    {
        claim_type: "Hospital Outpatient",
        date_received: "2018-03-31T16:00:00.000Z",
        claim_amount: 150,
    },
    {
        claim_type: "Hospital Outpatient",
        date_received: "2018-03-31T16:00:00.000Z",
        claim_amount: 2000,
    },
    {
        claim_type: "Hospital Outpatient",
        date_received: "2018-04-01T16:00:00.000Z",
        claim_amount: 300,
    },
    {
        claim_type: "Hospital Outpatient",
        date_received: "2018-04-01T16:00:00.000Z",
        claim_amount: 100,
    },
    {
        claim_type: "Hospital Outpatient",
        date_received: "2018-04-01T16:00:00.000Z",
        claim_amount: 50,
    },
    {
        claim_type: "Hospital Outpatient",
        date_received: "2018-04-01T16:00:00.000Z",
        claim_amount: 10,
    },
    {
        claim_type: "Hospital Outpatient",
        date_received: "2018-04-01T16:00:00.000Z",
        claim_amount: 30,
    },
    {
        claim_type: "Hospital Outpatient",
        date_received: "2018-04-01T16:00:00.000Z",
        claim_amount: 120,
    },
    {
        claim_type: "Hospital Outpatient",
        date_received: "2018-04-01T16:00:00.000Z",
        claim_amount: 500,
    },
    {
        claim_type: "Hospital Outpatient",
        date_received: "2018-04-01T16:00:00.000Z",
        claim_amount: 30,
    },
    {
        claim_type: "Hospital Outpatient",
        date_received: "2018-04-01T16:00:00.000Z",
        claim_amount: 600,
    },
    {
        claim_type: "Hospital Outpatient",
        date_received: "2018-04-01T16:00:00.000Z",
        claim_amount: 1000,
    },
    {
        claim_type: "Hospital Outpatient",
        date_received: "2018-04-01T16:00:00.000Z",
        claim_amount: 20,
    },
    {
        claim_type: "Hospital Outpatient",
        date_received: "2018-04-01T16:00:00.000Z",
        claim_amount: 75,
    },
    {
        claim_type: "Hospital Outpatient",
        date_received: "2018-04-01T16:00:00.000Z",
        claim_amount: 250,
    },
    {
        claim_type: "Hospital Outpatient",
        date_received: "2018-04-01T16:00:00.000Z",
        claim_amount: 110,
    },
    {
        claim_type: "Hospital Outpatient",
        date_received: "2018-04-01T16:00:00.000Z",
        claim_amount: 10,
    },
    {
        claim_type: "Hospital Outpatient",
        date_received: "2018-04-01T16:00:00.000Z",
        claim_amount: 20,
    },
    {
        claim_type: "Hospital Outpatient",
        date_received: "2018-04-01T16:00:00.000Z",
        claim_amount: 400,
    },
    {
        claim_type: "Hospital Outpatient",
        date_received: "2018-04-01T16:00:00.000Z",
        claim_amount: 30,
    },
    {
        claim_type: "Outpatient",
        date_received: "2018-04-27T16:00:00.000Z",
        claim_amount: 500,
    },
    {
        claim_type: "Outpatient",
        date_received: "2018-04-27T16:00:00.000Z",
        claim_amount: 600,
    },
    {
        claim_type: "Outpatient",
        date_received: "2018-04-27T16:00:00.000Z",
        claim_amount: 1200,
    },
    {
        claim_type: "Outpatient",
        date_received: "2018-04-28T16:00:00.000Z",
        claim_amount: 60,
    },
    {
        claim_type: "Vision",
        date_received: "2018-06-14T16:00:00.000Z",
        claim_amount: 300,
    },
    {
        claim_type: "Specimen-Only",
        date_received: "2018-04-25T16:00:00.000Z",
        claim_amount: 10,
    },
    {
        claim_type: "Specimen-Only",
        date_received: "2018-04-26T16:00:00.000Z",
        claim_amount: 20,
    },
    {
        claim_type: "Specimen-Only",
        date_received: "2018-04-27T16:00:00.000Z",
        claim_amount: 30,
    },
    {
        claim_type: "Pharmacy",
        date_received: "2018-01-02T16:00:00.000Z",
        claim_amount: 10,
    },
    {
        claim_type: "Pharmacy",
        date_received: "2018-01-27T16:00:00.000Z",
        claim_amount: 5,
    },
    {
        claim_type: "Pharmacy",
        date_received: "2018-03-14T16:00:00.000Z",
        claim_amount: 12,
    },
    {
        claim_type: "Pharmacy",
        date_received: "2018-05-19T16:00:00.000Z",
        claim_amount: 20,
    },
    {
        claim_type: "Pharmacy",
        date_received: "2018-05-20T16:00:00.000Z",
        claim_amount: 140,
    },
    {
        claim_type: "Pharmacy",
        date_received: "2018-05-29T16:00:00.000Z",
        claim_amount: 3,
    },
    {
        claim_type: "Pharmacy",
        date_received: "2018-06-30T16:00:00.000Z",
        claim_amount: 5,
    },
    {
        claim_type: "Pharmacy",
        date_received: "2018-10-13T16:00:00.000Z",
        claim_amount: 18,
    },
    {
        claim_type: "Pharmacy",
        date_received: "2018-12-08T16:00:00.000Z",
        claim_amount: 20,
    },
    {
        claim_type: "Pharmacy",
        date_received: "2018-01-09T16:00:00.000Z",
        claim_amount: 12,
    },
    {
        claim_type: "Pharmacy",
        date_received: "2018-01-11T16:00:00.000Z",
        claim_amount: 75,
    },
    {
        claim_type: "Pharmacy",
        date_received: "2018-01-23T16:00:00.000Z",
        claim_amount: 12,
    },
    {
        claim_type: "Pharmacy",
        date_received: "2018-01-31T16:00:00.000Z",
        claim_amount: 7,
    },
    {
        claim_type: "Pharmacy",
        date_received: "2018-02-09T16:00:00.000Z",
        claim_amount: 76,
    },
    {
        claim_type: "Pharmacy",
        date_received: "2018-02-11T16:00:00.000Z",
        claim_amount: 10,
    },
    {
        claim_type: "Pharmacy",
        date_received: "2018-02-23T16:00:00.000Z",
        claim_amount: 26,
    },
    {
        claim_type: "Pharmacy",
        date_received: "2018-02-28T16:00:00.000Z",
        claim_amount: 200,
    },
    {
        claim_type: "Pharmacy",
        date_received: "2018-03-01T16:00:00.000Z",
        claim_amount: 120,
    },
    {
        claim_type: "Pharmacy",
        date_received: "2018-03-19T16:00:00.000Z",
        claim_amount: 30,
    },
    {
        claim_type: "Pharmacy",
        date_received: "2018-03-25T16:00:00.000Z",
        claim_amount: 3,
    },
    {
        claim_type: "Pharmacy",
        date_received: "2018-04-01T16:00:00.000Z",
        claim_amount: 4,
    },
    {
        claim_type: "Pharmacy",
        date_received: "2018-04-06T16:00:00.000Z",
        claim_amount: 12,
    },
    {
        claim_type: "Pharmacy",
        date_received: "2018-04-11T16:00:00.000Z",
        claim_amount: 45,
    },
    {
        claim_type: "Pharmacy",
        date_received: "2018-06-11T16:00:00.000Z",
        claim_amount: 67,
    },
    {
        claim_type: "Pharmacy",
        date_received: "2018-07-31T16:00:00.000Z",
        claim_amount: 13,
    },
    {
        claim_type: "Pharmacy",
        date_received: "2018-08-01T16:00:00.000Z",
        claim_amount: 42,
    },
    {
        claim_type: "Pharmacy",
        date_received: "2018-08-02T16:00:00.000Z",
        claim_amount: 12,
    },
    {
        claim_type: "Pharmacy",
        date_received: "2018-08-22T16:00:00.000Z",
        claim_amount: 123,
    },
    {
        claim_type: "Pharmacy",
        date_received: "2018-09-03T16:00:00.000Z",
        claim_amount: 33,
    },
    {
        claim_type: "Pharmacy",
        date_received: "2018-10-13T16:00:00.000Z",
        claim_amount: 133,
    },
    {
        claim_type: "Pharmacy",
        date_received: "2018-11-06T16:00:00.000Z",
        claim_amount: 42,
    },
    {
        claim_type: "Pharmacy",
        date_received: "2018-12-08T16:00:00.000Z",
        claim_amount: 80,
    },
    {
        claim_type: "Pharmacy",
        date_received: "2018-12-17T16:00:00.000Z",
        claim_amount: 90,
    },
    {
        claim_type: "Pharmacy",
        date_received: "2018-12-24T16:00:00.000Z",
        claim_amount: 12,
    },
    {
        claim_type: "Professional",
        date_received: "2018-04-25T16:00:00.000Z",
        claim_amount: 1200,
    },
    {
        claim_type: "Professional",
        date_received: "2018-04-25T16:00:00.000Z",
        claim_amount: 300,
    },
    {
        claim_type: "Professional",
        date_received: "2018-04-25T16:00:00.000Z",
        claim_amount: 400,
    },
    {
        claim_type: "Professional",
        date_received: "2018-04-26T16:00:00.000Z",
        claim_amount: 120,
    },
    {
        claim_type: "Professional",
        date_received: "2018-04-26T16:00:00.000Z",
        claim_amount: 60,
    },
    {
        claim_type: "Professional",
        date_received: "2018-04-26T16:00:00.000Z",
        claim_amount: 75,
    },
    {
        claim_type: "Professional",
        date_received: "2018-04-26T16:00:00.000Z",
        claim_amount: 129,
    },
    {
        claim_type: "Professional",
        date_received: "2018-04-27T16:00:00.000Z",
        claim_amount: 300,
    },
    {
        claim_type: "Professional",
        date_received: "2018-04-27T16:00:00.000Z",
        claim_amount: 123,
    },
    {
        claim_type: "Professional",
        date_received: "2018-04-28T16:00:00.000Z",
        claim_amount: 30,
    },
    {
        claim_type: "Professional",
        date_received: "2018-04-28T16:00:00.000Z",
        claim_amount: 12,
    },
    {
        claim_type: "Professional",
        date_received: "2018-04-29T16:00:00.000Z",
        claim_amount: 125,
    },
    {
        claim_type: "Professional",
        date_received: "2018-04-30T16:00:00.000Z",
        claim_amount: 1500,
    },
];

const types = d3
    .nest()
    .key((d) => d.claim_type)
    .rollup((leaves) => ({
        total: d3.sum(leaves, (l) => l.claim_amount),
        scale: d3
            .scaleSqrt()
            .domain([0, d3.max(leaves, (l) => l.claim_amount)])
            .range([0, rowHeight / 2]),
        count: leaves.length,
    }))
    .object(data);
const numTypes = d3.keys(types).length;
const typeEntries = d3.entries(types);

// 日期与水平位置的映射
let D1 = new Date(d3.min(data, (d) => d.date_received));
let D2 = new Date(d3.max(data, (d) => d.date_received));
let x = d3
    .scaleTime()
    .domain([d3.timeYear.floor(D1), d3.timeYear.ceil(D2)])
    .range([50, innerW - 200]);

let x2 = d3
    .scaleLinear()
    .domain([0, d3.max(typeEntries, (d) => d.value.total)])
    .range([x.range()[1] + 16, innerW]);

let y = d3
    .scaleOrdinal()
    .domain(
        d3.entries(types)
        .sort((a, b) => {
            return b.value.total - a.value.total;
        })
        .map((t) => t.key)
    )
    .range(
        d3.range(numTypes).map((d) => d * (rowHeight + rowPadding) + rowHeight)
    );

let moneyFormat = d3.format("$,");

var formatMillisecond = d3.timeFormat(".%L"),
    formatSecond = d3.timeFormat(":%S"),
    formatMinute = d3.timeFormat("%I:%M"),
    formatHour = d3.timeFormat("%I %p"),
    formatDay = d3.timeFormat("%a %d"),
    formatWeek = d3.timeFormat("%b %d"),
    formatMonth = d3.timeFormat("%b"),
    formatYear = d3.timeFormat("%Y");

function multiFormat(date) {
    return (d3.timeSecond(date) < date
        ? formatMillisecond
        : d3.timeMinute(date) < date
        ? formatSecond
        : d3.timeHour(date) < date
        ? formatMinute
        : d3.timeDay(date) < date
        ? formatHour
        : d3.timeMonth(date) < date
        ? d3.timeWeek(date) < date
            ? formatDay
            : formatWeek
        : d3.timeYear(date) < date
        ? formatMonth
        : formatYear)(date);
}

let xAxis = (g) =>
    g
        .attr(
            "transform",
            `translate(0, ${numTypes * (rowHeight + rowPadding) + rowHeight})`
        )
        .call(
            d3
                .axisBottom(x)
                .ticks(innerW / 100)
                .tickFormat(multiFormat)
        )
        .call((g) => g.select(".domain").remove());

let exp = d3
    .scaleSqrt()
    .domain([0, 1])
    .range([0, rowHeight / 2]);

let pow = d3
    .scalePow()
    .exponent(10)
    .domain([0, d3.max(data, (d) => d.claim_amount)])
    .range([0, 1]);

let r = function (d) {
    return exp(pow(d));
};

// const svg = d3.select(
//         DOM.svg(
//             innerW + margin.left + margin.right,
//             numTypes * (rowHeight + rowPadding) + margin.top + margin.bottom
//         )
//     );

const svg = d3
    .select("svg")
    .attr("width", innerW + margin.left + margin.right)
    .attr(
        "height",
        numTypes * (rowHeight + rowPadding) + margin.top + margin.bottom
    );

let chart = svg
    .append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

chart.append("g").call(xAxis);

let typeRows = chart
    .append("g")
    .selectAll("g")
    .data(d3.entries(types))
    .enter()
    .append("g");

typeRows
    .append("text")
    .text((d) => `${d.key} (${d.value.count})`)
    .attr("class", "label")
    .attr("x", -margin.left)
    .attr("y", (d) => y(d.key) + textOffset);

typeRows
    .append("line")
    .attr("x1", x.range()[0])
    .attr("x2", x.range()[1])
    .attr("stroke", "rgba(0,0,0,0.05)")
    .attr("y1", (d) => y(d.key))
    .attr("y2", (d) => y(d.key));

typeRows
    .append("rect")
    .attr("x", x2.range()[0])
    .attr("y", (d) => y(d.key) - rowHeight / 2)
    .attr("height", rowHeight)
    .attr("width", (d) => x2(d.value.total) - x2.range()[0])
    .attr("fill", "firebrick")
    .attr("opacity", 0.25);

typeRows
    .append("text")
    .text((d) => moneyFormat(d.value.total))
    .attr("class", "label")
    .attr("text-anchor", "end")
    .attr("x", x2.range()[1] - 4)
    .attr("y", (d) => y(d.key) + textOffset);

chart
    .append("g")
    .selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
    .attr("cx", (d) => {
        const date_x = new Date(d.date_received);
        return x(date_x);
    })
    .attr("cy", (d) => y(d.claim_type))
    .attr("r", (d) => types[d.claim_type].scale(d.claim_amount))
    .attr("fill", "firebrick")
    .attr("opacity", 0.25);

// let monthBars = chart
//     .append("g")
//     .selectAll("rect")
//     .data(months)
//     .enter()
//     .append("rect")
//     .attr("x", (d) => {console.log(d.key); return x(d.key)})
//     .attr("y", (d) => -y2(d.value))
//     .attr("height", (d) => y2(d.value))
//     .attr("width", (d) => x(d3.timeMonth.offset(d.key, 1)) - x(d.key) - 2)
//     .attr("fill", "firebrick")
//     .attr("opacity", 0.25);

// months = d3.nest()
//         .key(d => d3.timeMonth.floor(d.date_received)).sortKeys((a, b) => (new Date(a) - new Date(b)))
//         .rollup(leaves => d3.sum(leaves, l => l.claim_amount))
//         .entries(data).map(m => ({
//             value: m.value,
//             key: new Date(m.key)
//         }))
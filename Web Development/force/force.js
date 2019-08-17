// const node = [
//     { id: "A", group: 1, mass: 1 },
//     { id: "B", group: 3, mass: 1 },
//     { id: "C", group: 2, mass: 1 },
//     { id: "D", group: 1, mass: 1 },
//     { id: "E", group: 3, mass: 1 },
// ];

// 用一个数据结构更方便的判断一条边的存在
// const edges = [
//     { source: "A", target: "B", value: 1 },
//     { source: "A", target: "C", value: 1 },
//     { source: "D", target: "E", value: 1 },
//     { source: "C", target: "E", value: 1 },
// ];

// by default node mass = 1

// 大佬说了forEach效率高!

class Force {
    constructor(nodes, edges) {
        for (let node of nodes) {
            node.position = [Math.random(), Math.random()];
            node.velocity = [0, 0];
            node.force = [0, 0];
            node.mass = 1;
        }
        this.nodes = nodes;
        let edgesMap = new Map();
        // 无向图所以得是双向的
        edges.forEach(edge => {
            if (edgesMap.has(edge.source)) {
                // map的value从list改成set
                let getTarget = edgesMap.get(edge.source);
                edgesMap.set(edge.source, getTarget.add(edge.target))
            }
            else {
                let s = new Set();
                edgesMap.set(edge.source, s.add(edge.target));
            }
            if (edgesMap.has(edge.target)) {
                // map的value从list改成set
                let getTarget = edgesMap.get(edge.target);
                edgesMap.set(edge.target, getTarget.add(edge.source))
            }
            else {
                let s = new Set();
                edgesMap.set(edge.target, s.add(edge.source));
            }
        });
        // console.log(edgesMap);
        this.edges = edgesMap;
        this.springLength = 0.1;
        this.Hooke = 0.01;
        this.Coulomb = 0.1;
    }

    // node2对node1的力
    HookeF(node1, node2) {
        const x1 = node1.position[0];
        const y1 = node1.position[1];
        const x2 = node2.position[0];
        const y2 = node2.position[1];
        const dist_x = x1 - x2;
        const dist_y = y1 - y2;
        const dist = 0.01 + Math.sqrt(dist_x * dist_x + dist_y * dist_y);
        const H = this.Hooke * (dist - this.springLength)
        const Hx = - H * dist_x / dist;
        const Hy = - H * dist_y / dist;
        // console.log("Hoo", Hx, Hy);
        return [Hx, Hy];
    }

    CoulombF(node1, node2) {
        const x1 = node1.position[0];
        const y1 = node1.position[1];
        const x2 = node2.position[0];
        const y2 = node2.position[1];
        const dist_x = (x1 - x2);
        const dist_y = (y1 - y2);
        const dist = 0.01 + Math.sqrt(dist_x * dist_x + dist_y * dist_y);
        // 下面这个 不要运行两次
        const c = this.Coulomb * node1.mass * node2.mass / (dist * dist)
        const Cx = c * dist_x / dist;
        const Cy = c * dist_y / dist;
        // console.log("Col", Cx, Cy);
        return [Cx, Cy];
    }

    tick() {
        for (let node1 of nodes) {
            let forceSumX = 0, forceSumY = 0;
            for (let node2 of nodes) {
                if (node1.id != node2.id) {
                    let Cf = this.CoulombF(node1, node2);
                    forceSumX += Cf[0];
                    forceSumY += Cf[1];
                    if (this.edges.get(node1.id).has(node2.id)) {
                        let Hf = this.HookeF(node1, node2)
                        if (isNaN(Hf[0])) {
                            debugger
                        }
                        forceSumX += Hf[0];
                        forceSumY += Hf[1];
                    }
                }
            }
            // 再加中心弹簧? 是可选的

            // 设tick 1秒, vt + 1/2at^2
            // 速度是不断累加的, 切记
            node1.velocity[0] += forceSumX / node1.mass;
            node1.velocity[1] += forceSumY / node1.mass;

            node1.velocity[0] *= 0.6;
            node1.velocity[1] *= 0.6;

            node1.force[0] = forceSumX;
            node1.force[1] = forceSumY;

            // 里面的点位置不能更新 要不然每次都是旧的点与新的点在算力 !!! 但是力是可以存着的, 并且需要存在node对象里
            // node1.position[0] += node1.velocity[0] + 0.5 * forceSumX / node1.mass;
            // node1.position[1] += node1.velocity[1] + 0.5 * forceSumY / node1.mass;

            if (isNaN(node1.position[0])) {
                debugger
            }

        }

        nodes.forEach(node => {
            node.position[0] += node.velocity[0] + 0.5 * node.force[0] / node.mass;
            node.position[1] += node.velocity[1] + 0.5 * node.force[1] / node.mass;
        })
    }
}

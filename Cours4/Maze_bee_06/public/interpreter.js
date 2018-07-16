var initInterpreterApi = function(interpreter, scope) {
    console.log("hello ?")
    var wrapper;
    wrapper = function(id) {
        Maze.move(0, id.toString());
    };
    interpreter.setProperty(scope, 'moveForward',
        interpreter.createNativeFunction(wrapper));
    wrapper = function(id) {
        Maze.move(2, id.toString());
    };
    interpreter.setProperty(scope, 'moveBackward',
        interpreter.createNativeFunction(wrapper));
    wrapper = function(id) {
        Maze.turn(0, id.toString());
    };
    interpreter.setProperty(scope, 'turnLeft',
        interpreter.createNativeFunction(wrapper));
    wrapper = function(id) {
        Maze.turn(1, id.toString());
    };
    interpreter.setProperty(scope, 'turnRight',
        interpreter.createNativeFunction(wrapper));
    wrapper = function(id) {
        return interpreter.createPrimitive(Maze.isPath(0, id.toString()));
    };
    interpreter.setProperty(scope, 'isPathForward',
        interpreter.createNativeFunction(wrapper));
    wrapper = function(id) {
        return interpreter.createPrimitive(Maze.isPath(1, id.toString()));
    };
    interpreter.setProperty(scope, 'isPathRight',
        interpreter.createNativeFunction(wrapper));
    wrapper = function(id) {
        return interpreter.createPrimitive(Maze.isPath(2, id.toString()));
    };
    interpreter.setProperty(scope, 'isPathBackward',
        interpreter.createNativeFunction(wrapper));
    wrapper = function(id) {
        return interpreter.createPrimitive(Maze.isPath(3, id.toString()));
    };
    interpreter.setProperty(scope, 'isPathLeft',
        interpreter.createNativeFunction(wrapper));
    wrapper = function() {
        return interpreter.createPrimitive(Maze.notDone());
    };
    interpreter.setProperty(scope, 'notDone',
        interpreter.createNativeFunction(wrapper));
    wrapper = function(id) {
        Maze.getNectar(id.toString());
    };
    interpreter.setProperty(scope, 'getNectar',
        interpreter.createNativeFunction(wrapper));
    wrapper = function() {
        return interpreter.createPrimitive(nectarRemaining());
    };
    interpreter.setProperty(scope, 'nectarRemaining',
        interpreter.createNativeFunction(wrapper));
    wrapper = function() {
        return interpreter.createPrimitive(honeyRemaining());
    };
    interpreter.setProperty(scope, 'honeyRemaining',
        interpreter.createNativeFunction(wrapper));
    wrapper = function() {
        return interpreter.createPrimitive(isOnFlower());
    };
    interpreter.setProperty(scope, 'isOnFlower',
        interpreter.createNativeFunction(wrapper));
    wrapper = function() {
        return interpreter.createPrimitive(isOnHoney());
    };
    interpreter.setProperty(scope, 'isOnHoney',
        interpreter.createNativeFunction(wrapper));
    wrapper = function(id) {
        Maze.get2Nectar(id.toString());
    };
    interpreter.setProperty(scope, 'get2Nectar',
        interpreter.createNativeFunction(wrapper));
    wrapper = function(id) {
        Maze.makeHoney(id.toString());
    };
    interpreter.setProperty(scope, 'makeHoney',
        interpreter.createNativeFunction(wrapper));

    console.log("hello ?")
    Maze.log = [];
    Maze.reset(false);
};

var animate = function() {
    Maze.animate();
};

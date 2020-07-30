import hue from 'node-hue-api';

const lightstate = new hue.v3.model.lightStates.LightState();
lightstate.sat_inc(1);

import { ParticleEmitter, EmitterType, Color, Vector } from "excalibur";

export function createHitParticles(position, color) {
  return new ParticleEmitter({
    pos: position,
    emitRate: 50,
    life: 500,
    startSize: 4,
    endSize: 0,
    speed: 100,
    emitterType: EmitterType.Circle,
    radius: 20,
    particleLife: 500,
    startColor: color,
    endColor: Color.Transparent,
    maxVel: 300,
    minVel: 50,
    fadeFlag: true
  });
}
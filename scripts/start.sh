#!/bin/bash

export NODE_ENV="production"
export NODE_OPTIONS="--require ./.pnp.cjs"

node .

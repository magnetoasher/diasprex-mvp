#!/usr/bin/env python3

from aws_cdk import core
from diasprex.diasprex_stack import DiasprexMVP

app = core.App()
stage = app.node.try_get_context("stage")
region = app.node.try_get_context("region")
DiasprexMVP(app, f"{stage.capitalize()}DiasprexMVP", stage,
                env=core.Environment(region=region))

app.synth()

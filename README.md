# switch-env

A bad implementation of a configuration switcher for developer
Actually it support Maven(settings.xml) and npm(.npmrc) only in windows...only if the username is rica...i know

## Defining environment

This switcher is based on the convention that your configuraion files extension has to be the name of the environment
So if you want to call your environment FOO your .npmrc file will be **.npmrc.FOO**

## TODO

- [ ] Add some more tools config
- [ ] Determin the location of the configs or ask the user
- [ ] Store the location of the configs in a decent place

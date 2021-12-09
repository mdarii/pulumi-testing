import * as pulumi from "@pulumi/pulumi";
import * as gcp from "@pulumi/gcp";

let config = new pulumi.Config();

  interface testing {
    [Key: string]: string;
  }

export const envVarsPlain =  config.getObject<testing>("envars")!;

pulumi.log.info(`${envVarsPlain}`);

for(const a of envVarsPlain){

}


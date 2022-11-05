import React from 'react';
import GenerationServiceClient from './generation_pb';

// import {GenerationServiceClient} from "./src/proto/generation_grpc_pb";
import * as generation_pb from "./generation_pb";
// import * as grpc from "@grpc/grpc-js"
import {CallMetadataOptions} from "@grpc/grpc-js/build/src/call-credentials";
 
export function test() {
    console.log("test");
    let client = GenerationServiceClient("grpc.stability.ai:443");

    console.log("ping");
    const request = new generation_pb.Request();
    request.setEngineId("stable-diffusion-v1");

    let response = client.generate(request);
    response.on("data", (data) => {
        console.log(`[generate] got image answer: ${JSON.stringify(data)}`)
    })
}

class Test extends React.Component {
  render() {
    // GenerationServiceClient.prototype.generate("gnome",)
    return (
      <div className="testclass">
        <p>
          testing
        </p>
      </div>
    );
  }
}

export default Test;

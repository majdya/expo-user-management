class MyWebSocket {
  private ws: WebSocket;

  constructor(url: string) {
    this.ws = new WebSocket(url);
    this.ws.onopen = this.onOpen;
    this.ws.onmessage = this.onMessage;
    this.ws.onerror = this.onError;
    this.ws.onclose = this.onClose;
  }

  private onOpen = () => {
    // connection opened
    this.ws.send("something"); // send a message
  };

  private onMessage = (e: MessageEvent) => {
    // a message was received
    console.log(e.data);
  };

  private onError = (e: Event) => {
    // an error occurred
    console.log(e);
  };

  private onClose = (e: CloseEvent) => {
    // connection closed
    console.log(e.code, e.reason);
  };
}

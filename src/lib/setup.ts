import MentalPokerGameRoom, { MentalPokerEvent } from "./MentalPokerGameRoom";
import GameRoom from "./GameRoom";
import Peer, { PeerOptions } from "peerjs";
import { TexasHoldemGameRoom, TexasHoldemTableEvent } from "./texas-holdem/TexasHoldemGameRoom";
import ChatRoom, { ChatRoomEvent } from "./ChatRoom";


const iceServers = [
  {
    urls: "stun:stun.relay.metered.ca:80",
  },
  { 
    urls: 'stun:stun.l.google.com:19302' 
  }
];

const peer = new Peer(
  {
    debug: 3,
    config:{
      iceServers: iceServers,
    }
  } as PeerOptions
);

const gameRoom = new GameRoom<MentalPokerEvent | ChatRoomEvent | TexasHoldemTableEvent>(
  peer, {
  hostId: new URLSearchParams(window.location.search).get('gameRoomId') ?? undefined,
}
);

export const HostId = gameRoom.hostId;

export const TexasHoldem = new TexasHoldemGameRoom(
  gameRoom,
  new MentalPokerGameRoom(gameRoom),
);

export const Chat = new ChatRoom(gameRoom);

window.addEventListener('beforeunload', () => {
  TexasHoldem.close();
  Chat.close();
  gameRoom.close();
  peer.disconnect();
  peer.destroy();
});

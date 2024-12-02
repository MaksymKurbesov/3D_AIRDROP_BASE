"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6842],
  {
    32637: function (e, t) {
      t.Z = [
        {
          inputs: [
            {
              internalType: "contract ENS",
              name: "registry_",
              type: "address",
            },
            { internalType: "address", name: "owner_", type: "address" },
            { internalType: "bytes32", name: "baseNode_", type: "bytes32" },
            { internalType: "string", name: "baseURI_", type: "string" },
            { internalType: "string", name: "collectionURI_", type: "string" },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        { inputs: [], name: "AccountBalanceOverflow", type: "error" },
        { inputs: [], name: "AlreadyInitialized", type: "error" },
        { inputs: [], name: "BalanceQueryForZeroAddress", type: "error" },
        {
          inputs: [
            { internalType: "uint256", name: "tokenId", type: "uint256" },
          ],
          name: "Expired",
          type: "error",
        },
        { inputs: [], name: "NewOwnerIsZeroAddress", type: "error" },
        { inputs: [], name: "NoHandoverRequest", type: "error" },
        {
          inputs: [
            { internalType: "uint256", name: "tokenId", type: "uint256" },
          ],
          name: "NonexistentToken",
          type: "error",
        },
        {
          inputs: [
            { internalType: "uint256", name: "tokenId", type: "uint256" },
            { internalType: "address", name: "sender", type: "address" },
          ],
          name: "NotApprovedOwner",
          type: "error",
        },
        {
          inputs: [
            { internalType: "uint256", name: "tokenId", type: "uint256" },
          ],
          name: "NotAvailable",
          type: "error",
        },
        { inputs: [], name: "NotOwnerNorApproved", type: "error" },
        {
          inputs: [
            { internalType: "uint256", name: "tokenId", type: "uint256" },
          ],
          name: "NotRegisteredOrInGrace",
          type: "error",
        },
        { inputs: [], name: "OnlyController", type: "error" },
        { inputs: [], name: "RegistrarNotLive", type: "error" },
        { inputs: [], name: "TokenAlreadyExists", type: "error" },
        { inputs: [], name: "TokenDoesNotExist", type: "error" },
        { inputs: [], name: "TransferFromIncorrectOwner", type: "error" },
        {
          inputs: [],
          name: "TransferToNonERC721ReceiverImplementer",
          type: "error",
        },
        { inputs: [], name: "TransferToZeroAddress", type: "error" },
        { inputs: [], name: "Unauthorized", type: "error" },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              indexed: !0,
              internalType: "address",
              name: "account",
              type: "address",
            },
            {
              indexed: !0,
              internalType: "uint256",
              name: "id",
              type: "uint256",
            },
          ],
          name: "Approval",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              indexed: !0,
              internalType: "address",
              name: "operator",
              type: "address",
            },
            {
              indexed: !1,
              internalType: "bool",
              name: "isApproved",
              type: "bool",
            },
          ],
          name: "ApprovalForAll",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !1,
              internalType: "uint256",
              name: "_fromTokenId",
              type: "uint256",
            },
            {
              indexed: !1,
              internalType: "uint256",
              name: "_toTokenId",
              type: "uint256",
            },
          ],
          name: "BatchMetadataUpdate",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [],
          name: "ContractURIUpdated",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "address",
              name: "controller",
              type: "address",
            },
          ],
          name: "ControllerAdded",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "address",
              name: "controller",
              type: "address",
            },
          ],
          name: "ControllerRemoved",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "uint256",
              name: "id",
              type: "uint256",
            },
            {
              indexed: !0,
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              indexed: !1,
              internalType: "uint256",
              name: "expires",
              type: "uint256",
            },
          ],
          name: "NameRegistered",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "uint256",
              name: "id",
              type: "uint256",
            },
            {
              indexed: !0,
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              indexed: !1,
              internalType: "uint256",
              name: "expires",
              type: "uint256",
            },
            {
              indexed: !1,
              internalType: "address",
              name: "resolver",
              type: "address",
            },
            {
              indexed: !1,
              internalType: "uint64",
              name: "ttl",
              type: "uint64",
            },
          ],
          name: "NameRegisteredWithRecord",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "uint256",
              name: "id",
              type: "uint256",
            },
            {
              indexed: !1,
              internalType: "uint256",
              name: "expires",
              type: "uint256",
            },
          ],
          name: "NameRenewed",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "address",
              name: "pendingOwner",
              type: "address",
            },
          ],
          name: "OwnershipHandoverCanceled",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "address",
              name: "pendingOwner",
              type: "address",
            },
          ],
          name: "OwnershipHandoverRequested",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "address",
              name: "oldOwner",
              type: "address",
            },
            {
              indexed: !0,
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "OwnershipTransferred",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              indexed: !0,
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              indexed: !0,
              internalType: "uint256",
              name: "id",
              type: "uint256",
            },
          ],
          name: "Transfer",
          type: "event",
        },
        {
          inputs: [
            { internalType: "address", name: "controller", type: "address" },
          ],
          name: "addController",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "account", type: "address" },
            { internalType: "uint256", name: "id", type: "uint256" },
          ],
          name: "approve",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [{ internalType: "address", name: "owner", type: "address" }],
          name: "balanceOf",
          outputs: [
            { internalType: "uint256", name: "result", type: "uint256" },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "baseNode",
          outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "cancelOwnershipHandover",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "pendingOwner", type: "address" },
          ],
          name: "completeOwnershipHandover",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [],
          name: "contractURI",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "controller", type: "address" },
          ],
          name: "controllers",
          outputs: [{ internalType: "bool", name: "isApproved", type: "bool" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ internalType: "uint256", name: "id", type: "uint256" }],
          name: "getApproved",
          outputs: [
            { internalType: "address", name: "result", type: "address" },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "owner", type: "address" },
            { internalType: "address", name: "operator", type: "address" },
          ],
          name: "isApprovedForAll",
          outputs: [{ internalType: "bool", name: "result", type: "bool" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ internalType: "uint256", name: "id", type: "uint256" }],
          name: "isAvailable",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "name",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [{ internalType: "uint256", name: "id", type: "uint256" }],
          name: "nameExpires",
          outputs: [
            { internalType: "uint256", name: "expiry", type: "uint256" },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "owner",
          outputs: [
            { internalType: "address", name: "result", type: "address" },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "tokenId", type: "uint256" },
          ],
          name: "ownerOf",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "pendingOwner", type: "address" },
          ],
          name: "ownershipHandoverExpiresAt",
          outputs: [
            { internalType: "uint256", name: "result", type: "uint256" },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "id", type: "uint256" },
            { internalType: "address", name: "owner", type: "address" },
          ],
          name: "reclaim",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "id", type: "uint256" },
            { internalType: "address", name: "owner", type: "address" },
            { internalType: "uint256", name: "duration", type: "uint256" },
          ],
          name: "register",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "id", type: "uint256" },
            { internalType: "address", name: "owner", type: "address" },
            { internalType: "uint256", name: "duration", type: "uint256" },
          ],
          name: "registerOnly",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "id", type: "uint256" },
            { internalType: "address", name: "owner", type: "address" },
            { internalType: "uint256", name: "duration", type: "uint256" },
            { internalType: "address", name: "resolver", type: "address" },
            { internalType: "uint64", name: "ttl", type: "uint64" },
          ],
          name: "registerWithRecord",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "registry",
          outputs: [
            { internalType: "contract ENS", name: "", type: "address" },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "controller", type: "address" },
          ],
          name: "removeController",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "id", type: "uint256" },
            { internalType: "uint256", name: "duration", type: "uint256" },
          ],
          name: "renew",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "renounceOwnership",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [],
          name: "requestOwnershipHandover",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "from", type: "address" },
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "id", type: "uint256" },
          ],
          name: "safeTransferFrom",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "from", type: "address" },
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "id", type: "uint256" },
            { internalType: "bytes", name: "data", type: "bytes" },
          ],
          name: "safeTransferFrom",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "operator", type: "address" },
            { internalType: "bool", name: "isApproved", type: "bool" },
          ],
          name: "setApprovalForAll",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "string", name: "baseURI_", type: "string" },
          ],
          name: "setBaseTokenURI",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "string", name: "collectionURI_", type: "string" },
          ],
          name: "setContractURI",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "resolver", type: "address" },
          ],
          name: "setResolver",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "bytes4", name: "interfaceID", type: "bytes4" },
          ],
          name: "supportsInterface",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [],
          name: "symbol",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "tokenId", type: "uint256" },
          ],
          name: "tokenURI",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "from", type: "address" },
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "id", type: "uint256" },
          ],
          name: "transferFrom",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "newOwner", type: "address" },
          ],
          name: "transferOwnership",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
      ];
    },
    23104: function (e, t) {
      t.Z = [
        {
          inputs: [
            { internalType: "contract ENS", name: "ens_", type: "address" },
            {
              internalType: "address",
              name: "registrarController_",
              type: "address",
            },
            {
              internalType: "address",
              name: "reverseRegistrar_",
              type: "address",
            },
            { internalType: "address", name: "owner_", type: "address" },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        { inputs: [], name: "AlreadyInitialized", type: "error" },
        { inputs: [], name: "CantSetSelfAsDelegate", type: "error" },
        { inputs: [], name: "CantSetSelfAsOperator", type: "error" },
        { inputs: [], name: "NewOwnerIsZeroAddress", type: "error" },
        { inputs: [], name: "NoHandoverRequest", type: "error" },
        { inputs: [], name: "Unauthorized", type: "error" },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "bytes32",
              name: "node",
              type: "bytes32",
            },
            {
              indexed: !0,
              internalType: "uint256",
              name: "contentType",
              type: "uint256",
            },
          ],
          name: "ABIChanged",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "bytes32",
              name: "node",
              type: "bytes32",
            },
            {
              indexed: !1,
              internalType: "address",
              name: "a",
              type: "address",
            },
          ],
          name: "AddrChanged",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "bytes32",
              name: "node",
              type: "bytes32",
            },
            {
              indexed: !1,
              internalType: "uint256",
              name: "coinType",
              type: "uint256",
            },
            {
              indexed: !1,
              internalType: "bytes",
              name: "newAddress",
              type: "bytes",
            },
          ],
          name: "AddressChanged",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              indexed: !0,
              internalType: "address",
              name: "operator",
              type: "address",
            },
            {
              indexed: !1,
              internalType: "bool",
              name: "approved",
              type: "bool",
            },
          ],
          name: "ApprovalForAll",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !1,
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              indexed: !0,
              internalType: "bytes32",
              name: "node",
              type: "bytes32",
            },
            {
              indexed: !0,
              internalType: "address",
              name: "delegate",
              type: "address",
            },
            {
              indexed: !0,
              internalType: "bool",
              name: "approved",
              type: "bool",
            },
          ],
          name: "Approved",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "bytes32",
              name: "node",
              type: "bytes32",
            },
            { indexed: !1, internalType: "bytes", name: "hash", type: "bytes" },
          ],
          name: "ContenthashChanged",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "bytes32",
              name: "node",
              type: "bytes32",
            },
            { indexed: !1, internalType: "bytes", name: "name", type: "bytes" },
            {
              indexed: !1,
              internalType: "uint16",
              name: "resource",
              type: "uint16",
            },
            {
              indexed: !1,
              internalType: "bytes",
              name: "record",
              type: "bytes",
            },
          ],
          name: "DNSRecordChanged",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "bytes32",
              name: "node",
              type: "bytes32",
            },
            { indexed: !1, internalType: "bytes", name: "name", type: "bytes" },
            {
              indexed: !1,
              internalType: "uint16",
              name: "resource",
              type: "uint16",
            },
          ],
          name: "DNSRecordDeleted",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "bytes32",
              name: "node",
              type: "bytes32",
            },
            {
              indexed: !1,
              internalType: "bytes",
              name: "lastzonehash",
              type: "bytes",
            },
            {
              indexed: !1,
              internalType: "bytes",
              name: "zonehash",
              type: "bytes",
            },
          ],
          name: "DNSZonehashChanged",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "bytes32",
              name: "node",
              type: "bytes32",
            },
            {
              indexed: !0,
              internalType: "bytes4",
              name: "interfaceID",
              type: "bytes4",
            },
            {
              indexed: !1,
              internalType: "address",
              name: "implementer",
              type: "address",
            },
          ],
          name: "InterfaceChanged",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "bytes32",
              name: "node",
              type: "bytes32",
            },
            {
              indexed: !1,
              internalType: "string",
              name: "name",
              type: "string",
            },
          ],
          name: "NameChanged",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "address",
              name: "pendingOwner",
              type: "address",
            },
          ],
          name: "OwnershipHandoverCanceled",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "address",
              name: "pendingOwner",
              type: "address",
            },
          ],
          name: "OwnershipHandoverRequested",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "address",
              name: "oldOwner",
              type: "address",
            },
            {
              indexed: !0,
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "OwnershipTransferred",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "bytes32",
              name: "node",
              type: "bytes32",
            },
            {
              indexed: !1,
              internalType: "bytes32",
              name: "x",
              type: "bytes32",
            },
            {
              indexed: !1,
              internalType: "bytes32",
              name: "y",
              type: "bytes32",
            },
          ],
          name: "PubkeyChanged",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "address",
              name: "newRegistrarController",
              type: "address",
            },
          ],
          name: "RegistrarControllerUpdated",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "address",
              name: "newReverseRegistrar",
              type: "address",
            },
          ],
          name: "ReverseRegistrarUpdated",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "bytes32",
              name: "node",
              type: "bytes32",
            },
            {
              indexed: !0,
              internalType: "string",
              name: "indexedKey",
              type: "string",
            },
            {
              indexed: !1,
              internalType: "string",
              name: "key",
              type: "string",
            },
            {
              indexed: !1,
              internalType: "string",
              name: "value",
              type: "string",
            },
          ],
          name: "TextChanged",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "bytes32",
              name: "node",
              type: "bytes32",
            },
            {
              indexed: !1,
              internalType: "uint64",
              name: "newVersion",
              type: "uint64",
            },
          ],
          name: "VersionChanged",
          type: "event",
        },
        {
          inputs: [
            { internalType: "bytes32", name: "node", type: "bytes32" },
            { internalType: "uint256", name: "contentTypes", type: "uint256" },
          ],
          name: "ABI",
          outputs: [
            { internalType: "uint256", name: "", type: "uint256" },
            { internalType: "bytes", name: "", type: "bytes" },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ internalType: "bytes32", name: "node", type: "bytes32" }],
          name: "addr",
          outputs: [
            { internalType: "address payable", name: "", type: "address" },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "bytes32", name: "node", type: "bytes32" },
            { internalType: "uint256", name: "coinType", type: "uint256" },
          ],
          name: "addr",
          outputs: [{ internalType: "bytes", name: "", type: "bytes" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "bytes32", name: "node", type: "bytes32" },
            { internalType: "address", name: "delegate", type: "address" },
            { internalType: "bool", name: "approved", type: "bool" },
          ],
          name: "approve",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "cancelOwnershipHandover",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [{ internalType: "bytes32", name: "node", type: "bytes32" }],
          name: "clearRecords",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "pendingOwner", type: "address" },
          ],
          name: "completeOwnershipHandover",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [{ internalType: "bytes32", name: "node", type: "bytes32" }],
          name: "contenthash",
          outputs: [{ internalType: "bytes", name: "", type: "bytes" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "bytes32", name: "node", type: "bytes32" },
            { internalType: "bytes32", name: "name", type: "bytes32" },
            { internalType: "uint16", name: "resource", type: "uint16" },
          ],
          name: "dnsRecord",
          outputs: [{ internalType: "bytes", name: "", type: "bytes" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "ens",
          outputs: [
            { internalType: "contract ENS", name: "", type: "address" },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "bytes32", name: "node", type: "bytes32" },
            { internalType: "bytes32", name: "name", type: "bytes32" },
          ],
          name: "hasDNSRecords",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "bytes32", name: "node", type: "bytes32" },
            { internalType: "bytes4", name: "interfaceID", type: "bytes4" },
          ],
          name: "interfaceImplementer",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "owner", type: "address" },
            { internalType: "bytes32", name: "node", type: "bytes32" },
            { internalType: "address", name: "delegate", type: "address" },
          ],
          name: "isApprovedFor",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "account", type: "address" },
            { internalType: "address", name: "operator", type: "address" },
          ],
          name: "isApprovedForAll",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ internalType: "bytes[]", name: "data", type: "bytes[]" }],
          name: "multicall",
          outputs: [
            { internalType: "bytes[]", name: "results", type: "bytes[]" },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "bytes32", name: "nodehash", type: "bytes32" },
            { internalType: "bytes[]", name: "data", type: "bytes[]" },
          ],
          name: "multicallWithNodeCheck",
          outputs: [
            { internalType: "bytes[]", name: "results", type: "bytes[]" },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [{ internalType: "bytes32", name: "node", type: "bytes32" }],
          name: "name",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "owner",
          outputs: [
            { internalType: "address", name: "result", type: "address" },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "pendingOwner", type: "address" },
          ],
          name: "ownershipHandoverExpiresAt",
          outputs: [
            { internalType: "uint256", name: "result", type: "uint256" },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ internalType: "bytes32", name: "node", type: "bytes32" }],
          name: "pubkey",
          outputs: [
            { internalType: "bytes32", name: "x", type: "bytes32" },
            { internalType: "bytes32", name: "y", type: "bytes32" },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
          name: "recordVersions",
          outputs: [{ internalType: "uint64", name: "", type: "uint64" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "registrarController",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "renounceOwnership",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [],
          name: "requestOwnershipHandover",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "bytes", name: "", type: "bytes" },
            { internalType: "bytes", name: "data", type: "bytes" },
          ],
          name: "resolve",
          outputs: [{ internalType: "bytes", name: "", type: "bytes" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "reverseRegistrar",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "bytes32", name: "node", type: "bytes32" },
            { internalType: "uint256", name: "contentType", type: "uint256" },
            { internalType: "bytes", name: "data", type: "bytes" },
          ],
          name: "setABI",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "bytes32", name: "node", type: "bytes32" },
            { internalType: "uint256", name: "coinType", type: "uint256" },
            { internalType: "bytes", name: "a", type: "bytes" },
          ],
          name: "setAddr",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "bytes32", name: "node", type: "bytes32" },
            { internalType: "address", name: "a", type: "address" },
          ],
          name: "setAddr",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "operator", type: "address" },
            { internalType: "bool", name: "approved", type: "bool" },
          ],
          name: "setApprovalForAll",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "bytes32", name: "node", type: "bytes32" },
            { internalType: "bytes", name: "hash", type: "bytes" },
          ],
          name: "setContenthash",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "bytes32", name: "node", type: "bytes32" },
            { internalType: "bytes", name: "data", type: "bytes" },
          ],
          name: "setDNSRecords",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "bytes32", name: "node", type: "bytes32" },
            { internalType: "bytes4", name: "interfaceID", type: "bytes4" },
            { internalType: "address", name: "implementer", type: "address" },
          ],
          name: "setInterface",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "bytes32", name: "node", type: "bytes32" },
            { internalType: "string", name: "newName", type: "string" },
          ],
          name: "setName",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "bytes32", name: "node", type: "bytes32" },
            { internalType: "bytes32", name: "x", type: "bytes32" },
            { internalType: "bytes32", name: "y", type: "bytes32" },
          ],
          name: "setPubkey",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "registrarController_",
              type: "address",
            },
          ],
          name: "setRegistrarController",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "reverseRegistrar_",
              type: "address",
            },
          ],
          name: "setReverseRegistrar",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "bytes32", name: "node", type: "bytes32" },
            { internalType: "string", name: "key", type: "string" },
            { internalType: "string", name: "value", type: "string" },
          ],
          name: "setText",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "bytes32", name: "node", type: "bytes32" },
            { internalType: "bytes", name: "hash", type: "bytes" },
          ],
          name: "setZonehash",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "bytes4", name: "interfaceID", type: "bytes4" },
          ],
          name: "supportsInterface",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "bytes32", name: "node", type: "bytes32" },
            { internalType: "string", name: "key", type: "string" },
          ],
          name: "text",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "newOwner", type: "address" },
          ],
          name: "transferOwnership",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [{ internalType: "bytes32", name: "node", type: "bytes32" }],
          name: "zonehash",
          outputs: [{ internalType: "bytes", name: "", type: "bytes" }],
          stateMutability: "view",
          type: "function",
        },
      ];
    },
    41556: function (e, t) {
      t.Z = [
        {
          inputs: [
            {
              internalType: "contract BaseRegistrar",
              name: "base_",
              type: "address",
            },
            {
              internalType: "contract IPriceOracle",
              name: "prices_",
              type: "address",
            },
            {
              internalType: "contract IReverseRegistrar",
              name: "reverseRegistrar_",
              type: "address",
            },
            { internalType: "address", name: "owner_", type: "address" },
            { internalType: "bytes32", name: "rootNode_", type: "bytes32" },
            { internalType: "string", name: "rootName_", type: "string" },
            {
              internalType: "address",
              name: "paymentReceiver_",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [
            { internalType: "address", name: "target", type: "address" },
          ],
          name: "AddressEmptyCode",
          type: "error",
        },
        {
          inputs: [
            { internalType: "address", name: "account", type: "address" },
          ],
          name: "AddressInsufficientBalance",
          type: "error",
        },
        { inputs: [], name: "AlreadyInitialized", type: "error" },
        {
          inputs: [
            { internalType: "address", name: "sender", type: "address" },
          ],
          name: "AlreadyRegisteredWithDiscount",
          type: "error",
        },
        {
          inputs: [
            { internalType: "uint256", name: "duration", type: "uint256" },
          ],
          name: "DurationTooShort",
          type: "error",
        },
        { inputs: [], name: "FailedInnerCall", type: "error" },
        {
          inputs: [{ internalType: "bytes32", name: "key", type: "bytes32" }],
          name: "InactiveDiscount",
          type: "error",
        },
        { inputs: [], name: "InsufficientValue", type: "error" },
        {
          inputs: [
            { internalType: "bytes32", name: "key", type: "bytes32" },
            { internalType: "bytes", name: "data", type: "bytes" },
          ],
          name: "InvalidDiscount",
          type: "error",
        },
        {
          inputs: [{ internalType: "bytes32", name: "key", type: "bytes32" }],
          name: "InvalidDiscountAmount",
          type: "error",
        },
        { inputs: [], name: "InvalidPaymentReceiver", type: "error" },
        {
          inputs: [
            { internalType: "bytes32", name: "key", type: "bytes32" },
            { internalType: "address", name: "validator", type: "address" },
          ],
          name: "InvalidValidator",
          type: "error",
        },
        {
          inputs: [{ internalType: "string", name: "name", type: "string" }],
          name: "NameNotAvailable",
          type: "error",
        },
        { inputs: [], name: "NewOwnerIsZeroAddress", type: "error" },
        { inputs: [], name: "NoHandoverRequest", type: "error" },
        { inputs: [], name: "ResolverRequiredWhenDataSupplied", type: "error" },
        {
          inputs: [{ internalType: "address", name: "token", type: "address" }],
          name: "SafeERC20FailedOperation",
          type: "error",
        },
        { inputs: [], name: "TransferFailed", type: "error" },
        { inputs: [], name: "Unauthorized", type: "error" },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "address",
              name: "registrant",
              type: "address",
            },
            {
              indexed: !0,
              internalType: "bytes32",
              name: "discountKey",
              type: "bytes32",
            },
          ],
          name: "DiscountApplied",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "bytes32",
              name: "discountKey",
              type: "bytes32",
            },
            {
              components: [
                { internalType: "bool", name: "active", type: "bool" },
                {
                  internalType: "address",
                  name: "discountValidator",
                  type: "address",
                },
                { internalType: "bytes32", name: "key", type: "bytes32" },
                { internalType: "uint256", name: "discount", type: "uint256" },
              ],
              indexed: !1,
              internalType: "struct RegistrarController.DiscountDetails",
              name: "details",
              type: "tuple",
            },
          ],
          name: "DiscountUpdated",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "address",
              name: "payee",
              type: "address",
            },
            {
              indexed: !1,
              internalType: "uint256",
              name: "price",
              type: "uint256",
            },
          ],
          name: "ETHPaymentProcessed",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !1,
              internalType: "string",
              name: "name",
              type: "string",
            },
            {
              indexed: !0,
              internalType: "bytes32",
              name: "label",
              type: "bytes32",
            },
            {
              indexed: !0,
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              indexed: !1,
              internalType: "uint256",
              name: "expires",
              type: "uint256",
            },
          ],
          name: "NameRegistered",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !1,
              internalType: "string",
              name: "name",
              type: "string",
            },
            {
              indexed: !0,
              internalType: "bytes32",
              name: "label",
              type: "bytes32",
            },
            {
              indexed: !1,
              internalType: "uint256",
              name: "expires",
              type: "uint256",
            },
          ],
          name: "NameRenewed",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "address",
              name: "pendingOwner",
              type: "address",
            },
          ],
          name: "OwnershipHandoverCanceled",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "address",
              name: "pendingOwner",
              type: "address",
            },
          ],
          name: "OwnershipHandoverRequested",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "address",
              name: "oldOwner",
              type: "address",
            },
            {
              indexed: !0,
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "OwnershipTransferred",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !1,
              internalType: "address",
              name: "newPaymentReceiver",
              type: "address",
            },
          ],
          name: "PaymentReceiverUpdated",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !1,
              internalType: "address",
              name: "newPrices",
              type: "address",
            },
          ],
          name: "PriceOracleUpdated",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !1,
              internalType: "address",
              name: "newReverseRegistrar",
              type: "address",
            },
          ],
          name: "ReverseRegistrarUpdated",
          type: "event",
        },
        {
          inputs: [],
          name: "MIN_NAME_LENGTH",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "MIN_REGISTRATION_DURATION",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ internalType: "string", name: "name", type: "string" }],
          name: "available",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "cancelOwnershipHandover",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "pendingOwner", type: "address" },
          ],
          name: "completeOwnershipHandover",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                { internalType: "string", name: "name", type: "string" },
                { internalType: "address", name: "owner", type: "address" },
                { internalType: "uint256", name: "duration", type: "uint256" },
                { internalType: "address", name: "resolver", type: "address" },
                { internalType: "bytes[]", name: "data", type: "bytes[]" },
                { internalType: "bool", name: "reverseRecord", type: "bool" },
              ],
              internalType: "struct RegistrarController.RegisterRequest",
              name: "request",
              type: "tuple",
            },
            { internalType: "bytes32", name: "discountKey", type: "bytes32" },
            { internalType: "bytes", name: "validationData", type: "bytes" },
          ],
          name: "discountedRegister",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "string", name: "name", type: "string" },
            { internalType: "uint256", name: "duration", type: "uint256" },
            { internalType: "bytes32", name: "discountKey", type: "bytes32" },
          ],
          name: "discountedRegisterPrice",
          outputs: [
            { internalType: "uint256", name: "price", type: "uint256" },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "registrant", type: "address" },
          ],
          name: "discountedRegistrants",
          outputs: [
            {
              internalType: "bool",
              name: "hasRegisteredWithDiscount",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ internalType: "bytes32", name: "key", type: "bytes32" }],
          name: "discounts",
          outputs: [
            { internalType: "bool", name: "active", type: "bool" },
            {
              internalType: "address",
              name: "discountValidator",
              type: "address",
            },
            { internalType: "bytes32", name: "key", type: "bytes32" },
            { internalType: "uint256", name: "discount", type: "uint256" },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getActiveDiscounts",
          outputs: [
            {
              components: [
                { internalType: "bool", name: "active", type: "bool" },
                {
                  internalType: "address",
                  name: "discountValidator",
                  type: "address",
                },
                { internalType: "bytes32", name: "key", type: "bytes32" },
                { internalType: "uint256", name: "discount", type: "uint256" },
              ],
              internalType: "struct RegistrarController.DiscountDetails[]",
              name: "",
              type: "tuple[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address[]", name: "addresses", type: "address[]" },
          ],
          name: "hasRegisteredWithDiscount",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "launchTime",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "owner",
          outputs: [
            { internalType: "address", name: "result", type: "address" },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "pendingOwner", type: "address" },
          ],
          name: "ownershipHandoverExpiresAt",
          outputs: [
            { internalType: "uint256", name: "result", type: "uint256" },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "paymentReceiver",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "prices",
          outputs: [
            {
              internalType: "contract IPriceOracle",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "_token", type: "address" },
            { internalType: "address", name: "_to", type: "address" },
            { internalType: "uint256", name: "_amount", type: "uint256" },
          ],
          name: "recoverFunds",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                { internalType: "string", name: "name", type: "string" },
                { internalType: "address", name: "owner", type: "address" },
                { internalType: "uint256", name: "duration", type: "uint256" },
                { internalType: "address", name: "resolver", type: "address" },
                { internalType: "bytes[]", name: "data", type: "bytes[]" },
                { internalType: "bool", name: "reverseRecord", type: "bool" },
              ],
              internalType: "struct RegistrarController.RegisterRequest",
              name: "request",
              type: "tuple",
            },
          ],
          name: "register",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "string", name: "name", type: "string" },
            { internalType: "uint256", name: "duration", type: "uint256" },
          ],
          name: "registerPrice",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "string", name: "name", type: "string" },
            { internalType: "uint256", name: "duration", type: "uint256" },
          ],
          name: "renew",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [],
          name: "renounceOwnership",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "string", name: "name", type: "string" },
            { internalType: "uint256", name: "duration", type: "uint256" },
          ],
          name: "rentPrice",
          outputs: [
            {
              components: [
                { internalType: "uint256", name: "base", type: "uint256" },
                { internalType: "uint256", name: "premium", type: "uint256" },
              ],
              internalType: "struct IPriceOracle.Price",
              name: "price",
              type: "tuple",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "requestOwnershipHandover",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [],
          name: "reverseRegistrar",
          outputs: [
            {
              internalType: "contract IReverseRegistrar",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "rootName",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "rootNode",
          outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                { internalType: "bool", name: "active", type: "bool" },
                {
                  internalType: "address",
                  name: "discountValidator",
                  type: "address",
                },
                { internalType: "bytes32", name: "key", type: "bytes32" },
                { internalType: "uint256", name: "discount", type: "uint256" },
              ],
              internalType: "struct RegistrarController.DiscountDetails",
              name: "details",
              type: "tuple",
            },
          ],
          name: "setDiscountDetails",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "launchTime_", type: "uint256" },
          ],
          name: "setLaunchTime",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "paymentReceiver_",
              type: "address",
            },
          ],
          name: "setPaymentReceiver",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "contract IPriceOracle",
              name: "prices_",
              type: "address",
            },
          ],
          name: "setPriceOracle",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "contract IReverseRegistrar",
              name: "reverse_",
              type: "address",
            },
          ],
          name: "setReverseRegistrar",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "newOwner", type: "address" },
          ],
          name: "transferOwnership",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [{ internalType: "string", name: "name", type: "string" }],
          name: "valid",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [],
          name: "withdrawETH",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ];
    },
    7010: function (e, t, a) {
      a.d(t, {
        Du: function () {
          return m;
        },
        QJ: function () {
          return c;
        },
        QP: function () {
          return k;
        },
        Sm: function () {
          return l;
        },
        Tb: function () {
          return u;
        },
        WD: function () {
          return p;
        },
        Z0: function () {
          return r;
        },
        jY: function () {
          return y;
        },
        k: function () {
          return o;
        },
        km: function () {
          return d;
        },
        kx: function () {
          return x;
        },
        m3: function () {
          return s;
        },
        vO: function () {
          return b;
        },
      });
      var n = a(81460),
        i = a(90713);
      const s = {
          [n.L.id]: "0x6533C94869D28fAA8dF77cc63f9e2b2D6Cf77eBA",
          [i.u.id]: "0xC6d566A56A1aFf6508b41f6c90ff131615583BCD",
        },
        r = {
          [n.L.id]: "0x49aE3cC2e3AA768B1e5654f5D3C6002144A59581",
          [i.u.id]: "0x4cCb0BB02FCABA27e82a56646E81d8c5bC4119a5",
        },
        y = {
          [n.L.id]: "0x3a0e8c2a0a28f396a5e5b69edb2e630311f1517a",
          [i.u.id]: "0xd3e6775Ed9B7dC12B205C8E608Dc3767B9e5eFdA",
        },
        o =
          (n.L.id,
          i.u.id,
          n.L.id,
          i.u.id,
          n.L.id,
          i.u.id,
          n.L.id,
          i.u.id,
          n.L.id,
          i.u.id,
          {
            [n.L.id]: "0xa0C7a114E25618538BE7fA7c6552C3122056F775",
            [i.u.id]: "0x55564490a44FDC2aEEa54B60eB1c79F124FD88b9",
          }),
        p = {
          [n.L.id]: "0x7b5B2dB59c414e15Bf70b59C02E6fb00Ca919dbC",
          [i.u.id]: "0xB635802085b405A9C8BA7225ae866f60b63d8503",
        },
        l =
          (n.L.id,
          i.u.id,
          {
            [n.L.id]: "0xE41Cd25f429E10744938d5048646E721ac630aF3",
            [i.u.id]: "0x55246A2AE466257B2fB54d4BB881Fb3f17D8e03e",
          }),
        d = {
          [n.L.id]: "0xa0A8401ECF248a9375a0a71C4dedc263dA18dCd7",
          [i.u.id]: "0x79ea96012eea67a83431f1701b3dff7e37f9e282",
        },
        m = {
          [n.L.id]: "0xa0c70ec36c010b55e3c434d6c6ebeec50c705794",
          [i.u.id]: "0x03c4738ee98ae44591e1a4a4f3cab6641d95dd9a",
        },
        x = {
          [n.L.id]: "0x1493b2567056c2181630115660963E13A8E32735",
          [i.u.id]: "0xb94704422c2a1e396835a571837aa5ae53285a95",
        },
        u = { [i.u.id]: "0x88A43bbDF9D098eEC7bCEda4e2494615dfD9bB9C" },
        c =
          (n.L.id,
          i.u.id,
          n.L.id,
          i.u.id,
          {
            [n.L.id]: "0x8b769A3fbC29AC02344218840602615B6c9200e7",
            [i.u.id]: "0xb16A4f14A9dED9e27F0Fe59Dc907D245769de19E",
          }),
        k = {
          [n.L.id]: "0xFa69f6167F40247fe3EFF2d8375B25C5d7834c48",
          [i.u.id]: "0xfEb00a4EfF372a307fDc556Cf4359f7D679E4d11",
        },
        b = {
          [n.L.id]: "0x5c81c392C22Cba477a70D809DE6d6Cd362A1c3DE",
          [i.u.id]: "0xFca2EB54EaB56085e25a32BfF30fe8C452216c5F",
        };
    },
    76956: function (e, t, a) {
      a.d(t, {
        Ph: function () {
          return i;
        },
        cT: function () {
          return n;
        },
        zx: function () {
          return u;
        },
      });
      var n,
        i,
        s = a(60221),
        r = a(88810),
        y = a(67085),
        o = a(57437),
        p = a(27560),
        l = a(86855),
        d = a.n(l);
      !(function (e) {
        (e.Primary = "primary"),
          (e.Secondary = "secondary"),
          (e.SecondaryDark = "secondaryDark"),
          (e.SecondaryBounce = "secondaryBounce"),
          (e.SecondaryDarkBounce = "secondaryDarkBounce"),
          (e.Black = "black"),
          (e.Gray = "gray");
      })(n || (n = {})),
        (function (e) {
          (e.Tiny = "tiny"), (e.Small = "small"), (e.Medium = "medium");
        })(i || (i = {}));
      const m = {
          primary:
            "text-black bg-white hover:bg-translucent-900 active:bg-translucent-800",
          secondary:
            "text-white bg-transparent border border-white hover:bg-translucent-100 active:bg-translucent-200",
          secondaryDark:
            "text-black bg-transparent border border-black hover:bg-ocsblue hover:text-white active:bg-translucent-200",
          secondaryBounce:
            "text-white bg-transparent border border-white hover:bg-translucent-100 active:bg-translucent-200 animate-bounce",
          secondaryDarkBounce:
            "text-black bg-transparent border border-black hover:bg-ocsblue hover:text-white active:bg-translucent-200 animate-bounce",
          black:
            "text-white bg-button-black hover:bg-button-blackHover active:bg-button-blackActive",
          gray: "text-black bg-[#EEF0F3] hover:bg-[#EEF0F3]/60 active:bg-[#EEF0F3]/80",
        },
        x = {
          tiny: "text-xs md:text-sm px-3 py-2",
          small: "text-sm md:text-md px-6 py-3",
          medium: "text-sm md:text-lg px-10 py-3.5",
        };
      function u(e) {
        var {
            variant: t = "primary",
            size: a = "medium",
            children: n,
            className: i,
            rounded: l = !1,
            fullWidth: u = !1,
            disabled: c = !1,
            isLoading: k = !1,
          } = e,
          b = (0, y._)(e, [
            "variant",
            "size",
            "children",
            "className",
            "rounded",
            "fullWidth",
            "disabled",
            "isLoading",
          ]);
        const h = d()(
          "font-display text-center flex gap-2 items-center whitespace-nowrap cursor-pointer",
          m[t],
          x[a],
          { "rounded-full": l },
          { "w-full justify-center": u },
          { "pointer-events-none opacity-50 select-none": c || k },
          i,
        );
        return (0, o.jsx)(
          "button",
          (0, r._)((0, s._)({}, b), {
            type: "button",
            className: h,
            disabled: c,
            children: k
              ? (0, o.jsx)("span", {
                  className: "flex justify-center",
                  children: (0, o.jsx)(p.J, {
                    name: "spinner",
                    color: "currentColor",
                  }),
                })
              : n,
          }),
        );
      }
    },
    73919: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return o;
        },
      });
      var n = a(57437),
        i = a(33145),
        s = a(11595);
      function r(e) {
        let {
          src: t,
          alt: a,
          title: i,
          width: r,
          height: y,
          className: o,
          onLoad: p,
          style: l,
        } = e;
        const d = (0, s.e8)(t);
        return (0, n.jsx)("img", {
          src: d,
          className: o,
          alt: a,
          title: i,
          onLoad: p,
          width: r,
          height: y,
          style: l,
        });
      }
      var y = a(78316);
      function o(e) {
        let {
          priority: t,
          src: a,
          alt: o,
          title: p,
          width: l,
          height: d,
          className: m,
          onLoad: x,
          placeholder: u,
          quality: c,
          style: k,
          fill: b,
          useCloudinary: h = !0,
        } = e;
        return (0, s.FA)(a)
          ? (0, n.jsx)(i.default, {
              src: a,
              className: m,
              alt: o,
              title: p,
              placeholder: u,
              onLoad: x,
              width: l,
              height: d,
              quality: c,
              style: k,
              priority: t,
              fill: b,
            })
          : h
            ? (0, n.jsx)(y.default, {
                src: a,
                className: m,
                alt: o,
                title: p,
                onLoad: x,
                width: l,
                height: d,
                style: k,
              })
            : (0, n.jsx)(r, {
                src: a,
                className: m,
                alt: o,
                title: p,
                onLoad: x,
                width: l,
                height: d,
                style: k,
              });
      }
    },
    78316: function (e, t, a) {
      a.d(t, {
        default: function () {
          return y;
        },
      });
      var n = a(57437),
        i = a(11595),
        s = a(63246),
        r = a(2265);
      function y(e) {
        let {
          src: t,
          alt: a,
          title: y,
          width: o = 1200,
          height: p,
          className: l,
          onLoad: d,
          onError: m,
          style: x,
        } = e;
        const u = (0, i.e8)(t),
          [c, k] = (0, r.useState)(null),
          b = (0, i.UK)({ media: u, width: Number(o) }),
          h =
            (0, s.pZ)(u) ||
            u.length > 255 ||
            u.includes("?image=") ||
            u.includes("?url=");
        if (
          ((0, r.useEffect)(() => {
            if (h) {
              async function e() {
                try {
                  const e = await fetch("/api/cloudinaryUrl", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ media: u, width: o }),
                  });
                  if (!e.ok) throw new Error("Failed to get Cloudinary URL");
                  const t = await e.json(),
                    a = null === t || void 0 === t ? void 0 : t.url;
                  a && k(a);
                } catch (e) {}
              }
              e()
                .then()
                .catch((e) => console.log(e));
            }
          }, [u, h, o]),
          h && !c)
        )
          return null;
        const f = null !== c && void 0 !== c ? c : b;
        return (0, n.jsx)("img", {
          src: f,
          className: l,
          alt: a,
          title: y,
          onLoad: d,
          onError: m,
          width: o,
          height: p,
          style: x,
        });
      }
    },
    54916: function (e, t, a) {
      a.d(t, {
        yG: function () {
          return d;
        },
      });
      var n = a(81460),
        i = a(90713),
        s = a(68571);
      var r;
      r = s.env.DOCS_URL;
      var y;
      y = s.env.BRIDGE_URL;
      var o;
      o = s.env.GREENHOUSE_HTTPS;
      var p;
      p = s.env.MAINNET_LAUNCH_BLOG_POST_URL;
      var l;
      l = s.env.MAINNET_LAUNCH_FLAG;
      const d = !1;
      var m;
      m = s.env.TRUSTED_SIGNER_ADDRESS;
      var x;
      (x = s.env.TRUSTED_SIGNER_PRIVATE_KEY),
        n.L.id,
        i.u.id,
        n.L.id,
        i.u.id,
        s.env.AMPLITUDE_API_KEY_DEVELOPMENT,
        s.env.AMPLITUDE_API_KEY_PRODUCTION;
      var u;
      !(function (e) {
        e.FARCASTER_FRAME_CONTEXT = "FARCASTER_FRAME_CONTEXT";
      })(u || (u = {}));
    },
    11420: function (e, t, a) {
      a.d(t, {
        ZP: function () {
          return g;
        },
        Z6: function () {
          return f;
        },
        Vz: function () {
          return v;
        },
        KC: function () {
          return T;
        },
      });
      var n,
        i = a(64707),
        s = a(2265),
        r = a(81460),
        y = a(90713),
        o = a(70751),
        p = a(79516),
        l = a(68571);
      n = l.env.CDP_KEY_SECRET;
      var d;
      d = l.env.CDP_KEY_NAME;
      var m;
      const x =
        null !== (m = l.env.CDP_BASE_RPC_ENDPOINT) && void 0 !== m
          ? m
          : "https://mainnet.base.org";
      var u;
      const c =
        null !== (u = l.env.CDP_BASE_SEPOLIA_RPC_ENDPOINT) && void 0 !== u
          ? u
          : "https://sepolia.base.org";
      var k;
      k = l.env.CDP_BASE_URI;
      var b = a(21144),
        h = a(54916);
      function f(e) {
        const t = e === r.L.id ? c : x,
          a = e === r.L.id ? r.L : y.u;
        return (0, o.v)({ chain: a, transport: (0, p.d)(t) });
      }
      const T = [y.u.id, r.L.id];
      function v(e) {
        return T.includes(e);
      }
      function g(e) {
        const { chain: t } = (0, i.useAccount)(),
          a = (0, s.useMemo)(
            () =>
              e ? (0, b.qL)(e) : t && T.includes(t.id) ? t : h.yG ? r.L : y.u,
            [t, e],
          );
        return { basenameChain: a, basenamePublicClient: f(a.id) };
      }
    },
    11595: function (e, t, a) {
      a.d(t, {
        FA: function () {
          return s;
        },
        UK: function () {
          return r;
        },
        e8: function () {
          return i;
        },
      });
      const n = "base-web",
        i = (e) => ("string" === typeof e ? e : e.src),
        s = (e) => {
          const t = i(e);
          if (t.startsWith("/_next/static/")) return !0;
          return !!t.startsWith("/images/");
        };
      function r(e) {
        let { media: t, width: a, format: i = "webp" } = e;
        if (
          (function (e) {
            return /^data:image\/[a-zA-Z]+;base64,/.test(e);
          })(t)
        )
          return t;
        const s = [
          "w_".concat(2 * a),
          "f_".concat(i),
          encodeURIComponent(t),
        ].join("/");
        return "https://res.cloudinary.com/"
          .concat(n, "/image/fetch/")
          .concat(s);
      }
    },
    47903: function (e, t, a) {
      a.d(t, {
        k: function () {
          return r;
        },
      });
      var n = a(60221),
        i = a(88810);
      class s {
        static getInstance(e) {
          return s.instance || (s.instance = new s(e)), s.instance;
        }
        createDatadogLog(e, t, a) {
          let i, s;
          JSON.stringify(
            (0, n._)(
              {
                message: "[".concat(this.service, "] ").concat(t),
                level: e,
                dd: { trace_id: i, span_id: s },
              },
              a,
            ),
          );
        }
        log(e, t, a) {
          this.createDatadogLog(e, t, a);
        }
        info(e, t) {
          this.log("info", e, t);
        }
        warn(e, t) {
          this.log("warn", e, t);
        }
        error(e, t, a) {
          const s =
            t instanceof Error
              ? {
                  name: t.name,
                  cause: t.cause,
                  message: t.message,
                  stack: t.stack,
                }
              : { message: JSON.stringify(t) };
          t && this.log("error", e, (0, i._)((0, n._)({}, a), { error: s })),
            this.log("error", e, a);
        }
        debug(e, t) {
          this.log("debug", e, t);
        }
        verbose(e, t) {
          this.log("verbose", e, t);
        }
        constructor(e) {
          this.service = e.service;
        }
      }
      const r = s.getInstance({ service: "base-org" });
    },
    63246: function (e, t, a) {
      a.d(t, {
        EF: function () {
          return o;
        },
        aK: function () {
          return d;
        },
        dx: function () {
          return p;
        },
        jv: function () {
          return l;
        },
        pZ: function () {
          return u;
        },
        s7: function () {
          return m;
        },
        t$: function () {
          return x;
        },
      });
      var n = a(83052);
      var i;
      const s = null !== (i = "base.mypinata.cloud") ? i : void 0;
      var r;
      const y =
          null !==
          (r =
            "f6uqhE35YREDMuFqLvxFLqd-MBRlrJ1qWog8gyCF8T88-Tsiu2IX48F-kyVti78J")
            ? r
            : void 0,
        o = (e) =>
          Object.entries(e)
            .map((e) => e.map(encodeURIComponent).join("="))
            .join("&"),
        p = (e, t) => "".concat(e, "?").concat(o(t));
      function l(e) {
        if (!e) return !1;
        try {
          return new URL(e), !0;
        } catch (t) {
          return !1;
        }
      }
      const d = (e) => {
          try {
            const t = new URL(e);
            if ("ipfs:" !== t.protocol) return !1;
            const a = t.host;
            return (0, n.cid)(a);
          } catch (t) {
            return !1;
          }
        },
        m = (e) => {
          try {
            const t = new URL(e);
            return (
              "https:" === t.protocol &&
              "zku9gdedgba48lmr.public.blob.vercel-storage.com" === t.hostname
            );
          } catch (t) {
            return !1;
          }
        },
        x = (e) => {
          if (e && d(e))
            try {
              const t = new URL(e),
                a = t.host,
                n = t.pathname;
              return s && y
                ? "https://"
                    .concat(s, "/ipfs/")
                    .concat(a)
                    .concat(n, "?pinataGatewayToken=")
                    .concat(y)
                : "https://ipfs.io/ipfs/".concat(a).concat(n);
            } catch (t) {
              return;
            }
        };
      function u(e) {
        return e.startsWith("data:");
      }
    },
    21144: function (e, t, a) {
      a.d(t, {
        sz: function () {
          return Q;
        },
        gH: function () {
          return ke;
        },
        Hu: function () {
          return he;
        },
        qO: function () {
          return fe;
        },
        ZL: function () {
          return be;
        },
        _C: function () {
          return F;
        },
        H1: function () {
          return Y;
        },
        jv: function () {
          return C;
        },
        Nh: function () {
          return M;
        },
        Jk: function () {
          return oe;
        },
        K8: function () {
          return pe;
        },
        w7: function () {
          return me;
        },
        pu: function () {
          return X;
        },
        c1: function () {
          return $;
        },
        UB: function () {
          return I;
        },
        mE: function () {
          return ue;
        },
        hh: function () {
          return se;
        },
        ni: function () {
          return ce;
        },
        T2: function () {
          return de;
        },
        qL: function () {
          return te;
        },
        Si: function () {
          return ae;
        },
        rk: function () {
          return ne;
        },
        of: function () {
          return ie;
        },
        ud: function () {
          return ee;
        },
        JE: function () {
          return J;
        },
        $z: function () {
          return Z;
        },
        Xo: function () {
          return z;
        },
        gr: function () {
          return W;
        },
        a7: function () {
          return U;
        },
        $w: function () {
          return H;
        },
        sQ: function () {
          return j;
        },
        RG: function () {
          return q;
        },
        r4: function () {
          return L;
        },
        rO: function () {
          return N;
        },
        yM: function () {
          return re;
        },
        MS: function () {
          return ye;
        },
        ep: function () {
          return K;
        },
      });
      var n = a(36319),
        i = a(21721),
        s = a(46685),
        r = a(79973),
        y = a(41556),
        o = a(23104),
        p = [
          {
            inputs: [
              { internalType: "address", name: "rootOwner", type: "address" },
            ],
            stateMutability: "nonpayable",
            type: "constructor",
          },
          { inputs: [], name: "Unauthorized", type: "error" },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "owner",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "operator",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "bool",
                name: "approved",
                type: "bool",
              },
            ],
            name: "ApprovalForAll",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "bytes32",
                name: "node",
                type: "bytes32",
              },
              {
                indexed: !0,
                internalType: "bytes32",
                name: "label",
                type: "bytes32",
              },
              {
                indexed: !1,
                internalType: "address",
                name: "owner",
                type: "address",
              },
            ],
            name: "NewOwner",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "bytes32",
                name: "node",
                type: "bytes32",
              },
              {
                indexed: !1,
                internalType: "address",
                name: "resolver",
                type: "address",
              },
            ],
            name: "NewResolver",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "bytes32",
                name: "node",
                type: "bytes32",
              },
              {
                indexed: !1,
                internalType: "uint64",
                name: "ttl",
                type: "uint64",
              },
            ],
            name: "NewTTL",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "bytes32",
                name: "node",
                type: "bytes32",
              },
              {
                indexed: !1,
                internalType: "address",
                name: "owner",
                type: "address",
              },
            ],
            name: "Transfer",
            type: "event",
          },
          {
            inputs: [
              { internalType: "address", name: "owner_", type: "address" },
              { internalType: "address", name: "operator", type: "address" },
            ],
            name: "isApprovedForAll",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "bytes32", name: "node", type: "bytes32" },
            ],
            name: "owner",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "bytes32", name: "node", type: "bytes32" },
            ],
            name: "recordExists",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "bytes32", name: "node", type: "bytes32" },
            ],
            name: "resolver",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "operator", type: "address" },
              { internalType: "bool", name: "approved", type: "bool" },
            ],
            name: "setApprovalForAll",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "bytes32", name: "node", type: "bytes32" },
              { internalType: "address", name: "owner_", type: "address" },
            ],
            name: "setOwner",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "bytes32", name: "node", type: "bytes32" },
              { internalType: "address", name: "owner_", type: "address" },
              { internalType: "address", name: "resolver_", type: "address" },
              { internalType: "uint64", name: "ttl_", type: "uint64" },
            ],
            name: "setRecord",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "bytes32", name: "node", type: "bytes32" },
              { internalType: "address", name: "resolver_", type: "address" },
            ],
            name: "setResolver",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "bytes32", name: "node", type: "bytes32" },
              { internalType: "bytes32", name: "label", type: "bytes32" },
              { internalType: "address", name: "owner_", type: "address" },
            ],
            name: "setSubnodeOwner",
            outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "bytes32", name: "node", type: "bytes32" },
              { internalType: "bytes32", name: "label", type: "bytes32" },
              { internalType: "address", name: "owner_", type: "address" },
              { internalType: "address", name: "resolver_", type: "address" },
              { internalType: "uint64", name: "ttl_", type: "uint64" },
            ],
            name: "setSubnodeRecord",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "bytes32", name: "node", type: "bytes32" },
              { internalType: "uint64", name: "ttl_", type: "uint64" },
            ],
            name: "setTTL",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "bytes32", name: "node", type: "bytes32" },
            ],
            name: "ttl",
            outputs: [{ internalType: "uint64", name: "", type: "uint64" }],
            stateMutability: "view",
            type: "function",
          },
        ],
        l = a(32637),
        d = a(81460),
        m = a(90713),
        x = a(7010),
        u = a(63246),
        c = a(11420),
        k =
          (a(47903),
          JSON.parse(
            '{"v":"5.7.4","fr":60,"ip":0,"op":601,"w":1920,"h":1920,"nm":"Comp 3","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":3,"nm":"blink Opacity","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":30,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":31,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":36,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":37,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":192,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":193,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":198,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":199,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":204,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":205,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":210,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":211,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":505,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":506,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":511,"s":[100]},{"t":512,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[960,960,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"ip":0,"op":601,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Blink","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11,"x":"var $bm_rt;\\n$bm_rt = thisComp.layer(\'blink Opacity\').transform.opacity;"},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[1214.483,960,0],"ix":2,"l":2},"a":{"a":0,"k":[-2,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[422.125,63.513],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":181,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[0.462821990368,0,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.082352941176,0.364705882353,0.992156922583,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-2,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":601,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"Blink","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11,"x":"var $bm_rt;\\n$bm_rt = thisComp.layer(\'blink Opacity\').transform.opacity;"},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[704.979,960,0],"ix":2,"l":2},"a":{"a":0,"k":[-2,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[422.125,63.513],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":181,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[0.462821990368,0,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.082352941176,0.364705882353,0.992156922583,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-2,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":601,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":3,"nm":"Eye Opacity","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":30,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":31,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":36,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":37,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":192,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":193,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":198,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":199,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":204,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":205,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":210,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":211,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":505,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":506,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":511,"s":[0]},{"t":512,"s":[100]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[960,960,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"ip":0,"op":601,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":3,"nm":"Eyballs","sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.2,"y":1},"o":{"x":0.4,"y":0},"t":60,"s":[960,960,0],"to":[-51,42.667,0],"ti":[-5,-97.667,0]},{"i":{"x":0.2,"y":0.2},"o":{"x":0.167,"y":0.167},"t":75,"s":[888,1300,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.2,"y":1},"o":{"x":0.167,"y":0},"t":90,"s":[888,1300,0],"to":[66.667,-1,0],"ti":[-12.667,72,0]},{"i":{"x":0.2,"y":0.2},"o":{"x":0.167,"y":0.167},"t":105,"s":[1072,1168,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.2,"y":1},"o":{"x":0.167,"y":0},"t":149,"s":[1072,1168,0],"to":[-31.333,-30,0],"ti":[71.296,-55.739,0]},{"i":{"x":0.2,"y":1},"o":{"x":0.167,"y":0},"t":164,"s":[848,1168,0],"to":[-0.952,0.744,0],"ti":[-0.892,-0.482,0]},{"i":{"x":0.2,"y":1},"o":{"x":0.167,"y":0},"t":238,"s":[848,1168,0],"to":[94.138,50.825,0],"ti":[0,0,0]},{"i":{"x":0.2,"y":1},"o":{"x":0.167,"y":0},"t":253,"s":[1072,1168,0],"to":[0.167,1,0],"ti":[0.333,0.5,0]},{"i":{"x":0.2,"y":1},"o":{"x":0.167,"y":0},"t":283,"s":[1072,1168,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.2,"y":1},"o":{"x":0.167,"y":0},"t":298,"s":[1008,1334,0],"to":[0.667,0.5,0],"ti":[0,0,0]},{"i":{"x":0.2,"y":1},"o":{"x":0.167,"y":0},"t":375,"s":[1008,1334,0],"to":[-4.833,-183.5,0],"ti":[0,0,0]},{"i":{"x":0.2,"y":0.2},"o":{"x":0.167,"y":0.167},"t":390,"s":[860,1074,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.2,"y":1},"o":{"x":0.167,"y":0},"t":480,"s":[860,1074,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.2,"y":0.2},"o":{"x":0.167,"y":0.167},"t":495,"s":[874,1274,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.2,"y":1},"o":{"x":0.167,"y":0},"t":525,"s":[874,1274,0],"to":[0,0,0],"ti":[-73.074,65.833,0]},{"t":540,"s":[960,960,0]}],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"ip":0,"op":601,"st":0,"bm":0},{"ddd":0,"ind":6,"ty":4,"nm":"Layer 7","parent":5,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11,"x":"var $bm_rt;\\n$bm_rt = thisComp.layer(\'Eye Opacity\').transform.opacity;"},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[253.811,-195.245,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-44.683,0],[0,-81.98],[44.683,0],[0,81.98]],"o":[[44.683,0],[0,81.98],[-44.683,0],[0,-81.98]],"v":[[0,-148.438],[80.905,0],[0,148.438],[-80.905,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":601,"st":0,"bm":0},{"ddd":0,"ind":7,"ty":4,"nm":"Layer 6","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11,"x":"var $bm_rt;\\n$bm_rt = thisComp.layer(\'Eye Opacity\').transform.opacity;"},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[1214.483,960,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-94.65],[33.702,-61.862],[50.662,0],[33.741,61.933],[0,94.65],[-33.696,61.862],[-50.669,0],[-33.741,-61.933]],"o":[[0,94.65],[-33.741,61.933],[-50.669,0],[-33.696,-61.862],[0,-94.65],[33.741,-61.933],[50.662,0],[33.702,61.862]],"v":[[185.299,0],[130.694,242.099],[0,341.76],[-130.701,242.099],[-185.299,0],[-130.701,-242.099],[0,-341.76],[130.694,-242.099]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":3.84,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.082352943718,0.364705890417,0.992156863213,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":601,"st":0,"bm":0},{"ddd":0,"ind":8,"ty":4,"nm":"Layer 5","parent":5,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11,"x":"var $bm_rt;\\n$bm_rt = thisComp.layer(\'Eye Opacity\').transform.opacity;"},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-254.355,-195.245,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-44.683,0],[0,-81.98],[44.683,0],[0,81.98]],"o":[[44.683,0],[0,81.98],[-44.683,0],[0,-81.98]],"v":[[0,-148.438],[80.905,0],[0,148.438],[-80.905,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":601,"st":0,"bm":0},{"ddd":0,"ind":9,"ty":4,"nm":"Layer 4","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11,"x":"var $bm_rt;\\n$bm_rt = thisComp.layer(\'Eye Opacity\').transform.opacity;"},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[704.979,960,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-94.65],[33.702,-61.862],[50.662,0],[33.739,61.933],[0,94.65],[-33.699,61.862],[-50.669,0],[-33.734,-61.933]],"o":[[0,94.65],[-33.734,61.933],[-50.669,0],[-33.699,-61.862],[0,-94.65],[33.739,-61.933],[50.662,0],[33.702,61.862]],"v":[[185.299,0],[130.694,242.099],[0,341.76],[-130.698,242.099],[-185.299,0],[-130.698,-242.099],[0,-341.76],[130.694,-242.099]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":3.84,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.082352943718,0.364705890417,0.992156863213,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":601,"st":0,"bm":0},{"ddd":0,"ind":15,"ty":4,"nm":"Layer 3","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[960.001,960.001,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[110.957,64.928],[0,47.936],[5.536,46.509],[118.31,90.62],[55.098,29.793],[37.811,49.368],[64.928,-110.958],[47.936,0],[46.509,-5.539],[90.62,-118.311],[29.793,-55.097],[49.368,-37.813],[-110.958,-64.928],[0,-47.936],[-5.539,-46.509],[-118.311,-90.618],[-55.097,-29.792],[-37.813,-49.37],[-64.928,110.957],[-47.936,0],[-46.509,5.536],[-90.618,118.31],[-29.792,55.098],[-49.37,37.811]],"o":[[5.536,-46.413],[0,-47.936],[110.957,-64.928],[-49.37,-37.813],[-29.888,-55.002],[-90.618,-118.216],[-46.413,-5.539],[-47.936,0],[-64.928,-110.958],[-37.813,49.368],[-55.002,29.888],[-118.216,90.62],[-5.539,46.413],[0,47.936],[-110.958,64.928],[49.368,37.811],[29.888,55.002],[90.62,118.214],[46.413,5.536],[47.936,0],[64.928,110.957],[37.811,-49.37],[55.002,-29.888],[118.214,-90.618]],"v":[[702.035,141.612],[710.534,-0.001],[702.035,-141.613],[723.903,-465.318],[567.014,-567.014],[465.318,-723.902],[141.612,-702.035],[-0.001,-710.534],[-141.613,-702.035],[-465.318,-723.902],[-567.014,-567.014],[-723.902,-465.318],[-702.035,-141.613],[-710.534,-0.001],[-702.035,141.612],[-723.902,465.318],[-567.014,567.014],[-465.318,723.903],[-141.613,702.035],[-0.001,710.534],[141.612,702.035],[465.318,723.903],[567.014,567.014],[723.903,465.318]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":601,"st":0,"bm":0},{"ddd":0,"ind":16,"ty":4,"nm":"Layer 2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[960,960,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-530.193,0],[0,-530.193],[530.193,0],[0,530.193]],"o":[[530.193,0],[0,530.193],[-530.193,0],[0,-530.193]],"v":[[0,-960],[960,0],[0,960],[-960,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.082352943718,0.364705890417,0.992156863213,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":601,"st":0,"bm":0}],"markers":[]}',
          )),
        b = JSON.parse(
          '{"v":"5.7.4","fr":60,"ip":0,"op":601,"w":1920,"h":1920,"nm":"Comp 3","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":3,"nm":"blink Opacity","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":30,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":31,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":36,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":37,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":192,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":193,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":198,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":199,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":204,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":205,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":210,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":211,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":505,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":506,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":511,"s":[100]},{"t":512,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[960,960,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"ip":0,"op":601,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Blink","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11,"x":"var $bm_rt;\\n$bm_rt = thisComp.layer(\'blink Opacity\').transform.opacity;"},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[1214.483,960,0],"ix":2,"l":2},"a":{"a":0,"k":[-2,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[422.125,63.513],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":181,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[0.462821990368,0,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.082352941176,0.364705882353,0.992156922583,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-2,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":601,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"Blink","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11,"x":"var $bm_rt;\\n$bm_rt = thisComp.layer(\'blink Opacity\').transform.opacity;"},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[704.979,960,0],"ix":2,"l":2},"a":{"a":0,"k":[-2,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[422.125,63.513],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":181,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[0.462821990368,0,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.082352941176,0.364705882353,0.992156922583,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-2,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":601,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":3,"nm":"Eye Opacity","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":30,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":31,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":36,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":37,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":192,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":193,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":198,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":199,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":204,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":205,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":210,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":211,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":505,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":506,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":511,"s":[0]},{"t":512,"s":[100]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[960,960,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"ip":0,"op":601,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":3,"nm":"Eyballs","sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.2,"y":1},"o":{"x":0.4,"y":0},"t":60,"s":[960,960,0],"to":[-51,42.667,0],"ti":[-5,-97.667,0]},{"i":{"x":0.2,"y":0.2},"o":{"x":0.167,"y":0.167},"t":75,"s":[888,1300,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.2,"y":1},"o":{"x":0.167,"y":0},"t":90,"s":[888,1300,0],"to":[66.667,-1,0],"ti":[-12.667,72,0]},{"i":{"x":0.2,"y":0.2},"o":{"x":0.167,"y":0.167},"t":105,"s":[1072,1168,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.2,"y":1},"o":{"x":0.167,"y":0},"t":149,"s":[1072,1168,0],"to":[-31.333,-30,0],"ti":[71.296,-55.739,0]},{"i":{"x":0.2,"y":1},"o":{"x":0.167,"y":0},"t":164,"s":[848,1168,0],"to":[-0.952,0.744,0],"ti":[-0.892,-0.482,0]},{"i":{"x":0.2,"y":1},"o":{"x":0.167,"y":0},"t":238,"s":[848,1168,0],"to":[94.138,50.825,0],"ti":[0,0,0]},{"i":{"x":0.2,"y":1},"o":{"x":0.167,"y":0},"t":253,"s":[1072,1168,0],"to":[0.167,1,0],"ti":[0.333,0.5,0]},{"i":{"x":0.2,"y":1},"o":{"x":0.167,"y":0},"t":283,"s":[1072,1168,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.2,"y":1},"o":{"x":0.167,"y":0},"t":298,"s":[1008,1334,0],"to":[0.667,0.5,0],"ti":[0,0,0]},{"i":{"x":0.2,"y":1},"o":{"x":0.167,"y":0},"t":375,"s":[1008,1334,0],"to":[-4.833,-183.5,0],"ti":[0,0,0]},{"i":{"x":0.2,"y":0.2},"o":{"x":0.167,"y":0.167},"t":390,"s":[860,1074,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.2,"y":1},"o":{"x":0.167,"y":0},"t":480,"s":[860,1074,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.2,"y":0.2},"o":{"x":0.167,"y":0.167},"t":495,"s":[874,1274,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.2,"y":1},"o":{"x":0.167,"y":0},"t":525,"s":[874,1274,0],"to":[0,0,0],"ti":[-73.074,65.833,0]},{"t":540,"s":[960,960,0]}],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"ip":0,"op":601,"st":0,"bm":0},{"ddd":0,"ind":6,"ty":4,"nm":"Layer 7","parent":5,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11,"x":"var $bm_rt;\\n$bm_rt = thisComp.layer(\'Eye Opacity\').transform.opacity;"},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[253.811,-195.245,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-44.683,0],[0,-81.98],[44.683,0],[0,81.98]],"o":[[44.683,0],[0,81.98],[-44.683,0],[0,-81.98]],"v":[[0,-148.438],[80.905,0],[0,148.438],[-80.905,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":601,"st":0,"bm":0},{"ddd":0,"ind":7,"ty":4,"nm":"Layer 6","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11,"x":"var $bm_rt;\\n$bm_rt = thisComp.layer(\'Eye Opacity\').transform.opacity;"},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[1214.483,960,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-94.65],[33.702,-61.862],[50.662,0],[33.741,61.933],[0,94.65],[-33.696,61.862],[-50.669,0],[-33.741,-61.933]],"o":[[0,94.65],[-33.741,61.933],[-50.669,0],[-33.696,-61.862],[0,-94.65],[33.741,-61.933],[50.662,0],[33.702,61.862]],"v":[[185.299,0],[130.694,242.099],[0,341.76],[-130.701,242.099],[-185.299,0],[-130.701,-242.099],[0,-341.76],[130.694,-242.099]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":3.84,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.082352943718,0.364705890417,0.992156863213,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":601,"st":0,"bm":0},{"ddd":0,"ind":8,"ty":4,"nm":"Layer 5","parent":5,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11,"x":"var $bm_rt;\\n$bm_rt = thisComp.layer(\'Eye Opacity\').transform.opacity;"},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-254.355,-195.245,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-44.683,0],[0,-81.98],[44.683,0],[0,81.98]],"o":[[44.683,0],[0,81.98],[-44.683,0],[0,-81.98]],"v":[[0,-148.438],[80.905,0],[0,148.438],[-80.905,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":601,"st":0,"bm":0},{"ddd":0,"ind":9,"ty":4,"nm":"Layer 4","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11,"x":"var $bm_rt;\\n$bm_rt = thisComp.layer(\'Eye Opacity\').transform.opacity;"},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[704.979,960,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-94.65],[33.702,-61.862],[50.662,0],[33.739,61.933],[0,94.65],[-33.699,61.862],[-50.669,0],[-33.734,-61.933]],"o":[[0,94.65],[-33.734,61.933],[-50.669,0],[-33.699,-61.862],[0,-94.65],[33.739,-61.933],[50.662,0],[33.702,61.862]],"v":[[185.299,0],[130.694,242.099],[0,341.76],[-130.698,242.099],[-185.299,0],[-130.698,-242.099],[0,-341.76],[130.694,-242.099]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":3.84,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.082352943718,0.364705890417,0.992156863213,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":601,"st":0,"bm":0},{"ddd":0,"ind":10,"ty":4,"nm":"Layer 16","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[943.358,943.358,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[384.549,39.317],[17.758,32.97],[300.239,-244.743],[36.346,10.934],[39.12,-385.435],[32.811,-17.632],[-245.204,-300.51],[10.955,-36.253],[-385.3,-39.194],[-17.644,-32.895],[-300.174,244.539],[-36.45,-11.009],[-39.391,384.414],[-33.056,17.771],[244.102,299.859],[-10.99,36.549]],"o":[[-11.017,-36.478],[244.599,-300.111],[-32.872,-17.626],[-39.193,-385.303],[-36.281,10.962],[-300.45,-245.267],[-17.615,32.789],[-385.438,39.119],[10.942,36.375],[-244.81,300.173],[32.946,17.74],[39.316,384.552],[36.576,-10.997],[299.796,244.167],[17.754,-33.034],[384.417,-39.389]],"v":[[543.526,-163.952],[500.162,-268.327],[268.044,-500.015],[164.017,-543.058],[-164.022,-542.861],[-267.859,-499.769],[-499.803,-267.797],[-542.857,-164.035],[-543.062,164.004],[-499.98,268.109],[-268.262,500.197],[-163.966,543.522],[163.934,543.727],[268.584,500.369],[500.401,268.524],[543.723,163.948]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":601,"st":0,"bm":0},{"ddd":0,"ind":16,"ty":4,"nm":"Layer 2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[960,960,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-530.193,0],[0,-530.193],[530.193,0],[0,530.193]],"o":[[530.193,0],[0,530.193],[-530.193,0],[0,-530.193]],"v":[[0,-960],[960,0],[0,960],[-960,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.082352943718,0.364705890417,0.992156863213,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":601,"st":0,"bm":0}],"markers":[]}',
        ),
        h = JSON.parse(
          '{"v":"5.7.4","fr":60,"ip":0,"op":601,"w":1920,"h":1920,"nm":"Comp 3","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":3,"nm":"blink Opacity","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":30,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":31,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":36,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":37,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":192,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":193,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":198,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":199,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":204,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":205,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":210,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":211,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":505,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":506,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":511,"s":[100]},{"t":512,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[960,960,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"ip":0,"op":601,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Blink","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11,"x":"var $bm_rt;\\n$bm_rt = thisComp.layer(\'blink Opacity\').transform.opacity;"},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[1214.483,960,0],"ix":2,"l":2},"a":{"a":0,"k":[-2,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[422.125,63.513],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":181,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[0.462821990368,0,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.082352941176,0.364705882353,0.992156922583,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-2,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":601,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"Blink","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11,"x":"var $bm_rt;\\n$bm_rt = thisComp.layer(\'blink Opacity\').transform.opacity;"},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[704.979,960,0],"ix":2,"l":2},"a":{"a":0,"k":[-2,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[422.125,63.513],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":181,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[0.462821990368,0,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.082352941176,0.364705882353,0.992156922583,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-2,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":601,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":3,"nm":"Eye Opacity","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":30,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":31,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":36,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":37,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":192,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":193,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":198,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":199,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":204,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":205,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":210,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":211,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":505,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":506,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":511,"s":[0]},{"t":512,"s":[100]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[960,960,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"ip":0,"op":601,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":3,"nm":"Eyballs","sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.2,"y":1},"o":{"x":0.4,"y":0},"t":60,"s":[960,960,0],"to":[-51,42.667,0],"ti":[-5,-97.667,0]},{"i":{"x":0.2,"y":0.2},"o":{"x":0.167,"y":0.167},"t":75,"s":[888,1300,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.2,"y":1},"o":{"x":0.167,"y":0},"t":90,"s":[888,1300,0],"to":[66.667,-1,0],"ti":[-12.667,72,0]},{"i":{"x":0.2,"y":0.2},"o":{"x":0.167,"y":0.167},"t":105,"s":[1072,1168,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.2,"y":1},"o":{"x":0.167,"y":0},"t":149,"s":[1072,1168,0],"to":[-31.333,-30,0],"ti":[71.296,-55.739,0]},{"i":{"x":0.2,"y":1},"o":{"x":0.167,"y":0},"t":164,"s":[848,1168,0],"to":[-0.952,0.744,0],"ti":[-0.892,-0.482,0]},{"i":{"x":0.2,"y":1},"o":{"x":0.167,"y":0},"t":238,"s":[848,1168,0],"to":[94.138,50.825,0],"ti":[0,0,0]},{"i":{"x":0.2,"y":1},"o":{"x":0.167,"y":0},"t":253,"s":[1072,1168,0],"to":[0.167,1,0],"ti":[0.333,0.5,0]},{"i":{"x":0.2,"y":1},"o":{"x":0.167,"y":0},"t":283,"s":[1072,1168,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.2,"y":1},"o":{"x":0.167,"y":0},"t":298,"s":[1008,1334,0],"to":[0.667,0.5,0],"ti":[0,0,0]},{"i":{"x":0.2,"y":1},"o":{"x":0.167,"y":0},"t":375,"s":[1008,1334,0],"to":[-4.833,-183.5,0],"ti":[0,0,0]},{"i":{"x":0.2,"y":0.2},"o":{"x":0.167,"y":0.167},"t":390,"s":[860,1074,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.2,"y":1},"o":{"x":0.167,"y":0},"t":480,"s":[860,1074,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.2,"y":0.2},"o":{"x":0.167,"y":0.167},"t":495,"s":[874,1274,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.2,"y":1},"o":{"x":0.167,"y":0},"t":525,"s":[874,1274,0],"to":[0,0,0],"ti":[-73.074,65.833,0]},{"t":540,"s":[960,960,0]}],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"ip":0,"op":601,"st":0,"bm":0},{"ddd":0,"ind":6,"ty":4,"nm":"Layer 7","parent":5,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11,"x":"var $bm_rt;\\n$bm_rt = thisComp.layer(\'Eye Opacity\').transform.opacity;"},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[253.811,-195.245,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-44.683,0],[0,-81.98],[44.683,0],[0,81.98]],"o":[[44.683,0],[0,81.98],[-44.683,0],[0,-81.98]],"v":[[0,-148.438],[80.905,0],[0,148.438],[-80.905,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":601,"st":0,"bm":0},{"ddd":0,"ind":7,"ty":4,"nm":"Layer 6","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11,"x":"var $bm_rt;\\n$bm_rt = thisComp.layer(\'Eye Opacity\').transform.opacity;"},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[1214.483,960,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-94.65],[33.702,-61.862],[50.662,0],[33.741,61.933],[0,94.65],[-33.696,61.862],[-50.669,0],[-33.741,-61.933]],"o":[[0,94.65],[-33.741,61.933],[-50.669,0],[-33.696,-61.862],[0,-94.65],[33.741,-61.933],[50.662,0],[33.702,61.862]],"v":[[185.299,0],[130.694,242.099],[0,341.76],[-130.701,242.099],[-185.299,0],[-130.701,-242.099],[0,-341.76],[130.694,-242.099]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":3.84,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.082352943718,0.364705890417,0.992156863213,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":601,"st":0,"bm":0},{"ddd":0,"ind":8,"ty":4,"nm":"Layer 5","parent":5,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11,"x":"var $bm_rt;\\n$bm_rt = thisComp.layer(\'Eye Opacity\').transform.opacity;"},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-254.355,-195.245,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-44.683,0],[0,-81.98],[44.683,0],[0,81.98]],"o":[[44.683,0],[0,81.98],[-44.683,0],[0,-81.98]],"v":[[0,-148.438],[80.905,0],[0,148.438],[-80.905,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":601,"st":0,"bm":0},{"ddd":0,"ind":9,"ty":4,"nm":"Layer 4","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11,"x":"var $bm_rt;\\n$bm_rt = thisComp.layer(\'Eye Opacity\').transform.opacity;"},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[704.979,960,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-94.65],[33.702,-61.862],[50.662,0],[33.739,61.933],[0,94.65],[-33.699,61.862],[-50.669,0],[-33.734,-61.933]],"o":[[0,94.65],[-33.734,61.933],[-50.669,0],[-33.699,-61.862],[0,-94.65],[33.739,-61.933],[50.662,0],[33.702,61.862]],"v":[[185.299,0],[130.694,242.099],[0,341.76],[-130.698,242.099],[-185.299,0],[-130.698,-242.099],[0,-341.76],[130.694,-242.099]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":3.84,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.082352943718,0.364705890417,0.992156863213,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":601,"st":0,"bm":0},{"ddd":0,"ind":11,"ty":4,"nm":"Layer 14","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[960,960,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-12.23,209.722],[0,0.467],[-40.857,72.5],[172.115,-49.956],[57.525,-21.249],[-18.655,56.982],[77.606,-48.319],[208.467,6.605],[0.474,0],[75.956,43.365],[-49.721,-172.419],[0,0],[-21.703,-58.758],[56.862,18.616],[-48.319,-77.605],[6.605,-208.467],[0,-0.474],[43.364,-75.955],[-172.419,49.715],[0,0],[-58.644,21.652],[18.913,-57.812],[-81.297,50.643],[-209.722,-12.23],[-0.467,0],[-72.499,-40.857],[49.958,172.115],[21.196,57.409],[-57.93,-18.951],[50.643,81.299]],"o":[[0,-0.39],[-6.541,-208.39],[48.378,-77.605],[-56.974,18.653],[21.25,-57.531],[49.958,-172.113],[-72.499,40.857],[-0.397,0],[-209.722,12.232],[-81.219,-50.643],[0,0],[18.953,57.956],[-57.419,-21.201],[-172.113,-49.956],[40.857,72.5],[0,0.397],[12.232,209.722],[-50.643,81.222],[0,0],[57.835,-18.914],[-21.652,58.645],[-49.722,172.422],[75.956,-43.366],[0.39,0],[208.39,-6.541],[77.606,48.378],[-18.613,-56.85],[58.757,21.702],[172.422,49.722],[-43.366,-75.955]],"v":[[580.729,-6.515],[580.729,-7.77],[743.795,-456.909],[580.301,-466.178],[406.293,-406.302],[466.176,-580.33],[456.909,-743.82],[7.616,-580.819],[6.355,-580.819],[-452.835,-740.394],[-467.838,-584],[-467.68,-583.939],[-406.664,-406.429],[-580.33,-466.178],[-743.82,-456.909],[-580.819,-7.616],[-580.819,-6.355],[-740.394,452.832],[-584,467.84],[-583.939,467.68],[-406.8,406.799],[-467.68,583.91],[-452.678,740.307],[6.515,580.729],[7.769,580.729],[456.909,743.795],[466.176,580.301],[406.438,406.668],[583.91,467.68],[740.307,452.678]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":601,"st":0,"bm":0},{"ddd":0,"ind":16,"ty":4,"nm":"Layer 2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[960,960,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-530.193,0],[0,-530.193],[530.193,0],[0,530.193]],"o":[[530.193,0],[0,530.193],[-530.193,0],[0,-530.193]],"v":[[0,-960],[960,0],[0,960],[-960,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.082352943718,0.364705890417,0.992156863213,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":601,"st":0,"bm":0}],"markers":[]}',
        ),
        f = JSON.parse(
          '{"v":"5.7.4","fr":60,"ip":0,"op":601,"w":1920,"h":1920,"nm":"Comp 3","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":3,"nm":"blink Opacity","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":30,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":31,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":36,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":37,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":192,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":193,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":198,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":199,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":204,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":205,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":210,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":211,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":505,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":506,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":511,"s":[100]},{"t":512,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[960,960,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"ip":0,"op":601,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Blink","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11,"x":"var $bm_rt;\\n$bm_rt = thisComp.layer(\'blink Opacity\').transform.opacity;"},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[1214.483,960,0],"ix":2,"l":2},"a":{"a":0,"k":[-2,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[422.125,63.513],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":181,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[0.462821990368,0,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.082352941176,0.364705882353,0.992156922583,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-2,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":601,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"Blink","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11,"x":"var $bm_rt;\\n$bm_rt = thisComp.layer(\'blink Opacity\').transform.opacity;"},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[704.979,960,0],"ix":2,"l":2},"a":{"a":0,"k":[-2,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[422.125,63.513],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":181,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[0.462821990368,0,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.082352941176,0.364705882353,0.992156922583,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-2,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":601,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":3,"nm":"Eye Opacity","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":30,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":31,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":36,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":37,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":192,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":193,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":198,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":199,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":204,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":205,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":210,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":211,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":505,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":506,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":511,"s":[0]},{"t":512,"s":[100]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[960,960,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"ip":0,"op":601,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":3,"nm":"Eyballs","sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.2,"y":1},"o":{"x":0.4,"y":0},"t":60,"s":[960,960,0],"to":[-51,42.667,0],"ti":[-5,-97.667,0]},{"i":{"x":0.2,"y":0.2},"o":{"x":0.167,"y":0.167},"t":75,"s":[888,1300,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.2,"y":1},"o":{"x":0.167,"y":0},"t":90,"s":[888,1300,0],"to":[66.667,-1,0],"ti":[-12.667,72,0]},{"i":{"x":0.2,"y":0.2},"o":{"x":0.167,"y":0.167},"t":105,"s":[1072,1168,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.2,"y":1},"o":{"x":0.167,"y":0},"t":149,"s":[1072,1168,0],"to":[-31.333,-30,0],"ti":[71.296,-55.739,0]},{"i":{"x":0.2,"y":1},"o":{"x":0.167,"y":0},"t":164,"s":[848,1168,0],"to":[-0.952,0.744,0],"ti":[-0.892,-0.482,0]},{"i":{"x":0.2,"y":1},"o":{"x":0.167,"y":0},"t":238,"s":[848,1168,0],"to":[94.138,50.825,0],"ti":[0,0,0]},{"i":{"x":0.2,"y":1},"o":{"x":0.167,"y":0},"t":253,"s":[1072,1168,0],"to":[0.167,1,0],"ti":[0.333,0.5,0]},{"i":{"x":0.2,"y":1},"o":{"x":0.167,"y":0},"t":283,"s":[1072,1168,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.2,"y":1},"o":{"x":0.167,"y":0},"t":298,"s":[1008,1334,0],"to":[0.667,0.5,0],"ti":[0,0,0]},{"i":{"x":0.2,"y":1},"o":{"x":0.167,"y":0},"t":375,"s":[1008,1334,0],"to":[-4.833,-183.5,0],"ti":[0,0,0]},{"i":{"x":0.2,"y":0.2},"o":{"x":0.167,"y":0.167},"t":390,"s":[860,1074,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.2,"y":1},"o":{"x":0.167,"y":0},"t":480,"s":[860,1074,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.2,"y":0.2},"o":{"x":0.167,"y":0.167},"t":495,"s":[874,1274,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.2,"y":1},"o":{"x":0.167,"y":0},"t":525,"s":[874,1274,0],"to":[0,0,0],"ti":[-73.074,65.833,0]},{"t":540,"s":[960,960,0]}],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"ip":0,"op":601,"st":0,"bm":0},{"ddd":0,"ind":6,"ty":4,"nm":"Layer 7","parent":5,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11,"x":"var $bm_rt;\\n$bm_rt = thisComp.layer(\'Eye Opacity\').transform.opacity;"},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[253.811,-195.245,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-44.683,0],[0,-81.98],[44.683,0],[0,81.98]],"o":[[44.683,0],[0,81.98],[-44.683,0],[0,-81.98]],"v":[[0,-148.438],[80.905,0],[0,148.438],[-80.905,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":601,"st":0,"bm":0},{"ddd":0,"ind":7,"ty":4,"nm":"Layer 6","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11,"x":"var $bm_rt;\\n$bm_rt = thisComp.layer(\'Eye Opacity\').transform.opacity;"},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[1214.483,960,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-94.65],[33.702,-61.862],[50.662,0],[33.741,61.933],[0,94.65],[-33.696,61.862],[-50.669,0],[-33.741,-61.933]],"o":[[0,94.65],[-33.741,61.933],[-50.669,0],[-33.696,-61.862],[0,-94.65],[33.741,-61.933],[50.662,0],[33.702,61.862]],"v":[[185.299,0],[130.694,242.099],[0,341.76],[-130.701,242.099],[-185.299,0],[-130.701,-242.099],[0,-341.76],[130.694,-242.099]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":3.84,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.082352943718,0.364705890417,0.992156863213,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":601,"st":0,"bm":0},{"ddd":0,"ind":8,"ty":4,"nm":"Layer 5","parent":5,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11,"x":"var $bm_rt;\\n$bm_rt = thisComp.layer(\'Eye Opacity\').transform.opacity;"},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-254.355,-195.245,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-44.683,0],[0,-81.98],[44.683,0],[0,81.98]],"o":[[44.683,0],[0,81.98],[-44.683,0],[0,-81.98]],"v":[[0,-148.438],[80.905,0],[0,148.438],[-80.905,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":601,"st":0,"bm":0},{"ddd":0,"ind":9,"ty":4,"nm":"Layer 4","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11,"x":"var $bm_rt;\\n$bm_rt = thisComp.layer(\'Eye Opacity\').transform.opacity;"},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[704.979,960,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-94.65],[33.702,-61.862],[50.662,0],[33.739,61.933],[0,94.65],[-33.699,61.862],[-50.669,0],[-33.734,-61.933]],"o":[[0,94.65],[-33.734,61.933],[-50.669,0],[-33.699,-61.862],[0,-94.65],[33.739,-61.933],[50.662,0],[33.702,61.862]],"v":[[185.299,0],[130.694,242.099],[0,341.76],[-130.698,242.099],[-185.299,0],[-130.698,-242.099],[0,-341.76],[130.694,-242.099]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":3.84,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.082352943718,0.364705890417,0.992156863213,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":601,"st":0,"bm":0},{"ddd":0,"ind":12,"ty":4,"nm":"Layer 13","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[960.001,960.001,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[11.507,-115.789],[68.704,-68.013],[57.318,-58.707],[68.934,-72.365],[115.789,11.507],[68.013,68.704],[58.708,57.318],[72.368,68.934],[-11.509,115.789],[-68.706,68.013],[-57.313,58.708],[-68.938,72.368],[-115.789,-11.567],[-68.013,-68.706],[-58.707,-57.313],[-72.365,-68.938]],"o":[[11.565,115.789],[-72.371,68.934],[-58.707,57.312],[-68.07,68.71],[-115.789,11.565],[-68.937,-72.371],[-57.313,-58.707],[-68.706,-68.07],[-11.567,-115.789],[72.368,-68.937],[58.709,-57.313],[68.07,-68.764],[115.789,-11.567],[68.934,72.368],[57.312,58.709],[68.71,68.07]],"v":[[776.403,-0.001],[644.978,271.628],[448.562,448.39],[271.686,644.914],[-0.001,776.403],[-271.63,644.978],[-448.392,448.562],[-644.919,271.686],[-776.402,-0.001],[-644.977,-271.63],[-448.566,-448.392],[-271.687,-644.919],[-0.001,-776.402],[271.628,-644.977],[448.39,-448.566],[644.914,-271.687]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":601,"st":0,"bm":0},{"ddd":0,"ind":16,"ty":4,"nm":"Layer 2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[960,960,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-530.193,0],[0,-530.193],[530.193,0],[0,530.193]],"o":[[530.193,0],[0,530.193],[-530.193,0],[0,-530.193]],"v":[[0,-960],[960,0],[0,960],[-960,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.082352943718,0.364705890417,0.992156863213,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":601,"st":0,"bm":0}],"markers":[]}',
        ),
        T = JSON.parse(
          '{"v":"5.7.4","fr":60,"ip":0,"op":601,"w":1920,"h":1920,"nm":"Comp 3","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":3,"nm":"blink Opacity","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":30,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":31,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":36,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":37,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":192,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":193,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":198,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":199,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":204,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":205,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":210,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":211,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":505,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":506,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":511,"s":[100]},{"t":512,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[960,960,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"ip":0,"op":601,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Blink","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11,"x":"var $bm_rt;\\n$bm_rt = thisComp.layer(\'blink Opacity\').transform.opacity;"},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[1214.483,960,0],"ix":2,"l":2},"a":{"a":0,"k":[-2,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[422.125,63.513],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":181,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[0.462821990368,0,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.082352941176,0.364705882353,0.992156922583,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-2,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":601,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"Blink","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11,"x":"var $bm_rt;\\n$bm_rt = thisComp.layer(\'blink Opacity\').transform.opacity;"},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[704.979,960,0],"ix":2,"l":2},"a":{"a":0,"k":[-2,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[422.125,63.513],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":181,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[0.462821990368,0,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.082352941176,0.364705882353,0.992156922583,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-2,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":601,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":3,"nm":"Eye Opacity","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":30,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":31,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":36,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":37,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":192,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":193,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":198,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":199,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":204,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":205,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":210,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":211,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":505,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":506,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":511,"s":[0]},{"t":512,"s":[100]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[960,960,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"ip":0,"op":601,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":3,"nm":"Eyballs","parent":6,"sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.2,"y":1},"o":{"x":0.4,"y":0},"t":60,"s":[0,0,0],"to":[-51,42.667,0],"ti":[-5,-97.667,0]},{"i":{"x":0.2,"y":0.2},"o":{"x":0.167,"y":0.167},"t":75,"s":[-72,340,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.2,"y":1},"o":{"x":0.167,"y":0},"t":90,"s":[-72,340,0],"to":[66.667,-1,0],"ti":[-12.667,72,0]},{"i":{"x":0.2,"y":0.2},"o":{"x":0.167,"y":0.167},"t":105,"s":[112,208,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.2,"y":1},"o":{"x":0.167,"y":0},"t":149,"s":[112,208,0],"to":[-31.333,-30,0],"ti":[71.296,-55.739,0]},{"i":{"x":0.2,"y":1},"o":{"x":0.167,"y":0},"t":164,"s":[-112,208,0],"to":[-0.952,0.744,0],"ti":[-0.892,-0.482,0]},{"i":{"x":0.2,"y":1},"o":{"x":0.167,"y":0},"t":238,"s":[-112,208,0],"to":[94.138,50.825,0],"ti":[0,0,0]},{"i":{"x":0.2,"y":1},"o":{"x":0.167,"y":0},"t":253,"s":[112,208,0],"to":[0.167,1,0],"ti":[0.333,0.5,0]},{"i":{"x":0.2,"y":1},"o":{"x":0.167,"y":0},"t":283,"s":[112,208,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.2,"y":1},"o":{"x":0.167,"y":0},"t":298,"s":[48,374,0],"to":[0.667,0.5,0],"ti":[0,0,0]},{"i":{"x":0.2,"y":1},"o":{"x":0.167,"y":0},"t":375,"s":[48,374,0],"to":[-4.833,-183.5,0],"ti":[0,0,0]},{"i":{"x":0.2,"y":0.2},"o":{"x":0.167,"y":0.167},"t":390,"s":[-100,114,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.2,"y":1},"o":{"x":0.167,"y":0},"t":480,"s":[-100,114,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.2,"y":0.2},"o":{"x":0.167,"y":0.167},"t":495,"s":[-86,314,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.2,"y":1},"o":{"x":0.167,"y":0},"t":525,"s":[-86,314,0],"to":[0,0,0],"ti":[-73.074,65.833,0]},{"t":540,"s":[0,0,0]}],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"ip":0,"op":601,"st":0,"bm":0},{"ddd":0,"ind":6,"ty":3,"nm":"Scale","sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[960,960,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[89,89,100],"ix":6,"l":2}},"ao":0,"ip":0,"op":601,"st":0,"bm":0},{"ddd":0,"ind":7,"ty":4,"nm":"Layer 7","parent":5,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11,"x":"var $bm_rt;\\n$bm_rt = thisComp.layer(\'Eye Opacity\').transform.opacity;"},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[253.811,-195.245,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-44.683,0],[0,-81.98],[44.683,0],[0,81.98]],"o":[[44.683,0],[0,81.98],[-44.683,0],[0,-81.98]],"v":[[0,-148.438],[80.905,0],[0,148.438],[-80.905,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":601,"st":0,"bm":0},{"ddd":0,"ind":8,"ty":4,"nm":"Layer 6","parent":6,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11,"x":"var $bm_rt;\\n$bm_rt = thisComp.layer(\'Eye Opacity\').transform.opacity;"},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[254.483,0,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-94.65],[33.702,-61.862],[50.662,0],[33.741,61.933],[0,94.65],[-33.696,61.862],[-50.669,0],[-33.741,-61.933]],"o":[[0,94.65],[-33.741,61.933],[-50.669,0],[-33.696,-61.862],[0,-94.65],[33.741,-61.933],[50.662,0],[33.702,61.862]],"v":[[185.299,0],[130.694,242.099],[0,341.76],[-130.701,242.099],[-185.299,0],[-130.701,-242.099],[0,-341.76],[130.694,-242.099]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":3.84,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.082352943718,0.364705890417,0.992156863213,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":601,"st":0,"bm":0},{"ddd":0,"ind":9,"ty":4,"nm":"Layer 5","parent":5,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11,"x":"var $bm_rt;\\n$bm_rt = thisComp.layer(\'Eye Opacity\').transform.opacity;"},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-254.355,-195.245,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-44.683,0],[0,-81.98],[44.683,0],[0,81.98]],"o":[[44.683,0],[0,81.98],[-44.683,0],[0,-81.98]],"v":[[0,-148.438],[80.905,0],[0,148.438],[-80.905,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":601,"st":0,"bm":0},{"ddd":0,"ind":10,"ty":4,"nm":"Layer 4","parent":6,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11,"x":"var $bm_rt;\\n$bm_rt = thisComp.layer(\'Eye Opacity\').transform.opacity;"},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-255.021,0,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-94.65],[33.702,-61.862],[50.662,0],[33.739,61.933],[0,94.65],[-33.699,61.862],[-50.669,0],[-33.734,-61.933]],"o":[[0,94.65],[-33.734,61.933],[-50.669,0],[-33.699,-61.862],[0,-94.65],[33.739,-61.933],[50.662,0],[33.702,61.862]],"v":[[185.299,0],[130.694,242.099],[0,341.76],[-130.698,242.099],[-185.299,0],[-130.698,-242.099],[0,-341.76],[130.694,-242.099]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":3.84,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.082352943718,0.364705890417,0.992156863213,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":601,"st":0,"bm":0},{"ddd":0,"ind":14,"ty":4,"nm":"Layer 11","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[960,960,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[465.286,-145.664],[460.832,72.102],[332.493,186.496],[244.422,283.392],[145.664,465.286],[-72.102,460.832],[-186.497,332.493],[-283.398,244.422],[-465.281,145.664],[-460.838,-72.102],[-332.495,-186.497],[-244.424,-283.398],[-145.664,-465.281],[72.102,-460.838],[186.496,-332.495],[283.392,-244.424]],"o":[[465.286,145.606],[283.449,244.371],[186.547,332.442],[72.102,460.89],[-145.606,465.286],[-244.369,283.449],[-332.442,186.547],[-460.894,72.102],[-465.281,-145.606],[-283.454,-244.369],[-186.55,-332.442],[-72.102,-460.894],[145.606,-465.281],[244.371,-283.454],[332.442,-186.55],[460.89,-72.102]],"v":[[525.849,0],[436.825,183.961],[303.814,303.699],[184.019,436.825],[0,525.849],[-183.962,436.825],[-303.699,303.814],[-436.823,184.019],[-525.852,0],[-436.823,-183.962],[-303.815,-303.699],[-184.019,-436.823],[0,-525.852],[183.961,-436.823],[303.699,-303.815],[436.825,-184.019]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":601,"st":0,"bm":0},{"ddd":0,"ind":17,"ty":4,"nm":"Layer 2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[960,960,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-530.193,0],[0,-530.193],[530.193,0],[0,530.193]],"o":[[530.193,0],[0,530.193],[-530.193,0],[0,-530.193]],"v":[[0,-960],[960,0],[0,960],[-960,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.082352943718,0.364705890417,0.992156863213,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":601,"st":0,"bm":0}],"markers":[]}',
        ),
        v = JSON.parse(
          '{"v":"5.7.4","fr":60,"ip":0,"op":601,"w":1920,"h":1920,"nm":"Comp 3","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":3,"nm":"blink Opacity","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":30,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":31,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":36,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":37,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":192,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":193,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":198,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":199,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":204,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":205,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":210,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":211,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":505,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":506,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":511,"s":[100]},{"t":512,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[960,960,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"ip":0,"op":601,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Blink","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11,"x":"var $bm_rt;\\n$bm_rt = thisComp.layer(\'blink Opacity\').transform.opacity;"},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[1214.483,960,0],"ix":2,"l":2},"a":{"a":0,"k":[-2,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[422.125,63.513],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":181,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[0.462821990368,0,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.082352941176,0.364705882353,0.992156922583,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-2,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":601,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"Blink","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11,"x":"var $bm_rt;\\n$bm_rt = thisComp.layer(\'blink Opacity\').transform.opacity;"},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[704.979,960,0],"ix":2,"l":2},"a":{"a":0,"k":[-2,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[422.125,63.513],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":181,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[0.462821990368,0,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.082352941176,0.364705882353,0.992156922583,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-2,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":601,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":3,"nm":"Eye Opacity","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":30,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":31,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":36,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":37,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":192,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":193,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":198,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":199,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":204,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":205,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":210,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":211,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":505,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":506,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":511,"s":[0]},{"t":512,"s":[100]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[960,960,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"ip":0,"op":601,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":3,"nm":"Eyballs","parent":6,"sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.2,"y":1},"o":{"x":0.4,"y":0},"t":60,"s":[0,0,0],"to":[-51,42.667,0],"ti":[-5,-97.667,0]},{"i":{"x":0.2,"y":0.2},"o":{"x":0.167,"y":0.167},"t":75,"s":[-72,340,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.2,"y":1},"o":{"x":0.167,"y":0},"t":90,"s":[-72,340,0],"to":[66.667,-1,0],"ti":[-12.667,72,0]},{"i":{"x":0.2,"y":0.2},"o":{"x":0.167,"y":0.167},"t":105,"s":[112,208,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.2,"y":1},"o":{"x":0.167,"y":0},"t":149,"s":[112,208,0],"to":[-31.333,-30,0],"ti":[71.296,-55.739,0]},{"i":{"x":0.2,"y":1},"o":{"x":0.167,"y":0},"t":164,"s":[-112,208,0],"to":[-0.952,0.744,0],"ti":[-0.892,-0.482,0]},{"i":{"x":0.2,"y":1},"o":{"x":0.167,"y":0},"t":238,"s":[-112,208,0],"to":[94.138,50.825,0],"ti":[0,0,0]},{"i":{"x":0.2,"y":1},"o":{"x":0.167,"y":0},"t":253,"s":[112,208,0],"to":[0.167,1,0],"ti":[0.333,0.5,0]},{"i":{"x":0.2,"y":1},"o":{"x":0.167,"y":0},"t":283,"s":[112,208,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.2,"y":1},"o":{"x":0.167,"y":0},"t":298,"s":[48,374,0],"to":[0.667,0.5,0],"ti":[0,0,0]},{"i":{"x":0.2,"y":1},"o":{"x":0.167,"y":0},"t":375,"s":[48,374,0],"to":[-4.833,-183.5,0],"ti":[0,0,0]},{"i":{"x":0.2,"y":0.2},"o":{"x":0.167,"y":0.167},"t":390,"s":[-100,114,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.2,"y":1},"o":{"x":0.167,"y":0},"t":480,"s":[-100,114,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.2,"y":0.2},"o":{"x":0.167,"y":0.167},"t":495,"s":[-86,314,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.2,"y":1},"o":{"x":0.167,"y":0},"t":525,"s":[-86,314,0],"to":[0,0,0],"ti":[-73.074,65.833,0]},{"t":540,"s":[0,0,0]}],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"ip":0,"op":601,"st":0,"bm":0},{"ddd":0,"ind":6,"ty":3,"nm":"Scale","sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[960,760,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[89,89,100],"ix":6,"l":2}},"ao":0,"ip":0,"op":601,"st":0,"bm":0},{"ddd":0,"ind":7,"ty":4,"nm":"Layer 7","parent":5,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11,"x":"var $bm_rt;\\n$bm_rt = thisComp.layer(\'Eye Opacity\').transform.opacity;"},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[253.811,-195.245,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-44.683,0],[0,-81.98],[44.683,0],[0,81.98]],"o":[[44.683,0],[0,81.98],[-44.683,0],[0,-81.98]],"v":[[0,-148.438],[80.905,0],[0,148.438],[-80.905,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":601,"st":0,"bm":0},{"ddd":0,"ind":8,"ty":4,"nm":"Layer 6","parent":6,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11,"x":"var $bm_rt;\\n$bm_rt = thisComp.layer(\'Eye Opacity\').transform.opacity;"},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[254.483,0,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-94.65],[33.702,-61.862],[50.662,0],[33.741,61.933],[0,94.65],[-33.696,61.862],[-50.669,0],[-33.741,-61.933]],"o":[[0,94.65],[-33.741,61.933],[-50.669,0],[-33.696,-61.862],[0,-94.65],[33.741,-61.933],[50.662,0],[33.702,61.862]],"v":[[185.299,0],[130.694,242.099],[0,341.76],[-130.701,242.099],[-185.299,0],[-130.701,-242.099],[0,-341.76],[130.694,-242.099]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":3.84,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.082352943718,0.364705890417,0.992156863213,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":601,"st":0,"bm":0},{"ddd":0,"ind":9,"ty":4,"nm":"Layer 5","parent":5,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11,"x":"var $bm_rt;\\n$bm_rt = thisComp.layer(\'Eye Opacity\').transform.opacity;"},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-254.355,-195.245,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-44.683,0],[0,-81.98],[44.683,0],[0,81.98]],"o":[[44.683,0],[0,81.98],[-44.683,0],[0,-81.98]],"v":[[0,-148.438],[80.905,0],[0,148.438],[-80.905,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":601,"st":0,"bm":0},{"ddd":0,"ind":10,"ty":4,"nm":"Layer 4","parent":6,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11,"x":"var $bm_rt;\\n$bm_rt = thisComp.layer(\'Eye Opacity\').transform.opacity;"},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-255.021,0,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-94.65],[33.702,-61.862],[50.662,0],[33.739,61.933],[0,94.65],[-33.699,61.862],[-50.669,0],[-33.734,-61.933]],"o":[[0,94.65],[-33.734,61.933],[-50.669,0],[-33.699,-61.862],[0,-94.65],[33.739,-61.933],[50.662,0],[33.702,61.862]],"v":[[185.299,0],[130.694,242.099],[0,341.76],[-130.698,242.099],[-185.299,0],[-130.698,-242.099],[0,-341.76],[130.694,-242.099]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":3.84,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.082352943718,0.364705890417,0.992156863213,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":601,"st":0,"bm":0},{"ddd":0,"ind":15,"ty":4,"nm":"Layer 9","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[959.68,959.68,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[166.656,68.864],[31.392,16.666],[-14.726,35.537],[166.566,-69.132],[33.946,-10.317],[14.727,35.536],[68.864,-166.658],[16.666,-31.392],[35.537,14.726],[-69.132,-166.569],[-10.317,-33.946],[35.536,-14.726],[-166.658,-68.87],[-31.392,-16.666],[14.726,-35.539],[-166.569,69.126],[-33.946,10.317],[-14.726,-35.539],[-68.87,166.656],[-16.666,31.392],[-35.539,-14.726],[69.126,166.566],[10.317,33.946],[-35.539,14.727]],"o":[[-35.539,-14.726],[10.406,-33.946],[69.126,-166.569],[-35.539,14.726],[-16.666,-31.304],[-68.87,-166.658],[-14.726,35.536],[-33.946,-10.405],[-166.569,-69.132],[14.726,35.537],[-31.304,16.666],[-166.658,68.864],[35.536,14.727],[-10.405,33.946],[-69.132,166.566],[35.537,-14.726],[16.666,31.302],[68.864,166.656],[14.727,-35.539],[33.946,10.406],[166.566,69.126],[-14.726,-35.539],[31.302,-16.666],[166.656,-68.87]],"v":[[665.088,-186.982],[564.915,-233.984],[602.483,-338.033],[338.035,-602.48],[233.984,-564.916],[186.982,-665.087],[-186.982,-665.087],[-233.984,-564.916],[-338.033,-602.48],[-602.48,-338.033],[-564.916,-233.984],[-665.087,-186.982],[-665.087,186.982],[-564.916,233.984],[-602.48,338.035],[-338.033,602.483],[-233.984,564.915],[-186.982,665.088],[186.982,665.088],[233.984,564.915],[338.035,602.483],[602.483,338.035],[564.915,233.984],[665.088,186.982]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":601,"st":0,"bm":0},{"ddd":0,"ind":17,"ty":4,"nm":"Layer 2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[960,960,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-530.193,0],[0,-530.193],[530.193,0],[0,530.193]],"o":[[530.193,0],[0,530.193],[-530.193,0],[0,-530.193]],"v":[[0,-960],[960,0],[0,960],[-960,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.082352943718,0.364705890417,0.992156863213,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":601,"st":0,"bm":0}],"markers":[]}',
        ),
        g = JSON.parse(
          '{"v":"5.7.4","fr":60,"ip":0,"op":601,"w":1920,"h":1920,"nm":"Comp 3","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":3,"nm":"blink Opacity","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":30,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":31,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":36,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":37,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":192,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":193,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":198,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":199,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":204,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":205,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":210,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":211,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":505,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":506,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":511,"s":[100]},{"t":512,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[960,960,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"ip":0,"op":601,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Blink","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11,"x":"var $bm_rt;\\n$bm_rt = thisComp.layer(\'blink Opacity\').transform.opacity;"},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[1214.483,960,0],"ix":2,"l":2},"a":{"a":0,"k":[-2,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[422.125,63.513],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":181,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[0.462821990368,0,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.082352941176,0.364705882353,0.992156922583,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-2,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":601,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"Blink","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11,"x":"var $bm_rt;\\n$bm_rt = thisComp.layer(\'blink Opacity\').transform.opacity;"},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[704.979,960,0],"ix":2,"l":2},"a":{"a":0,"k":[-2,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[422.125,63.513],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":181,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[0.462821990368,0,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.082352941176,0.364705882353,0.992156922583,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-2,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":601,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":3,"nm":"Eye Opacity","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":30,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":31,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":36,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":37,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":192,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":193,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":198,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":199,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":204,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":205,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":210,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":211,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":505,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":506,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":511,"s":[0]},{"t":512,"s":[100]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[960,960,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"ip":0,"op":601,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":3,"nm":"Eyballs","parent":6,"sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.2,"y":1},"o":{"x":0.4,"y":0},"t":60,"s":[0,0,0],"to":[-51,42.667,0],"ti":[-5,-97.667,0]},{"i":{"x":0.2,"y":0.2},"o":{"x":0.167,"y":0.167},"t":75,"s":[-72,340,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.2,"y":1},"o":{"x":0.167,"y":0},"t":90,"s":[-72,340,0],"to":[66.667,-1,0],"ti":[-12.667,72,0]},{"i":{"x":0.2,"y":0.2},"o":{"x":0.167,"y":0.167},"t":105,"s":[112,208,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.2,"y":1},"o":{"x":0.167,"y":0},"t":149,"s":[112,208,0],"to":[-31.333,-30,0],"ti":[71.296,-55.739,0]},{"i":{"x":0.2,"y":1},"o":{"x":0.167,"y":0},"t":164,"s":[-112,208,0],"to":[-0.952,0.744,0],"ti":[-0.892,-0.482,0]},{"i":{"x":0.2,"y":1},"o":{"x":0.167,"y":0},"t":238,"s":[-112,208,0],"to":[94.138,50.825,0],"ti":[0,0,0]},{"i":{"x":0.2,"y":1},"o":{"x":0.167,"y":0},"t":253,"s":[112,208,0],"to":[0.167,1,0],"ti":[0.333,0.5,0]},{"i":{"x":0.2,"y":1},"o":{"x":0.167,"y":0},"t":283,"s":[112,208,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.2,"y":1},"o":{"x":0.167,"y":0},"t":298,"s":[48,374,0],"to":[0.667,0.5,0],"ti":[0,0,0]},{"i":{"x":0.2,"y":1},"o":{"x":0.167,"y":0},"t":375,"s":[48,374,0],"to":[-4.833,-183.5,0],"ti":[0,0,0]},{"i":{"x":0.2,"y":0.2},"o":{"x":0.167,"y":0.167},"t":390,"s":[-100,114,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.2,"y":1},"o":{"x":0.167,"y":0},"t":480,"s":[-100,114,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.2,"y":0.2},"o":{"x":0.167,"y":0.167},"t":495,"s":[-86,314,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.2,"y":1},"o":{"x":0.167,"y":0},"t":525,"s":[-86,314,0],"to":[0,0,0],"ti":[-73.074,65.833,0]},{"t":540,"s":[0,0,0]}],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"ip":0,"op":601,"st":0,"bm":0},{"ddd":0,"ind":6,"ty":3,"nm":"Scale","sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[960,960,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[89,89,100],"ix":6,"l":2}},"ao":0,"ip":0,"op":601,"st":0,"bm":0},{"ddd":0,"ind":7,"ty":4,"nm":"Layer 7","parent":5,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11,"x":"var $bm_rt;\\n$bm_rt = thisComp.layer(\'Eye Opacity\').transform.opacity;"},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[253.811,-195.245,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-44.683,0],[0,-81.98],[44.683,0],[0,81.98]],"o":[[44.683,0],[0,81.98],[-44.683,0],[0,-81.98]],"v":[[0,-148.438],[80.905,0],[0,148.438],[-80.905,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":601,"st":0,"bm":0},{"ddd":0,"ind":8,"ty":4,"nm":"Layer 6","parent":6,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11,"x":"var $bm_rt;\\n$bm_rt = thisComp.layer(\'Eye Opacity\').transform.opacity;"},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[254.483,0,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-94.65],[33.702,-61.862],[50.662,0],[33.741,61.933],[0,94.65],[-33.696,61.862],[-50.669,0],[-33.741,-61.933]],"o":[[0,94.65],[-33.741,61.933],[-50.669,0],[-33.696,-61.862],[0,-94.65],[33.741,-61.933],[50.662,0],[33.702,61.862]],"v":[[185.299,0],[130.694,242.099],[0,341.76],[-130.701,242.099],[-185.299,0],[-130.701,-242.099],[0,-341.76],[130.694,-242.099]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":3.84,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.082352943718,0.364705890417,0.992156863213,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":601,"st":0,"bm":0},{"ddd":0,"ind":9,"ty":4,"nm":"Layer 5","parent":5,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11,"x":"var $bm_rt;\\n$bm_rt = thisComp.layer(\'Eye Opacity\').transform.opacity;"},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-254.355,-195.245,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-44.683,0],[0,-81.98],[44.683,0],[0,81.98]],"o":[[44.683,0],[0,81.98],[-44.683,0],[0,-81.98]],"v":[[0,-148.438],[80.905,0],[0,148.438],[-80.905,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":601,"st":0,"bm":0},{"ddd":0,"ind":10,"ty":4,"nm":"Layer 4","parent":6,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11,"x":"var $bm_rt;\\n$bm_rt = thisComp.layer(\'Eye Opacity\').transform.opacity;"},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-255.021,0,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-94.65],[33.702,-61.862],[50.662,0],[33.739,61.933],[0,94.65],[-33.699,61.862],[-50.669,0],[-33.734,-61.933]],"o":[[0,94.65],[-33.734,61.933],[-50.669,0],[-33.699,-61.862],[0,-94.65],[33.739,-61.933],[50.662,0],[33.702,61.862]],"v":[[185.299,0],[130.694,242.099],[0,341.76],[-130.698,242.099],[-185.299,0],[-130.698,-242.099],[0,-341.76],[130.694,-242.099]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":3.84,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.082352943718,0.364705890417,0.992156863213,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":601,"st":0,"bm":0},{"ddd":0,"ind":11,"ty":4,"nm":"Layer 1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[960,960,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0.212,0.233],[0,0],[0.22,0.199],[-0.046,0.053],[-0.203,-0.223],[0,0],[-0.237,-0.215],[0.056,-0.049]],"o":[[0,0],[-0.22,-0.2],[0.046,-0.053],[0.203,0.223],[0,0],[0.237,0.215],[-0.056,0.049],[-0.211,-0.233]],"v":[[-0.013,0.006],[0.038,0],[-0.621,-0.595],[-0.483,-0.753],[0.122,-0.083],[0.077,-0.083],[0.787,0.557],[0.618,0.705]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[66.739,39.93],[1.303,0.804],[-5.172,3.245],[3.322,32.864],[60.838,6.464],[131.366,138.048],[13.152,120.81],[34.438,2.735],[40.141,-66.859],[3.123,-5.267],[0.804,1.286],[32.877,-3.43],[6.688,-60.89],[138.484,-131.824],[120.865,-13.536],[2.845,-34.445],[-64.505,-39.626],[-3.064,-30.296],[-60.84,-6.47],[-131.371,-138.054],[-13.152,-120.806],[-34.432,-2.739],[-38.448,56.676],[-32.335,3.374],[-6.662,60.87],[-138.49,131.834],[-120.864,13.542],[-2.848,34.445]],"o":[[-1.298,-0.812],[5.262,-3.12],[66.861,-40.141],[-2.713,-34.406],[-120.838,-13.178],[-138.054,-131.373],[-6.585,-60.863],[-32.838,-3.348],[-3.248,5.177],[-0.797,-1.292],[-39.936,-66.737],[-34.445,2.845],[-13.568,120.888],[-131.827,138.49],[-60.89,6.784],[-3.396,32.307],[-56.658,38.439],[2.711,34.413],[120.834,13.171],[138.054,131.373],[6.585,60.864],[30.276,3.086],[39.633,64.512],[34.426,-2.823],[13.568,-120.89],[131.833,-138.49],[60.89,-6.784],[3.45,-32.851]],"v":[[772.301,10.528],[768.393,8.114],[784.051,-1.427],[879.955,-125.69],[777.977,-182.605],[314.24,-314.195],[182.72,-777.912],[125.702,-879.937],[1.466,-784.058],[-8.084,-768.384],[-10.477,-772.256],[-134.445,-867.77],[-191.693,-765.553],[-324.781,-301.35],[-788.964,-168.333],[-891.181,-110.989],[-798.955,10.951],[-879.841,125.606],[-777.862,182.528],[-314.125,314.118],[-182.605,777.83],[-125.594,879.859],[-10.942,798.967],[111.034,891.232],[168.288,789.056],[301.383,324.845],[765.574,191.821],[867.795,134.47]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":601,"st":0,"bm":0},{"ddd":0,"ind":18,"ty":4,"nm":"Layer 2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[960,960,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-530.193,0],[0,-530.193],[530.193,0],[0,530.193]],"o":[[530.193,0],[0,530.193],[-530.193,0],[0,-530.193]],"v":[[0,-960],[960,0],[0,960],[-960,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.082352943718,0.364705890417,0.992156863213,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":601,"st":0,"bm":0}],"markers":[]}',
        ),
        E = a(94727),
        A = a(74617),
        w = a(73987),
        D = a(66098),
        B = a(49290),
        G = a(11130),
        _ = a(86322),
        R = a(55785),
        V = a(68571);
      new R.i({
        pinataJwt: "".concat(V.env.PINATA_API_KEY),
        pinataGateway: "".concat(V.env.PINATA_GATEWAY_URL),
      });
      a(50332), a(99027);
      const O = [
          "image/svg+xml",
          "image/png",
          "image/jpeg",
          "image/webp",
          "image/gif",
        ],
        S = 1;
      const F = 200,
        C = 100;
      var M;
      !(function (e) {
        (e.Description = "description"),
          (e.Keywords = "keywords"),
          (e.Url = "url"),
          (e.Url2 = "url2"),
          (e.Url3 = "url3"),
          (e.Email = "email"),
          (e.Phone = "phone"),
          (e.Avatar = "avatar"),
          (e.Location = "location"),
          (e.Github = "com.github"),
          (e.Twitter = "com.twitter"),
          (e.Farcaster = "xyz.farcaster"),
          (e.Lens = "xyz.lens"),
          (e.Telegram = "org.telegram"),
          (e.Discord = "com.discord"),
          (e.Frames = "frames"),
          (e.Casts = "casts");
      })(M || (M = {}));
      const L = [
          "com.twitter",
          "xyz.farcaster",
          "com.github",
          "url",
          "url2",
          "url3",
        ],
        N = {
          "com.twitter": "twitter",
          "xyz.farcaster": "farcaster",
          "com.github": "github",
          url: "website",
          url2: "website",
          url3: "website",
        },
        P = (e) => {
          let t = e;
          try {
            const e = new URL(t);
            e.pathname && (t = e.pathname.replace(/\//g, ""));
          } catch (a) {}
          return t.startsWith("@") && (t = t.substring(1)), t;
        },
        I = (e, t) => {
          switch (e) {
            case "com.twitter":
              return "https://x.com/".concat(P(t));
            case "xyz.farcaster":
              return "https://warpcast.com/".concat(P(t));
            case "com.github":
              return "https://github.com/".concat(P(t));
            case "url":
            case "url2":
            case "url3":
              return /^https?:\/\//i.test(t) ? t : "https://".concat(t);
            default:
              return "";
          }
        },
        $ = (e, t) => {
          switch (e) {
            case "com.twitter":
            case "xyz.farcaster":
            case "com.github":
              return P(t);
            case "url":
            case "url2":
            case "url3":
              return t.replace(/^https?:\/\//, "").replace(/\/$/, "");
            default:
              return "";
          }
        },
        U = [
          "description",
          "keywords",
          "url",
          "url2",
          "url3",
          "com.github",
          "email",
          "phone",
          "location",
          "com.twitter",
          "xyz.farcaster",
          "xyz.lens",
          "org.telegram",
          "com.discord",
          "avatar",
          "frames",
          "casts",
        ],
        H = {
          description: "Bio",
          keywords: "Skills",
          url: "Website",
          url2: "Website",
          url3: "Website",
          "com.github": "Github",
          email: "Email",
          phone: "Phone",
          location: "Location",
          "com.twitter": "Twitter / X",
          "xyz.farcaster": "Farcaster",
          "xyz.lens": "Lens",
          "org.telegram": "Telegram",
          "com.discord": "Discord",
          avatar: "Avatar",
          frames: "Frames",
          casts: "Pinned Casts",
        },
        j = {
          description: "Tell us about yourself",
          keywords: "Skills",
          url: "www.name.com",
          url2: "www.thingyoubuilt.com",
          url3: "www.workyoureproudof.com",
          "com.github": "Username",
          email: "Personal email",
          phone: "+1 415 ..",
          location: "New York, NY, USA",
          "com.twitter": "Username",
          "xyz.farcaster": "Username",
          "xyz.lens": "name.lens",
          "org.telegram": "Username",
          "com.discord": "Username",
          avatar: "Avatar",
          frames: "Farcaster frame url",
          casts: "https://warpcast.com/...",
        },
        W = [
          "Solidity",
          "Rust",
          "Security",
          "Javascript",
          "Typescript",
          "Go",
          "Game development",
          "Data",
        ],
        z = [
          "UI/UX",
          "Prototyping",
          "Research",
          "Music",
          "Illustration",
          "Writing",
          "Video",
          "Graphic design",
          "Animation",
          "Visual design",
          "Design",
          "Digital art",
          "Photography",
        ],
        Z = [
          "Community",
          "Product management",
          "Strategy",
          "Business development",
          "Legal",
          "Marketing",
        ],
        q = [...W, ...z, ...Z],
        K = (e) => {
          const t = [...e].length;
          if (t > 20) return { valid: !1, message: "Name is too long" };
          if (t < 3) return { valid: !1, message: "Name is too short" };
          try {
            const t = (0, r.F)(e);
            return "string" === typeof t
              ? { valid: !0, message: "Valid name" }
              : { valid: !1, message: "Name is invalid" };
          } catch (a) {
            return a instanceof Error
              ? { valid: !1, message: a.message }
              : { valid: !1, message: "Name is invalid" };
          }
        },
        J = (e) => {
          try {
            return (0, r.F)(e);
          } catch (t) {
            try {
              return (0, r.F)(
                ((e) => e.replace(/[^a-zA-Z0-9\xc0-\xff-]/g, ""))(e),
              );
            } catch (a) {
              return "";
            }
          }
        },
        Y = { [d.L.id]: "basetest.eth", [m.u.id]: "base.eth" },
        X = (e, t) => {
          var a;
          return ""
            .concat(e, ".")
            .concat(null !== (a = Y[t]) && void 0 !== a ? a : ".base.eth")
            .toLocaleLowerCase();
        };
      var Q;
      function ee(e) {
        return Object.values(Q).includes(e);
      }
      function te(e) {
        return e.endsWith(".".concat(Y[m.u.id])) ? m.u : d.L;
      }
      !(function (e) {
        (e.EARLY_ACCESS = "EARLY_ACCESS"),
          (e.CBID = "CBID"),
          (e.CB1 = "CB1"),
          (e.COINBASE_VERIFIED_ACCOUNT = "COINBASE_VERIFIED_ACCOUNT"),
          (e.BASE_BUILDATHON_PARTICIPANT = "BASE_BUILDATHON_PARTICIPANT"),
          (e.SUMMER_PASS_LVL_3 = "SUMMER_PASS_LVL_3"),
          (e.BNS_NAME = "BNS_NAME"),
          (e.BASE_DOT_ETH_NFT = "BASE_DOT_ETH_NFT"),
          (e.DISCOUNT_CODE = "DISCOUNT_CODE"),
          (e.TALENT_PROTOCOL = "TALENT_PROTOCOL"),
          (e.BASE_WORLD = "BASE_WORLD"),
          (e.DEVCON = "DEVCON");
      })(Q || (Q = {}));
      const ae = (e) => {
          const t = e
            .replace(".".concat(Y[m.u.id]), "")
            .replace(".".concat(Y[d.L.id]), "");
          return BigInt((0, n.d)(t));
        },
        ne = (e) =>
          !!e.endsWith(".".concat(Y[d.L.id])) ||
          !!e.endsWith(".".concat(Y[m.u.id])),
        ie = (e) => !!e.endsWith(".eth") || !!e.endsWith(".box"),
        se = (e) => {
          if (e)
            try {
              const t = new URL(e);
              if ("https:" === t.protocol) return e;
              if ("ipfs:" === t.protocol) return (0, u.t$)(e);
            } catch (t) {
              return;
            }
        };
      function re(e) {
        if (!O.includes(e.type))
          return {
            valid: !1,
            message: "Only supported image are PNG, SVG, JPEG & WebP",
          };
        return e.size / 1048576 > S
          ? { valid: !1, message: "Max image size is 1Mb" }
          : { valid: !0, message: "Valid avatar file" };
      }
      function ye(e) {
        try {
          const t = new URL(e);
          if ("ipfs:" === t.protocol) {
            const t = (0, u.aK)(e);
            return {
              valid: t,
              message: t ? "Valid IPFS URL" : "Invalid IPFS URL",
            };
          }
          if ("https:" === t.protocol) {
            const t = (0, u.s7)(e);
            return { valid: t, message: t ? "Valid URL" : "Invalid URL" };
          }
          return (
            t.protocol, { valid: !1, message: "Only IPFS URL are allowed" }
          );
        } catch (t) {
          return { valid: !1, message: "Only IPFS URL are allowed" };
        }
      }
      function oe(e) {
        const t = te(e);
        return {
          abi: p,
          address: x.kx[t.id],
          args: [(0, i.V)(e)],
          functionName: "owner",
        };
      }
      function pe(e) {
        const t = te(e),
          a = ae(e);
        return {
          abi: l.Z,
          address: x.Du[t.id],
          args: [a],
          functionName: "ownerOf",
        };
      }
      function le(e, t) {
        const a = te(e);
        return {
          abi: o.Z,
          address: x.m3[a.id],
          args: [(0, i.V)(e), t],
          functionName: "text",
        };
      }
      async function de(e) {
        const t = te(e);
        try {
          const a = U.map((t) => le(e, t)),
            n = (0, c.Z6)(t.id);
          return await n.multicall({ contracts: a });
        } catch (a) {}
      }
      function me(e, t) {
        const a = te(e),
          n = ae(e);
        return {
          abi: l.Z,
          address: x.Du[a.id],
          args: [n, t],
          functionName: "reclaim",
        };
      }
      const xe = (e, t) => {
          const a = Uint8Array.from(e.split("").map((e) => e.charCodeAt(0))),
            n = (0, s.J)(a);
          return parseInt(n, 16) % t;
        },
        ue = (e) => {
          const t = [k, b, h, f, T, v, g];
          return t[xe(e, t.length)];
        },
        ce = (e) => {
          const t = [
            E.default,
            A.default,
            w.default,
            D.default,
            B.default,
            G.default,
            _.default,
          ];
          return t[xe(e, t.length)];
        },
        ke = !1,
        be = !1,
        he = ke
          ? [
              {
                inputs: [
                  {
                    internalType: "contract BaseRegistrar",
                    name: "base_",
                    type: "address",
                  },
                  {
                    internalType: "contract IPriceOracle",
                    name: "prices_",
                    type: "address",
                  },
                  {
                    internalType: "contract IReverseRegistrar",
                    name: "reverseRegistrar_",
                    type: "address",
                  },
                  { internalType: "address", name: "owner_", type: "address" },
                  {
                    internalType: "bytes32",
                    name: "rootNode_",
                    type: "bytes32",
                  },
                  { internalType: "string", name: "rootName_", type: "string" },
                  {
                    internalType: "address",
                    name: "paymentReceiver_",
                    type: "address",
                  },
                ],
                stateMutability: "nonpayable",
                type: "constructor",
              },
              {
                inputs: [
                  { internalType: "address", name: "target", type: "address" },
                ],
                name: "AddressEmptyCode",
                type: "error",
              },
              {
                inputs: [
                  { internalType: "address", name: "account", type: "address" },
                ],
                name: "AddressInsufficientBalance",
                type: "error",
              },
              { inputs: [], name: "AlreadyInitialized", type: "error" },
              {
                inputs: [
                  { internalType: "address", name: "sender", type: "address" },
                ],
                name: "AlreadyRegisteredWithDiscount",
                type: "error",
              },
              {
                inputs: [
                  {
                    internalType: "uint256",
                    name: "duration",
                    type: "uint256",
                  },
                ],
                name: "DurationTooShort",
                type: "error",
              },
              { inputs: [], name: "FailedInnerCall", type: "error" },
              {
                inputs: [
                  { internalType: "bytes32", name: "key", type: "bytes32" },
                ],
                name: "InactiveDiscount",
                type: "error",
              },
              { inputs: [], name: "InsufficientValue", type: "error" },
              {
                inputs: [
                  { internalType: "bytes32", name: "key", type: "bytes32" },
                  { internalType: "bytes", name: "data", type: "bytes" },
                ],
                name: "InvalidDiscount",
                type: "error",
              },
              {
                inputs: [
                  { internalType: "bytes32", name: "key", type: "bytes32" },
                ],
                name: "InvalidDiscountAmount",
                type: "error",
              },
              { inputs: [], name: "InvalidPaymentReceiver", type: "error" },
              {
                inputs: [
                  { internalType: "bytes32", name: "key", type: "bytes32" },
                  {
                    internalType: "address",
                    name: "validator",
                    type: "address",
                  },
                ],
                name: "InvalidValidator",
                type: "error",
              },
              {
                inputs: [
                  { internalType: "string", name: "name", type: "string" },
                ],
                name: "NameNotAvailable",
                type: "error",
              },
              { inputs: [], name: "NewOwnerIsZeroAddress", type: "error" },
              { inputs: [], name: "NoHandoverRequest", type: "error" },
              {
                inputs: [],
                name: "ResolverRequiredWhenDataSupplied",
                type: "error",
              },
              {
                inputs: [
                  { internalType: "address", name: "token", type: "address" },
                ],
                name: "SafeERC20FailedOperation",
                type: "error",
              },
              { inputs: [], name: "TransferFailed", type: "error" },
              { inputs: [], name: "Unauthorized", type: "error" },
              {
                anonymous: !1,
                inputs: [
                  {
                    indexed: !0,
                    internalType: "address",
                    name: "registrant",
                    type: "address",
                  },
                  {
                    indexed: !0,
                    internalType: "bytes32",
                    name: "discountKey",
                    type: "bytes32",
                  },
                ],
                name: "DiscountApplied",
                type: "event",
              },
              {
                anonymous: !1,
                inputs: [
                  {
                    indexed: !0,
                    internalType: "bytes32",
                    name: "discountKey",
                    type: "bytes32",
                  },
                  {
                    components: [
                      { internalType: "bool", name: "active", type: "bool" },
                      {
                        internalType: "address",
                        name: "discountValidator",
                        type: "address",
                      },
                      { internalType: "bytes32", name: "key", type: "bytes32" },
                      {
                        internalType: "uint256",
                        name: "discount",
                        type: "uint256",
                      },
                    ],
                    indexed: !1,
                    internalType:
                      "struct EARegistrarController.DiscountDetails",
                    name: "details",
                    type: "tuple",
                  },
                ],
                name: "DiscountUpdated",
                type: "event",
              },
              {
                anonymous: !1,
                inputs: [
                  {
                    indexed: !0,
                    internalType: "address",
                    name: "payee",
                    type: "address",
                  },
                  {
                    indexed: !1,
                    internalType: "uint256",
                    name: "price",
                    type: "uint256",
                  },
                ],
                name: "ETHPaymentProcessed",
                type: "event",
              },
              {
                anonymous: !1,
                inputs: [
                  {
                    indexed: !1,
                    internalType: "string",
                    name: "name",
                    type: "string",
                  },
                  {
                    indexed: !0,
                    internalType: "bytes32",
                    name: "label",
                    type: "bytes32",
                  },
                  {
                    indexed: !0,
                    internalType: "address",
                    name: "owner",
                    type: "address",
                  },
                  {
                    indexed: !1,
                    internalType: "uint256",
                    name: "expires",
                    type: "uint256",
                  },
                ],
                name: "NameRegistered",
                type: "event",
              },
              {
                anonymous: !1,
                inputs: [
                  {
                    indexed: !0,
                    internalType: "address",
                    name: "pendingOwner",
                    type: "address",
                  },
                ],
                name: "OwnershipHandoverCanceled",
                type: "event",
              },
              {
                anonymous: !1,
                inputs: [
                  {
                    indexed: !0,
                    internalType: "address",
                    name: "pendingOwner",
                    type: "address",
                  },
                ],
                name: "OwnershipHandoverRequested",
                type: "event",
              },
              {
                anonymous: !1,
                inputs: [
                  {
                    indexed: !0,
                    internalType: "address",
                    name: "oldOwner",
                    type: "address",
                  },
                  {
                    indexed: !0,
                    internalType: "address",
                    name: "newOwner",
                    type: "address",
                  },
                ],
                name: "OwnershipTransferred",
                type: "event",
              },
              {
                anonymous: !1,
                inputs: [
                  {
                    indexed: !1,
                    internalType: "address",
                    name: "newPaymentReceiver",
                    type: "address",
                  },
                ],
                name: "PaymentReceiverUpdated",
                type: "event",
              },
              {
                anonymous: !1,
                inputs: [
                  {
                    indexed: !1,
                    internalType: "address",
                    name: "newPrices",
                    type: "address",
                  },
                ],
                name: "PriceOracleUpdated",
                type: "event",
              },
              {
                anonymous: !1,
                inputs: [
                  {
                    indexed: !1,
                    internalType: "address",
                    name: "newReverseRegistrar",
                    type: "address",
                  },
                ],
                name: "ReverseRegistrarUpdated",
                type: "event",
              },
              {
                inputs: [],
                name: "MIN_NAME_LENGTH",
                outputs: [
                  { internalType: "uint256", name: "", type: "uint256" },
                ],
                stateMutability: "view",
                type: "function",
              },
              {
                inputs: [],
                name: "MIN_REGISTRATION_DURATION",
                outputs: [
                  { internalType: "uint256", name: "", type: "uint256" },
                ],
                stateMutability: "view",
                type: "function",
              },
              {
                inputs: [
                  { internalType: "string", name: "name", type: "string" },
                ],
                name: "available",
                outputs: [{ internalType: "bool", name: "", type: "bool" }],
                stateMutability: "view",
                type: "function",
              },
              {
                inputs: [],
                name: "cancelOwnershipHandover",
                outputs: [],
                stateMutability: "payable",
                type: "function",
              },
              {
                inputs: [
                  {
                    internalType: "address",
                    name: "pendingOwner",
                    type: "address",
                  },
                ],
                name: "completeOwnershipHandover",
                outputs: [],
                stateMutability: "payable",
                type: "function",
              },
              {
                inputs: [
                  {
                    components: [
                      { internalType: "string", name: "name", type: "string" },
                      {
                        internalType: "address",
                        name: "owner",
                        type: "address",
                      },
                      {
                        internalType: "uint256",
                        name: "duration",
                        type: "uint256",
                      },
                      {
                        internalType: "address",
                        name: "resolver",
                        type: "address",
                      },
                      {
                        internalType: "bytes[]",
                        name: "data",
                        type: "bytes[]",
                      },
                      {
                        internalType: "bool",
                        name: "reverseRecord",
                        type: "bool",
                      },
                    ],
                    internalType:
                      "struct EARegistrarController.RegisterRequest",
                    name: "request",
                    type: "tuple",
                  },
                  {
                    internalType: "bytes32",
                    name: "discountKey",
                    type: "bytes32",
                  },
                  {
                    internalType: "bytes",
                    name: "validationData",
                    type: "bytes",
                  },
                ],
                name: "discountedRegister",
                outputs: [],
                stateMutability: "payable",
                type: "function",
              },
              {
                inputs: [
                  { internalType: "string", name: "name", type: "string" },
                  {
                    internalType: "uint256",
                    name: "duration",
                    type: "uint256",
                  },
                  {
                    internalType: "bytes32",
                    name: "discountKey",
                    type: "bytes32",
                  },
                ],
                name: "discountedRegisterPrice",
                outputs: [
                  { internalType: "uint256", name: "price", type: "uint256" },
                ],
                stateMutability: "view",
                type: "function",
              },
              {
                inputs: [
                  {
                    internalType: "address",
                    name: "registrant",
                    type: "address",
                  },
                ],
                name: "discountedRegistrants",
                outputs: [
                  {
                    internalType: "bool",
                    name: "hasRegisteredWithDiscount",
                    type: "bool",
                  },
                ],
                stateMutability: "view",
                type: "function",
              },
              {
                inputs: [
                  { internalType: "bytes32", name: "key", type: "bytes32" },
                ],
                name: "discounts",
                outputs: [
                  { internalType: "bool", name: "active", type: "bool" },
                  {
                    internalType: "address",
                    name: "discountValidator",
                    type: "address",
                  },
                  { internalType: "bytes32", name: "key", type: "bytes32" },
                  {
                    internalType: "uint256",
                    name: "discount",
                    type: "uint256",
                  },
                ],
                stateMutability: "view",
                type: "function",
              },
              {
                inputs: [],
                name: "getActiveDiscounts",
                outputs: [
                  {
                    components: [
                      { internalType: "bool", name: "active", type: "bool" },
                      {
                        internalType: "address",
                        name: "discountValidator",
                        type: "address",
                      },
                      { internalType: "bytes32", name: "key", type: "bytes32" },
                      {
                        internalType: "uint256",
                        name: "discount",
                        type: "uint256",
                      },
                    ],
                    internalType:
                      "struct EARegistrarController.DiscountDetails[]",
                    name: "",
                    type: "tuple[]",
                  },
                ],
                stateMutability: "view",
                type: "function",
              },
              {
                inputs: [
                  {
                    internalType: "address[]",
                    name: "addresses",
                    type: "address[]",
                  },
                ],
                name: "hasRegisteredWithDiscount",
                outputs: [{ internalType: "bool", name: "", type: "bool" }],
                stateMutability: "view",
                type: "function",
              },
              {
                inputs: [],
                name: "owner",
                outputs: [
                  { internalType: "address", name: "result", type: "address" },
                ],
                stateMutability: "view",
                type: "function",
              },
              {
                inputs: [
                  {
                    internalType: "address",
                    name: "pendingOwner",
                    type: "address",
                  },
                ],
                name: "ownershipHandoverExpiresAt",
                outputs: [
                  { internalType: "uint256", name: "result", type: "uint256" },
                ],
                stateMutability: "view",
                type: "function",
              },
              {
                inputs: [],
                name: "paymentReceiver",
                outputs: [
                  { internalType: "address", name: "", type: "address" },
                ],
                stateMutability: "view",
                type: "function",
              },
              {
                inputs: [],
                name: "prices",
                outputs: [
                  {
                    internalType: "contract IPriceOracle",
                    name: "",
                    type: "address",
                  },
                ],
                stateMutability: "view",
                type: "function",
              },
              {
                inputs: [
                  { internalType: "address", name: "_token", type: "address" },
                  { internalType: "address", name: "_to", type: "address" },
                  { internalType: "uint256", name: "_amount", type: "uint256" },
                ],
                name: "recoverFunds",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function",
              },
              {
                inputs: [
                  { internalType: "string", name: "name", type: "string" },
                  {
                    internalType: "uint256",
                    name: "duration",
                    type: "uint256",
                  },
                ],
                name: "registerPrice",
                outputs: [
                  { internalType: "uint256", name: "", type: "uint256" },
                ],
                stateMutability: "view",
                type: "function",
              },
              {
                inputs: [],
                name: "renounceOwnership",
                outputs: [],
                stateMutability: "payable",
                type: "function",
              },
              {
                inputs: [
                  { internalType: "string", name: "name", type: "string" },
                  {
                    internalType: "uint256",
                    name: "duration",
                    type: "uint256",
                  },
                ],
                name: "rentPrice",
                outputs: [
                  {
                    components: [
                      {
                        internalType: "uint256",
                        name: "base",
                        type: "uint256",
                      },
                      {
                        internalType: "uint256",
                        name: "premium",
                        type: "uint256",
                      },
                    ],
                    internalType: "struct IPriceOracle.Price",
                    name: "price",
                    type: "tuple",
                  },
                ],
                stateMutability: "view",
                type: "function",
              },
              {
                inputs: [],
                name: "requestOwnershipHandover",
                outputs: [],
                stateMutability: "payable",
                type: "function",
              },
              {
                inputs: [],
                name: "reverseRegistrar",
                outputs: [
                  {
                    internalType: "contract IReverseRegistrar",
                    name: "",
                    type: "address",
                  },
                ],
                stateMutability: "view",
                type: "function",
              },
              {
                inputs: [],
                name: "rootName",
                outputs: [{ internalType: "string", name: "", type: "string" }],
                stateMutability: "view",
                type: "function",
              },
              {
                inputs: [],
                name: "rootNode",
                outputs: [
                  { internalType: "bytes32", name: "", type: "bytes32" },
                ],
                stateMutability: "view",
                type: "function",
              },
              {
                inputs: [
                  {
                    components: [
                      { internalType: "bool", name: "active", type: "bool" },
                      {
                        internalType: "address",
                        name: "discountValidator",
                        type: "address",
                      },
                      { internalType: "bytes32", name: "key", type: "bytes32" },
                      {
                        internalType: "uint256",
                        name: "discount",
                        type: "uint256",
                      },
                    ],
                    internalType:
                      "struct EARegistrarController.DiscountDetails",
                    name: "details",
                    type: "tuple",
                  },
                ],
                name: "setDiscountDetails",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function",
              },
              {
                inputs: [
                  {
                    internalType: "address",
                    name: "paymentReceiver_",
                    type: "address",
                  },
                ],
                name: "setPaymentReceiver",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function",
              },
              {
                inputs: [
                  {
                    internalType: "contract IPriceOracle",
                    name: "prices_",
                    type: "address",
                  },
                ],
                name: "setPriceOracle",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function",
              },
              {
                inputs: [
                  {
                    internalType: "contract IReverseRegistrar",
                    name: "reverse_",
                    type: "address",
                  },
                ],
                name: "setReverseRegistrar",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function",
              },
              {
                inputs: [
                  {
                    internalType: "address",
                    name: "newOwner",
                    type: "address",
                  },
                ],
                name: "transferOwnership",
                outputs: [],
                stateMutability: "payable",
                type: "function",
              },
              {
                inputs: [
                  { internalType: "string", name: "name", type: "string" },
                ],
                name: "valid",
                outputs: [{ internalType: "bool", name: "", type: "bool" }],
                stateMutability: "pure",
                type: "function",
              },
              {
                inputs: [],
                name: "withdrawETH",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function",
              },
            ]
          : y.Z,
        fe = ke ? x.jY : x.Z0;
    },
    50332: function (e, t, a) {
      a.d(t, {
        IE: function () {
          return l;
        },
        yG: function () {
          return p;
        },
      });
      var n = a(68571);
      var i;
      i = n.env.DOCS_URL;
      var s;
      s = n.env.BRIDGE_URL;
      var r;
      r = n.env.GREENHOUSE_HTTPS;
      var y;
      y = n.env.MAINNET_LAUNCH_BLOG_POST_URL;
      var o;
      o = n.env.MAINNET_LAUNCH_FLAG;
      const p = !1,
        l = p
          ? "client-Wvf63OdaukDZyCBtwgbOvHgGTuASBZFG"
          : "client-agFoQg5AOvZ2ZiOChny9RrGk21jG3VrH";
    },
    94727: function (e, t, a) {
      a.r(t),
        (t.default = {
          src: "https://3-d-airdrop-base.vercel.app/_next/static/media/1.93c39cfb.svg",
          height: 3e3,
          width: 3e3,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    74617: function (e, t, a) {
      a.r(t),
        (t.default = {
          src: "https://3-d-airdrop-base.vercel.app/_next/static/media/2.3e82e792.svg",
          height: 3e3,
          width: 3e3,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    73987: function (e, t, a) {
      a.r(t),
        (t.default = {
          src: "/_next/static/media/3.3aec7472.svg",
          height: 3e3,
          width: 3e3,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    66098: function (e, t, a) {
      a.r(t),
        (t.default = {
          src: "/_next/static/media/4.40019cd0.svg",
          height: 3e3,
          width: 3e3,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    49290: function (e, t, a) {
      a.r(t),
        (t.default = {
          src: "/_next/static/media/5.4c78e312.svg",
          height: 3e3,
          width: 3e3,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    11130: function (e, t, a) {
      a.r(t),
        (t.default = {
          src: "/_next/static/media/6.c3abd797.svg",
          height: 3e3,
          width: 3e3,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
    86322: function (e, t, a) {
      a.r(t),
        (t.default = {
          src: "/_next/static/media/7.68da6540.svg",
          height: 3e3,
          width: 3e3,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
  },
]);

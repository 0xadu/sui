// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

//! This module contains the public APIs supported by the bytecode verifier.

use move_binary_format::file_format::CompiledModule;
use move_bytecode_verifier::{meter::BoundMeter, VerifierConfig};
use sui_protocol_config::ProtocolConfig;
use sui_types::{error::ExecutionError, move_package::FnInfoMap};

use crate::{
    entry_points_verifier, global_storage_access_verifier, id_leak_verifier,
    one_time_witness_verifier, private_generics, struct_with_key_verifier,
};

/// Helper for a "canonical" verification of a module.
pub fn verify_module(
    config: &ProtocolConfig,
    verifier_config: &VerifierConfig,
    module: &CompiledModule,
    fn_info_map: &FnInfoMap,
) -> Result<(), ExecutionError> {
    let mut meter = BoundMeter::new(verifier_config);
    struct_with_key_verifier::verify_module(module)?;
    global_storage_access_verifier::verify_module(module)?;
    id_leak_verifier::verify_module(module, &mut meter)?;
    private_generics::verify_module(module)?;
    entry_points_verifier::verify_module(config, module, fn_info_map)?;
    one_time_witness_verifier::verify_module(module, fn_info_map)
}

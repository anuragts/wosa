'use client'

import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

type ModelProps = {
    head: string
    body: string
    url: string
    githubUrl: string
}

export default function ModalComponent(props: ModelProps) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">{props.head}</ModalHeader>
                            <ModalBody>
                                <p>
                                    {props.body}
                                </p>

                                <div className="flex justify-between px-4 pb-4">
                                    <a
                                        href={props.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-primary btn-sm"
                                    >
                                        <div className="text-3xl">
                                            <i className="ti ti-link"></i>
                                        </div>
                                    </a>

                                    <a
                                        href={props.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-primary btn-sm"
                                    >
                                        <div className="text-3xl">
                                            <i className="ti ti-brand-github"></i>
                                        </div>
                                    </a>
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
